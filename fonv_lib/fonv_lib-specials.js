/*

Fallout: New Vegas Character Planner - Specials Library

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

version: 1.1.0

This library creates a specials object available to the page containing all
special information for use with the foChar library.

Things of note:

Each SPECIAL should contain an affSkills property (affected skills) which
is an array of skills the SPECIAL affects.

Under the lvl property, there should be information for each level of the
SPECIAL (1-10).

*/
var specials = {
	"ST": {
		abr: "ST",
		desc: "Strength",
		affSkills: ["Melee Weapons"],
		lvl: {
			1: {
				meleeDmg: 0.05,
				carryWeight: 160,
				skill: 2,
				title: "Wet Noodle"
			},
			2: {
				meleeDmg: 0.10,
				carryWeight: 170,
				skill: 4,
				title: "Beached Jellyfish"
			},
			3: {
				meleeDmg: 0.15,
				carryWeight: 180,
				skill: 6,
				title: "Doughy Baby"
			},
			4: {
				meleeDmg: 0.20,
				carryWeight: 190,
				skill: 8,
				title: "Lightweight"
			},
			5: {
				meleeDmg: 0.25,
				carryWeight: 200,
				skill: 10,
				title: "Average Joe"
			},
			6: {
				meleeDmg: 0.30,
				carryWeight: 210,
				skill: 12,
				title: "Barrel Chested"
			},
			7: {
				meleeDmg: 0.35,
				carryWeight: 220,
				skill: 14,
				title: "Beach Bully"
			},
			8: {
				meleeDmg: 0.40,
				carryWeight: 230,
				skill: 16,
				title: "Circus Strongman"
			},
			9: {
				meleeDmg: 0.45,
				carryWeight: 240,
				skill: 18,
				title: "Doomsday Pecs"
			},
			10: {
				meleeDmg: 0.50,
				carryWeight: 250,
				skill: 20,
				title: "Hercules' Bigger Cousin"
			}
		}
	},
	"PE": {
		abr: "PE",
		desc: "Perception",
		affSkills: ["Explosives", "Lockpick", "Energy Weapons"],
		lvl: {
			1: {
				skill: 2,
				title: "Deaf Bat"
			},
			2: {
				skill: 4,
				title: "Senile Mole"
			},
			3: {
				skill: 6,
				title: "Squinting Newt"
			},
			4: {
				skill: 8,
				title: "Unsuspecting Trout"
			},
			5: {
				skill: 10,
				title: "Wary Trout"
			},
			6: {
				skill: 12,
				title: "Alert Coyote"
			},
			7: {
				skill: 14,
				title: "Big-eyed Tiger"
			},
			8: {
				skill: 16,
				title: "Monocled Falcon"
			},
			9: {
				skill: 18,
				title: "Sniper Hawk"
			},
			10: {
				skill: 20,
				title: "Eagle with Telescope"
			}
		}
	},
	"EN": { //resitances are percent
		abr: "EN",
		desc: "Endurance",
		affSkills: ["Survival", "Unarmed"],
		lvl: {
			1: {
				skill: 2,
				title: "Basically Dead",
				HP: 120,
				poisonRes: 0.0,
				radRes: 0.0
			},
			2: {
				skill: 4,
				title: "Crumbly",
				HP: 140,
				poisonRes: 0.5,
				radRes: 0.02
			},
			3: {
				skill: 6,
				title: "Do Not Bend",
				HP: 160,
				poisonRes: 0.10,
				radRes: 0.04
			},
			4: {
				skill: 8,
				title: "Handle with Care",
				HP: 180,
				poisonRes: 0.15,
				radRes: 0.06
			},
			5: {
				skill: 10,
				title: "Stain-resistant",
				HP: 200,
				poisonRes: 0.20,
				radRes: 0.08
			},
			6: {
				skill: 12,
				title: "Hardy",
				HP: 220,
				poisonRes: 0.25,
				radRes: 0.10
			},
			7: {
				skill: 14,
				title: "Tough-as-nails",
				HP: 240,
				poisonRes: 0.30,
				radRes: 0.12
			},
			8: {
				skill: 16,
				title: "Flame Retardant",
				HP: 260,
				poisonRes: 0.35,
				radRes: 0.14
			},
			9: {
				skill: 18,
				title: "Bulletproof",
				HP: 280,
				poisonRes: 0.40,
				radRes: 0.16
			},
			10: {
				skill: 20,
				title: "Unstoppable",
				HP: 300,
				poisonRes: 0.45,
				radRes: 0.18
			}
		}
	},
	"CH": {
		abr: "CH",
		desc: "Charisma",
		affSkills: ["Barter", "Speech"],
		lvl: {
			1: {
				skill: 2,
				title: "Misanthrope",
				companionNerve: 0.05
			},
			2: {
				skill: 4,
				title: "Old Hermit",
				companionNerve: 0.10
			},
			3: {
				skill: 6,
				title: "Creepy Undertaker",
				companionNerve: 0.15
			},
			4: {
				skill: 8,
				title: "Peevish Librarian",
				companionNerve: 0.20
			},
			5: {
				skill: 10,
				title: "Substitute Teacher",
				companionNerve: 0.25
			},
			6: {
				skill: 12,
				title: "Cheery Salesman",
				companionNerve: 0.30
			},
			7: {
				skill: 14,
				title: "Diplomat",
				companionNerve: 0.35
			},
			8: {
				skill: 16,
				title: "Movie Star",
				companionNerve: 0.40
			},
			9: {
				skill: 18,
				title: "Casanova",
				companionNerve: 0.45
			},
			10: {
				skill: 20,
				title: "Cult Leader",
				companionNerve: 0.50
			}
		}
	},
	"IN": { //SP = skill points per level
		abr: "IN",
		desc: "Intelligence",
		affSkills: ["Science", "Repair", "Medicine"],
		lvl: {
			1: {
				skill: 2,
				title: "Sub-brick",
				SP: 10.5
			},
			2: {
				skill: 4,
				title: "Vegetable",
				SP: 11
			},
			3: {
				skill: 6,
				title: "Cretin",
				SP: 11.5
			},
			4: {
				skill: 8,
				title: "Knucklehead",
				SP: 12
			},
			5: {
				skill: 10,
				title: "Knowledgeable",
				SP: 12.5
			},
			6: {
				skill: 12,
				title: "Gifted",
				SP: 13
			},
			7: {
				skill: 14,
				title: "Smartypants",
				SP: 13.5
			},
			8: {
				skill: 16,
				title: "Know-it-all",
				SP: 14
			},
			9: {
				skill: 18,
				title: "Genius",
				SP: 14.5
			},
			10: {
				skill: 20,
				title: "Omniscient",
				SP: 15
			}
		}
	},
	"AG": { //SkillPts = per level
		abr: "AG",
		desc: "Agility",
		affSkills: ["Guns", "Sneak"],
		lvl: {
			1: {
				skill: 2,
				title: "Walking Disaster",
				AP: 67
			},
			2: {
				skill: 4,
				title: "Accident Prone",
				AP: 69
			},
			3: {
				skill: 6,
				title: "Oaf",
				AP: 71
			},
			4: {
				skill: 8,
				title: "Butterfingers",
				AP: 73
			},
			5: {
				skill: 10,
				title: "Under Control",
				AP: 75
			},
			6: {
				skill: 12,
				title: "Catlike",
				AP: 77
			},
			7: {
				skill: 14,
				title: "Knife Thrower",
				AP: 79
			},
			8: {
				skill: 16,
				title: "Knife Catcher",
				AP: 81
			},
			9: {
				skill: 18,
				title: "Acrobatic Marvel",
				AP: 83
			},
			10: {
				skill: 20,
				title: "Walks on Water",
				AP: 85
			}
		}
	},
	"LK": { //crital chance is percent
		abr: "LK",
		desc: "Luck",
		affSkills: ["Barter", "Energy Weapons", "Explosives", "Guns", "Lockpick", "Medicine", "Melee Weapons", "Repair", "Science", "Sneak", "Speech", "Survival", "Unarmed"], 
		lvl: {
			1: {
				skill: 1,
				title: "13 Pitch-black Coats",
				critChance: 0.01
			},
			2: {
				skill: 1,
				title: "Broken Gypsy Mirror",
				critChance: 0.02
			},
			3: {
				skill: 2,
				title: "Sickly Albatross",
				critChance: 0.03
			},
			4: {
				skill: 2,
				title: "Spilled Salt",
				critChance: 0.04
			},
			5: {
				skill: 3,
				title: "Coin Flip",
				critChance: 0.05
			},
			6: {
				skill: 3,
				title: "Stacked Deck",
				critChance: 0.06
			},
			7: {
				skill: 4,
				title: "Lucky 7",
				critChance: 0.07
			},
			8: {
				skill: 4,
				title: "Leprechaun's Foot",
				critChance: 0.08
			},
			9: {
				skill: 5,
				title: "21-Leaf Clover",
				critChance: 0.09
			},
			10: {
				skill: 5,
				title: "Two-headed Coin Flip",
				critChance: 0.10
			}
		}
	}
};