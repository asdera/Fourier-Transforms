function Wave(xspacing, theta, amplitude, period) {
  this.xspacing = xspacing;
  this.w = width + 16;
  this.theta = theta;
  this.amplitude = amplitude;
  this.period = period;
  this.dx = (2 * PI / this.period) * this.xspacing;
  this.yvalues = new Array(floor(this.w / this.xspacing));

  this.calcWave = function() {
    this.theta += 2 / this.period;
    this.dx = (2 * PI / this.period) * this.xspacing;
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx;
    }
  }

  this.addWaves = function(a, b, c) {
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = a.yvalues[i] + b.yvalues[i];
      this.yvalues[i] += c.yvalues[i];
    }
  }

  this.event = function(t) {
    if (t == "mouse") {
      this.theta = -mouseX * 6 / this.period;
    } else if (keyIsDown(UP_ARROW)) {
      this.amplitude += 1;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.amplitude -= 1;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.period = max(10, this.period - 1);
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.period += 1;
    }
  }

  this.renderWave = function(vs) {
    stroke(255);
    fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (let x = 0; x < this.yvalues.length; x++) {
      // ellipse(x * this.xspacing, vs+this.yvalues[x], 4, 4);
      line(x * this.xspacing, vs + this.yvalues[x], (x + 1) * this.xspacing, vs + this.yvalues[x + 1])
    }
  }

}

let wave1;

function setup() {
  createCanvas(800, 800);
  pixelDensity(2);
  wave1 = new Wave(1, 0, 30, 100);
  wave2 = new Wave(1, 0, 40, 60);
  wave3 = new Wave(1, 0, 20, 20);
  wave4 = new Wave(1, 0, 0, 0);
}

function draw() {
  background(0);
  keyDowned()
  wave1.calcWave();
  wave1.renderWave(100);
  wave2.calcWave();
  wave2.renderWave(300);
  wave3.calcWave();
  wave3.renderWave(500);
  wave4.addWaves(wave1, wave2, wave3);
  wave4.renderWave(700);
}

function mouseDragged() {
  if (mouseY < 200) {
    wave1.event("mouse");
  } else if (mouseY < 400) {
    wave2.event("mouse");
  } else if (mouseY < 600) {
    wave3.event("mouse");
  }
}

function keyDowned() {
  if (mouseY < 200) {
    wave1.event("key");
  } else if (mouseY < 400) {
    wave2.event("key");
  } else if (mouseY < 600) {
    wave3.event("key");
  }
}