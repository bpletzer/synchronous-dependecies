<!doctype html>

<script>
(function(d, onload){
	var vi = document.createElement('script');
	vi.src = ("https:" == d.location.protocol ? "https://ssl-static" : "http://static") + ".vinsight.de/chip/web/layer.min.js";
	vi.setAttribute('async', 'true');
	if ( onload ) {
		vi.onloadDone = false;
		vi.onload = function() {
			vi.onloadDone = true;
			if (null!==onload) onload();
		};
		vi.onreadystatechange = function() {
			if ( "loaded" === vi.readyState && !vi.onloadDone ) {
				vi.onloadDone = true;
				vi.onload();
			}
		};
	}
	d.getElementsByTagName('head')[0].appendChild(vi);
})(document, function(){
	VALITON_WA.setProp({});
	VALITON_WA.track();
});

(function() {
	var BASE = 'http://localhost/amd/',
		CONFIG = {
			JS: BASE+'js',
			CSS: BASE+'css',
			FLASH: BASE+'flash',
			WIDGETS: 'http://localhost/widgets'
		},
		REQUIREJS = CONFIG.JS + '/vendor/requirejs-2.0.1/require.js',
		HOOK = CONFIG.WIDGETS + '/sync/hook-trunk',
		s1 = document.createElement('script')
		s0 = document.getElementsByTagName('script')[0];
	
    s1.async = true;
    s1.src = REQUIREJS;
    s1.setAttribute('data-main', HOOK);
    s0.parentNode.insertBefore(s1, s0);
    
})();
</script>

<script src="http://localhost/amd/js/advertisement/trunk/documentWrite.js"></script>

<script>
	//debugger
</script>