
describe("check init", function() {

	it("foChar should be built and ready", function() {
		expect(foChar.built).toBeTruthy();
	});

});

describe("check init - specials", function() {

	it("should have specials", function() {
		expect(foChar.specials).toBeDefined();
	});

	it("should have ST 1", function() {
		expect(foChar.specials.ST.lvl).toEqual(1);
	});

	it("should have PE 1", function() {
		expect(foChar.specials.PE.lvl).toEqual(1);
	});

	it("should have EN 1", function() {
		expect(foChar.specials.EN.lvl).toEqual(1);
	});

	it("should have CH 1", function() {
		expect(foChar.specials.CH.lvl).toEqual(1);
	});

	it("should have IN 1", function() {
		expect(foChar.specials.IN.lvl).toEqual(1);
	});

	it("should have AG 1", function() {
		expect(foChar.specials.AG.lvl).toEqual(1);
	});

	it("should have LK 1", function() {
		expect(foChar.specials.LK.lvl).toEqual(1);
	});

});

describe("check init - skills", function() {

	it("should have skills", function() {
		expect(foChar.skills).toBeDefined();
	});

	it("should have skill Barter", function() {
		expect(foChar.skills["Barter"]).toBeDefined();
	});

	it("should have skill Energy Weapons", function() {
		expect(foChar.skills["Energy Weapons"]).toBeDefined();
	});

	it("should have skill Explosives", function() {
		expect(foChar.skills["Explosives"]).toBeDefined();
	});

	it("should have skill Guns", function() {
		expect(foChar.skills["Guns"]).toBeDefined();
	});

	it("should have skill Lockpick", function() {
		expect(foChar.skills["Lockpick"]).toBeDefined();
	});

	it("should have skill Medicine", function() {
		expect(foChar.skills["Medicine"]).toBeDefined();
	});

	it("should have skill Melee Weapons", function() {
		expect(foChar.skills["Melee Weapons"]).toBeDefined();
	});

	it("should have skill Repair", function() {
		expect(foChar.skills["Repair"]).toBeDefined();
	});

	it("should have skill Science", function() {
		expect(foChar.skills["Science"]).toBeDefined();
	});

	it("should have skill Sneak", function() {
		expect(foChar.skills["Sneak"]).toBeDefined();
	});

	it("should have skill Speech", function() {
		expect(foChar.skills["Speech"]).toBeDefined();
	});

	it("should have skill Survival", function() {
		expect(foChar.skills["Survival"]).toBeDefined();
	});

	it("should have skill Unarmed", function() {
		expect(foChar.skills["Unarmed"]).toBeDefined();
	});

});

describe("check init - traits", function() {

	var emptyObject = {};

	it("should have traits", function() {
		expect(foChar.traits).toBeDefined();
	});

	it("should have no traits added", function() {
		expect(foChar.traits).toEqual(emptyObject);
	});

});

describe("check init - perks", function() {

	var emptyObject = {};

	it("should have perks", function() {
		expect(foChar.perks).toBeDefined();
	});

	it("should have no perks added", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

});

describe("check foChar.levelUp()", function() {
	
	foChar.charInfo["lvl"] = 1;

	var curLevel = 1;

	beforeEach(function () {
		waits(10);
	});
	afterEach(function () {
		foChar.levelUp(foChar.charInfo.lvl);
		curLevel++;
	});
	
	it("should have level 1", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 2", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 3", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 4", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 5", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 6", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 7", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 8", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 9", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 10", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 11", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 12", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 13", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 14", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 15", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 16", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 17", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 18", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 19", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 20", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 21", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 22", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 23", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 24", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 25", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 26", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 27", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 28", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 29", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});
	
	it("should have level 30", function() {
		expect(foChar.charInfo.lvl).toEqual(curLevel);
	});

	it("should still be level 30 (level cap test)", function() {
		expect(foChar.charInfo.lvl).toEqual(30);
	});

});

describe("check adding perks - qualifications", function() {

	var perkArrIndex = 0;
	var perkArr = perks._getPerksArray();

	beforeEach(function () {

		/*
			each perk has dif requirements, so setup char to
			qualify beforehand.
		*/
		foChar.charInfo["lvl"] = 30;

		foChar.charInfo["gender"] = "male";

		foChar.specials["ST"].lvl = 9;
		foChar.specials["PE"].lvl = 9;
		foChar.specials["EN"].lvl = 9;
		foChar.specials["CH"].lvl = 9;
		foChar.specials["IN"].lvl = 9;
		foChar.specials["AG"].lvl = 9;
		foChar.specials["LK"].lvl = 9;

		foChar.skills["Barter"].alloc = 90;
		foChar.skills["Energy Weapons"].alloc = 90;
		foChar.skills["Explosives"].alloc = 90;
		foChar.skills["Guns"].alloc = 90;
		foChar.skills["Lockpick"].alloc = 90;
		foChar.skills["Medicine"].alloc = 90;
		foChar.skills["Melee Weapons"].alloc = 90;
		foChar.skills["Repair"].alloc = 90;
		foChar.skills["Science"].alloc = 90;
		foChar.skills["Sneak"].alloc = 90;
		foChar.skills["Speech"].alloc = 90;
		foChar.skills["Survival"].alloc = 90;
		foChar.skills["Unarmed"].alloc = 90;

		//fonv_lib.DEBUG = true;

		runs( function() {
			foChar.addSPT(perkArr[perkArrIndex], 1);
		});
		
		if (
			perkArr[perkArrIndex] == "Action Girl" ||
			perkArr[perkArrIndex] == "Cherchez La Femme" ||
			perkArr[perkArrIndex] == "Black Widow"
		) {
			foChar.charInfo["gender"] = "female";
		}else{
			foChar.charInfo["gender"] = "male";
		}
		
	});
	afterEach(function () {
		//leave cannibal, Ghastly Scavenger requires it anyway
		
		if (perkArr[perkArrIndex] != "Cannibal") {		
			delete foChar.perks[perkArr[perkArrIndex]];
		}
		perkArrIndex++;
	});

	it("should qualify for Black Widow", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Friend of the Night", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Heave, Ho!", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Hunter", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Intense Training", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Rapid Reload", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Retention", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Swift Learner", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Cannibal", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Comprehension", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Educated", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Entomologist", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Rad Child", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Run 'n Gun", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Travel Light", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Bloody Mess", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Demolition Expert", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Ferocious Loyalty", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Fortune Finder", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Gunslinger", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Hand Loader", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Lead Belly", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Shotgun Surgeon", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for The Professional", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Toughness", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Vigilant Recycler", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Commando", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Cowboy", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Living Anatomy", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Pack Rat", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Quick Draw", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Rad Resistance", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Scrounger", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Stonewall", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Strong Back", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Super Slam", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Terrifying Presence", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Animal Friend", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Finesse", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Here and Now", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Math Wrath", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Miss Fortune", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Mister Sandman", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Mysterious Stranger", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Nerd Rage!", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Night Person", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Plasma Spaz", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Fast Metabolism", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Ghastly Scavenger", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Hit the Deck", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Life Giver", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Long Haul", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Piercing Strike", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Pyromaniac", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Robotics Expert", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Silent Running", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Sniper", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Splash Damage", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Unstoppable Force", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Adamantium Skeleton", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Center of Mass", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Chemist", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Jury Rigging", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Light Step", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Purifier", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Action Boy", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Action Girl", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Better Criticals", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Chem Resistant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Meltdown", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Tag!", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Weapon Handling", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Computer Whiz", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Concentrated Fire", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Infiltrator", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Paralyzing Palm", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Explorer", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Grim Reaper's Sprint", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Ninja", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Solar Powered", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Laser Commander", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Nuka Chemist", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Spray and Pray", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Slayer", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Nerves of Steel", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Rad Absorption", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Abominable", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Agility Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Animal Control", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Beautiful Beatdown", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Bug Stomper", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Charisma Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Endurance Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Enhanced Sensors", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Intelligence Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Lord Death", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Luck Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Mutant Massacrer", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Monocyte Breeder", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Perception Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Ranger Takedown", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Regular Maintenence", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Scribe Assistant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Spotter", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Stealth Girl", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Strength Implant", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

	it("should qualify for Sub-Dermal Armor", function() {
		expect(foChar.perks[perkArr[perkArrIndex]].rank).toEqual(1);
	});

});

describe("check adding perks - disqualifications", function() {

	var emptyObject = {};
	var perkArrIndex = 0;
	var perkArr = perks._getPerksArray();

	/* reset foChar so stats are reset */
	runs( function() {
		foChar.reset();
	});
	beforeEach(function () {

		//fonv_lib.DEBUG = true;

		runs( function() {
			foChar.addSPT(perkArr[perkArrIndex], 1);
		});
		
		/* make sure we have the opposite of perk reqs */
		if (
			perkArr[perkArrIndex] == "Action Girl" ||
			perkArr[perkArrIndex] == "Cherchez La Femme" ||
			perkArr[perkArrIndex] == "Black Widow"
		) {
			foChar.charInfo["gender"] = "male";
		}
		
		if (
			perkArr[perkArrIndex] == "Action Boy" ||
			perkArr[perkArrIndex] == "Confirmed Bachelor" ||
			perkArr[perkArrIndex] == "Lady Killer"
		) {
			foChar.charInfo["gender"] = "female";
		}
		/*	slightly modify the misc perks reqs
		 *	so a reset char doesn't auto-qualify
		 */
		if (perks[perkArr[perkArrIndex]].req["charLvl"] == 0) {
			perks[perkArr[perkArrIndex]].req["charLvl"] = 99;
		}
		
	});
	afterEach(function () {
		delete foChar.perks[perkArr[perkArrIndex]];
		/*	change modified misc perks reqs
		 *	so they're back to default
		 */
		if (perks[perkArr[perkArrIndex]].req["charLvl"] == 99) {
			perks[perkArr[perkArrIndex]].req["charLvl"] = 0;
		}
		perkArrIndex++;
	});

	it("should not qualify for Black Widow", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Friend of the Night", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Heave, Ho!", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Hunter", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Intense Training", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Rapid Reload", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Retention", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Swift Learner", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Cannibal", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Comprehension", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Educated", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Entomologist", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Rad Child", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Run 'n Gun", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Travel Light", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Bloody Mess", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Demolition Expert", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Ferocious Loyalty", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Fortune Finder", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Gunslinger", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Hand Loader", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Lead Belly", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Shotgun Surgeon", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for The Professional", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Toughness", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Vigilant Recycler", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Commando", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Cowboy", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Living Anatomy", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Pack Rat", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Quick Draw", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Rad Resistance", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Scrounger", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Stonewall", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Strong Back", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Super Slam", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Terrifying Presence", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Animal Friend", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Finesse", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Here and Now", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Math Wrath", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Miss Fortune", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Mister Sandman", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Mysterious Stranger", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Nerd Rage!", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Night Person", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Plasma Spaz", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Fast Metabolism", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Ghastly Scavenger", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Hit the Deck", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Life Giver", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Long Haul", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Piercing Strike", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Pyromaniac", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Robotics Expert", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Silent Running", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Sniper", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Splash Damage", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Unstoppable Force", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Adamantium Skeleton", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Center of Mass", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Chemist", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Jury Rigging", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Light Step", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Purifier", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Action Boy", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Action Girl", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Better Criticals", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Chem Resistant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Meltdown", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Tag!", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Weapon Handling", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Computer Whiz", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Concentrated Fire", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Infiltrator", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Paralyzing Palm", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Explorer", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Grim Reaper's Sprint", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Ninja", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Solar Powered", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Laser Commander", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Nuka Chemist", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Spray and Pray", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Slayer", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Nerves of Steel", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Rad Absorption", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Abominable", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Agility Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Animal Control", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Beautiful Beatdown", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Bug Stomper", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Charisma Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Endurance Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Enhanced Sensors", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Intelligence Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Lord Death", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Luck Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Mutant Massacrer", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Monocyte Breeder", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Perception Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Ranger Takedown", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Regular Maintenence", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Scribe Assistant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Spotter", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Stealth Girl", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Strength Implant", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

	it("should not qualify for Sub-Dermal Armor", function() {
		expect(foChar.perks).toEqual(emptyObject);
	});

});

describe("check adding/removing traits", function() {
	
	var emptyObject = {};

	var traitArrIndex = 0;
	var traitArr = traits._getTraitsArray();

	beforeEach(function () {
		runs( function() {
			foChar.addSPT(traitArr[traitArrIndex]);
		});
	});
	afterEach(function () {
		foChar.removeTrait(traitArr[traitArrIndex]);
		traitArrIndex++;
	});

	it("should have trait Built to Destroy", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Fast Shot", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Four Eyes", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Good Natured", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Heavy Handed", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Kamikaze", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Loose Cannon", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Small Frame", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Trigger Discipline", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have trait Wild Wasteland", function() {
		expect(foChar.traits[traitArr[traitArrIndex]]).toBeDefined();
	});

	it("should have removed all traits", function() {
		expect(foChar.traits).toEqual(emptyObject);
	});

});


describe("check traits cap", function() {
	//reset traits
	runs( function() {
		foChar.traits = {};
	});

	var traitSize = 0;

	//add two traits
	runs( function() {
		foChar.addSPT("Heavy Handed");
	});
	runs( function() {
		foChar.addSPT("Kamikaze");
	});
	
	it("should have two traits", function() {
		for (var t in foChar.traits) {
			traitSize++;
		}
		expect(traitSize).toEqual(foChar.traitsCap);
		traitSize = 0;
	});

	//attempt third traits add
	runs( function() {
		foChar.addSPT("Wild Wasteland");
	});


	it("should still have two traits", function() {
		for (var t in foChar.traits) {
			traitSize++;
		}
		expect(traitSize).toEqual(foChar.traitsCap);
	});

});