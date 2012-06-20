(function(root, d, factory){
	root.sQ = factory(root);
	d.write('<script src="data:text/javascript;base64,c1EuZHU9MQ=="><'+'/script>');

})(this, document, function(root){
	var queue = [],
		specified = {},
		sQ = {
			load: function  (src, func){
				queue.push(func);
				document.write('<script src="'+src+'"><'+'/script>', '<script src="'+((this.du) ? "data:text/javascript;base64,c1EuZHEoKQ==" : "syncLoader/triggerSyncDequeue.js")+'"><'+'/script>');
			},
			// dequeue
			dq: function () {
				var item = queue.shift();
				if ('function' === typeof item) {
					item.call()
				}
			},
			// du: is script dataUri possible
			du: false,

			specify: function (name, dependecies, factory) {
				var module = specified[name] = {};

				module.name = name;
				module.dependecies = dependecies;
				module.factory = factory;

				sQ.require( dependecies, function () {
					module.result = factory.apply(this, arguments);
				});
			},

			require: function ( dep, callback ) {
				var counter,
					depResults = [];

				if ("string" === typeof dep) {

					if (specified[dep]) {
						callback.call(this, specified[dep].result)
					} else {
						this.load(dep, function () {
							sQ.require(dep, callback)
						});
					}
				} else {
					if (0===dep.length){
						callback.call(this);
					} else {
						for (counter=0; counter < dep.length; counter++) {

							(function(c){
								sQ.require(dep[c], function(result){

									depResults[c] =  result;

									if (c===dep.length-1) {
										callback.apply(this, depResults)
									}
								});
							})(counter);
						}
					}
				}

			}
		};

	root.specify = sQ.specify;

	root.specify.md = true;

	return sQ;
});