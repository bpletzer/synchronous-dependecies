var codeQueue = [];
function executeInIframe (code) {
	"use strict";
	codeQueue.push(code);

	var i = document.createElement("iframe")
	i.src ="syncLoader.iFrame.html?code="+(codeQueue.length-1);
	i.style.visibility = 'hidden';
	document.body.appendChild(i)
}