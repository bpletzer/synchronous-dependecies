define("syncReq/moduleA", ["sync!syncReq/moduleB"], function (B) {
	"use strict";

	console.log("in moduleA factory " + B);
	
	document.write('muh')

	return "A";
});