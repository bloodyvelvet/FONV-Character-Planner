/*

Fallout: New Vegas Character Planner - Helper Library

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

This lib extends the basic library objects to add helper functions.

Helper functions should start with an underscore to help identify them.

*/
var libHelpers = {}; //for autoload to detect this file as loaded

if (typeof perks == "object") { //make sure original is loaded
	/* return an array of perk names */
	perks._getPerksArray = function() {
		var perkArr = [];
		for (var perk in perks) {
			if (typeof perks[perk] == "object") { //only include objects
				perkArr[perkArr.length] = perk;
			}
		}
		return perkArr;
	}
}

if (typeof traits == "object") { //make sure original is loaded
	/* return an array of trait names */
	traits._getTraitsArray = function() {
		var traitArr = [];
		for (var trait in traits) {
			if (typeof traits[trait] == "object") { //only include objects
				traitArr[traitArr.length] = trait;
			}
		}
		return traitArr;
	}
	/*	return an array of trait requirements
	 *		returns in duals like: NAME, VAL, NAME, VAL, etc
	 *		an empty Array means trait has no requirements
	 */
	traits._getTraitReqArray = function(traitName) {
		var traitReqArr = [];
		if (traits[traitName]) {
			for (var traitReq in traits[traitName].req) {
				traitReqArr[traitReqArr.length] = traitReq;
				traitReqArr[traitReqArr.length] = traits[traitName].req[traitReq];
			}
		}
		return traitReqArr;
	}
	/*	return an array of trait results
	 *		returns in duals like: NAME, VAL, NAME, VAL, etc
	 *		an empty Array means trait is not in use
	 */
	traits._getTraitResArray = function(traitName) {
		var traitResArr = [];
		if (traits[traitName]) {
			for (var traitRes in traits[traitName].req) {
				traitResArr[traitResArr.length] = traitRes;
				traitResArr[traitResArr.length] = traits[traitName].req[traitRes];
			}
		}
		return traitResArr;
	}
}

if (typeof foChar == "object" && typeof perks == "object") { //make sure originals are loaded
	/*	return an array of perks the char currently qualifies for
	 */
	foChar._getQualifiedPerksArray = function() {
		perksArr = [];
		for (perk in perks) {
			if (foChar.checkQualification(perk)) {
				if (typeof perks[perk] == "object") { //only include objects
					perksArr[perksArr.length] = perk;
				}
			}
		}
		return perksArr;
	}

	/*	Add multiple skills/perks/traits from an array
	 *	to set a rank, use "name=rank", name and rank seperated by equal sign
	 */
	foChar._addMultiSPT = function(valArray) {
		if (isArray(valArray)) {
			for (var i=0; i<valArray.length; i++) {
				var vals = ["", ""];
				if (valArray[i].indexOf("=")> 0) { //= can't be the first thing
					vals = valArray[i].split("=");
				}else{
					vals[0] = valArray[i];
				}
				foChar.addSPT(vals[0], vals[1]);
			}
		}else{
			console.log("Pass in an Array of items to add.");
		}
	}

	/* return perk rank, 0r -1 if undefined */
	foChar._getPerkRank = function(perk) {
		var perkRank = -1;
		if (foChar.perks[perk]) {
			perkRank = foChar.perks[perk];
		}
		return perkRank.rank;
	}
}


if (typeof xp == "object") { //make sure original is loaded
	/*	return current level based on XP earned as xpVal, or -1 if undefined
	 */
	xp._getLevelByXP = function (xpVal) {
		var lvl = -1;
		for (xpLevel in xp) {
			console.log(xp[xpLevel], xpVal, lvl)
			if (xpVal >= xp[xpLevel]) {
				lvl = xpLevel.toString();
			}
		}
		return lvl;
	}
}

//add inArray to arrays, immensely useful
// Returns true if the passed value is found in the array. Returns false if it is not.
Array.prototype.inArray = function (value) {
	for (var i = 0; i < this.length; i++) {
		// Matches identical (===), not just similar (==).
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

//add ability to detect an array
function isArray(obj) {
	if (obj.constructor.toString().indexOf("Array") == -1) {
		return false;
	}else{
		return true;
	}
}