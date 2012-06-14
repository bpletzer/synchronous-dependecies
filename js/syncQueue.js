(function(root, d, factory){
	root.sQ = factory();
	d.write('<script src="data:text/javascript;base64,c1EuZHU9MQ=="><'+'/script>');

})(this, document, function(){
	var queue = [],
		triggerSyncDequeue = (this.du) ? "data:text/javascript;base64,c1EuZHEoKQ==" : "js/triggerSyncDequeue.js";

	return {
		enqueue: function  (src, func){
			queue.push(func);
			document.write('<script src="'+src+'"><'+'/script>', '<script src="'+triggerSyncDequeue+'"><'+'/script>');
		},
		dq: function () {
			var item = queue.shift();
			if (item) {
				item.call()
			}
		},
		du: false
	};
});