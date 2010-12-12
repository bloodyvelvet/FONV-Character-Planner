/*

Fallout: New Vegas Character Planner

	written by: bloody velvet <bloodyvelvet@brokenparts.zapto.org>

Description

	This file will create all the necessary objects in a page to allow
	emulation/manipulation of a FONV character. Including this one file in
	a page will autoload all the additional libraries.

	Keep in mind, this is the guts. There is no GUI attached, and it needs
	no additional js libraries (beyond the autoloads) to function.

Modifying:

	Modify however you want! Improved the code? Updated the info? Send it to
	me, I'd love to see it. If anyone updates it, I'll add a contributer
	section for credits. Go ahead and use this with your own creations, but
	keep it free, I only wrote the code, not the concept.
	
	If you want to add an additional lib, or over-ride the included ones:

		Add your lib to the foChar.libs[] array. Each lib must create a global
		object for the auto load to see it (and pass). The lib must also be in
		the same directory as fonv_lib.js. Look at each existing lib for the
		basic structure.

		The file name MUST be in the format "anything-OBJECTNAME.js". Autoload
		will split at "-" and check for and object "OBJECTNAME". 
		
		So let's say a DLC was added called Super Perks. We want to update the
		perks to include these new perks, including updating some of the
		existing ones.
		
			Create a new file called "SuperPerks.js"
			Add it to the dir containing "fonv_lib.js"
			Add	"SuperPerks" to the end of libs
		
		Assuming it contains perk definitions, this would add the new perks
		and updating the existing ones where applicable. Technically, you
		can update or over-ride any of the existing objects in one file,
		AS LONG AS YOUR LIB CREATES A GLOBAL OBJECT WITH "OBJECTNAME". Keeping
		the different objects in their own lib makes it easier for multiple
		people to maintain, and allows better control of load order.

*/
var fonv_lib = {
	version: '1.0.0',
	scriptName: 'fonv_lib.js',
	scriptPath: '',
	DEBUG: false, //true here prints a lot to the console, firebug recommended
	libs: [
		'fonv_lib-perks',      //add perks      -
		'fonv_lib-karma',      //add karma       |
		'fonv_lib-skills',     //add skills      |
		'fonv_lib-specials',   //add specials    |
		'fonv_lib-traits',     //add traits      |- load order doesn't matter
		'fonv_lib-xp',         //add experience  |
		'fonv_lib-challenges', //add challenges  |
		'fonv_lib-companions', //add companions  |
		'fonv_lib-foChar',     //build a char   -
		'fonv_lib-libHelpers'  //extend basic libs. must load after basic libs
	],
	load: function() {
		fonv_lib.scriptPath = fonv_lib.getScriptPath(fonv_lib.scriptName);
		for (var i = 0; i<fonv_lib.libs.length; i++) {
			if (window.console) { console.log('loading:',fonv_lib.libs[i]); }
			fonv_lib.require(fonv_lib.scriptPath+'/'+fonv_lib.libs[i]);
		}
		return true;
	},
	require: function(libraryName) { //borrowed from scriptaculous lib
		// inserting via DOM fails in Safari 2.0, so brute force approach
		document.write('<script type="text/javascript" src="'+libraryName+'.js"><\/script>');
	},
	basename: function (path, suffix) {
		var b = path.replace(/^.*[\/\\]/g, '');
		if (typeof(suffix) == 'string' && b.substr(b.length-suffix.length) == suffix) {
			b = b.substr(0, b.length-suffix.length);
		}
		return b;
	},
	getScriptPath: function(scriptname) {
		scriptobjects = document.getElementsByTagName('script');
		for (i=0; i<scriptobjects.length; i++) {
			if (fonv_lib.basename(scriptobjects[i].src)==scriptname) {
				return scriptobjects[i].src.substring(0, scriptobjects[i].src.lastIndexOf('/'));
			}
		}
		return "";
	}

}

while(!fonv_lib.load()){}; //load in libs
