let elements = [];
let scaleFactor = 1;
let linesColorChanging = false; // Controls the state of the line colour change
let colorChangeFrameInterval = 15; // Frame interval to control the speed of colour change
let frameCounter = 0; // the counter

function setup() {
  createCanvas(windowWidth, windowHeight);
  scaleFactor = min(windowWidth / 600, windowHeight / 700);
  background(22, 21, 39);

  // all elements from group work.
  elements = [
    new Circle(280, 230, 20, color(255, 0, 0, 120)),
    new Circle(310, 230, 15, color(69, 131, 6, 230)),
    new Circle(272, 195, 24, color(255, 0, 0, 90)),
    new Circle(195, 105, 8, color(247, 208, 26, 240)),
    new Circle(220, 255, 8, color(247, 208, 26, 140)),
    new Circle(85, 255, 8, color(247, 208, 26, 180)),
    new Circle(65, 85, 10, color(247, 208, 26, 180)),
    new Circle(65, 165, 20, color(247, 208, 26, 180)),
    new Circle(130, 300, 5, color(247, 208, 26, 250)),
    new Circle(130, 315, 5, color(247, 208, 26, 250)),
    new Circle(130, 330, 5, color(247, 208, 26, 250)),
    new Circle(130, 345, 5, color(247, 208, 26, 80)),
    new Circle(130, 360, 5, color(247, 208, 26, 250)),
    new Circle(130, 375, 5, color(247, 208, 26, 180)),
    new Circle(175, 395, 5, color(247, 208, 26, 250)),
    new Circle(175, 410, 5, color(247, 208, 26, 150)),
    new Circle(175, 425, 5, color(247, 208, 26, 180)),
    new Circle(175, 440, 5, color(247, 208, 26, 80)),
    new Circle(175, 455, 5, color(247, 208, 26, 250)),
    new Circle(175, 310, 23, color(69, 131, 6, 190)),
    new Circle(330, 230, 15, color(69, 131, 6, 180)),
    new Circle(330, 206, 15, color(69, 131, 6, 180)),
    new Circle(302, 335, 38, color(255, 0, 0, 130)),
    new Circle(305, 380, 38, color(255, 0, 0, 80)),
    new Circle(305, 430, 42, color(0, 255, 0, 80)),
    new Circle(410, 630, 20, color(0, 255, 0, 80)),
    new Circle(360, 620, 40, color(255, 0, 0, 120)),
    new Circle(460, 630, 40, color(255, 0, 0, 120)),
    new Circle(305, 520, 40, color(255, 0, 0, 120)),
    new Circle(335, 565, 45, color(0, 255, 0, 80)),
    new Circle(270, 570, 40, color(255, 0, 0, 120)),
    new Circle(305, 478, 20, color(247, 208, 26, 180)),
    new Circle(499, 123, 13, color(255, 0, 0, 90)),
    new Circle(435, 105, 28, color(255, 0, 0, 90)),
    new Circle(455, 70, 18, color(247, 208, 26, 140)),
    new Circle(480, 105, 35, color(69, 131, 6, 120)),
    new Circle(490, 65, 35, color(255, 0, 0, 160)),
    new Circle(410, 210, 15, color(247, 208, 26, 190)),
    new Line(432, 340, 432, 410, color(75, 73, 138, 250), 3.5),
    new Line(422, 352, 422, 400, color(75, 73, 138, 250), 3.5),
    new Line(365, 352, 422, 352, color(75, 73, 138, 250), 3.5),
    new Line(355, 340, 430, 340, color(75, 73, 138, 250), 3.5),
    new Circle(395, 250, 7, color(247, 208, 26, 160)),
    new Circle(358, 360, 7, color(247, 208, 26, 190)),
    new Circle(460, 180, 35, color(69, 131, 6, 120)),
    new Circle(425, 240, 18, color(69, 131, 6, 200)),
    new Circle(385, 315, 38, color(69, 131, 6, 120)),
    new Circle(515, 195, 15, color(255, 255, 0, 110)),
    new Circle(500, 380, 5, color(255, 255, 0, 250)),
    new Circle(500, 395, 5, color(255, 255, 0, 220)),
    new Circle(500, 410, 5, color(255, 255, 0, 180)),
    new Circle(500, 425, 5, color(255, 255, 0, 140)),
    new Circle(500, 440, 5, color(255, 255, 0, 90)),
    new Circle(245, 620, 20, color(255, 255, 0, 140)),
    new Circle(170, 605, 40, color(255, 0, 0, 120)),
    new Line(260, 330, 445, 330, color(247, 208, 26, 220), 3),
    new Line(155, 300, 257, 300, color(247, 208, 26, 250), 4),
    new Line(195, 150, 255, 150, color(247, 208, 26, 220), 1.5),
    new Line(259, 160, 340, 160, color(247, 208, 26, 220), 1.5),
    new Line(150, 580, 300, 580, color(247, 208, 26, 170), 3),
    new Line(258, 150, 258, 540, color(247, 208, 26, 250), 2),
    new Line(153, 200, 153, 440, color(247, 208, 26, 250), 2),
    new Circle(305, 205, 15, color(255, 0, 0, 180)),
    new Circle(250, 210, 15, color(255, 0, 0, 120)),
    new Circle(220, 315, 35, color(255, 0, 0, 120)),
    new Circle(170, 270, 28, color(255, 0, 0, 130)),
    new Circle(115, 150, 28, color(255, 0, 0, 90)),
    new Circle(100, 70, 38, color(255, 0, 0, 90)),
    new Circle(115, 100, 40, color(255, 0, 0, 230)),
    new Circle(115, 195, 40, color(255, 0, 0, 190)),
    new Circle(75, 195, 20, color(247, 208, 26, 180)),
    new Circle(135, 245, 20, color(69, 131, 6, 190)),
    new Circle(250, 330, 25, color(69, 131, 6, 230)),
    new Circle(295, 270, 38, color(255, 0, 0, 130)),
    new Circle(170, 225, 20, color(255, 0, 0, 220)),
    new Line(335, 195, 335, 330, color(247, 208, 26, 200), 3),
    new Line(225, 125, 225, 150, color(247, 208, 26, 200), 2),
    new Line(124, 60, 124, 362, color(247, 208, 26, 200), 1.5),
    new Line(98, 260, 98, 395, color(247, 208, 26, 200), 2.5),
    new Line(93, 270, 93, 438, color(247, 208, 26, 200), 1),
    new Line(87, 276, 87, 460, color(247, 208, 26, 200), 2.5),
    new Line(146, 380, 146, 470, color(247, 208, 26, 200), 1.5),
    new Line(165, 310, 165, 450, color(196, 212, 227, 250), 4),
    new Line(172, 310, 172, 380, color(75, 73, 138, 250), 2.5),
    new Line(178, 315, 178, 360, color(75, 73, 138, 250), 2.5),
    new Line(235, 315, 235, 380, color(75, 73, 138, 250), 2.5),
    new Line(240, 310, 240, 370, color(75, 73, 138, 250), 2.5),
    new Line(180, 315, 235, 315, color(75, 73, 138, 250), 2.5),
    new Line(174, 310, 238, 310, color(75, 73, 138, 250), 2.5),
    new Line(245, 310, 245, 340, color(75, 73, 138, 250), 2.5),
    new Line(252, 310, 252, 390, color(196, 212, 227, 250), 4),
    new Line(248, 400, 248, 430, color(247, 208, 26, 250), 2.5),
    new Line(190, 330, 190, 440, color(247, 208, 26, 250), 2.5),
    new Line(205, 330, 205, 450, color(247, 208, 26, 250), 2.5),
    new Line(210, 330, 210, 430, color(247, 208, 26, 250), 1.5),
    new Line(55, 50, 55, 150, color(247, 208, 26, 250), 1.5),
    new Line(70, 40, 70, 170, color(247, 208, 26, 250), 1.5),
    new Line(160, 35, 160, 110, color(247, 208, 26, 250), 2.5),
    new Line(170, 30, 170, 80, color(247, 208, 26, 250), 1.5),
    new Line(292, 240, 292, 330, color(247, 208, 26, 250), 1.5),
    new Line(420, 40, 420, 210, color(247, 208, 26, 250), 1.5),
    new Line(428, 35, 428, 170, color(247, 208, 26, 250), 1.5),
    new Line(436, 50, 436, 100, color(247, 208, 26, 250), 2.5),
    new Line(448, 120, 448, 430, color(247, 208, 26, 250), 4),
    new Line(495, 80, 495, 410, color(247, 208, 26, 250), 3),
    new Line(509, 290, 509, 460, color(247, 208, 26, 250), 2),
    new Line(460, 380, 460, 480, color(247, 208, 26, 250), 1),
    new Line(510, 40, 510, 180, color(247, 208, 26, 250), 2),
    new Line(515, 60, 515, 200, color(247, 208, 26, 250), 3.5),
    new Line(523, 120, 523, 250, color(247, 208, 26, 250), 3.5),
    new Line(500, 90, 500, 350, color(196, 212, 227, 250), 3),
    new Line(455, 160, 455, 460, color(196, 212, 227, 250), 4),
    new Line(343, 195, 343, 320, color(196, 212, 227, 250), 3.5),
    new Line(265, 175, 265, 320, color(196, 212, 227, 250), 2.5),
    new Line(308, 225, 308, 320, color(196, 212, 227, 250), 2.5),
    new Line(118, 100, 118, 320, color(196, 212, 227, 250), 4),
    new Line(110, 205, 110, 270, color(2, 173, 150, 250), 2.5),
    new Line(85, 120, 85, 180, color(2, 173, 150, 250), 2.5),
    new Line(110, 110, 110, 380, color(120, 13, 190, 250), 2.5),
    new Line(105, 170, 105, 270, color(196, 212, 227, 250), 2.5),
    new Line(350, 205, 350, 270, color(75, 73, 138, 250), 2.5),
    new Circle(415, 315, 20, color(255, 0, 0, 120)),
    new Circle(410, 272, 16, color(255, 0, 0, 120)),
    new Circle(430, 282, 16, color(255, 0, 0, 120)),
    new Circle(420, 250, 15, color(255, 0, 0, 160)),
    new Circle(359, 320, 18, color(255, 0, 0, 120)),
    new Circle(445, 216, 25, color(255, 0, 0, 120)),
    new Circle(420, 165, 28, color(255, 0, 0, 120)),
    new Circle(480, 160, 25, color(255, 0, 0, 150)),
    new Circle(530, 140, 12, color(255, 0, 0, 180)),
    new Line(440, 125, 440, 290, color(75, 73, 138, 250), 2.5),
    new Line(440, 340, 440, 420, color(75, 73, 138, 250), 2.5),
    new Line(300, 230, 300, 650, color(247, 208, 26, 250), 4),
    new Line(300, 600, 520, 600, color(247, 208, 26, 250), 3),
    new Line(25, 650, 560, 650, color(247, 208, 26, 220), 3),
    new Circle(80, 640, 30, color(69, 131, 6, 250)),
    new Circle(305, 436, 35, color(69, 131, 6, 250)),
    new Circle(304, 646, 30, color(69, 131, 6, 250)),
    new Circle(520, 630, 30, color(69, 131, 6, 250)),
    new Circle(118, 625, 20, color(69, 131, 6, 80)),
    new Circle(220, 595, 20, color(69, 131, 6, 80))
  ];

  drawElements();
}

function drawElements() {
  background(22, 21, 39); 
  stroke(255); 
  strokeWeight(5 * scaleFactor); 
  noFill(); 
  rect(5 * scaleFactor, 5 * scaleFactor, (600 - 25) * scaleFactor, (700 - 10) * scaleFactor);
  stroke(120); 
  strokeWeight(3 * scaleFactor); 
  noFill(); 
  rect(20 * scaleFactor, 20 * scaleFactor, (600 - 55) * scaleFactor, (700 - 40) * scaleFactor);

  for (let element of elements) {
    element.draw(scaleFactor);
    if (linesColorChanging && element instanceof Line) {
      if (frameCount % 10 === 0) {
        element.changeColor(color(random(138), random(43), random(180)));
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
  scaleFactor = min(windowWidth / 600, windowHeight / 700);
  drawElements();
}

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color; 
  }

  draw(scaleFactor) {
    fill(this.color);  
    noStroke();   
    ellipse(this.x * scaleFactor, this.y * scaleFactor, this.radius * 2 * scaleFactor); 
  }

  isMouseInside() {
    let d = dist(mouseX, mouseY, this.x * scaleFactor, this.y * scaleFactor);
    return d < this.radius * scaleFactor;
  }

  changeColor(newColor) {
    this.color = newColor;
  }
}

class Line {
  constructor(x1, y1, x2, y2, color, weight) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.weight = weight;
  }

  draw(scaleFactor) {
    stroke(this.color);
    strokeWeight(this.weight * scaleFactor);
    line(this.x1 * scaleFactor, this.y1 * scaleFactor, this.x2 * scaleFactor, this.y2 * scaleFactor);
  }

  changeColor(newColor) {
    this.color = newColor;
  }
}

function draw() {
  drawElements();

  // Control the frequency of colour changes
  frameCounter++;
  if (frameCounter >= colorChangeFrameInterval) {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i] instanceof Circle && elements[i].isMouseInside()) {
        elements[i].changeColor(color(random(138), random(43), random(180), 150));
      }
    }
    frameCounter = 0; // reset the counter
  }
}

function keyPressed() {
  if (key === ' ') {
    linesColorChanging = !linesColorChanging; // Use the space bar to control line colour changes
  }
}