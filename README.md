# xiyu0397_9103_major-project

### I choose to drive my individual code with interactive features.The following figure1 is the initial form.

![An image of a cat](images/Figure%201.png)
figure 1

**1. Animation of colour attributes**

   *Element types*: Circle (`Circle`) and Line (`Line`).

   *Interaction*: `Circle` and `Line`. 
      Circle triggers colour change on mouse hover.
     Lines change colour when spacebar is pressed.(figure2)

![An image of a cat](images/Figure%202.png)
figure 2

   *Animation logic*：
     The circle's colour change is based on mouse hover, and the colour is changed via the `changeColor()` method when the mouse is within the circle's range. The colour value is limited to a pinkish-purple range and a new colour is generated in the specified RGB range by the `random()` function.
    Line colour changes are controlled in frequency by `frameCount` counts, with random colour changes at regular intervals, using `changeColor()` to change the colour value.


**2. Animated controls**

   *User Input*： 
     Mouse hover: controls the circle colour change. Interaction is determined by detecting the mouse position through the `isMouseInside()` method.
     Spacebar: Controls line colour change. Listen for spacebar press and release via `keyPressed()` event.

   *Frame count control*：
     The colour of the line is controlled using a frame counter, so that the colour changes at regular intervals and not too frequently. This is achieved using `frameCount` and frame count interval conditions.

**3. Continuity and gradation of animation effects**

Colour changes are gradual and random, and are controlled within a certain range so that the visual effects do not appear abrupt.
    The interaction control logic maintains smoothness and ensures that the animation effects are continuously responsive during user interaction, rather than suddenly changing or unresponsive.(figure3)

![An image of a cat](images/Figure%203.png)
figure 3

# Iteration Process
**1.Iteration 1：Add line colour control based on the basic circle and line elements of the group work.**

*code 1*:
let elements = [];
let scaleFactor = 1;
let linesColorChanging = false; // Controls the state of the line colour change

function setup() {
  createCanvas(windowWidth, windowHeight);
  scaleFactor = min(windowWidth / 600, windowHeight / 700);
  background(22, 21, 39);

  
  elements = [
    new Circle(280, 230, 20, color(255, 0, 0, 120)),
    new Circle(310, 230, 15, color(69, 131, 6, 230)),
    // Omit other round and line elements
    new Line(432, 340, 432, 410, color(75, 73, 138, 250), 3.5),
    new Line(422, 352, 422, 400, color(75, 73, 138, 250), 3.5)
  ];

  drawElements();
}

function drawElements() {
  background(22, 21, 39); 
  for (let element of elements) {
    element.draw(scaleFactor);
    if (linesColorChanging && element instanceof Line) {
      if (frameCount % 10 === 0) {
        element.changeColor(color(random(255), random(255), random(255)));
      }
    }
  }
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

function keyPressed() {
  if (key === ' ') {
    linesColorChanging = !linesColorChanging; // Use the space bar to control the line colour change
  }
}

**2.Iteration 2:Causes the mouse hover to trigger a colour change of the circular element.**

*code 2*:
function draw() {
  drawElements();

  // Change circle colour on mouse hover
  for (let i = 0; i < elements.length; i++) {
    if (elements[i] instanceof Circle && elements[i].isMouseInside()) {
      elements[i].changeColor(color(random(200), random(25), random(75), 150));
    }
  }
}

**3.Iteration 3:Colour change to achieve a pink-purple transition effect.**

*code 3*:
let colorChangeFrameInterval = 15; // Frame interval to control the speed of colour change
let frameCounter = 0; // the counter

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
    frameCounter = 0; // Reset Counter
  }
}



