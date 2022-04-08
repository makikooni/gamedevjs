window.onload = function() {
	let count = 0;
	var t = Date.now();
	var speed = 25;
	
var canvas =
document.getElementById("canvas");
var context =
 canvas.getContext("2d");
var x = 300;
var y = 350;

context.arc(x, y, 50, 0, 2 * Math.PI);
context.fillStyle="#ff99ff";
context.fill();

	
	document.onkeydown = function() {
		count += 1;
		y -= 25;}
		
	
		function draw() {
		
		var timePassed = (Date.now() - t) /1000;
		t = Date.now();
		
		if(y <= 350) {
			speed += 7500 *timePassed;
			y += speed*timePassed;
		}
		
		if(y >350) {
			count = 0;
		}
		
		if(y < 0) {
			count = 0;
		}
		
		context.clearRect(0, 0, 600, 400);
		speed = 25
		
		context.beginPath();
		context.arc(x, y, 50, 0, 2 * Math.PI);
		context.fillStyle="ff99ff";
		context.fill();
		
		context.font = '25px Arial';
		context.fillStyle = 'white';
		context.fillText("Count:" + count, 20, 30);

	
	window.requestAnimationFrame(draw);
}
draw();
}
