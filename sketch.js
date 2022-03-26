let x1, x2, x3, x4, y2, y3
var petals = localStorage.getItem('numOfPetals');


function setup() {
  // canvas configurations
  createCanvas(windowWidth, windowWidth);
  background(100);
  noLoop();
  // width - 1325px
  // height - 650px
}


// Configs relate to mandala art styles
function draw() {
  angleMode(DEGREES); // canvas configs updated
  colorMode(HSB, 360, 100, 100);

  // brings the point to the center
  translate(width/2, height/2);
  //circle(0,0,50);

  let ang = 360/petals ;

  // let removal = 40;
  let removal = 40;

  let maxX4 = (windowWidth/2);
  let minX4 = (maxX4-50);
  let maxX3 = (minX4);
  let minX3 = (maxX3-50);
  let maxxX2 = (minX3+15);
  let minX2 = (maxxX2-15);
  let maxX1 = (minX2)
  let minX1 = (maxX1-10)

  for (let i = 0; i < 14; i++) {
    
    x4 = random( minX4 - (i*removal), maxX4 - (i*removal) );
    x3 = random( minX3 - (i*removal), maxX3 - (i*removal) );
    x2 = random( minX2 - (i*removal), maxxX2 - (i*removal) );
    x1 = random(minX1-i*removal,maxX1-i*removal);
    let maxX2 = x2*tan(ang*0.5);
    y2 = random(5, maxX2); // preventing overlapping
    y3 = random(5, maxX2); // // preventing overlapping

    let hue = random(256);
    let sat = random(70, 100);
    let brgt = random(70, 100);

    for (let i = 0; i < 70; i++) {
      
      fill(hue, sat, brgt);
      stroke(0,0,0);
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

        stroke(hue, sat, brgt);
        strokeWeight(2);
        line(x1+3,0,x4-4,0);

        // only the canvas rotates
        rotate(ang);
    }
  }
}


// Background clearence and key pressed triggers
function generateArt() {
  clear();
  background(0)
  redraw();
}

