let x1, x2, x3, x4, y2, y3

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // brings the point to the center
  translate(width/2, height/2);
  circle(0,0,50);

  x4 = 245;
  x3 = 235;
  x2 = 225;
  x1 = 215;
  y2 = 50;
  y3 = 100;

  beginShape();
    curveVertex(x1, 0);
    curveVertex(x1, 0);
    curveVertex(x2, y2);
    curveVertex(x3, y3);
    curveVertex(x4, 0);
    curveVertex(x4, 0);
    endShape();
}

function draw() {
  
}
