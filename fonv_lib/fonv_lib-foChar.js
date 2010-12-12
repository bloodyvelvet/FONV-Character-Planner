/*

Fallout: New Vegas Character Planner - Character object

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

This file contains a base FO:NV character, and all related functions to handle
the associated data. There is no GUI related functions here, this simply
creates and handles all character data.

*/
var foChar = {
	version: "0.8.5", //<1.0.0 until finalized
	built: false,
	loading: setInterval("foChar.initChar()", 500),
	ks: 0,
	/* charInfo consists of all stats NOT trait/perk/special/skill */
	baseCharInfo: {
		name: 'The Courier',
		age: 18,
		lvl: 1,
			lvlCap: 30, //for DLC
		xp: 0,
		gender: 'male',
		hardcore: false,
		RAD: 0,
		H20: 0,
		SLP: 0,
		FOD: 0,
		HP: 0, //base - 100+(EN*20)
		AP: 65, //base - base AP determined by 65 + Agility x3
		SP: 0, //base? 12+(INT/2) - if .5, every other level rounds up
		DT: 0, //base - 0
		
		specialDistPoints: 0, //base 33 + 1 point in each special
		
		karma: 0, //base - range bad,neutral,good [-2500 - -250][-249 - 249][250 - 2500], title per level
			karmaTitle: '',
			
		/* add ability to clone base for char reset */
		clone: function() {
			var newObj = {};
			for (i in this) {
				if (i == 'clone') continue;
				if (this[i] && typeof this[i] == "object") {
					newObj[i] = this[i].clone();
				} else newObj[i] = this[i]
			} return newObj;
		}
	},
	charInfo: {},
	/* object to hold crit info */
	crit: {
		critChance: 0, //base - LUCK * 0.01
		critChanceLaserWeapons: 1,
		critDmg: 1, //TODO base
		critDmgSneak: 1, //TODO base
		critDmgSneakProfWeapons: 1, //TODO base
		critDmgMelee: 1, //TODO base
		critDmgAnimal: 0 //TODO base 0%?
	},
	/* object to hold chance info */
	chance: {
		chanceAmmoItem: 1, //chance you'll get an ammo item
		chanceChemAddiction: 1,
		chanceEnemyKnockdowneMelee: 0,
		chanceEnemyKnockdownUnarmed: 0,
		chanceGetKnockedDown: 1, //0 = cannot get knocked down
		chanceMineExplode: 1 //chance floor based trap is set off
	},
	/* object to hold consumed items */
	consume: {
		consumeRadAway: 0,
		consumeTurbo: 0
	},
	/* object to hold damage info */
	dmg: {
		dmgTotal: 1, //TODO base?

		dmgByCowboyWeapon: 1,
		dmgByExplosive: 1, //TODO base?
		dmgByFireWeapon: 1,
		dmgByLaserWeapon: 1,
		dmgByMelee: 0, //base - ST*0.05
		dmgByUnarmed: 0,

		dmgToCompanions: 1,
		dmgToOppSex: 1, //TODO base?
		dmgToSameSex: 1, //TODO base?

		dmgToAbomination: 1,
		dmgToAnimal: 1,
		dmgToHumanoids: 1,
		dmgToInsect: 1,
		dmgToRobot: 1,
		dmgToSuperMutant: 1
	},
	/* object to hold effects */
	effect: {
		accuracy: 0, //TODO base?
		accuracyMoving: 1, //1 = normal accuracy, higher is better
		accuracyVats: 0,
		accuracyVatsPistol: 0,
		accuracyVatsTargetHead: 1,

		animalAgro: 10, //TODO better way? 10 = attack, 20 = friendly, 30 = helpful

		APRegenRate: 0.060, //without perk/traits
		APvats: 0, //base = AP
		APkillReward: 0,
		APcost: 1,
		APcostPlasmaWeapons: 1,
		
		armorDecay: 1,

		carryWeight: 0, //base - 150 + (ST*10)
		chemDur: 1,
		companionNerve: 0, //TODO base?

		DTexplosives: 1,
		DTmelee: 1,
		DTunarmed: 1,

		equipSpeed: 1,
		explosivesAreaOfEffect: 1,
		expEarnRate: 1, //TODO base?
		fastTravelAlways: 0, //can you fast travel regardless of carry weight?

		fireRate: 1,
		fireRateMelee: 1,
		fireRateUnarmed: 1,

		HPRegenRate: 0, //0 minus perks, 1 per 10sec with implant
		HPFromConsumables: 1,

		ignoreLockTerminal: 0, //how many times can you ignore that a terminal is locked
		ignoreBrokenLock: 0, //how many times can you ignore that a lock is broken

		limbDecay: 1, //TODO same as limb damage?
		magDur: 30, //TODO what's the actual length? fix in perks "Retention"
		moveSpeed: 1,  //TODO base?
		poisonRes: 0, //base - (EN-1) * 5, max?
		radFromConsumables: 1,
		radRes: 0, //base - EN * 0.02, max 85%
		reloadSpeed: 1, //TODO base?
		seeEnemyHealth: 0, //can you see enemy health?

		SPFromMags: 10, //temp from mags
		SPgainRate: 3, //per level
		SPgainRateFromBooks: 3, //per book

		throwRate: 0, //base - 0.4 + (AG*0.01)
		throwSpeed: 0, //base - fireRate
		throwRange: 0, //base - Range is calculated as 3 * S

		turboDur: 0,
		weapDecay: 0,  //TODO base?
		weapStrengthReq: 0 //base + this value
	},
	/* object to hold kill info */
	kills: {
		killsTotal: 0,
		killsShared: 0, //shared kill types, like using a gun to kill a robot = 1 kill total

		killsByGun: 0,
		killsByLaser: 0,
		killsByMelee: 0,
		killsByUnarmed: 0,

		killsToAbomination: 0,
		killsToAnimal: 0, //TODO Mutated Animal needed?
		killsToHumanoids: 0, //TODO includes Feral Ghoul, is it needed as well?
		killsToInsect: 0, //TODO Mutated Insect needed?
		killsToRobot: 0,
		killsToSuperMutant: 0,
		//get total kills (all types - shared)
		getKillsTotal: function() {
			var kills = foChar.kills;
			kills["killsTotal"] = 0;
			for (var k in kills) {
				if (typeof k != "object" && k != "killsShared") {
					kills["killsTotal"] = kills["killsTotal"] + kills[k];
				}
			}
			return kills["killsTotal"] - kills["killsShared"];
		},
		//reset kills
		resetKills: function() {
			var kills = foChar.kills;
			for (var k in kills) {
				if (typeof k != "object") {
					kills[k] = 0;
				}
			}
			return true;
		},
		// killed with, killed what, how many (optional, default 1)
		addSharedKill: function(kWith, kWhat, howMany){
			var howManyKills = howMany || 1;
			var kills = foChar.kills;
			for (var i=0; i < howManyKills; i++) {
				kills[kWith]++;
				kills[kWhat]++;
				kills["killsShared"]++;
			}
			return true;
		}
	},
	traits: {},
		traitsCap: 2, //allow for glitch
	perks: {}, //TODO add check for max perks
		perksCap: 15, //allow for glitch
	specials: {},
	skills: {},
	taggedSkills: [],
		taggedSkillsCap: 3, //4 if Tag! perk is taken
	companions: [],
		compGroupLimits: { //allow limit over-rides
			0: 1, //humanoids
			1: 1,  //animals
			getCompanionsMax: function() {
				var max = 0;
				for (var l in foChar.compGroupLimits) {
					if (typeof foChar.compGroupLimits[l] != "function") {
						max = max + foChar.compGroupLimits[l];
					}
				}
				return max;
			}
		},
	initChar: function() {
		foChar.logger.log("checking init");
		foChar.ks++;
		var prev = true;
		foChar.logger.log("fonv_lib.libs.length", fonv_lib.libs.length);
		for (var i = 0; i<fonv_lib.libs.length; i++) {
			prev = prev && (typeof window[fonv_lib.libs[i].split("-")[1]] == "object");
			foChar.logger.log(fonv_lib.libs[i], typeof window[fonv_lib.libs[i].split("-")[1]], prev);
		}
		if (prev) {
			foChar.charInfo = foChar.baseCharInfo.clone();
			foChar.setItem("built=true");
			while(!foChar.initSkills()){};
			while(!foChar.initSpecials()){};
			while(!foChar.reCalculateCharInfo()){};
			clearInterval(foChar.loading);
			foChar.logger.log("foChar.built",foChar.built);
			return true;
		}
		if (foChar.ks >= 60) {
			foChar.logger.log("Load time exceeded ("+foChar.ks+"secs), killing load");
			clearInterval(foChar.loading);
			return true;
		}
		return false;
	},
	initSkills: function() {
		var skill;
		for (skill in skills) {
			foChar.addSPT(skill, 0);
		}
		foChar.charInfo.SP = foChar.calculations.calculateAvailSP();
		return true;
	},
	initSpecials: function() {
		foChar.setItem("foChar.charInfo.specialDistPoints=33");
		for (var special in specials) {
			foChar.addSpecial(special, 1);
		}
		return true;
	},
	levelUp: function(_lvl) { //if passing in a val, it's FROM level
		var lvl = parseInt(_lvl) || 0;

		if (lvl == 0 || lvl >= foChar.charInfo.lvlCap) {
			foChar.logger.log("Cannot set Char lvl to "+lvl);
			return false;
		}
		lvl++;
		foChar.logger.log("Char level up "+foChar.charInfo.lvl+" -> "+lvl);
		foChar.charInfo.lvl = lvl;
		foChar.reCalculateCharInfo();
		return true;
	},
	addSpecial: function(_abr, _lvl) {
		if (_lvl > 10) {
			foChar.logger.log(_abr+" cannot be over 10");
		}else if (_lvl < 1) {
			foChar.logger.log(_abr+" cannot be less than 1");
		}else{
			foChar.logger.log("Adding special: "+_abr+" level("+_lvl+")");
			try { //try/catch since it may not exist until init'd
				if (foChar.specials[_abr].lvl > _lvl) {
					foChar.logger.log("	Subtracting special: Char level (before "+foChar.specials[_abr].lvl+")");
					foChar.charInfo.specialDistPoints = foChar.charInfo.specialDistPoints + (foChar.specials[_abr].lvl - _lvl);
					foChar.specials[_abr] = {abr: _abr, lvl: _lvl, opt: specials[_abr].lvl[_lvl]};
				}else{
					if (foChar.charInfo.specialDistPoints > 0) {
						foChar.logger.log("	Adding special: Char level (before "+foChar.specials[_abr].lvl+")");
						foChar.charInfo.specialDistPoints = foChar.charInfo.specialDistPoints - (_lvl - foChar.specials[_abr].lvl);
						foChar.specials[_abr] = {abr: _abr, lvl: _lvl, opt: specials[_abr].lvl[_lvl]};
					}else{
						foChar.logger.log("	Char has no more SPECIAL points to distribute");
					}
				}
			} catch(err) {
				foChar.specials[_abr] = {abr: _abr, lvl: _lvl, opt: specials[_abr].lvl[_lvl]};
			}

		}
		//foChar.reCalculateCharInfo(_abr);
		foChar.calculations.calculateSpecialBonus(_abr);
		
		foChar.reCalculateCharInfo();
		return true;
	},
	//add skill/perk/trait
	addSPT: function(_title, _rank) {
		foChar.logger.log("Adding Skill/Perk/Trait: "+_title+" rank: "+_rank);

		if ((_rank == "undefined")) {
			_rank = 1; //only non-skills can have zero, but perk removal can pass 0
		}
		if (perks[_title]) {
			if (foChar.perks[_title]) {
				//character has perk
				if (foChar.perks[_title].rank < _rank) {
					//add perk _rank
					if (foChar.checkQualification(_title)) {
						foChar.logger.log("addSPT: adding "+_title+" rank "+_rank);
						foChar.perks[_title].rank = _rank;
						foChar.calculations.calculatePerksBonus(_title);
						return true;
					}else{
						foChar.logger.log("addSPT: NOT adding "+_title+" rank "+_rank);
					}
				}else{
					//remove perk
					foChar.logger.log("addSPT: removing "+_title+" rank "+_rank);
					foChar.perks[_title].rank = _rank;
					foChar.calculations.calculatePerksBonus(_title, "remove");
					return true;
				}
			}else{
				//character does not have perk
				//add perk
				if (foChar.checkQualification(_title)) {
					foChar.logger.log("addSPT: adding "+_title+" rank "+_rank);
					foChar.perks[_title] = { rank: _rank };
					foChar.calculations.calculatePerksBonus(_title);
					return true;
				}else{
					foChar.logger.log("addSPT: NOT adding "+_title+" rank "+_rank);
				}
			}
		}else if (traits[_title]) {
			
			//check if char already has any trait
			if (foChar.traits[_title]) {
				foChar.logger.log("Char already has this trait: "+_title);
			}else{
				//check if char already has two traits
				var traitSize = 0;
				for (var t in foChar.traits) {
					traitSize++;
				}
				if (traitSize < foChar.traitsCap) {
					//check qualifications
					if (foChar.checkQualification(_title)) {
						foChar.traits[_title] = traits[_title];
						foChar.calculations.calculateTraitsBonus(_title);
						foChar.reCalculateCharInfo();
						return true;
					}
				}else{
					foChar.logger.log("Char already has two traits.");
				}
				return false;
			}
		}else if (skills[_title]) {
			if (_rank > 100) {
				foChar.logger.log("Char skill "+_title+" cannot be over 100");
			}else if (_rank < 0) {
				foChar.logger.log("Char skill "+_title+" cannot be less than 0");
			}else{
				if (foChar.skills[_title]) {
					if (foChar.skills[_title].alloc > _rank) {
						foChar.logger.log("	Removing skill "+_title+": Char level (before "+foChar.skills[_title].alloc+")");
						
						foChar.skills[_title].alloc = _rank;
					}else{
						if (foChar.charInfo.SP > 0) {
							foChar.logger.log("	Adding skill "+_title+": Char level (before "+foChar.skills[_title].alloc+")");
							foChar.skills[_title].alloc = _rank;
						}else{
							foChar.logger.log("	Char has no more SP to distribute");
						}
					}
				}else{
					foChar.logger.log("	Adding skill "+_title+": Char level (init)");
					foChar.skills[_title] = {};
					foChar.skills[_title].alloc = _rank;
				};
				foChar.charInfo.SP = foChar.calculations.calculateAvailSP();
				return true;
			}
		}else{
			foChar.logger.log("Not defined: "+_title);
		}
		return false;
	},
	tagSkill: function(_title) {
		//check cap
		if (foChar.taggedSkills.length < foChar["taggedSkillsCap"]) {
				foChar.taggedSkills[foChar.taggedSkills.length] = _title;
				foChar.reCalculateCharInfo();
		}else{
			foChar.logger.log("Cannot tag skill, char has max skills tagged ("+foChar.taggedSkillCap+")");
		}
	},
	untagSkill: function(_title) {
		var tagged = [];
		for (var i = 0; i < foChar.taggedSkills.length; i++) {
			if (foChar.taggedSkills[i] != _title) {
				tagged[tagged.length] = foChar.taggedSkills[i];
			}
		}
		foChar.taggedSkills = tagged;
		foChar.reCalculateCharInfo();
	},
	removeTrait: function(_title) {
		foChar.logger.log("Removing Char trait: "+_title);
		if (foChar.traits[_title]) {
			foChar.calculations.calculateTraitsBonus(_title, "remove");
			delete foChar.traits[_title];
			foChar.reCalculateCharInfo();
			foChar.logger.log("	Char trait: "+_title+" removed.");
		}else{
			foChar.logger.log("	Char does not have trait: "+_title);
		}
	},
	addCompanion: function(_comp) {
		foChar.logger.log("Attempting to add companion: "+_comp);
		if (foChar.canAddCompanion(_comp)) {
			foChar.logger.log("\tAdding companion: "+_comp);
			foChar.companions[foChar.companions.length] = _comp;
			return true;
		}else{
			return false;
		}
	},
	canAddCompanion: function (_comp) {
		//check companion is defined
		if (companions[_comp]) {
			//check current companions
			if ( (foChar.companions).join(",").indexOf(_comp) == -1 ) {
				//we don't already have this comp, check max
				if (foChar.companions.length < foChar.compGroupLimits.getCompanionsMax()) {
					//we're not at max, check per group
					var compGrpCount = [];
					
					//create count spaces for groups
					for (var l in foChar.compGroupLimits) {
						if (typeof foChar.compGroupLimits[l] != "function") {
							compGrpCount[l.toString()] = 0;
						}
					}
					
					//loop through companions and add to counts
					for (var i = 0; i<foChar.companions.length; i++) {
						compGrpCount[companions[foChar.companions[i]].compGroup] = compGrpCount[companions[foChar.companions[i]].compGroup] + 1;
					}
					
					//finally, see if we have an open slot for the current comp we want to add
					if ( compGrpCount[companions[_comp].compGroup] < foChar.compGroupLimits[companions[_comp].compGroup] ) {
						return true;
					}else{
						foChar.logger.log("\tFailed to add companion: Already have max companions in group type (group "+companions[_comp].compGroup+", max "+foChar.compGroupLimits[companions[_comp].compGroup]+")");
					}
				}else{
					foChar.logger.log("\tFailed to add companion: Already have max companions ("+foChar.compGroupLimits.getCompanionsMax()+")");
				}
			}else{
				foChar.logger.log("\tFailed to add companion: Already have companion ("+_comp+")");
			}
		}else{
			foChar.logger.log("\tFailed to add companion: Companion not defined ("+_comp+")");
		}
		return false;
	},
	removeCompanion: function(_comp) {
		if (foChar.hasCompanion(_comp)) {
			var compTemp = [];
			for (var i = 0; i<foChar.companions.length; i++) {
				if (foChar.companions[i] != _comp) {
					//since we're re-ading existing companions, no need to check qualification
					compTemp[compTemp.length] = foChar.companions[i];
				}
			}
			foChar.companions = compTemp;
		}else{
			return false;
		}
		return true;
	},
	hasCompanion: function(_comp) {
		if ((foChar.companions).join(",").indexOf(_comp) != -1) {
			return true;
		}
		return false;
	},
	checkQualification: function(_title) {
		var disqualify = false;
		var req;
		var title; //loop var

		foChar.logger.log("Checking qualification for: "+_title);

		//check perks
		if (perks[_title]) {
			//skip functions
			if (typeof perks[_title] == "function") {
				return false;
			}
			
			//found perk

			//check if char already has perk
			if (foChar.perks[_title]) {
				//it does, check availRanks
				if (foChar.perks[_title].rank < perks[_title].availRanks) {
					foChar.logger.log("	Char perk rank: "+foChar.perks[_title].rank+" : Qualifies");
					foChar.logger.log("	Perk rank: "+perks[_title].availRanks+" : Qualifies");
				}else{
					foChar.logger.log("	Char already has max perk rank.");
					disqualify = true;
				}
			}else{
				for (req in perks[_title].req) {
					foChar.logger.log("	Found perk req: "+req+" : Char("+foChar.get(req)+") Perk("+perks[_title].req[req]+")");

					disqualify = !foChar.checkQualificationByType("UNKNOWN", req, perks[_title].req[req]);
					if (disqualify) { break; }
				}
			}
		}else if (traits[_title]) { //check traits
			foChar.logger.log("Adding trait: "+_title);

			for (req in traits[_title].req) {
				disqualify = !foChar.checkQualificationByType("UNKNOWN", req, traits[_title].req[req]);
				if (disqualify) { break; }
			}
		}else if (skills[_title]) { //check skills
			foChar.logger.log("Checking by skill");
			disqualify = !foChar.checkQualificationByType("skill", _title);
			foChar.logger.log("by type toggled: "+disqualify);
		}else if (specials[_title]) { //check specials
			foChar.logger.log("Checking by special");
			disqualify = !foChar.checkQualificationByType("special", _title);
			foChar.logger.log("by type toggled: "+disqualify);
		}else{
				//opposite since checkQualificationByType returns true if qualified
				foChar.logger.log("Unknown type trying by type");
				disqualify = !foChar.checkQualificationByType("UNKNOWN", _title);
				foChar.logger.log("by type toggled: "+disqualify);
		}


		if (disqualify) {
			foChar.logger.log("Char disqualified for: "+_title);
			return false;
		}
		//qualify
		foChar.logger.log("Char qualified for: "+_title);
		return true;
	},
	checkQualificationByType: function(type, _title, req, evalBy) {
		var typeVal;
		if (evalBy == undefined) { evalBy = ""; }
		if (req == undefined) { req = foChar.get(_title); }
		foChar.logger.log("checkQualificationByType: ", type, _title, req, evalBy);

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
					foChar.logger.log("checkQualificationByType found eval");

					var evals = (req).split(",");
					//foChar.logger.log(req);
					//return false;

					switch (evals[0]) {
						case "OR":
							foChar.logger.log("found eval OR", evals.length);
							for (var i=1; i<evals.length; i++) {
								var evalVals = evals[i].split(":");
								if (foChar.checkQualificationByType("KNOWN", evalVals[0], evalVals[1])) {
									return true; //stop at first qualification
								}
							}
							return false;
							break;
						case "AND":
							foChar.logger.log("found eval AND");
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
							foChar.logger.log("found eval "+evals[0]);
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
							foChar.logger.log("found eval "+evals[0]);
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
						case "COMPANION":
							//test if char has companion
							foChar.logger.log("found eval "+evals[0]);
							for (var i=1; i<evals.length; i++) {
								var evalVals = evals[i].split(":");
								if (evalVals[1]) { //evalVals[1] = true or false
									if (!foChar.hasCompanion(evalVals[0])) {
										return false; //stop at first disqualification
									}
								}else{
									if (!foChar.hasCompanion(evalVals[0])) {
										return true; //stop at first qualification
									}
								}
							}
							return true;
							break;
						default:
							foChar.logger.log("Can't determine eval action "+evals[0]+", skipping");
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
					foChar.logger.log("	Unknown req: "+req);
				}
		}
		foChar.logger.log("checkQualificationByType end:", type, _title, req, evalBy);
		switch (evalBy) {
			case ">":
				if (foChar.get(_title) > typeVal) {
					foChar.logger.log("foChar.get(_title) > typeVal", foChar.get(_title), typeVal, foChar.get(_title) > typeVal, true);
					return true;
				}else{
					foChar.logger.log("foChar.get(_title) > typeVal", foChar.get(_title), typeVal, foChar.get(_title) > typeVal, false);
					return false;
				}
				break;
			case ">=":
				if (foChar.get(_title) >= typeVal) {
					foChar.logger.log("foChar.get(_title) >= typeVal", foChar.get(_title), typeVal, foChar.get(_title) >= typeVal, true);
					return true;
				}else{
					foChar.logger.log("foChar.get(_title) >= typeVal", foChar.get(_title), typeVal, foChar.get(_title) >= typeVal, false);
					return false;
				}
				break;
			case "<":
				if (foChar.get(_title) < typeVal) {
					foChar.logger.log("foChar.get(_title) < typeVal", foChar.get(_title), typeVal, foChar.get(_title) < typeVal, true);
					return true;
				}else{
					foChar.logger.log("foChar.get(_title) < typeVal", foChar.get(_title), typeVal, foChar.get(_title) < typeVal, false);
					return false;
				}
				break;
			case "<=":
				if (foChar.get(_title) <= typeVal) {
					foChar.logger.log("foChar.get(_title) <= typeVal", foChar.get(_title), typeVal, foChar.get(_title) <= typeVal, true);
					return true;
				}else{
					foChar.logger.log("foChar.get(_title) <= typeVal", foChar.get(_title), typeVal, foChar.get(_title) <= typeVal, false);
					return false;
				}
				break;
			case "==":
				if (foChar.get(_title) == typeVal) {
					foChar.logger.log("foChar.get(_title) == typeVal", foChar.get(_title), typeVal, foChar.get(_title) == typeVal, true);
					return true;
				}else{
					foChar.logger.log("foChar.get(_title) == typeVal", foChar.get(_title), typeVal, foChar.get(_title) == typeVal, false);
					return false;
				}
				break;
		}
		//default
		foChar.logger.log("checkQualificationByType: default, returning false");
		return false;
	},
	reCalculateCharInfo: function() {
		//recalc special bonus(es), requires a special abbreviation
		foChar.calculations.calculateSpecialBonus(arguments[0]);
		//recalc bonus(es) for tagged skills, must be after calculateSpecialBonus
		foChar.calculations.calculateTaggedSkillsBonus();
		//recalc SP
		foChar.charInfo.SP = foChar.calculations.calculateAvailSP();
		//recalc HP
		foChar.charInfo.HP = foChar.calculations.calculateAvailHP();
		//recalc AP
		foChar.charInfo.AP = foChar.calculations.calculateAvailAP();
		//recalc AP in V.A.T.S.
		foChar.charInfo.APvats = foChar.calculations.calculateAvailAPvats();
		//recalc accuracy in V.A.T.S.
		foChar.charInfo.accuracyVats = foChar.calculations.calculateAccuracyVats();
		//recalc accuracy in V.A.T.S. using pistols
		foChar.charInfo.accuracyVatsPistols = foChar.calculations.calculateAccuracyVatsPistols();
		//recalc calculateCritChance
		foChar.charInfo.critChance = foChar.calculations.calculateCritChance();
		//recalc radRes
		foChar.charInfo.radRes = foChar.calculations.calculateRadRes();
		//recalc poisonRes
		foChar.charInfo.poisonRes = foChar.calculations.calculatePoisonRes();
		//recalc meleeDmg
		foChar.charInfo.meleeDmg = foChar.calculations.calculateMeleeDmg();
		//recalc carryWeight
		foChar.charInfo.carryWeight = foChar.calculations.calculateCarryWeight();
		//recalc throw
		foChar.charInfo.throwRate = foChar.calculations.calculateThrow();
		//recalc karma
		foChar.charInfo.karmaTitle = foChar.calculations.calculateKarmaTitle();
		//recalc companionNerve
		foChar.charInfo.companionNerve = foChar.calculations.calculateCompanionNerve();
		//recalc throwRange
		foChar.charInfo.throwRange = foChar.calculations.calculateThrowRange();
		//recalc throwRate
		foChar.charInfo.throwRate = foChar.calculations.calculateThrowRate();
		
		return true;
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
		calculateAvailAPvats: function() {
			var APvats = 0;
			if (foChar.charInfo["APvats"] == 0) {
				return foChar.charInfo["AP"];
			}else{
				return foChar.charInfo["APvats"];
			}
		},
		calculateAccuracyVats: function() {
			return foChar.charInfo["accuracy"]+foChar.charInfo["accuracyVats"];
		},
		calculateAccuracyVatsPistols: function() {
			return foChar.charInfo["accuracy"]+foChar.charInfo["accuracyVatsPistols"];
		},
		calculateAvailHP: function() {
			var availHP = 0;
			try { //try/catch for special init
				availHP = 100 + (foChar.specials["EN"].lvl*20);
			} catch (err) {
				availHP = 100 + (1*20); //assume init at 1
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
			var critChanceLuck = 0;
			try { //try/catch for special init
				critChanceLuck = foChar.specials["LK"].lvl;
			} catch (err) {
				critChanceLuck = 1; //assume init at 1
			}
			if (foChar.perks["Finesse"]) {
				critChanceLuck = critChanceLuck+5;
			}
			critChance = critChanceLuck*0.01;

			return critChance.toFixed(2);
		},
		calculateRadRes: function() {
			var radRes = 0;
			try { //try/catch for special init
				radRes = (foChar.specials["EN"].lvl*2)-2;
			} catch (err) {
				radRes = (1*2)-2; //assume init at 1
			}
			//return percent
			radRes = radRes/100;
			//can't be less than 0
			if (radRes<0) { radRes = 0; }

			return radRes.toFixed(2);
		},
		calculatePoisonRes: function() {
			var poisonRes = 0;
			try { //try/catch for special init
				poisonRes = (foChar.specials["EN"].lvl*5)-5;
			} catch (err) {
				poisonRes = (1*5)-5; //assume init at 1
			}
			//return percent
			poisonRes = poisonRes/100;
			//can't be less than 0
			if (poisonRes<0) { poisonRes = 0; }

			return poisonRes.toFixed(2);
		},
		calculateMeleeDmg: function () {
			var meleeDmg = 0;
			try { //try/catch for special init
				meleeDmg = foChar.specials["ST"].lvl*0.05;
			} catch (err) {
				meleeDmg = 1*0.05; //assume init at 1
			}
			//can't be less than 0
			if (meleeDmg<0) { meleeDmg = 0; }

			return meleeDmg.toFixed(2);
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
		calculateThrowRange: function() {
			var throwRange = 0;
			var throwRangeMultipier = 3;
			if (foChar.perks["Heave, Ho!"]) {
				throwRangeMultipier = foChar.specials["ST"].lvl+2;
			}
			try { //try/catch for special init
				throwRange = foChar.specials["ST"].lvl*throwRangeMultipier;
			} catch (err) {
				throwRange = 1*throwRangeMultipier; //assume init at 1
			}
			//can't be less than 0
			if (throwRange<0) { throwRange = 0; }

			return throwRange;
		},
		calculateThrowRate: function() {
			return foChar.charInfo["fireRate"];
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
			//now, check traits
			for (trait in foChar.traits) {
				foChar.calculations.calculateTraitsBonus(trait);
			}
		},
		calculateTaggedSkillsBonus: function() {
			for (var i = 0; i < foChar.taggedSkills.length; i++) {
				foChar.calculations.calculateBonusByType(foChar.taggedSkills[i]);
			}
		},
		calculateBonusByType: function(type) {
			if (specials[type]) {
				var aSkills = specials[type].affSkills;
				var affLevel = foChar.specials[type].opt.skill;
				var skillRef = foChar.skills;
				for (var i=0; i<aSkills.length; i++) {
					var cSkill = aSkills[i].toString();
					if (foChar.skills[cSkill] != "undefined") {
						skillRef[cSkill].base = skillRef[cSkill].base + affLevel;
					}
				}

			}
			//taged skills
			if (skills[type]) {
				if (foChar.skills[type]) {
					foChar.skills[type].base = foChar.skills[type].base+15;
				}
			}
		},
		calculatePerksBonus: function(_title, _action, _perkTitle) {
			var action = _action || "add";
			var perkTitle = _perkTitle || _title;
			if (perks[_title]) {
				if (action == "add") {
					//add
					for (res in perks[_title].res) {
						if (specials[res]) {
							foChar.specials[res].lvl = foChar.specials[res].lvl+perks[_title].res[res];
						}else if (skills[res]) {
							foChar.skills[res].base = foChar.skills[res].base+perks[_title].res[res];
						}else if (foChar.charInfo[res] || foChar.charInfo[res] == 0) {
							foChar.charInfo[res] = foChar.charInfo[res]+perks[_title].res[res];
						}else if (foChar.crit[res] || foChar.crit[res] == 0) {
							foChar.crit[res] = foChar.crit[res]+perks[_title].res[res];
						}else if (foChar.chance[res] || foChar.chance[res] == 0) {
							foChar.chance[res] = foChar.chance[res]+perks[_title].res[res];
						}else if (foChar.consume[res] || foChar.consume[res] == 0) {
							foChar.consume[res] = foChar.consume[res]+perks[_title].res[res];
						}else if (foChar.dmg[res] || foChar.dmg[res] == 0) {
							foChar.dmg[res] = foChar.dmg[res]+perks[_title].res[res];
						}else if (foChar.effect[res] || foChar.effect[res] == 0) {
							foChar.effect[res] = foChar.effect[res]+perks[_title].res[res];
						}else if (foChar.kills[res] || foChar.kills[res] == 0) {
							foChar.kills[res] = foChar.kills[res]+perks[_title].res[res];
						}else if (foChar[res]) {
							foChar[res] = foChar[res]+perks[_title].res[res];
						}else if (res.toString() == "rank") {
							for (var resRank in perks[perkTitle].res.rank) {
								if (resRank > foChar.perks[_title].rank) {
									break;
								}
								for (var resRankRes in perks[_title].res.rank[resRank]) {
									//TODO add in other types besides charInfo
									if (foChar.charInfo[resRankRes]) {
										var perkRes = perks[_title].res.rank[resRank];
										foChar.charInfo[resRankRes] = foChar.charInfo[resRankRes]+perkRes[resRankRes];
									}
								}
							}
						}else{
							foChar.logger.log("Unknown result "+res.toString()+" in "+_title);
						}
					}
				}else{
					//remove
					for (res in perks[_title].res) {
						if (specials[res]) {
							specials[res].lvl = specials[res].lvl-perks[_title].res[res];
						}else if (skills[res]) {
							skills[res].base = skills[res].base-perks[_title].res[res];
						}else if (foChar.charInfo[res] || foChar.charInfo[res] == 0) {
							foChar.charInfo[res] = foChar.charInfo[res]-perks[_title].res[res];
						}else if (foChar.crit[res] || foChar.crit[res] == 0) {
							foChar.crit[res] = foChar.crit[res]-perks[_title].res[res];
						}else if (foChar.chance[res] || foChar.chance[res] == 0) {
							foChar.chance[res] = foChar.chance[res]-perks[_title].res[res];
						}else if (foChar.consume[res] || foChar.consume[res] == 0) {
							foChar.consume[res] = foChar.consume[res]-perks[_title].res[res];
						}else if (foChar.dmg[res] || foChar.dmg[res] == 0) {
							foChar.dmg[res] = foChar.dmg[res]-perks[_title].res[res];
						}else if (foChar.effect[res] || foChar.effect[res] == 0) {
							foChar.effect[res] = foChar.effect[res]-perks[_title].res[res];
						}else if (foChar.kills[res] || foChar.kills[res] == 0) {
							foChar.kills[res] = foChar.kills[res]-perks[_title].res[res];
						}else if (foChar[res]) {
							foChar[res] = foChar[res]-perks[_title].res[res];
						}else{
							foChar.logger.log("Unknown result "+res.toString()+" in "+_title);
						}
					}
				}
			}else{
				foChar.logger.log("Cannot calc Perk Bonus for "+_title+", perk not found");
			}
		},
		calculateTraitsBonus: function(_title, _action) {
			var action = _action || "add";
			if (action == "add") {
				//add
				for (res in traits[_title].res) {
					if (specials[res]) {
						foChar.specials[res].lvl = specials[res].lvl+traits[_title].res[res];
					}else if (skills[res]) {
						foChar.skills[res].base = foChar.skills[res].base+traits[_title].res[res];
					}else if (foChar.charInfo[res] || foChar.charInfo[res] == 0) {
						foChar.charInfo[res] = foChar.charInfo[res]+traits[_title].res[res];
					}else{
						foChar.logger.log("Unknown result "+res.toString()+" in "+_title);
						//foChar.logger.log("Unknown result "+res.toString()+" in "+_title);
					}
					for (skill in foChar.skills) {
						if (foChar.skills[res] && foChar.skills[res].base < 0) {
							foChar.skills[res].base = 0; //TODO is this right with allocation?
						}
					}
				}
			}else{
				//remove
				for (res in traits[_title].res) {
					if (specials[res]) {
						specials[res].lvl = specials[res].lvl-traits[_title].res[res];
					}else if (skills[res]) {
						//foChar.logger.log("skills[res]", res.toString(), traits[_title].res[res], foChar.skills[res].base);
						skills[res].base = skills[res].base-traits[_title].res[res];
						//foChar.logger.log("skills[res]", res.toString(), traits[_title].res[res], foChar.skills[res].base);
					}else if (foChar.charInfo[res] || foChar.charInfo[res] == 0) {
						foChar.charInfo[res] = foChar.charInfo[res]-traits[_title].res[res];
					}else{
						foChar.logger.log("Unknown result "+res.toString()+" in "+_title);
					}
					for (skill in foChar.skills) {
						if (foChar.skills[res] && foChar.skills[res].base < 0) {
							foChar.skills[res].base = 0; //TODO is this right with allocation?
						}
					}
				}
			}
		},
		calculateCompanionNerve: function() {
			var companionNerve = 0;
			try { //try/catch for special init
				companionNerve = foChar.specials["CH"].lvl*0.05;
			} catch (err) {
				companionNerve = 1*0.05; //assume init at 1
			}
			//can't be less than 0
			if (companionNerve<0) { companionNerve = 0; }

			return companionNerve.toFixed(2);
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
	/*  get values for items
	 *
	 *	gets calc'd value instead of direct ref item like getItem
	 *	skills value is actually base+alloc, which this will return
	 */
	get: function(setting) {
		switch (setting) {
			case "charLvl":
				return foChar.charInfo.lvl;
				break;
			case "gender":
				return foChar.charInfo.gender;
				break;
			case "eval":
				return "eval string";
				break
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
		if (foChar.crit[setting]) {
			return foChar.crit[setting];
		}
		if (foChar.chance[setting]) {
			return foChar.chance[setting];
		}
		if (foChar.consume[setting]) {
			return foChar.consume[setting];
		}
		if (foChar.effect[setting]) {
			return foChar.effect[setting];
		}
		if (foChar.dmg[setting]) {
			return foChar.dmg[setting];
		}
		if (foChar.kills[setting]) {
			return foChar.kills[setting];
		}
		if (foChar.charInfo[setting]) {
			return foChar.charInfo[setting];
		}
		if (foChar[setting]) {
			return foChar[setting];
		}

		foChar.logger.log("Can't find: "+setting);
		
		return -1; //fail
	},
	/*
	 *	getItem will return the passed item's value, or a ref (if item is an object)
	 *
	 *	can be either "obj", "prop" or a single string "obj.prop"
	 *
	 *	will return the deepest val/ref it can find (starting at foChar)
	 *	or the string "ERR" if it cannot find the item
	 *
	 */
	getItem: function() {
		var lastObjRef = foChar;
		var lastPropRef = null;
		var itemRef = '';
	
		if (arguments.length > 0) {
			for (var n=0; n < arguments.length; n++) {
				itemRef = arguments[n];
				i = 0;
	
				if ((itemRef).indexOf(".")>0) {
					itemRef = (itemRef).split(".");
				}
	
				if (itemRef.constructor.toString().indexOf("Array") != -1) {
					//deep ref
					while(i<itemRef.length) {
						if (typeof lastObjRef[itemRef[i]] == "object") {
							lastObjRef = lastObjRef[itemRef[i]];
						}else{
							lastPropRef = itemRef[i];
						}
						i++;
					}
				}else{
					if (typeof lastObjRef[itemRef] == "object") {
						lastObjRef = lastObjRef[itemRef];
					}else{
						lastPropRef = itemRef;
					}
				}
				if (lastPropRef != null) {
					return lastObjRef[lastPropRef];
				}else{
					return lastObjRef;
				}
			}
		}
		foChar.logger.log("Pass Obj.Prop to get item value");
		return "ERR";
	},
	/*
	 *	setItem will set the passed item's value
	 *
	 *	must be a prop, cannot set via obj={prop: value}
	 *	use the format "obj.prop=value"
	 *	takes multuple sets "obj1.prop1=value1", "obj2.prop2=value2"
	 *
	 *	will set the deepest val/ref it can find (starting at foChar)
	 *
	 *	returns true if ANY value is set
	 *
	 *	note: because the default object is foChar, if it doesn't
	 *	already have the prop passed, setItem WILL ADD IT
	 *
	 */
	setItem: function() {
		var i = 0;
		var lastObjRef = foChar;
		var lastPropRef = null;
		var value = '';
		var itemRef = '';
		var passedVal = '';
		var setItemCount = 0;
	
		if (arguments.length > 0) {
			for (var n=0; n < arguments.length; n++) {
				var arg = arguments[n];
				i = 0;
				passedVal = arguments;
				
				if ((arg).indexOf("=")>0) {
					value = (arg).split("=")[1];
					itemRef = (arg).split("=")[0];
	
					//check value to see if it should be a number (defaults to string)
					if (!isNaN(parseInt(value))) {
						value = parseInt(value);
					}
				}else{
					foChar.logger.log("setItem: No value passed in "+passedVal);
					continue;
				}
				if ((itemRef).indexOf(".")>0) {
					itemRef = (itemRef).split(".");
				}
	
				if (itemRef.constructor.toString().indexOf("Array") != -1) {
					//deep ref
					while(i<itemRef.length) {
						if (typeof lastObjRef[itemRef[i]] == "object") {
							lastObjRef = lastObjRef[itemRef[i]];
						}else{
							lastPropRef = itemRef[i];
						}
						i++;
					}
				}else{
					if (typeof lastObjRef[itemRef] == "object") {
						lastObjRef = lastObjRef[itemRef];
					}else{
						lastPropRef = itemRef;
					}
				}
				if (lastPropRef != null) {
					lastObjRef[lastPropRef] = value;
					setItemCount++;
				}else{
					/* if a JSON parser was added here, we could pass in objects as values */
					foChar.logger.log("Unable to set item, invalid prop? Pass Obj.Prop=Value to set item");
				}
			}
			if (setItemCount>0) {
				return true;
			}
		}else{
			foChar.logger.log("Pass Obj.Prop=Value to set item");
		}
		return false;
	},
	reset: function() {
		delete foChar.charInfo; //clear out anything added/updated
		//reinit
		foChar.initChar();

		return true;
	},
	/*
	 *	Logger object, checks for console, and for external elem to log to
	 *	options:
	 *		logToConsole: true/false logs to console (if available)
	 *		logToElem: true/false appends logMsg to HTML elem (if available)
	 *			logToElemId: id of elem to append to
	 *
	 */
	logger: {
		logToConsole: false,
		logToElem: false,
		logToElemId: 'fonv_lib_logMsg',
		lastLog: '',
				
		log: function() {
			if (foChar.logger.logToConsole || foChar.logger.logToElem) {
				if (foChar.logger["logToConsole"] && window.console) {
					console.log(arguments);
				}
			}
			if (foChar.logger["logToElem"] && document.getElementById(foChar.logger.logToElemId)) {
				foChar.logger.lastLog += arguments.toString() + "<br >";
				document.getElementById(foChar.logger.logToElemId).innerHTML = foChar.logger.lastLog;
			}
			return true;
		}
	}
}

