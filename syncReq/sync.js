define("sync", function () {
	"use strict";

	return {
		load: function (name, req, load, config) {
			var url = req.toUrl(name);

			sQ.load( url, function () {

				req([name], function (value) {
					load(value);
				});
			});
		}
	};
});
