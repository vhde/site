var conf = {
	env: "",
	console: false,
	muteConsole: false
};

(function(){
	function onPageLoad() {
		document.getElementById("console").innerHTML += "!!! \n||:\n";
		//alert("hoy!!");
		conPrint(1);
		console.log("2");
		console.log("33");
	};

	document.addEventListener("DOMContentLoaded", onPageLoad);

	function getHeaders() {
		console.log("getHeaders...");
		console.log("... ...");
		var req = new XMLHttpRequest();
		console.log("xml...");
		req.open('GET', "/void.html", false);
		req.send(null);
		console.log("request....");
		var data = new Object();
		data = {
				env: ""
		}

		var headers = req.getAllResponseHeaders().toLowerCase();
		console.log(headers);
		var hh1 = headers.split('\n');
		for(var i=0; i < hh1.length; i++) {
			var thisItem = hh1[i];
			var key = thisItem.substring(0, thisItem.indexOf(':'));
			var value = thisItem.substring(thisItem.indexOf(':')+2, thisItem.length-1);
			data[key] = value;
		}
		console.log(data['env']);
		conf.env = data['env'];
		if (conf.env == 'dev') {
			conf.console = true;
			document.getElementById('cons').style.display = 'block';		
		} else {
			conf.muteConsole = true;
		}
	}

	document.addEventListener("DOMContentLoaded", getHeaders);

	function conPrint(msg){
		var str = document.getElementById("console").innerHTML;
		var s = str.split("\n");
		str = msg;
		document.getElementById("console").innerHTML = 
			msg + "\n" + document.getElementById("console").innerHTML;
	}

	var _c = 0;
	var _oLog = console.log;
	console.log = function(message) {
		if (!conf.muteConsole) {
			conPrint('<span class="c">' + _c + "</span> " + message);
		}
		_oLog(message);
		_c++;
	}

	function ttm() {
		setTimeout(ttm,10000);
		console.log("tick");
	}
	ttm();
})();
