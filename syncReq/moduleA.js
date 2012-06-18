(function(root, factory){
	if ("function" === typeof define && define.amd) {
		define(["syncReq/moduleB"], factory)
	} else {
		root.moduleA = factory(moduleB);
	}
})(this, function(B){
	"use strict";

	console.log("in moduleA factory " + B);

	return "A";
});


define("syncReq/moduleA", ["syncReq/moduleB"], function (B) {
	"use strict";

	console.log("in moduleA factory " + B);

	return "A";
});