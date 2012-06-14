(function (root) {
	"use strict";

	var _define = root['define'],
		_require = root['require'],

		require = function (a, b, c, i) {
		    c = [];
		    for (i in a) c[i] = define[a[i]];
		    return ("function" === typeof c) ? b.apply(0, c) : b;
		};

	require.define = function (a, b, c) {
	    require.define[a] = require(c ? b : [], c || b)
	};

	require.noConflict = function () {
		root.define = _define;
		root.require = _require;

		return require;
	};

	require.define("moduleDefinition-core", [], require);
	root.require = require;
	root.define = require.define;
}(this));