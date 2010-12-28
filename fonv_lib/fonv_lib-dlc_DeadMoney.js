/*

Fallout: New Vegas Character Planner - DLC: Dead Money Library

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

version: 0.01

Additional elements add by the DLC add-on Dead Money

requires the default fonv_lib-perks libraryto be loaded before hand

*/

var dlc_DeadMoney = {};

//perks
var dlc_DeadMoney_perks = {
	"And Stay Back": {
		desc: "",
		req: {
			charLvl: 10,
			"Guns": 70
		},
		availRanks: 1,
		res: {
			MISC: "Shotguns have a chance of knocking an enemy back."
		}
	},
	"Coin Operator": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
			MISC: "Can craft Sierra Madre chips at a workbench"
		}
	},
	"Elijah's Last Words": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
			MISC: "+%150 melee attack speed, %25 chance for melee attacks to knock down enemies for Veronica"
		}
	},
	"Elijah's Rambling": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
			MISC: "Boosts melee critical damage +150%."
		}
	},
	"Ghost Hunter": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
			MISC: "Ghost People are more likely to die outright without needing to be dismembered or disintegrated."
		}
	},
	"Heavyweight": {
		desc: "",
		req: {
			charLvl: 12,
			eval: "<,ST:10"
		},
		availRanks: 1,
		res: {
			MISC: "Weapons with a weight of more than 10 is cut in half. This does not affect weapons modded to under 10 wg."
		}
	},
	"Hobbler": {
		desc: "",
		req: {
			charLvl: 12,
			PE: 7
		},
		availRanks: 1,
		res: {
			MISC: "Your chance to hit an opponents legs in VATS is significantly increased."
		}
	},
	"In My Footsteps": {
		desc: "",
		req: {
			eval: "COMPANION,God:true"
		},
		availRanks: 1,
		res: {
			chanceMineExplode: -1,
			MISC: "Traps do not activate, and you are given a stealth increase."
		}
	},
	"In Shining Armor": {
		desc: "",
		req: {
			"Repair": 20,
			"Science": 70
		},
		availRanks: 1,
		res: {
			MISC: "+5 DT against energy weapons when wearing any metal armor, +2 while wearing reflective eyewear."
		}
	},
	"Junk Rounds": {
		desc: "",
		req: {
			LK: 6,
			"Repair": 45
		},
		availRanks: 1,
		res: {
			MISC: "You can craft ammo using scrap metal and tin cans."
		}
	},
	"Light Touch": {
		desc: "",
		req: {
			AG: 6,
			"Repair": 45
		},
		availRanks: 1,
		res: {
			MISC: "While wearing light armor you gain +5% critical hit chance and your enemies suffer a -25% critical hit chance."
		}
	},
	"Old World Gourmet": {
		desc: "",
		req: {
			EN: 6,
			"Survival": 45
		},
		availRanks: 1,
		res: {
			MISC: "+25% addiction resistance. +50% health bonus from snack foods. Scotch, vodka and wine now give you health in addition to their normal effects."
		}
	},
	"Ravenous Hunger": {
		desc: "",
		req: {
			eval: "COMPANION,Dog:true"
		},
		availRanks: 1,
		res: {
			MISC: "When a Ghost Person in knocked unconscious, Dog will consume then, preventing them from regaining consciousness."
		}
	},
	"Sierra Madre Martini": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
			MISC: "Adds recipe to create Sierra Madre Martinis with 2 Junk Food, 1 Tin Can, and 1 Jar of Cloud Residue."
		}
	},
	"Signal Interference": {
		desc: "",
		req: {
			eval: "COMPANION,Christine Royce:true"
		},
		availRanks: 1,
		res: {
			MISC: "+25% time to escape signals."
		}
	},
	"Unclean Living": {
		desc: "",
		req: {
			eval: "COMPANION,Dean Domino:true"
		},
		availRanks: 1,
		res: {
			MISC: "Temporary cloud protection, take 75% damage."
		}
	}
};

Object.extend(perks, dlc_DeadMoney_perks);

//companions
var dlc_DeadMoney_companions = {
	"Dean Domino": {
		desc: "Dean Domino was a pre-war lounge singer, now ghoulified and trapped in Sierra Madre in 2281.",
		compGroup: 0
	},
	"Christine Royce": {
		desc: "Christine Royce is a mute human prisoner trapped in the Sierra Madre in 2281. She is difficult to communicate with, and the player must have a high Perception or Intelligence in order to understand her properly.",
		compGroup: 0
	},
	"Dog": {
		desc: "Dog is a schizophrenic Nightkin assisting Father Elijah in finding people to breach the Sierra Madre Casino.",
		compGroup: 0
	},
	"God": {
		desc: "Dog's alternate personality.",
		compGroup: 0
	}
};

Object.extend(companions, dlc_DeadMoney_companions);