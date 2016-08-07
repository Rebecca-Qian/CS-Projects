document.getElementById("myCarousel").addEventListener("click", insertText);

function insertText() {
	document.getElementById("changefont").innerHTML = "Hello World";
}

function endMove() {
	$(this).removeClass('movable');
}

function getOffset() {
	var div_x = document.getElementById("greetingBox").offsetLeft;
	var div_y = document.getElementById("greetingBox").offsetTop;
	console.log("x offset is" + div_x + "y offset is" + div_y);
}

function startMove() {
	$(".movable").on("mousemove", function(e) {
		var x = event.pageX - $(this).width() / 2;
		var y = event.pageY - $(this).height() / 2;

		console.log("var x is " + x + ", var y is " + y);

		$(".movable").offset({
			left: x,
			top: y
		});
	});
}

$(document).ready(function() {
	$("#greetingBox").on("mousedown", function() {
		$(this).addClass("movable");
		startMove();
	}).on("mouseup", function() {
		$(this).removeClass("movable");
		endMove();
	});
});

