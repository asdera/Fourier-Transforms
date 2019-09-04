function preload() {
  sound = loadSound('piano.mp3');
}

function setup() {
  init();
}

function init() {
  var cnv = createCanvas(1200, 400);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
}

function draw() {
  sound.amp(1);
  background(0);
  noStroke();
  var spectrum = fft.analyze();
  fill(255, 255, 0); // spectrum is green
  for (var i = 0; i < spectrum.length; i++) {
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h)
  }

  var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255, 255, 255); // waveform is red
  strokeWeight(4);
  for (var i = 0; i < waveform.length; i++) {
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();

}

// fade sound if mouse is over canvas
function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}

function keyPressed() {
  print(key)
  if (key == 1) {
    sound.pause();
    sound = loadSound('M1.wav');
  }
  if (key == 2) {
    sound.pause();
    sound = loadSound('M2.wav');
  }
  if (key == 3) {
    sound.pause();
    sound = loadSound('M3.wav');
  }
  if (key == 4) {
    sound.pause();
    sound = loadSound('M4.wav');
  }
  if (key == 5) {
    sound.pause();
    sound = loadSound('M5.wav');
  }
  if (key == " ") {
    sound.pause();
    sound = loadSound('MM.wav');
  }
  if (key == 6) {
    sound.pause();
    sound = loadSound('M6.wav');
  }
  if (key == 7) {
    sound.pause();
    sound = loadSound('M7.wav');
  }
  if (key == 8) {
    sound.pause();
    sound = loadSound('M8.wav');
  }
  if (key == 9) {
    sound.pause();
    sound = loadSound('M9.wav');
  }
  if (key == 0) {
    sound.pause();
    sound = loadSound('M0.wav');
  }
  if (key == "l") {
    sound.pause();
    sound = loadSound('piano.mp3');
  }
  if (key == "a") {
    sound.pause();
    sound = loadSound('bba.mp3');
  }
  if (key == "a") {
    sound.pause();
    sound = loadSound('bba.mp3');
  }
  if (key == "o") {
    sound.pause();
    sound = loadSound('bbb.mp3');
  }
  init();
}