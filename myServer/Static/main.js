//var myapp = myapp || { };

(function() {
	function httpGet(url, callback){
		var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() { 
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", url, true); // true for asynchronous 
	    xmlHttp.send(null);
	}

	document.getElementById('canada').addEventListener("click", function(e){
		httpGet('/Canada', function(responseText){
			document.getElementById('showText').textContent = responseText;
		});
	});

	document.getElementById('japan').addEventListener("click", function(e){
		httpGet('/Japan', function(responseText){
			document.getElementById('showText').textContent = responseText;
		});
	});

	document.getElementById('USA').addEventListener("click", function(e){
		httpGet('/USA', function(responseText){
			document.getElementById('showText').textContent = responseText;
		});
	});
})();