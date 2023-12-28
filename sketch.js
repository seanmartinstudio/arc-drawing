let arcAngle = 0;
let arcWidth = 100;
let arcHeight = 100;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  angleMode(DEGREES)
  noFill()
  stroke(255)
  
  //This value draws the arc
  arcAngle += 1
  
  //Increases size of each additional arc looped
  if(arcAngle === 360) {
    arcAngle = 0
    arcWidth += 20
    arcHeight += 5
  }
  
  arc(width/2, height/2, arcWidth, arcHeight, 0, arcAngle)
}