let shape;
let angle = 0;

function preload() {
  shape = loadModel ('/assets/oldbook.obj.obj', true)
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke()
}

function draw() {
  background(220);
  
  //normalMaterial()
  
  rotateY(angle)
  
  pointLight(255,255,0)
  pointLight(255,0,0, -height/2, -width/2,-1)
  pointLight(255,0,0)
  pointLight(255,255,0, -height/2, width/2,1)
  
  //fill('rgb(252, 160, 3)')
  rotateY(1)
  rotate(270)
  orbitControl()
  model(shape)
  
  angle += 0.03
}