function Vector(v, a, m) {
  this.v = v; // angular velocity
  this.a = a; // direction
  this.m = m; // magnitude

  this.draw = function(x, y) {
    this.a += this.v;
    stroke(255);
    noFill();
    circle(x, y, this.m);
    line(x, y, this.x() + x, this.y() + y);
  }

  this.x = function() {
    return this.m * cos(this.a);
  }

  this.y = function() {
    return this.m * sin(this.a);
  }
}

n = 20;
vectors = [];
f = 0.01;
xx = 0;
yy = 0;
smoothPath = false;

function setup() {
  createCanvas(400, 400);
  path = createGraphics(400, 400);
  init();
}

function init() {
  path.clear();
  n = 20;
  vectors = [];
  f = 0.01;
  xx = 0;
  yy = 0;
  smoothPath = false;
  n += 1;
  for (i = 0; i < n; i++) {
    v = [-1, 1][i % 2] * floor((i + 1) / 2) * f;
    a = random(0, 2 * PI);
    m = random(0, 60 - i * 3);
    vectors.push(new Vector(v, a, m));
  }

  print(vectors);
}

function draw() {
  background(120, 120, 220);

  path.fill(0);
  path.stroke(0);

  for (i = 0; i < n; i++) {
    vectors[i].draw();
  }

  x = 200
  y = 200

  for (i = 0; i < n; i++) {
    vectors[i].draw(x, y);
    x += vectors[i].x()
    y += vectors[i].y()
  }

  // print(x, y)


  if (smoothPath) {
    path.line(x, y, xx, yy);
  } else {}

  xx = x;
  yy = y;
  smoothPath = true;

  image(path, 0, 0);
}

function keyPressed() {
  init();
}