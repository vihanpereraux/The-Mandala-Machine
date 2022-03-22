let x1, x2, x3, x4, y2, y3

function setup() {
  // canvas configurations
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES); // canvas configs updated

  // brings the point to the center
  translate(width/2, height/2);
  circle(0,0,50);

  x4 = random(230,245);
  x3 = random(210,230);
  x2 = random(190,215);
  x1 = random(185,205);
  y2 = random(5,100);
  y3 = random(5,100);

  beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();
  // opposite shape
  beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, -y2);
    curveVertex(x3, -y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();

    // only the canvas rotates
    rotate(30);

    beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();
  // opposite shape
  beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, -y2);
    curveVertex(x3, -y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();
}

function draw() {
  
}
