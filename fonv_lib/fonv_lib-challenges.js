/*

Fallout: New Vegas Character Planner - Challenges Library

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

version: 0.1.0

This library creates a karma object available to the page containing all 
challenges information for use with the foChar library.

Challenges are ranked, and additive (so to have rank 3, you also have 1 & 2)

*/

var challenges = {
	"...And Boy are My Arms Tired": {
		desc: "Inflict damage with Unarmed weapons.",
		req: {
			dmgCountFromUnarmed: 100000
		},
		availRanks: 1,
		res: {
			xp: 75
		}
	},
	"...And Know Disintegrations": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"...And Not a drop to Drink": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"...Or Are You Just Happy to See Me?": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"A Fistful of Hollars": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"A Little Critical": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"A Matter of Heart": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"A Matter of Perception": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Abominable": {
		desc: "There's nothing abominable about your damage bonus against Abominations.",
		chalText: "Kill Abominations.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsAbominable: 50
				},
				2: {
					killsAbominable: 50
				},
				3: {
					killsAbominable: 50
				}
			}
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					dmgAbominable: 0.03,
					xp: 50
				},
				2: {
					dmgAbominable: 0.03,
					xp: 50
				},
				3: {
					dmgAbominable: 0.04,
					xp: 50
				}
			}
		}
	},
	"Aiming is Optional": {
		desc: "",
		chalText: "Inflict damage with Explosives launchers.",
		req: {
			dmgCountFromExpWeapons: 10000
		},
		availRanks: 1,
		res: {
			xp: 50
		}
	},
	"All Things in Modder Nation": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Animal Control": {
		desc: "You handle animals really well when they are dead and gain a damage bonus against the living ones.",
		chalText: "Kill Mutated Animals.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsAnimal: 50
				},
				2: {
					killsAnimal: 50
				},
				3: {
					killsAnimal: 50
				}
			}
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					animalDmg: 0.03,
					xp: 50
				},
				2: {
					animalDmg: 0.03,
					xp: 50
				},
				3: {
					animalDmg: 0.04,
					xp: 50
				}
			}
		}
	},
	"Apocalypse Ain't Got Nothin' On Me": {
		desc: "",
		chalText: "Kill anything (and pretty much everything).",
		req: {
			challenge: "Lord Death",
			eval: ">=,kills.total:1000"
		},
		availRanks: 1,
		res: {
		}
	},
	"Artful Pocketer": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"At a Loss for Words": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Beam Me Up": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Beautiful Beatdown": {
		desc: "Reduce the AP Cost of Unarmed Attacks in VATS.",
		req: {
			charLvl: 0,
			killsUnarmed: 0
		},
		availRanks: 1,
		res: {
			APVatsUnarmed: -0.10
		}
	},
	"Blaster Master": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Bug Stomper": {
		desc: "Pulling the legs off ants suits you well. You gain a damage bonus against insects.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsInsect: 0
				},
				2: {
					killsInsect: 0
				},
				3: {
					killsInsect: 0
				}
			}
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					animalDmg: 0.03
				},
				2: {
					animalDmg: 0.03
				},
				3: {
					animalDmg: 0.04
				}
			}
		}
	},
	"Camel of the Mojave": {
		desc: "Your frequent water consumption has led to improved benefits from drinking hydrating fluids.",
		req: {
			charLvl: 0,
			consumeWater: 0
		},
		availRanks: 1,
		effectWater: 1
	},
	"Click": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Crafty": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Crafty Veteran": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Critical Reaction": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Day Tripper": {
		desc: "You've done enough chems to know how to hang on to the effects just a while longer.",
		req: {
			charLvl: 0,
			usedChems: 0
		},
		availRanks: 1,
		res: {
			chemDur: 0.33
		}
	},
	"Demise of the Machines": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Desert Survivalist": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Destroy Something Not So Beautiful": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Devourer of Nations": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Disarming Personality": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Double Down": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Dr. Wasteland, M.D.": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Energetic": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Fast Times": {
		desc: "You've slowed things down enough to gain additional time when using Turbo.",
		req: {
			charLvl: 0,
			consumeTurbo: 0
		},
		availRanks: 1,
		effectTurboDur: 0
	},
	"Fixin' Things": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"For a Few Hollars More": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Free Radical": {
		desc: "You gain enhanced effects from Rad-Away.",
		req: {
			charLvl: 0,
			consumeRadAway: 0
		},
		availRanks: 1,
		res: {
			effectRadAway: 0
		}
	},
	"Friendly Help": {
		desc: "Your special VATS friends have gotten used to helping you out and will strive to do so more often.",
		req: {
			charLvl: 0,
			vatHelperOcc: 0
		},
		availRanks: 1,
		vatHelperOccChance: 1
	},
	"Full of Stars": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Go For the Eyes": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Gotta Hand Grenade It to You": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Gut Checker": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"H4x Supr3m3": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"He Moves in Mysterious Ways": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Healthy Glow": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"I Am Not Left Handed": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"I Can Do It One Handed": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"I Can Kill You With One Hand": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"I Dismember You": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"I've Got Shotgun": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Just Point and Click": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Kaboom": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Kaboom-boom-pow": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Knocked Up": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Know When to Fold 'Em": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Know When to Hold 'Em": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Lead Dealer": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Let's Get Critical": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Lethal Weapons": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Limber Jack": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Little Wheel": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Lord Death": {
		desc: "You gain a damage bonus against everything, because you like killing everything.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsTotal: 0
				},
				2: {
					killsTotal: 0
				},
				3: {
					killsTotal: 0
				}
			}
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					dmg: 0.01
				},
				2: {
					dmg: 0.01
				},
				3: {
					dmg: 0.02
				}
			}
		}
	},
	"Lord Death of Murder Mountain": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Love The Bomb": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Low Tech Hacking": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Machine Head": {
		desc: "You grind the gears of the machines and gain a damage bonus against robots.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsRobot: 0
				},
				2: {
					killsRobot: 0
				},
				3: {
					killsRobot: 0
				}
			}
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					dmgRobot: 0.03
				},
				2: {
					dmgRobot: 0.03
				},
				3: {
					dmgRobot: 0.04
				}
			}
		}
	},
	"Master of the Mojave": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Maybe That's a Lie": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Melee Hacker": {
		desc: "You hack just a little faster.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsMelee: 0
				},
				2: {
					killsMelee: 0
				}
			}
		},
		availRanks: 2,
		res: {
			rank: {
				1: {
					fireRateMelee: 0.05
				},
				2: {
					fireRateMelee: 0.05
				}
			}
		}
	},
	"Miss Fortunate Son (or Daughter)": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"More Energetic": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Mutant Massacrer": {
		desc: "Your savvy at Mutant killing grants you a damage bonus to killing them.",
		req: {
			charLvl: 0,
			rank: {
				1: {
					killsSuperMutant: 0
				},
				2: {
					killsSuperMutant: 0
				},
				3: {
					killsSuperMutant: 0
				}
			}
		},
		availRanks: 3,
		res: {
			rank: {
				1: {
					dmgSuperMutant: 0.03
				},
				2: {
					dmgSuperMutant: 0.03
				},
				3: {
					dmgSuperMutant: 0.04
				}
			}
		}
	},
	"New Vegas Samurai": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Nuke it From Orbit": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Old Tyme Brawler": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"One Armed Bandit": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Questin' Mark": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Radical": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Set Lasers for Fun": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Shoot Em Up": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Shoot Em Up Again": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Sir Talks-a-lot": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Stim-ply Amazing": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Stimpaddict": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Super Mutant Massacre": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"The Big Squeezy": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"The Rifleman": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"This is Hacking": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Tough Guy": {
		desc: "Repeatedly breaking bones has led them to become stronger (somehow).",
		req: {
			charLvl: 0,
			limbsBroken: 0
		},
		availRanks: 1,
		limbsDmg: -0.20
	},
	"Two Hands are Better than One": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Up Close": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Up Closer": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Up to the Challenge": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"Walker of the Mojave": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"You Run Barter Town": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	},
	"You'll Blind Somebody": {
		desc: "",
		req: {
		},
		availRanks: 1,
		res: {
		}
	}
};