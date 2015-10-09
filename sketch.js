function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// draw background
	background(0, 0, 60);

	fill(0, 100, 50);
	rect(0, 280, 640, 300)
	for (var i = 0; i < 10; i++) {
		fill(0, 60, 30);
		triangle(0, 280, 30, 190, 60, 280);
	}
	fill(150, 150, 150);
	ellipse(mouseX, mouseY, 70, 70);
	ellipse(mouseX, mouseY + 30, 150, 50);
	for (var i = 0; i < 5; i++) {
		fill(100, 100, 100);
		ellipse(mouseX - 72 + i * 35, mouseY + 30, 10, 10);
	}


}
