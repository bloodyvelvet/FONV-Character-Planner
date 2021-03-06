/*

Fallout: New Vegas Character Planner - Traits Library

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

version: 1.2.1

This library creates a traits object available to the page containing all trait
information for use with the foChar library.

Things of note:

the req property contains all the requirements for a specific trait. Each
property under req should be a required item (charInfo, Skill, etc). The
value of this property should then be requirement value itself.

This can also be the special property "eval". When using eval, you can then
specify an "eval by", followed by multiple requirements. 

The format of the eval value is in the form of:

	"EVALBY,NAME:REQVAL,NAME:REQVAL"

So comma seperated values for each eval, followed by name:value pairs.

eval by can be any ONE of: AND, OR, >, <, >=, <=, ==, PERK

If using "AND", char should have ALL requirements. If "OR", char can have ANY
of the requirements. If using "PERK", REQVAL is either true or false,
checking if char should or should not have the required perk.

*/
var traits = {
	"Built to Destroy": {
		desc: "The Flamer that burns twice as bright burns half as long. All weapons have +3% chance to Critically Hit, but equipment condition decays 15% faster.",
		req: {},
		availRanks: 1,
		res: {
			critChance: 0.03, //Not in G.E.C.K.?
			weapDecay: 0.15
		}
	},
	"Fast Shot": {
		desc: "While using Guns and Energy Weapons, you fire 20% more quickly but your shots are 20% less accurate.",
		req: {},
		availRanks: 1,
		res: {
			fireRate: 0.20,
			accuracy: -0.20,
			gunSpread: 0.20,
			accuracy: -0.20,
			APcost: -0.20
		}
	},
	"Four Eyes": {
		desc: "While wearing any type of glasses, you have +1 PER. Without glasses you have -1 PER.",
		req: {
			eval: ">,PE:1", //according to G.E.C.K you must have both of these
			eval: "<,PE:10" //reqs (plus wearing glasses) to gain the benefit
		},
		availRanks: 1,
		res: {
			MISC: "While wearing any type of glasses, you have +1 PER. Without glasses you have -1 PER."
		}
	},
	"Good Natured": {
		desc: "You're Good Natured at heart, more prone to solving problems with your mind than violence. You gain +5 to Barter, Medicine, Repair, Science, and Speech, but have -5 to Energy Weapons, Explosives, Melee Weapons, and Unarmed.",
		req: {},
		availRanks: 1,
		res: {
			"Barter": 5,
			"Medicine": 5,
			"Repair": 5,
			"Science": 5,
			"Speech": 5,
			"Guns": -5,
			"Energy Weapons": -5,
			"Explosives": -5,
			"Melee Weapons": -5,
			"Unarmed": -5
		}
	},
	"Heavy Handed": { //TODO res
		desc: "Your melee and unarmed attacks do more damage, but less critical hit damage.",
		req: {},
		availRanks: 1,
		res: {
			meleeDmg: 0.20,
			critDmgMelee: -0.60,
			MISC: "Your melee and unarmed attacks do more damage, but less critical hit damage."
		}
	},
	"Kamikaze": {
		desc: "You have +10 Action Points but your reckless nature causes you to have -2 Damage Threshold.",
		req: {},
		availRanks: 1,
		res: {
			AP: 10, //G.E.C.K. ref?
			DT: -2
		}
	},
	"Loose Cannon": {
		desc: "From Frag Grenades to Throwing Spears, you can throw weapons 30% faster at the cost of 25% less range.",
		req: {},
		availRanks: 1,
		res: {
			throwSpeed: 0.30,
			throwRange: -0.25,
			throwAPcost: -0.30
		}
	},
	"Small Frame": {
		desc: "Due to your small size, you have +1 AGL but your limbs are more easily crippled.",
		req: {
			eval: "<,AG:10"
		},
		availRanks: 1,
		res: {
			AG: 1,
			limbDecay: 0.25
		}
	},
	"Trigger Discipline": {
		desc: "While using Guns and Energy Weapons, you fire 20% more slowly but are 20% more accurate.",
		req: {},
		availRanks: 1,
		res: {
			APcost: 0.20,
			fireRate: -0.20,
			gunSpread: -0.20,
			accuracy: 0.20
		}
	},
	"Wild Wasteland": {
		desc: "Wild Wasteland unleashes the most bizarre and silly elements of post-apocalyptic America. Not for the faint of heart or the serious of temperment.",
		req: {},
		availRanks: 1,
		res: {
			MISC: "Changes gameplay."
		}
	}
};