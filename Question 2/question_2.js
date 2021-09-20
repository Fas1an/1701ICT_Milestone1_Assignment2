function setup() {
  // put setup code here
  createCanvas(500, 500);
  background(0);
  for (let i = 0; i < lines.length; i+=50) {
    print(lines[i]);

}
}



function preload(){
lines = preload('TSP_EUC_Problem/berlin52.tsp')
}

function draw() {
console.log("hi")
  

}

