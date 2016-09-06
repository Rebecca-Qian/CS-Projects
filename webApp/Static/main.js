// (function() {
// 	function httpGet(url, callback) {
// 		var xmlHttp = new XMLHttpRequest();
// 		xmlHttp.onreadystatechange = function() {
// 			if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
// 				callback(xmlHttp.responseText);
// 		};
// 		xmlHttp.open("GET", url, true);
// 		xmlHttp.send(null);
// 	};

// 	document.getElementById("login").addEventListener("click", function(e) {
// 		httpGet()
// 	})
// })

(function() {
	function httpPost(url, payload, callback) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function() {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
				callback(xmlHttp.responseText);
		};
		xmlHttp.open("POST", url, true);
		xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xmlHttp.send(JSON.stringify(payload));
	}

	document.getElementById("login").addEventListener("click", function(e) {
		httpPost("/user", { username: "Rebecca", password: "1234" }, function() {
			alert("This worked!");
			window.location = '/default.html';
		});
	})
})();