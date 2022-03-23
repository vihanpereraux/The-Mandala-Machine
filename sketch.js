let x1, x2, x3, x4, y2, y3;
var symmetries = 5;

function setup() {
  // canvas configurations
  let canvasWidth = 2048; //changeable canvas width
  let canvasHeight = 2048; //changeable canvas height
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  angleMode(DEGREES); // canvas configs updated
  colorMode(
    RGB,
    random(1, 255),
    random(1, 255),
    random(1, 255),
    random(0.1, 1)
  );
  // brings the point to the center
  translate(width / 2, height / 2);
  //circle(0,0,50);

  let ang = random(360) / symmetries;

  let removal = 55;
  let layer = 555;

  for (let i = 0; i < layer; i++) {
    x4 = random(230 + 50 - i * removal, 250 + 50 - i * removal);
    x3 = random(210 + 50 - i * removal, 230 + 50 - i * removal);
    x2 = random(190 + 50 - i * removal, 215 + 50 - i * removal);
    x1 = random(185 + 50 - i * removal, 205 + 50 - i * removal);
    let maxX2 = x2 * tan(ang * 0.5);
    y2 = random(5, maxX2); // preventing overlapping
    y3 = random(5, maxX2); // // preventing overlapping

    let hue = random(1, 240);
    let sat = random(0, 100);
    let brgt = random(0, 100);
    let opacity = random(0.1, 1);

    for (let i = 0; i < symmetries; i++) {
      fill(hue, sat, brgt, opacity);
      stroke(0, 0, 0);
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

      stroke(hue, sat, brgt, opacity);
      strokeWeight(2);
      line(x1 + 3, 0, x4 - 4, 0);

      // only the canvas rotates
      rotate(ang);
    }
  }
}

function draw() {}
