
wave = [];
wnum = 600;
damp = 1; // 0.999;

for (i = 0; i <= wnum*2; i++) {
  wave.push(0);
}

function setup() {
  createCanvas(600, 600);
  for (i = 1; i <= wnum; i++) {
    wave.push(0);
  }
}

function move() {
  for (i = wnum*2; i > 1; i--) {
    wave[i] = wave[i-1] * damp;
  }
  wave[1] = wave[1200] * damp + wave[0];
}

function draw() {
  background(220);
  push();
  
  if (mouseIsPressed) {
    wave[0] = mouseY-300;
  }
  
  translate(0, 300);
  strokeWeight(2);
  stroke(0);
  for (i = 1; i < wnum; i++) {
    line(i, wave[i]-wave[1201-i], i+1, wave[i+1]-wave[1200-i])
  }
  pop();
  move();
}




