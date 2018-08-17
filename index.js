(function() {
	function exec() {
		return new Promise(function(resolve, reject) {
			var reg = /http:\/\/(.*):/;
			var timeoutID;
			var result = reg.exec(document.location.href);
			var ws = new WebSocket('ws://' + result[1] + ':8081');
			ws.addEventListener('open', function (event) {
				clearTimeout(timeoutID);
				resolve();
			});
			ws.addEventListener('message', function(messageEvt) {
			    console.log(messageEvt.data);
			});

			// 5秒超时
			timeoutID = setTimeout(function() {
				reject();
			}, 5000);
			window.__temp__ws = ws;
		});
	}

	if (window) {
		window.initializeConnection = exec;
	}
})();
