"use strict";

describe("Sync.Load simple file", function () {
	it("should trigger callback", function() {
		var loaded = false;
		
		runs(function () {
			executeInIframe(function (){
				//this.sQ.load("resources/simpleFile.js", function () {
				//	loaded = this.simpleFile;
				//});
			});
		});

		waitsFor(function() {
			return loaded;
		}, "The File should be loaded", 750);

		runs(function () {
			expect(loaded).toBe(true);
		});
	});
});
/*
describe("Sync.Load missing file", function () {
	it("should still trigger callback", function() {
		var loaded = false;
		
		runs(function () {
			executeInIframe(function (){
				this.sQ.load("resources/404.js", function () {
					loaded = true;
				});
			});
		});

		waitsFor(function() {
			return loaded;
		}, "The File should be missing, but still triggering callback", 750);

		runs(function () {
			expect(loaded).toBe(true);
		});
	});
});

describe("sync require module", function () {
	it("should load module", function () {
		var moduleA = false;

		runs(function () {
			executeInIframe(function () {
				this.sQ.require("resources/moduleA.js", function (A) {
					moduleA = A;
				});
			});
		});
		
		waitsFor(function () {
			return moduleA;
		}, "ModuleA should have returned", 500);
		
		runs(function () {
			expect(moduleA).toBe("A");
		});
	});
});
*/
