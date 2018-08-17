(function() {
	var reg = /http:\/\/(.*):/;
	var result = reg.exec(document.location.href);
	var ws = new WebSocket('ws://' + result[1] + ':8081');
	ws.addEventListener('message', function(messageEvt) {
	    console.log(messageEvt.data);
	});
	window.__temp__ws = ws;
})();