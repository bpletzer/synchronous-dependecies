window.callback = window.callback || [];
function doCallback (src, callback){
	var callbackSrc = (sdu) ? 
		"data:text/javascript;base64,KGZ1bmN0aW9uKHcsYyl7d1tjXT13W2NdfHxbXTsoYz13W2NdLnNoaWZ0KCkpP2MuY2FsbCgpOnd9KSh3aW5kb3csImNhbGxiYWNrIik=" 
		: "js/callback.js";

	window.callback.push(callback);
	document.write('<script src="'+src+'"><'+'/script>', '<script src="'+callbackSrc+'"><'+'/script>');
}