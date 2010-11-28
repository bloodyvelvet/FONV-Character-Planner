/*

Fallout: New Vegas Character Planner - Perks Library

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

version: 1.2.1

This library creates a perks object available to the page containing all perk
information for use with the foChar library.

Things of note:

the req property contains all the requirements for a specific perk. Each
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

For perks with multiple ranks, the result is handled slightly differently.

If the rank is accumulative equally per level (i.e. each level +1), then
ranks do not need to be defined. If the res values change per perk level
(i.e. rank 1: +1, rank 2: +1, rank 3: +2), then individual ranks should be
defined.

So if adding rank 3 in the above example, the char should get:
	+1+1+2, or +4 total.

*/
var perks = {
	"Action Boy": {
		desc: "With the Action Boy perk, you gain an additional 15 Action Points to use in V.A.T.S.",
		req: {
			charLvl: 16,
			AG: 6,
			gender: "male"
		},
		availRanks: 2,
		res: {
			APvats: 15, //per level
			MISC: "+15 Action Points in V.A.T.S."
		}
	},
	"Action Girl": {
		desc: "With the Action Girl perk, you gain an additional 15 Action Points to use in V.A.T.S.",
		req: {
			charLvl: 16,
			AG: 6,
			gender: "female"
		},
		availRanks: 2,
		res: {
			APvats: 15, //per level
			MISC: "+15 Action Points in V.A.T.S."
		}
	},
	"Adamantium Skeleton": {
		desc: "With the Adamantium Skeleton perk, your limbs only receive 50% of the damage they normally would.",
		req: {
			charLvl: 14
		},
		availRanks: 1,
		res: {
			limbDecay: 0.50,
			MISC: "Limbs only receive 50% damage"
		}
	},
	"Animal Friend": {
		desc: "At the first rank of this perk, animals simply won't attack. At the second rank, they will eventually come to your aid in combat, but never against another animal.",
		req: {
			charLvl: 10,
			CH: 6,
			"Survival": 45
		},
		availRanks: 2,
		res: {
			animalAgro: 10, //per level
			MISC: "Rank 1: Certain Animals do not attack, Rank 2: They and tamed animals will come to your aid"
		}
	},
	"Better Criticals": {
		desc: "With the Better Criticals perk, you gain a 50% damage bonus every time a critical hit is scored on an opponent.",
		req: {
			charLvl: 16,
			PE: 6,
			LK: 6
		},
		availRanks: 1,
		res: {
			critDmg: 0.5
		}
	},
	"Black Widow": {
		desc: "In combat, you do +10% damage against male opponents. Outside of combat, you'll sometimes have access to unique dialogue options when dealing with the opposite sex.",
		req: {
			charLvl: 2,
			gender: "female"
		},
		availRanks: 1,
		res: {
			dmgOppSex: 0.1,
			MISC: "unique dialogue options when dealing with the opposite sex."
		}
	},
	"Bloody Mess": {
		desc: "With the Bloody Mess perk, characters and creatures you kill will often explode into a red, gut-ridden, eyeball-strewn paste. Fun! Oh, and you'll do 5% extra damage with all weapons.",
		req: {
			charLvl: 6
		},
		availRanks: 1,
		res: {
			dmg: 0.5
		}
	},
	"Cannibal": {
		desc: "With the Cannibal perk, when you're in Sneak mode, you gain the option to eat a corpse to regain Health. But every time you feed, you lose Karma, and if the act is witnessed, it is considered a crime against nature.",
		req: {
			charLvl: 4
		},
		availRanks: 1,
		res: {
			MISC: "Eat a corpse to regain HP, lose karma"
		}
	},
	"Center of Mass": {
		desc: "You don't fool around with fancy trick shots. Straight to the midsection and down they go. In V.A.T.S., you do an extra 15% damage with attacks targeting the torso.",
		req: {
			charLvl: 14,
			"Guns": 70
		},
		availRanks: 1,
		res: {
			MISC: "In V.A.T.S., you do an additional 15% damage when targeting the torso."
		}
	},
	"Chemist": {
		desc: "With the Chemist perk, any chems you take last twice as long.",
		req: {
			charLvl: 14,
			"Medicine": 60
		},
		availRanks: 1,
		res: {
			chemDur: 2,
			MISC: "Increased duration for chem effects"
		}
	},
	"Chem Resistant": {
		desc: "Having the Chem Resistant perk means you're 50% less likely to develop an addiction to chems, like Psycho or Jet.",
		req: {
			charLvl: 16,
			"Medicine": 60
		},
		availRanks: 1,
		res: {
			chemAddictionChance: -0.50,
			MISC: "50% less addiction chance"
		}
	},
	"Cherchez La Femme": {
		desc: "In combat, you do +10% damage against female opponents. Outside of combat, you'll sometimes have access to unique dialogue options when dealing with the same sex.",
		req: {
			charLvl: 2,
			gender: "female"
		},
		availRanks: 1,
		res: {
			dmgSameSex: 0.1,
			MISC: "unique dialogue options when dealing with the same sex."
		}
	},
	"Commando": {
		desc: "While using a rifle (or similar one-handed weapon), your accuracy in V.A.T.S. is significantly increased.",
		req: {
			charLvl: 8
		},
		availRanks: 1,
		res: {
			accuracyVats: 0.25,
			MISC: "	V.A.T.S. accuracy with two-handed weapons increased."
		}
	},
	"Comprehension": {
		desc: "With the Comprehension perk, you gain double the bonus from reading magazines and one additional skill point  whenever a skill book is read.",
		req: {
			charLvl: 4,
			IN: 4
		},
		availRanks: 1,
		res: {
			SPgainRateFromBooks: 1,
			skillPointsFromMags: 10 //This is not in G.E.C.K.?
		}
	},
	"Computer Whiz": {
		desc: "Fail a hack attempt and get locked out of a computer? Not if you're a Computer Whiz! With this perk, you can attempt to re-hack any computer you were previously locked out of.",
		req: {
			charLvl: 18,
			IN: 7,
			"Science": 70
		},
		availRanks: 1,
		res: {
			ignoreLockTerminal: 1,
			MISC: "Another attempt to hack any computer you were previously locked out of."
		}
	},
	"Concentrated Fire": {
		desc: "With Concentrated Fire, your accuracy to hit any body part in V.A.T.S. increases slightly with each subsequent hit on that body part.",
		req: {
			charLvl: 18,
			"Energy Weapons": 60,
			"Guns": 60
		},
		availRanks: 1,
		res: {
			MISC: "	Chance to hit any body part in V.A.T.S. increases slightly with each subsequent hit on that body part."
		}
	},
	"Confirmed Bachelor": {
		desc: "In combat, you do +10% damage against male opponents. Outside of combat, you'll sometimes have access to unique dialogue options when dealing with the same sex.",
		req: {
			charLvl: 2,
			gender: "male"
		},
		availRanks: 1,
		res: {
			dmgSameSex: 0.1,
			MISC: "unique dialogue options when dealing with the same sex."
		}
	},
	"Cowboy": {
		desc: "You do 25% more damage when using any revolver, lever-action firearm, dynamite, knife, or hatchet.",
		req: {
			charLvl: 8,
			"Guns": 45,
			"Melee Weapons": 45
		},
		availRanks: 1,
		res: {
			dmgCowboyWeapons: 0.25,
			MISC: "25 percent more damage when using any revolver, lever-action firearm, dynamite, knife, or hatchet."
		}
	},
	"Demolition Expert": {
		desc: "With each rank of this perk, all of your explosive weapons do an additional 20% damage.",
		req: {
			charLvl: 6,
			"Explosives": 50
		},
		availRanks: 3,
		res: {
			dmgExplosives: 0.20 //per level
		}
	},
	"Educated": {
		desc: "With the Educated perk, you gain two more skill points every time you advance in level. This perk is best taken early on, to maximize its effectiveness.",
		req: {
			charLvl: 4,
			IN: 4
		},
		availRanks: 1,
		res: {
			SPgainRate: 2
		}
	},
	"Entomologist": {
		desc: "With the Entomologist perk, you do an extra 50% damage every time you attack a mutated insect, like the Radroach, Giant Mantis, or Radscorpian.",
		req: {
			charLvl: 4,
			IN: 4,
			"Survival": 45
		},
		availRanks: 1,
		res: {
			insectDmg: 0.5
		}
	},
	"Explorer": {
		desc: "When you choose the Explorer perk, every location in the world is revealed on your map. So get out there and explore!",
		req: {
			charLvl: 20
		},
		availRanks: 1,
		res: {
			MISC: "Every location in the world is revealed on your map"
		}
	},
	"Fast Metabolism": {
		desc: "With the Fast Metabolism perk, you gain a 20% Health bonus when using Stimpaks.",
		req: {
			charLvl: 12
		},
		availRanks: 1,
		res: {
			MISC: "20% Health bonus when using Stimpaks"
		}
	},
	"Ferocious Loyalty": {
		desc: "The power of your personality inspires die-hard loyalty from your followers. When you drop below 50% Health, your companions temporarily gain much greater resistance to damage.",
		req: {
			charLvl: 6,
			CH: 6
		},
		availRanks: 1,
		res: {
			MISC: "When your HP drops below 50%, Companions gain a bonus to their DT"
		}
	},
	"Finesse": {
		desc: "With the Finesse perk you have a higher chance to score a critical hit on an opponent in combat, equivalent to 5 extra points of Luck.",
		req: {
			charLvl: 10
		},
		availRanks: 1,
		res: {
			MISC: "LK+5 for critChance calc"
		}
	},
	"Fortune Finder": {
		desc: "With the Fortune Finder perk, you'll find considerably more Nuka-Cola caps in containers than you normally would.",
		req: {
			charLvl: 6,
			LK: 5
		},
		availRanks: 1,
		res: {
			MISC: "Considerably more bottle caps will be found in stockpiles."
		}
	},
	"Friend of the Night": {
		desc: "You are a true friend of the night. Your eyes adapt quickly to low-light conditions indoors and when darkness falls across the wasteland.",
		req: {
			charLvl: 2,
			PE: 6,
			"Sneak": 30
		},
		availRanks: 1,
		res: {
			MISC: "Your eyes adapt quickly to low-light conditions."
		}
	},
	"Ghastly Scavenger": {
		desc: "With Ghastly Scavenger, when you're in Sneak mode, you gain the option to eat a Super Mutant or Feral Ghoul corpse to regain Health. Every time you feed, you lose Karma, and if the act is witnessed, it is considered a crime against nature.",
		req: {
			charLvl: 12,
			eval: "PERK,Cannibal:true"
		},
		availRanks: 1,
		res: {
			MISC: "Regain Health by feeding on Super Mutant or Feral Ghoul corpses"
		}
	},
	"Grim Reaper's Sprint": {
		desc: "If you kill a target in V.A.T.S., 20 Action Points are restored upon exiting V.A.T.S.",
		req: {
			charLvl: 20
		},
		availRanks: 1,
		res: {
			APkillReward: 20,
			MISC: "If you kill a target in V.A.T.S., 20 AP are restored upon exiting V.A.T.S. mode."
		}
	},
	"Gunslinger": {
		desc: "While using a pistol (or similar one-handed weapon), your accuracy in V.A.T.S. is significantly increased.",
		req: {
			charLvl: 6
		},
		availRanks: 1,
		res: {
			accuracyVatsPistol: 0.25,
			MISC: "While using a pistol (or similar one-handed weapon), your chance to hit in V.A.T.S. is increased by 25%"
		}
	},
	"Hand Loader": {
		desc: "You know your way around a reloading bench and don't let good brass and hulls go to waste. When you use guns you are more likely to recover cases and hulls. You also have all hand load recipes unlocked at the Reloading Bench.",
		req: {
			charLvl: 4,
			"Repair": 70
		},
		availRanks: 1,
		res: {
			ammoItemChance: 1,
			MISC: "Recover ammo casings more often and all ammo recipes are unlocked."
		}
	},
	"Heave, Ho!": {
		desc: "Quite an arm you've got there. All thrown weapons fly farther and faster for you.",
		req: {
			/* G.E.C.K. has the reqs as AND & OR, which I believe makes it AND */
			charLvl: 2,
			ST: 5, //G.E.C.K. has this as OR
			"Explosives": 30, //G.E.C.K. has this as AND
		},
		availRanks: 1,
		res: {
			MISC: "range increase ST+2 for throw range calculaion."
		}
	},
	"Here and Now": {
		desc: "The Here and Now perk immediately grants an additional experience level, complete with all the advantages that brings.",
		req: {
			charLvl: 10,
			eval: "<,charLvl:30"
		},
		availRanks: 1,
		res: {
			MISC: "Gain one additional experience level"
		}
	},
	"Hit the Deck": {
		desc: "Your extensive familiarity with Explosives allows you to ignore a portion of their damage. Your Damage Threshold is increased by 50% against any and all Explosives--even your own.",
		req: {
			charLvl: 12,
			"Explosives": 70
		},
		availRanks: 1,
		res: {
			DTexplosives: 0.50,
			MISC: "+50% DT when using explosives."
		}
	},
	"Hunter": {
		desc: "In combat, you do +75% Critical Damage against animals and mutated animals.",
		req: {
			charLvl: 2,
			"Survival": 30
		},
		availRanks: 1,
		res: {
			animalDmgCrit: 0.75 /* This perk will not affect animals such as Deathclaws or Nightstalkers, which are classified as abominations. */
		}
	},
	"Infiltrator": {
		desc: "With Infiltrator, if a lock is broken, and can't normally be picked again, you can attempt to pick it again one more time. This includes locks previously broken by a \"Force Lock\" attempt.",
		req: {
			charLvl: 18,
			PE: 7,
			"Lockpick": 70
		},
		availRanks: 1,
		res: {
			ignoreBrokenLock: 1,
			MISC: "Another attempt to pick any broken lock."
		}
	},
	"Intense Training": {
		desc: "With the Intense Training perk, you can put a single point into any of your S.P.E.C.I.A.L attributes.",
		req: {
			charLvl: 2
		},
		availRanks: 10,
		res: {
			specialDistPoints: 1, //per rank
			MISC: "S.P.E.C.I.A.L +1"
		}
	},
	"Jury Rigging": {
		desc: "You possess the amazing ability to repair any item using a roughly similar item. Fix a Trail Carbine with a Hunting Rifle, a Plasma Defender with a Laser Pistol, or even Power Armor with Metal Armor. How does it work? Nobody knows... except you.",
		req: {
			charLvl: 14,
			"Repair": 90
		},
		availRanks: 1,
		res: {
			MISC: "Repair any item using a roughly similar item."
		}
	},
	"Lady Killer": {
		desc: "In combat, you do +10% damage against female opponents. Outside of combat, you'll sometimes have access to unique dialogue options when dealing with the opposite sex.",
		req: {
			charLvl: 2,
			gender: "male"
		},
		availRanks: 1,
		res: {
			dmgSameSex: 0.1,
			MISC: "unique dialogue options when dealing with the opposite sex."
		}
	},
	"Laser Commander": {
		desc: "From the humble Laser Pistol to the might Gatling Laser, you do 15% more damage and have +10% chance to critically hit with any laser weapon.",
		req: {
			charLvl: 22,
			"Energy Weapons": 90
		},
		availRanks: 1,
		res: {
			dmgLaserWeapons: 0.15,
			critChanceLaserWeapons: 0.10,
			MISC: "+15 percent damage and +10 percent chance to critically hit with any laser weapon"
		}
	},
	"Lead Belly": {
		desc: "With the Lead Belly perk, you take 50% less radiation every time you drink from an irradiated water source.",
		req: {
			/* G.E.C.K. has the reqs as AND & OR, which I believe makes it AND */
			charLvl: 6,
			EN: 5, //G.E.C.K. has this as AND
			"Survival": 40 //G.E.C.K. has this as OR
		},
		availRanks: 1,
		res: {
			radFromConsumables: -0.50,
			MISC: "50% less radiation when consuming irradiated food and drink."
		}
	},
	"Life Giver": {
		desc: "With the Life Giver perk, you gain an additional 30 Hit Points.",
		req: {
			charLvl: 12,
			EN: 6
		},
		availRanks: 1,
		res: {
			HP: 30
		}
	},
	"Light Step": {
		desc: "With the Light Step perk, you'll never set off an enemy's mines or floor-based traps.",
		req: {
			charLvl: 14,
			AG: 6,
			PE: 6
		},
		availRanks: 1,
		res: {
			mineExplodeChance: -1,
			MISC: "Never set off enemy mines or floor-based traps"
		}
	},
	"Living Anatomy": {
		desc: "Living Anatomy allows you to see the Health and Damage Threshold of any target. It also gives you a +5% bonus to damage against Humans and non-Feral Ghouls.",
		req: {
			charLvl: 8,
			"Medicine": 70
		},
		availRanks: 1,
		res: {
			dmgHumanoids: 0.05,
			seeEnemyHealth: 1,
			MISC: "Allows you to see the health and DT of any target. Also grants +5% damage against humans and non-feral ghouls."
		}
	},
	"Long Haul": {
		desc: "You have learned how to pack mountains of gear for the Long Haul. Being over-encumbered no longer prevents you from using Fast Travel.",
		req: {
			charLvl: 12,
			EN: 6,
			"Barter": 70
		},
		availRanks: 1,
		res: {
			fastTravelAlways: 1,
			MISC: "Being over-encumbered no longer prevents you from using fast travel."
		}
	},
	"Math Wrath": {
		desc: "You are able to optimize your Pip-Boy's V.A.T.S. logic, reducing all AP costs by 10%",
		req: {
			charLvl: 10,
			"Science": 70
		},
		availRanks: 1,
		res: {
			APcost: -0.10,
			MISC: "Reduce all AP costs by 10 percent."
		}
	},
	"Meltdown": {
		desc: "Meltdown causes foes killed by your Energy Weapons to give off a corona of harmful energy. Note: this can cause a chain reaction.",
		req: {
			charLvl: 16,
			"Energy Weapons": 90
		},
		availRanks: 1,
		res: {
			MISC: "Foes killed by your Energy Weapons emit a corona of harmful energy."
		}
	},
	"Miss Fortune": {
		desc: "Just when your enemies think they have the upper hand, Miss Fortune appears to turn their world upside down. Appearing only in V.A.T.S., she has the ability to snatch defeat from the jaws of victory.",
		req: {
			charLvl: 10,
			LK: 6
		},
		availRanks: 1,
		res: {
			MISC: "Miss Fortune takes care of your enemies when in V.A.T.S."
		}
	},
	"Mister Sandman": {
		desc: "With the Mister Sandman perk, when you're in Sneak mode, you gain the option to silently kill any human or Ghoul while they're sleeping. And, all Mister Sandman kills earn bonus XP.",
		req: {
			charLvl: 10,
			"Sneak": 60
		},
		availRanks: 1,
		res: {
			MISC: "Silently kill any sleeping human or ghoul. Bonus XP (50 xp) for each such kill. "
		}
	},
	"Mysterious Stranger": {
		desc: "You've gained your own personal guardian angel... armed with a fully loaded .44 Magnum. With this perk, the Mysterious Stranger will appear occasionally in V.A.T.S. mode to lend a hand, with deadly efficiency.",
		req: {
			charLvl: 10,
			LK: 6
		},
		availRanks: 1,
		res: {
			MISC: "Mysterious Stranger will appear occasionally in V.A.T.S. mode to lend a hand, with deadly efficiency."
		}
	},
	"Nerd Rage!": {
		desc: "You've been pushed around long enough! With the Nerd Rage! perk, your Strength is raised to 10 and you gain +15 Damage Threshold whenever your Health drops to 20% or below.",
		req: {
			charLvl: 10,
			IN: 5,
			"Science": 50
		},
		availRanks: 1,
		res: {
			MISC: "+50 Damage Resistance and Strength is raised up to 10 if HP drops below 20%"
		}
	},
	"Nerves of Steel": {
		desc: "With the Nerves of Steel perk, you regenerate Action Points much more quickly than you normally would.",
		req: {
			charLvl: 26,
			AG: 7
		},
		availRanks: 1,
		res: {
			MISC: "Increases the regeneration rate of Action Points",
			APRegenRate: 0.2
		}
	},
	"Night Person": {
		desc: "When the sun is down, a Night Person gains +2 to both Intelligence and Perception (up to a maximum of 10). This perk directly affects your \"internal clock\" and remains active both inside and outside.",
		req: {
			charLvl: 10
		},
		availRanks: 1,
		res: {
			MISC: "+2 Intelligence and +2 Perception (up to a maximum of 10) when the sun is down."
		}
	},
	"Ninja": {
		desc: "The Ninja perk grants you the power of the fabled shadow warriors. When attacking with either Melee or Unarmed, you gain a +15% critical chance on every strike. Sneak attack criticals do 25% more damage than normal.",
		req: {
			charLvl: 20,
			"Sneak": 80,
			"Melee Weapons": 80
		},
		availRanks: 1,
		res: {
			critDmgSneak: 0.25,
			critDmgMelee: 0.15,
			MISC: "+15% critical chance with Melee or Unarmed attacks. Sneak attack criticals do 25% more damage."
		}
	},
	"Nuka Chemist": {
		desc: "You have unraveled some of the greatest mysteries of Pre-War masters: formulas for developing special Nuka-Colas! This perk unlocks special Nuka-Cola recipes at the Workbench.",
		req: {
			charLvl: 22,
			"Science": 90
		},
		availRanks: 1,
		res: {
			MISC: "Unlock special Nuka-Cola recipes at the workbench."
		}
	},
	"Pack Rat": {
		desc: "You have learned the value of careful packing. Items with a weight of 2 or less weigh half as much for you.",
		req: {
			charLvl: 8,
			IN: 5,
			"Barter": 70
		},
		availRanks: 1,
		res: {
			MISC: "Items with a weight of two or less weigh half as much for you."
		}
	},
	"Paralyzing Palm": {
		desc: "With Paralyzing Palm, you will sometimes perform a S.P.E.C.I.A.L. V.A.T.S. palm strike for 30 seconds. Note that in order to perform the Paralyzing Palm, you must be completely unarmed.",
		req: {
			charLvl: 18,
			"Unarmed": 70
		},
		availRanks: 1,
		res: {
			MISC: "30% chance to perform a special V.A.T.S. palm strike that paralyzes your opponent for 30 seconds when unarmed."
		}
	},
	"Piercing Strike": {
		desc: "Piercing Strike makes all of your Unarmed and Melee Weapons (including thrown) negate 15 points of Damage Threshold on the target.",
		req: {
			charLvl: 12,
			eval: ">=,Unarmed:70" //this is OR in G.E.C.K.
		},
		availRanks: 1,
		res: {
			MISC: "Ignore 15 points of target's DT"
		}
	},
	"Plasma Spaz": {
		desc: "You're just so excited about plasma that you can't (magnetically) contain yourself! The AP costs for all plasma weapons (including Plasma Grenades) are reduced by 10%.",
		req: {
			charLvl: 10,
			"Energy Weapons": 70
		},
		availRanks: 1,
		res: {
			APcostPlasmaWeapons: -0.10,
			MISC: "AP costs for all plasma weapons are reduced by 10%."
		}
	},
	"Purifier": {
		desc: "As a purifier of the wasteland, you do +50% damage with Melee and Unarmed weapons against Centaurs, Nightstalkers, Spore Plants, Spore Carriers, Deathclaws, Super Mutants, and Feral Ghouls.",
		req: {
			charLvl: 14
		},
		availRanks: 1,
		res: {
			MISC: "You do +50% damage damage with melee and unarmed weapons against centaurs, nightstalkers, spore plants, spore carriers, deathclaws, super mutants, and feral ghouls."
		}
	},
	"Pyromaniac": {
		desc: "With the Pyromaniac perk, you do +50% damage with fire-based weapons, like the Flamer and Shishkebab.",
		req: {
			charLvl: 12,
			"Explosives": 60
		},
		availRanks: 1,
		res: {
			dmgFireWeapons: 0.50,
			MISC: "+50% damage with fire-based weapons"
		}
	},
	"Quick Draw": {
		desc: "Quick Draw makes all of your weapon equipping and holstering 50% faster.",
		req: {
			charLvl: 8,
			AG: 5
		},
		availRanks: 1,
		res: {
			equipSpeed: 0.50,
			MISC: "Equipping and holstering becomes 50% faster."
		}
	},
	"Rad Absorption": {
		desc: "With the Rad Absorption perk, your radiation level slowly decreases on its own over time.",
		req: {
			charLvl: 28,
			EN: 7
		},
		availRanks: 1,
		res: {
			MISC: "Radiation level slowly decreases automatically over time."
			/* 1 rad every 20 seconds */
		}
	},
	"Rad Child": {
		desc: "You truly are a rad child. As you go through the increasingly devastating stages of radiation sickness, you will regenerate more and more health.",
		req: {
			charLvl: 4,
			"Survival": 70
		},
		availRanks: 1,
		res: {
			MISC: "* Minor Radiation Poisoning - HP +2 every second\n* Advanced Radiation Poisoning - HP +4 every second\n* Critical radiation poisoning - HP +6 every second\n* Deadly radiation poisoning - HP +8 every second"
		}
	},
	"Rad Resistance": {
		desc: "Rad Resistance allows you to -- what else? -- resist radiation. This perk grants an additional 25% to Radiation Resistance.",
		req: {
			charLvl: 8,
			EN: 5,
			"Survival": 40
		},
		availRanks: 1,
		res: {
			radRes: 0.25
		}
	},
	"Rapid Reload": {
		desc: "Rapid Reload makes all of your weapon reloads 25% faster than normal.",
		req: {
			charLvl: 2,
			AG: 5,
			"Guns": 30
		},
		availRanks: 1,
		res: {
			reloadSpeed: 0.25
		}
	},
	"Retention": {
		desc: "With the Retention perk, the bonuses granted by skill magazines last three times as long.",
		req: {
			charLvl: 2,
			IN: 5
		},
		availRanks: 1,
		res: {
			magDur: 60, //TODO verify. base + this value
			MISC: "Skill magazines last three times as long."
		}
	},
	"Robotics Expert": {
		desc: "With the Robotics perk, you do an additional 25% damage to any robot. But, even better, sneaking up on a hostile robot undetected and activating it will put that robot into a permanent shutdown state.",
		req: {
			charLvl: 12,
			"Science": 50
		},
		availRanks: 1,
		res: {
			robotDmg: 0.25,
			MISC: "+25% damage to robots and ability to shutdown robots if sneaking up on them"
		}
	},
	"Run 'n Gun": {
		desc: "The Run 'n Gun perk reduces accuracy penalties with one-handed Guns and Energy Weapons while walking or running.",
		req: {
			charLvl: 4,
			eval: "OR,Guns:45,Energy Weapons:45"
		},
		availRanks: 1,
		res: {
			MISC: "Better accuracy with one-handed ranged weapons.",
			accuracyMoving: 1
		}
	},
	"Scrounger": {
		desc: "With the Scrounger perk, you'll find considerably more ammunition in containers than you normally would.",
		req: {
			charLvl: 8,
			LK: 5
		},
		availRanks: 1,
		res: {
			MISC: "Find more ammo in containers"
		}
	},
	"Shotgun Surgeon": {
		desc: "Your precision with a scattergun is something to behold. When using shotguns, regardless of ammunition used, you ignore an additional 10 points of a target's Damage Threshold.",
		req: {
			charLvl: 6,
			"Guns": 45
		},
		availRanks: 1,
		res: {
			MISC: "When using shotguns, regardless of ammunition used, you ignore an additional 10 points of a target's damage threshold."
		}
	},
	"Silent Running": {
		desc: "With the Silent Running perk, running no longer factors into a successful sneak attempt.",
		req: {
			charLvl: 12,
			AG: 6,
			"Sneak": 50
		},
		availRanks: 1,
		res: {
			MISC: "Sneak and Run without penalties"
		}
	},
	"Slayer": {
		desc: "The slayer walks the earth! The speed of all Melee Weapons and Unarmed attacks is increased by 30%.",
		req: {
			charLvl: 24,
			AG: 7,
			"Unarmed": 90
		},
		availRanks: 1,
		res: {
			fireRateMelee: 0.30,
			fireRateUnarmed: 0.30,
			MISC: "Increases the speed of all melee and unarmed attacks by 30%."
		}
	},
	"Solar Powered": {
		desc: "With the Solar Powered perk, you gain an additional 2 points to Strength when in direct sunlight, and slowly regenerate lost Health.",
		req: {
			charLvl: 20,
			EN: 7
		},
		availRanks: 1,
		res: {
			MISC: "Outdoors: +2 Strength and Health regeneration"
		}
	},
	"Splash Damage": {
		desc: "When you're deep in enemy territory, you just start chucking grenades and hope for the best. All Explosives have a 25% larger area of effect.",
		req: {
			charLvl: 12,
			"Explosives": 70
		},
		availRanks: 1,
		res: {
			explosivesAreaOfEffect: 0.25,
			MISC: "Explosives have a 25% larger area of effect."
		}
	},
	"Sniper": {
		desc: "With the Sniper perk, your chance to hit an opponent's head in V.A.T.S. is significantly increased.",
		req: {
			charLvl: 12,
			PE: 6,
			AG: 6
		},
		availRanks: 1,
		res: {
			accuracyVatsTargetHead: 0.25,
			MISC: "Increase chance to hit opponent's head in V.A.T.S. by 25%"
		}
	},
	"Spray and Pray": {
		desc: "Your attacks do much less damage to companions, allowing you to liberally spray an area with reckless abandon.",
		req: {
			charLvl: 22
		},
		availRanks: 1,
		res: {
			dmgCompanions: -0.75,
			MISC: "Significantly reduces the damage you do to your companions."
		}
	},
	"Stonewall": {
		desc: "You gain +5 Damage Threshold against all Melee Weapons and Unarmed attacks and cannot be knocked down in combat.",
		req: {
			charLvl: 8,
			ST: 6,
			EN: 6
		},
		availRanks: 1,
		res: {
			DTmelee: 5,
			DTunarmed: 5,
			canGetKnockedDown: -1,
			MISC: "+5 to DT versus Unarmed attacks and Melee Weapons. You cannot be knocked down in combat."
		}
	},
	"Strong Back": {
		desc: "With the Strong Back perk, you can carry 50 more pounds of equipment.",
		req: {
			charLvl: 8,
			ST: 5,
			EN: 5
		},
		availRanks: 1,
		res: {
			carryWeight: 50
		}
	},
	"Super Slam": {
		desc: "All Melee Weapons (except thrown) and Unarmed attacks have a chance of knocking your target down.",
		req: {
			charLvl: 8,
			ST: 6,
			"Melee Weapons": 45
		},
		availRanks: 1,
		res: {
			enemyKnockdownChanceMelee: 0.30, //TODO these values may need to be flipped
			enemyKnockdownChanceUnarmed: 0.15,
			MISC: "Unarmed and melee weapon attacks have a chance of knocking down your opponent."
		}
	},
	"Swift Learner": {
		desc: "With each rank in the Swift Learner perk, you gain an additional 10% to total Experience Points whenever Experience Points are earned.",
		req: {
			charLvl: 2,
			IN: 4
		},
		availRanks: 3,
		res: {
			expEarnRate: 0.1 //per level
		}
	},
	"Tag!": {
		desc: "The Tag! perk allows you to select a fourth Skill to be a Tag skill, which instantly raises it by 15 points.",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			taggedSkillsCap: 1,
			MISC: "Select a fourth skill to be a Tag Skill (instantly raises it by 15 points)"
		}
	},
	"Terrifying Presence": {
		desc: "In some conversations, you gain the ability to initiate combat while terrifying a mob of opponents, sending them fleeing for safety.",
		req: {
			charLvl: 8,
			"Speech": 70
		},
		availRanks: 1,
		res: {
			MISC: "Enemies flee for 5 seconds after leaving dialogue."
		}
	},
	"The Professional": {
		desc: "Up close and personal, that's how you like it. Your Sneak Attack Criticals with pistols, revolvers, and submachine guns, whether Guns or Energy Weapons, all inflict an additional 20% damage.",
		req: {
			charLvl: 6,
			"Sneak": 70
		},
		availRanks: 1,
		res: {
			critDmgSneakProfWeapons: 0.20,
			MISC: "Your sneak attack criticals with pistols, revolvers, and submachine guns, whether guns or energy weapons, all inflict an additional 20 percent damage."
		}
	},
	"Toughness": {
		desc: "With the Toughness perk, you gain +3 to overall Damage Threshold. This perk may be taken twice, with the second rank granting an additional +3.",
		req: {
			charLvl: 6,
			EN: 5
		},
		availRanks: 2,
		res: {
			DT: 3 //per level
		}
	},
	"Travel Light": {
		desc: "While wearing light armor or no armor, you run 10% faster.",
		req: {
			charLvl: 4,
			"Survival": 45
		},
		availRanks: 1,
		res: {
			moveSpeed: 0.1
		}
	},
	"Unstoppable Force": {
		desc: "Your martial might is truly legendary. You do a large amount of additional damage through enemy blocks with all Melee Weapons and Unarmed attacks.",
		req: {
			charLvl: 12,
			ST: 7,
			"Melee Weapons": 90
		},
		availRanks: 1,
		res: {
			meleeDmg: 4,
			unarmedDmg: 4,
			MISC: "You do additional damage through enemy blocks with melee and unarmed attacks"
		}
	},
	"Vigilant Recycler": {
		desc: "Waste not, want not. When you use Energy Weapons, you are more likely to recover drained ammunition. You also have more efficient recycling recipes available at the Workbench.",
		req: {
			charLvl: 6,
			"Science": 70
		},
		availRanks: 1,
		res: {
			ammoItemChance: 2,
			MISC: "Recover drained ammo more often for energy weapons and all recipes for recycling recipes are unlocked."
		}
	},
	"Weapon Handling": {
		desc: "Weapon Strength Requirements are now 2 points lower than normal for you.",
		req: {
			charLvl: 16,
			eval: "<,ST:10"
		},
		availRanks: 1,
		res: {
			weaponStrengthReq: -2,
			MISC: "Weapon Strength Requirements -2"
		}
	},
	/* from here down, these perks need definitions on reqs */
	"Abominable": {
		desc: "There's nothing abominable about your damage bonus against Abominations.",
		req: {
			charLvl: 0
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					dmgAbominable : 0.03
				},
				2: {
					dmgAbominable : 0.03
				},
				3: {
					dmgAbominable : 0.04
				}
			},
			MISC: ""
		}
	},
	"Agility Implant": {
		desc: "Reflex Booster",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Animal Control": {
		desc: "You handle animals really well when they are dead and gain a damage bonus against the living ones.",
		req: {
			charLvl: 0
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					animalDmg : 0.03
				},
				2: {
					animalDmg : 0.03
				},
				3: {
					animalDmg : 0.04
				}
			},
			MISC: ""
		}
	},
	"Beautiful Beatdown": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Bug Stomper": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Charisma Implant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Endurance Implant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Enhanced Sensors": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Intelligence Implant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Lord Death": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Luck Implant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Mutant Massacrer": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Monocyte Breeder": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Perception Implant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Ranger Takedown": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Regular Maintenence": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Scribe Assistant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Spotter": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Stealth Girl": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Strength Implant": {
		desc: "",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	},
	"Sub-Dermal Armor": {
		desc: "Sub-Dermal Armor info",
		req: {
			charLvl: 0
		},
		availRanks: 1,
		res: {
			MISC: ""
		}
	}
}