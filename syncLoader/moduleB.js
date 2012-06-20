(function(root, factory){
	if ("function" === typeof specify && specify.md) {
		specify("syncLoader/moduleB.js", [], factory)
	} else {
		root.moduleA = factory();
	}
})(this, function(B){
	"use strict";

	console.log("in moduleB factory " + B);

	return "B";
});