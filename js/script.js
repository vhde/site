(function(){
	document.addEventListener("DOMContentLoaded", function() {
		document.getElementById("console").innerHTML += "!!! \n||:\n";
		alert("hoy!!");
		conPrint(1);
		console.log("2");
	});

	function conPrint(msg){
		document.getElementById("console").innerHTML += msg + "\n";
	}
	var _oLog = console.log;
	console.log = function(message) {
		conPrint(message);
		_oLog(message);
	}
})();
