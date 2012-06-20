(function(root, factory){
	if ("function" === typeof specify && specify.md) {
		specify("syncLoader/moduleA.js", [], factory)
	} else {
		root.moduleA = factory();
	}
})(this, function(B){
	"use strict";

	console.log("in moduleA factory " + B);

	return "A";
});