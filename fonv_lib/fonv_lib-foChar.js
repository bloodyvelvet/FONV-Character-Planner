/*

Fallout: New Vegas Character Planner - Character object

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

This file contains a base FO:NV character, and all related functions to handle
the associated data. There is no GUI related functions here, this simply
creates and handles all character data.

*/
var foChar = {
	version: "0.7.0", //<1.0.0 until finalized
	built: false,
	loading: setInterval("foChar.initChar()", 500),
	ks: 0,
	/* charInfo consists of all stats NOT trait/perk/special/skill */
	charInfo: {
		name: 'The Courier',
		age: 18,
		lvl: 1,
			lvlCap: 30, //for DLC
		xp: 0,
		gender: 'male',
		hardcore: false,
		specialDistPoints: 0, //base 33 + 1 point in each special
		RAD: 0,
			radRes: 0, //base - EN * 0.02, max 85%
			poisonRes: 0, //base - (EN-1) * 5, max?
		H20: 0,
		SLP: 0,
		FOD: 0,
		HP: 0, //TODO base - using fo3 rules
			HPRegenRate: 0, //base - 0 minus perks, 1 per 10sec with implant
		AP: 65, //TODO base? - base AP determined by 65 + Agility x3
			APRegenRate: 0.060, //without perk/traits
		SP: 0, //TODO base? 12+(INT/2) - if .5, every other level rounds up - verify
		DT: 0, //TODO base?
		critChance: 0, //TODO base - LUCK * 0.01
			critDmg: 0, //TODO base
		dmg: 0, //TODO base?
			dmgOppSex: 0, //TODO base?
			dmgExplosives: 0, //TODO base?
			meleeDmg: 0, //TODO base?
			animalDmg: 0, //TODO base?
			animalDmgCrit: 0, //TODO base 0%?
			insectDmg: 0, //TODO base?
		carryWeight: 0, //base - 150 + (ST*10)
		throwRate: 0, //base - 0.4 + (AG*0.01)
			throwSpeed: 0, //base - fireRate
			throwRange: 0, //TODO base? Range is calculated as 3 * ST
		reloadSpeed: 1, //TODO base?
		expEarnRate: 1, //TODO base?
		karma: 0, //base - range bad,neutral,good [-2500 - -250][-249 - 249][250 - 2500], title per level
			karmaTitle: '',
		SPgainRate: 3, //per level
		SPgainRateFromBooks: 3, //per book
		skillPointsFromMags: 10, //temp from mags
		fireRate: 0, //TODO base?
		accuracy: 0, //TODO base?
		accuracyMoving: 0, //TODO base?
		moveSpeed: 0,  //TODO base?
		companionNerve: 0 //TODO base?
	},
	traits: {},
		traitsMax: 2, //allow for glitch
	perks: {}, //TODO add check for max perks
		perksMax: 15, //allow for glitch
	specials: {},
	skills: {},
	taggedSkills: [],
	initChar: function() {
		if (fonv_lib.DEBUG) { console.log("checking init"); }
		foChar.ks++;
		var prev = true;
		if (fonv_lib.DEBUG) { console.log("fonv_lib.libs.length", fonv_lib.libs.length); }
		for (var i = 0; i<fonv_lib.libs.length; i++) {
			prev = prev && (typeof window[fonv_lib.libs[i].split("-")[1]] == "object");
			if (fonv_lib.DEBUG) { console.log(fonv_lib.libs[i], typeof window[fonv_lib.libs[i].split("-")[1]], prev); }
		}
		if (prev) {
			foChar.built = true;
			foChar.initSkills();
			foChar.initSpecials();
			clearInterval(foChar.loading);
			if (fonv_lib.DEBUG) { console.log("foChar.built",foChar.built); }
		}
		if (foChar.ks >= 60) {
			if (fonv_lib.DEBUG) { console.log("Load time exceeded ("+foChar.ks+"secs), killing load"); }
			clearInterval(foChar.loading);
		}
	},
	initSpecials: function() {
		foChar.charInfo.specialDistPoints = 33;
		for (var special in specials) {
			foChar.addSpecial(special, 1);
		}
	},
	initSkills: function() {
		var skill;
		for (skill in skills) {
			foChar.addSPT(skill, 0);
		}
		foChar.charInfo.SP = foChar.calculations.calculateAvailSP();
	},
	levelUp: function(_lvl) { //if passing in a val, it's FROM level
		var _lvl = parseInt(_lvl) || 0;

		if (_lvl == 0 || _lvl >= foChar.charInfo.lvlCap) {
			if (fonv_lib.DEBUG) { console.log("Cannot set Char lvl to "+_lvl); }
			return false;
		}
		_lvl++;
		if (fonv_lib.DEBUG) { console.log("Char level up "+foChar.charInfo.lvl+" -> "+_lvl); }
		foChar.charInfo.lvl = _lvl;
		foChar.reCalculateCharInfo();
	},
	addSpecial: function(_abr, _lvl) {
		if (_lvl > 10) {
			if (fonv_lib.DEBUG) { console.log(_abr+" cannot be over 10"); }
		}else if (_lvl < 1) {
			if (fonv_lib.DEBUG) { console.log(_abr+" cannot be less than 1"); }
		}else{
			if (fonv_lib.DEBUG) { console.log("Adding special: "+_abr+" level("+_lvl+")"); }
			try { //try/catch since it may not exist until init'd
				if (foChar.specials[_abr].lvl > _lvl) {
					if (fonv_lib.DEBUG) { console.log("	Adding special: Char level (before "+foChar.specials[_abr].lvl+")"); }
					foChar.charInfo.specialDistPoints = foChar.charInfo.specialDistPoints + (foChar.specials[_abr].lvl - _lvl);
					foChar.specials[_abr] = {abr: _abr, lvl: _lvl, opt: specials[_abr].lvl[_lvl]};
				}else{
					if (foChar.charInfo.specialDistPoints > 0) {
						if (fonv_lib.DEBUG) { console.log("	Adding special: Char level (before "+foChar.specials[_abr].lvl+")"); }
						foChar.charInfo.specialDistPoints = foChar.charInfo.specialDistPoints - (_lvl - foChar.specials[_abr].lvl);
						foChar.specials[_abr] = {abr: _abr, lvl: _lvl, opt: specials[_abr].lvl[_lvl]};
					}else{
						if (fonv_lib.DEBUG) { console.log("	Char has no more SPECIAL points to distribute"); }
					}
				}
			} catch(err) {
				foChar.specials[_abr] = {abr: _abr, lvl: _lvl, opt: specials[_abr].lvl[_lvl]};
			}

		}
		//foChar.reCalculateCharInfo(_abr);
		foChar.calculations.calculateSpecialBonus(_abr);
	},
	//add skill/perk/trait
	addSPT: function(_title, _rank) {
		if (fonv_lib.DEBUG) { console.log("Adding Skill/Perk/Trait: "+_title+" rank: "+_rank); }

		if ((_rank == "undefined" || _rank < 1) && !skills[_title]) {
			_rank = 1; //only non-skills can have zero
		}
		if (perks[_title]) {
			if (foChar.checkQualification(_title)) {
				if (fonv_lib.DEBUG) { console.log("addSPT: adding "+_title+" rank "+_rank); }
				foChar.perks[_title] = { rank: _rank };
			}else{
				if (fonv_lib.DEBUG) { console.log("addSPT: NOT adding "+_title+" rank "+_rank); }
			}
		}else if (traits[_title]) {
			
			//check if char already has any trait
			if (foChar.traits[_title]) {
				if (fonv_lib.DEBUG) { console.log("Char already has this trait: "+_title); }
			}else{
				//check if char already has two traits
				var traitSize = 0;
				var t;
				for (t in foChar.traits) {
					traitSize++;
				}
				if (traitSize < foChar.traitsMax) {
					//check qualifications
					if (foChar.checkQualification(_title)) {
						foChar.traits[_title] = traits[_title];
						return true;
					}
				}else{
					if (fonv_lib.DEBUG) { console.log("Char already has two traits."); }
				}
				return false;
			}
		}else if (skills[_title]) {
			if (_rank > 100) {
				if (fonv_lib.DEBUG) { console.log("Char skill "+_title+" cannot be over 100"); }
			}else if (_rank < 0) {
				if (fonv_lib.DEBUG) { console.log("Char skill "+_title+" cannot be less than 0"); }
			}else{
				if (foChar.skills[_title]) {
					if (foChar.skills[_title].alloc > _rank) {
						if (fonv_lib.DEBUG) { console.log("	Removing skill "+_title+": Char level (before "+foChar.skills[_title].alloc+")"); }
						
						foChar.skills[_title].alloc = _rank;
					}else{
						if (foChar.charInfo.SP > 0) {
							if (fonv_lib.DEBUG) { console.log("	Adding skill "+_title+": Char level (before "+foChar.skills[_title].alloc+")"); }
							foChar.skills[_title].alloc = _rank;
						}else{
							if (fonv_lib.DEBUG) { console.log("	Char has no more SP to distribute"); }
						}
					}
				}else{
					if (fonv_lib.DEBUG) { console.log("	Adding skill "+_title+": Char level (init)"); }
					foChar.skills[_title] = {};
					foChar.skills[_title].alloc = _rank;
				};
				foChar.charInfo.SP = foChar.calculations.calculateAvailSP();
			}
		}else{
			if (fonv_lib.DEBUG) { console.log("Not defined: "+_title); }
		}
	},
	removeTrait: function(_title) {
		if (fonv_lib.DEBUG) { console.log("Removing Char trait: "+_title); }
		if (foChar.traits[_title]) {
			delete foChar.traits[_title];
			if (fonv_lib.DEBUG) { console.log("	Char trait: "+_title+" removed."); }
		}else{
			if (fonv_lib.DEBUG) { console.log("	Char does not have trait: "+_title); }
		}
	},
	checkQualification: function(_title) {
		var disqualify = false;
		var req;
		var title; //loop var

		if (fonv_lib.DEBUG) { console.log("Checking qualification for: "+_title); }

		//check perks
		if (perks[_title]) {
			//found perk

			//check if char already has perk
			if (foChar.perks[_title]) {
				//it does, check availRanks
				if (foChar.perks[_title].rank < perks[_title].availRanks) {
					if (fonv_lib.DEBUG) { console.log("	Char perk rank: "+foChar.perks[_title].rank+" : Qualifies"); }
					if (fonv_lib.DEBUG) { console.log("	Perk rank: "+perks[_title].availRanks+" : Qualifies"); }
				}else{
					if (fonv_lib.DEBUG) { console.log("	Char already has max perk rank."); }
					disqualify = true;
				}
			}else{
				for (req in perks[_title].req) {
					if (fonv_lib.DEBUG) { console.log("	Found perk req: "+req+" : Char("+foChar.get(req)+") Perk("+perks[_title].req[req]+")"); }

					disqualify = !foChar.checkQualificationByType("UNKNOWN", req, perks[_title].req[req]);
					if (disqualify) { break; }
				}
			}
		}else if (traits[_title]) { //check traits
			if (fonv_lib.DEBUG) { console.log("Adding trait: "+_title); }

			for (req in traits[_title].req) {
				disqualify = !foChar.checkQualificationByType("UNKNOWN", req, traits[_title].req[req]);
				if (disqualify) { break; }
			}
		}else if (skills[_title]) { //check skills
			if (fonv_lib.DEBUG) { console.log("Checking by skill"); }
			disqualify = !foChar.checkQualificationByType("skill", _title);
			if (fonv_lib.DEBUG) { console.log("by type toggled: "+disqualify); }
		}else if (specials[_title]) { //check specials
			if (fonv_lib.DEBUG) { console.log("Checking by special"); }
			disqualify = !foChar.checkQualificationByType("special", _title);
			if (fonv_lib.DEBUG) { console.log("by type toggled: "+disqualify); }
		}else{
				//opposite since checkQualificationByType returns true if qualified
				if (fonv_lib.DEBUG) { console.log("Unknown type trying by type"); }
				disqualify = !foChar.checkQualificationByType("UNKNOWN", _title);
				if (fonv_lib.DEBUG) { console.log("by type toggled: "+disqualify); }
		}


		if (disqualify) {
			if (fonv_lib.DEBUG) { console.log("Char disqualified for: "+_title); }
			return false;
		}
		//qualify
		if (fonv_lib.DEBUG) { console.log("Char qualified for: "+_title); }
		return true;
	},
	checkQualificationByType: function(type, _title, req, evalBy) {
		var typeVal;
		if (evalBy == undefined) { evalBy = ""; }
		if (req == undefined) { req = foChar.get(_title); }
		if (fonv_lib.DEBUG) { console.log("checkQualificationByType: ", type, _title, req, evalBy); }

		switch(type) {
			case "perk":
				typeVal = perks[_title].req[req];
				break;
			case "skill":
				typeVal = skills[_title];
				break;
			case "trait":
				typeVal = traits[_title].req[req];
				break;
			case "special":
				typeVal = req;
				break;
			case "KNOWN":
				typeVal = req;
			case "UNKNOWN":
				if (perks[_title]) {
					typeVal = perks[_title].req[req];
				}else if (specials[_title]) {
					typeVal = req;
				}else if (skills[_title]) {
					typeVal = req;
				}else if (traits[_title]) {
					typeVal = traits[_title].req[req];
				}

			default:
				//do eval here
				if (_title.toString() == "eval") {
					if (fonv_lib.DEBUG) { console.log("checkQualificationByType found eval"); }

					var evals = (req).split(",");
					//console.log(req);
					//return false;

					switch (evals[0]) {
						case "OR":
							if (fonv_lib.DEBUG) { console.log("found eval OR", evals.length); }
							for (var i=1; i<evals.length; i++) {
								var evalVals = evals[i].split(":");
								if (foChar.checkQualificationByType("KNOWN", evalVals[0], evalVals[1])) {
									return true; //stop at first qualification
								}
							}
							return false;
							break;
						case "AND":
							if (fonv_lib.DEBUG) { console.log("found eval AND"); }
							for (var i=1; i<evals.length; i++) {
								var evalVals = evals[i].split(":");
								if (!foChar.checkQualificationByType("KNOWN", evalVals[0], evalVals[1])) {
									return false; //stop at first disqualification
								}
							}
							return true;
							break
						case "<":
						case ">":
						case "<=":
						case ">=":
						case "==":
							if (fonv_lib.DEBUG) { console.log("found eval "+evals[0]); }
							for (var i=1; i<evals.length; i++) {
								var evalVals = evals[i].split(":");
								if (!foChar.checkQualificationByType("KNOWN", evalVals[0], evalVals[1], evals[0])) {
									return false; //stop at first disqualification
								}
							}
							return true;
							break
						case "PERK":
							//test if char has a perk
							if (fonv_lib.DEBUG) { console.log("found eval "+evals[0]); }
							for (var i=1; i<evals.length; i++) {
								var evalVals = evals[i].split(":");
								if (evalVals[1]) { //evalVals[1] = true or false
									if (!foChar.perks[evalVals[0]]) {
										return false; //stop at first disqualification
									}
								}else{
									if (!foChar.perks[evalVals[0]]) {
										return true; //stop at first qualification
									}
								}
							}
							return true;
							break
						default:
							if (fonv_lib.DEBUG) { console.log("Can't determine eval action "+evals[0]+", skipping"); }
					}
				}
		}
		if ((specials[_title] || skills[_title]) && evalBy == "") {
			evalBy = ">=";
		}
		switch(_title) {
			case "charLvl":
				evalBy = ">=";
				typeVal = req;
				break;
			case "gender":
				evalBy = "==";
				typeVal = req;
				break;
			default:
				if (evalBy == "") {
					if (fonv_lib.DEBUG) { console.log("	Unknown req: "+req); }
				}
		}
		if (fonv_lib.DEBUG) { console.log("checkQualificationByType end:", type, _title, req, evalBy); }
		switch (evalBy) {
			case ">":
				if (foChar.get(_title) > typeVal) {
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) > typeVal", foChar.get(_title), typeVal, foChar.get(_title) > typeVal, true); }
					return true;
				}else{
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) > typeVal", foChar.get(_title), typeVal, foChar.get(_title) > typeVal, false); }
					return false;
				}
				break;
			case ">=":
				if (foChar.get(_title) >= typeVal) {
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) >= typeVal", foChar.get(_title), typeVal, foChar.get(_title) >= typeVal, true); }
					return true;
				}else{
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) >= typeVal", foChar.get(_title), typeVal, foChar.get(_title) >= typeVal, false); }
					return false;
				}
				break;
			case "<":
				if (foChar.get(_title) < typeVal) {
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) < typeVal", foChar.get(_title), typeVal, foChar.get(_title) < typeVal, true); }
					return true;
				}else{
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) < typeVal", foChar.get(_title), typeVal, foChar.get(_title) < typeVal, false); }
					return false;
				}
				break;
			case "<=":
				if (foChar.get(_title) <= typeVal) {
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) <= typeVal", foChar.get(_title), typeVal, foChar.get(_title) <= typeVal, true); }
					return true;
				}else{
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) <= typeVal", foChar.get(_title), typeVal, foChar.get(_title) <= typeVal, false); }
					return false;
				}
				break;
			case "==":
				if (foChar.get(_title) == typeVal) {
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) == typeVal", foChar.get(_title), typeVal, foChar.get(_title) == typeVal, true); }
					return true;
				}else{
					if (fonv_lib.DEBUG) { console.log("foChar.get(_title) == typeVal", foChar.get(_title), typeVal, foChar.get(_title) == typeVal, false); }
					return false;
				}
				break;
		}
		//default
		if (fonv_lib.DEBUG) { console.log("checkQualificationByType: default, returning false"); }
		return false;
	},
	reCalculateCharInfo: function() {
		//recalc special bonus(es), requires a special abbreviation
		foChar.calculations.calculateSpecialBonus(arguments[0]);
		//recalc SP
		foChar.charInfo.SP = foChar.calculations.calculateAvailSP();
		//recalc HP
		foChar.charInfo.HP = foChar.calculations.calculateAvailHP();
		//recalc AP
		foChar.charInfo.AP = foChar.calculations.calculateAvailAP();
		//recalc calculateCritChance
		foChar.charInfo.critChance = foChar.calculations.calculateCritChance();
		//recalc radRes
		foChar.charInfo.radRes = foChar.calculations.calculateRadRes();
		//recalc poisonRes
		foChar.charInfo.poisonRes = foChar.calculations.calculatePoisonRes();
		//recalc carryWeight
		foChar.charInfo.carryWeight = foChar.calculations.calculateCarryWeight();
		//recalc throw
		foChar.charInfo.throwRate = foChar.calculations.calculateThrow();
		//recalc karma
		foChar.charInfo.karmaTitle = foChar.calculations.calculateKarmaTitle();
	},
	calculations: {
		calculateAvailSP: function() {
			var availSP = 10; //assume IN @ lvl 1
			var alloc = 0, base = 0;
			try { //try/catch for special init
				if (foChar.charInfo.lvl%2 == 0) {
					availSP = Math.ceil( (foChar.specials["IN"].lvl*0.5)+10 );
				}else{
					availSP = Math.floor( (foChar.specials["IN"].lvl*0.5)+10 );
				}
			} catch (err) {
			}
			//availSP now equals per level, now multiply by level to find total
			availSP = availSP * foChar.charInfo.lvl;

			//find totals in skills
			for (var skill in foChar.skills) { 
				base = base + foChar.skills[skill].base;
				alloc = alloc + foChar.skills[skill].alloc;
			}
			//now find dif for availSP vs alloc to get leftover SP
			return availSP-alloc;
		},
		calculateAvailHP: function() { //TODO verify - using fo3 rules
			var availHP = 0;
			try { //try/catch for special init
				availHP = 90 + (foChar.specials["EN"].lvl*20) + foChar.charInfo.lvl;
			} catch (err) {
				availHP = 90 + (1*20) + foChar.charInfo.lvl; //assume init at 1
			}

			return availHP;
		},
		calculateAvailAP: function() { //TODO add bonus calc
			var availAP = 0;
			try { //try/catch for special init
				availAP = 65 + (foChar.specials["AG"].lvl*3);
			} catch (err) {
				availAP = 65 + (1*3); //assume init at 1
			}

			return availAP;
		},
		calculateCritChance: function() {
			var critChance = 0;
			try { //try/catch for special init
				critChance = foChar.specials["LK"].lvl*0.01;
			} catch (err) {
				critChance = 1*0.01; //assume init at 1
			}

			return critChance;
		},
		calculateRadRes: function() {
			var radRes = 0;
			try { //try/catch for special init
				radRes = foChar.specials["EN"].lvl*0.02;
			} catch (err) {
				radRes = 1*0.02; //assume init at 1
			}

			return radRes.toFixed(2);
		},
		calculatePoisonRes: function() {
			var poisonRes = 0;
			try { //try/catch for special init
				poisonRes = (foChar.specials["EN"].lvl-1)*0.05;
			} catch (err) {
				poisonRes = (1-1)*0.05; //assume init at 1
			}
			//can't be less than 0
			if (poisonRes<0) { poisonRes = 0; }

			return poisonRes.toFixed(2);
		},
		calculateCarryWeight: function() {
			var carryWeight = 0;
			try { //try/catch for special init
				carryWeight = 150 + foChar.specials["ST"].lvl*10;
			} catch (err) {
				carryWeight = 150 + 1*10; //assume init at 1
			}

			return carryWeight;
		},
		calculateThrow: function() {
			var throwRate = 0;
			try { //try/catch for special init
				throwRate = 0.4 + foChar.specials["AG"].lvl*0.01;
			} catch (err) {
				throwRate = 0.4 + 1*0.01; //assume init at 1
			}

			return throwRate.toFixed(2);
		},
		calculateKarmaTitle: function() {
			var karmaTitle = '', karmaLvl;
			if (karma[foChar.charInfo.lvl]) {
				karmaType = foChar.getKarmaRange(foChar.charInfo.karma);
				kmarmaLvl = karma[foChar.charInfo.lvl];
				for (karmaTitle in kmarmaLvl) {
					if (karmaTitle == karmaType) {
						return kmarmaLvl[karmaTitle];
					}
				}
			}
			return karmaTitle;
		},
		calculateSpecialBonus: function(special) {
			//0 out skills bases
			for (skill in foChar.skills) {
				foChar.skills[skill].base = 0;
			}
			//now, loop through specials, and add to each base
			for (special in foChar.specials) {
				foChar.calculations.calculateBonusByType(special);
			}
		},
		calculateBonusByType: function(special) {
			var aSkills = specials[special].affSkills;
			var affLevel = foChar.specials[special].opt.skill;
			var skillRef = foChar.skills;
			for (var i=0; i<aSkills.length; i++) {
				var cSkill = aSkills[i].toString();
				if (foChar.skills[cSkill] != "undefined") {
					skillRef[cSkill].base = skillRef[cSkill].base + affLevel;
				}
			}
		}
	},
	getKarmaRange: function(karmaVal) {
		if (karmaVal <= -250) {
			return "bad";
		}else if (karmaVal >= 250) {
			return "good";
		}else{
			return "neutral";
		}
	},
	get: function(setting) {
		switch (setting) {
			case "charLvl":
				return foChar.charInfo.lvl;
				break;
			case "gender":
				return foChar.charInfo.gender;
				break;
		}
		if (traits[setting]) {
			return true;
		}
		if (skills[setting]) {
			return (foChar.skills[setting].base+foChar.skills[setting].alloc);
		}
		if (specials[setting]) {
			return foChar.specials[setting].lvl;
		}

		return -1; //fail

		if (fonv_lib.DEBUG) { console.log("Can't find: "+setting); }
	}
}

