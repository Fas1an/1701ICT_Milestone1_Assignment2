var track;




let x = 50;
let y = 50;
let r = 0;

function preload(){
track = loadStrings('track.txt')


}


function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0);
}

function draw() {
  background(0);
  translate(width/2, height/2)
  rotate(r);
  rectMode(CENTER)

    rotate(r)
    rect(r, y, 50, 150)

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 10;
  }
  else if (keyCode === DOWN_ARROW) {
    y = y + 10;
  }
  else if (keyCode === LEFT_ARROW) {
    r = r - 10;
  }
  else if (keyCode === RIGHT_ARROW) {
    r = r + 10;
  }
}
