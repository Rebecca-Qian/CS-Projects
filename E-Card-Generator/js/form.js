document.getElementById("myCarousel").addEventListener("click", insertText);

function insertText() {
	document.getElementById("changefont").innerHTML = "Hello World";
}

function endMove() {
	$(this).removeClass('movable');
}
<<<<<<< HEAD

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

=======

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

>>>>>>> b69cf29207202b76debe7a4e11fcf1c2630f1a18
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
<<<<<<< HEAD
});

=======
});
>>>>>>> b69cf29207202b76debe7a4e11fcf1c2630f1a18
