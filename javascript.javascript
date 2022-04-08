window.onload = function() {
	let btn=
	document.getElementById("jump");
	let count = 0;
	
	btn.onclick = function() {
		count += 1;
	}
	
	canvas {
	width: 100%;
	background-color: black;
	
	}
}

window.onload = function () {
var canvas =
document.getElementById('canvas');
var context =
context = canvas.getContext("2d");
var x = 300;
var y = 350;

context.arc(x, y, 50, 0, 2 * Math.PI);
context.fillStyle="red";
context.fill();
