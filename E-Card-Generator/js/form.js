/* function changeText() {
  var customize = document.getElementbyId('customization');
  customize.textContent = 'hello';
}

// Insert Text Customization 
var ecard = document.getElementbyId('title');
ecard.onclick = changeText;*/

/*var elNote = document.createElement('div');
elNote.setAttribute('id', 'custom');
elNote.innerHTML = msg;
document.body.appendChild(elNote);*/

/*function dismissNote() {
  var msg = '<div><a id=\"font\" href="#">font</a></div>';
  var elNote = document.createElement('div');
elNote.setAttribute('id', 'custom');
elNote.innerHTML = msg;
document.body.appendChild(elNote);
}

var elClose = document.getElementbyId('title');
elClose.addEventListener('click', dismissNote, false);*/

//document.body.removeChild(elNote);

document.getElementById("myCarousel").addEventListener("click", insertText);

function insertText() {
	document.getElementById("changefont").innerHTML = "Hello World";
}

// Removes the text in the form box

/*var nameInput = document.getElementById("name");
nameInput.addEventListener("click", clearText(nameInput));

var emailInput = document.getElementById("email");
emailInput = addEventListener("click", clearText(emailInput));
document.getElementById("to").addEventListener("click", clearText);
document.getElementById("message").addEventListener("click", clearText);

function clearText(a) {
	a.setAttribute('value', "");
}*/

/*var emptyText = function (i) {
	document.getElementById(controls[i]).setAttribute('value', "");
};

var controls = ["name", "email", "to", "message"]

for (var i = 0; i < controls.length; i++) {
	//function(removeText) {
	var str = controls[i];
	var nameInput = document.getElementById(str);
	nameInput.addEventListener("click", emptyText(i));
//};
};*/

/*var textArea = document.getElementbyId("title");
testArea.addEventListener("click", insertText, false);*/

/*document.addEventListener("click", insertText, false);*/

//document.getElementbyId("title").addEventListener("click", insertText, false);

$("#emailForm").submit(function(event)){
	event.preventDefault() //cancels submission
	sendEmail();
});

function sendEmail() {
	// Grab values of form input
	var name = $("#name").val();
	var to = $("#to").val();
	var message = $("#message").val();

	// Initializing Ajax object with JQuery 
	$.ajax({
		// Setting object parameters
		type: "POST",
		url: "php/process.php", // PHP file location
		data: "name=" + name + "&email=" + email + "&message=" + message, // Data to send to server
		// If ajax object successfully receives info from PHP script, call submitSuccess function
		success: function(text){
			// Check that server's returned text is equal to success
			if (text == "success"){
				submitSuccess();
			}
		} 
	})
}

function submitSuccess(){
	// If successfully sent, remove hidden class and show message
	$("messageSent").removeClass("hidden");
}

