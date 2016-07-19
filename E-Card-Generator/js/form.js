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

document.addEventListener("click", insertText);

//document.getElementbyId('edit').addEventListener("click", insertText);

function insertText() {
	document.getElementById("changefont").innerHTML = "Hello World";
}

/*var textArea = document.getElementbyId("title");
testArea.addEventListener("click", insertText, false);*/

/*document.addEventListener("click", insertText, false);*/

//document.getElementbyId("title").addEventListener("click", insertText, false);