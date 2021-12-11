// sketch 1
var c1, c2;
let x;
let y;
let z;
let down;
let stars = [];
let sky = 0;


function setup() {
  createCanvas(400, 400);
  c1 = color(206, 234, 247);
  c2 = color(255, 198, 172);
  setGradient(c1, c2);
  
  x = width / 2;
  y = height / 2;
  c = 255;

  for (let i = 0; i < 300; i++) {
    stars[i] = new Star(random(width), random(height), random(255), random(0.1, 3), random(1));
  }
}

// Gradient by REAS - https://editor.p5js.org/REAS/sketches/S1TNUPzim
function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  // NIGHT
  if(mouseIsPressed) {
    background(sky);
    for (let i = 0; i < stars.length; i++) {
      stars[i].twinkle();
      stars[i].showStar();
    }
    
    noStroke();
    fill(138,141,145);
    rect(0,350,400,200);

    // dark brown rect #4
    fill(67,54,51);
    rect(150,263,156,80);
    fill(209,180,144);
    windowb4();

    // beige rect #2
    fill(130,98,81);
    rect(30,198,135,145);
    fill(216, 216, 216);
    rect(30,198,135,14);
    fill(227,222,143);
    windowb2();

    // brown/red rect #3
    fill(180,139,125);
    rect(92,289,160,61);
    windowb3n();

    // brown rect #1
    fill(51,38,29);
    rect(0,250,95,100);
    fill(248,244,166);
    windowb1();

    // beige rect #5
    fill(188,175,156);
    rect(243,240,160,110);
    windowb5n();
  }
  else {
    // SUNSET
    setGradient(c1, c2);
    
    noStroke();
    fill(192,188,181);
    rect(0,350,400,200);

    // dark brown rect #4
    fill(79,49,48);
    rect(150,263,156,80);
    fill(232,219,197);
    windowb4();

    // beige rect #2
    fill(228,190,158);
    rect(30,198,135,145);
    fill(235,235,235);
    rect(30,198,135,14);
    fill(41,31,30);
    windowb2();

    // brown/red rect #3
    fill(170,80,66);
    rect(92,289,160,61);
    windowb3();

    // brown rect #1
    fill(101,82,77);
    rect(0,250,95,100);
    fill(41,31,30);
    windowb1();

    // beige rect #5
    fill(217,210,182);
    rect(243,240,160,110);
    windowb5();

    // white clouds
    fill(255, 255, 255, 127);
    ellipse(120,166,200,26);
    ellipse(238,92,120,30);

    // purple clouds
    fill(155,159,181);
    ellipse(130,175,40,10);
    ellipse(270,153,70,20);
    ellipse(200,213,60,10);
    ellipse(345,198,40,15);
  }
  //print(mouseX, mouseY);
}

function windowb1() {
  // first row - black
  rect(7,256,35,10);
  rect(50,256,35,10);
  
  // third row - black
  rect(7,288,35,10);
  rect(50,288,35,10);
  
  // fifth row - black
  rect(7,320,35,10);
  rect(50,320,35,10);
  
  // second row
  fill(217,202,179)
  rect(7,272,78,10);
  
  // fourth
  fill(217,202,179)
  rect(7,304,78,10);
  
  // sixth
  fill(217,202,179)
  rect(7,336,78,10);  
}

function windowb2() {
  // bottom windows
  rect(36,215,6,6);
  rect(36,225,6,6);
  rect(36,235,6,6);
  rect(36,245,6,6);
  
  rect(63,215,6,6);
  rect(63,225,6,6);
  rect(63,235,6,6);
  rect(63,245,6,6);
  
  rect(90,215,6,6);
  rect(90,225,6,6);
  rect(90,235,6,6);
  rect(90,245,6,6);
  
  rect(117,215,6,6);
  rect(117,225,6,6);
  rect(117,235,6,6);
  rect(117,245,6,6);
  rect(117,255,6,6);
  rect(117,265,6,6);
  rect(117,275,6,6);
  rect(117,285,6,6);
  rect(117,295,6,6);
  
  rect(144,215,6,6);
  rect(144,225,6,6);
  rect(144,235,6,6);
  rect(144,245,6,6);
  rect(144,255,6,6);
  rect(144,265,6,6);
  rect(144,275,6,6);
  rect(144,285,6,6);
  rect(144,295,6,6);
  
  fill(11,19,43);
  rect(45,215,15,16);
  rect(45,235,15,16);
  
  rect(72,215,15,16);
  rect(72,235,15,16);

  rect(99,215,15,16);
  rect(99,235,15,16);
  rect(99,255,15,16);
  rect(99,275,15,16);
  
  rect(126,215,15,16);
  rect(126,235,15,16);
  rect(126,255,15,16);
  rect(126,275,15,16);
  
  rect(153,215,6,16);
  rect(153,235,6,16);
  rect(153,255,6,16);
  rect(153,275,6,16);
  
  // top windows
  fill(50,41,47);
  rect(36,200,6,10);
  rect(45,200,6,10);
  rect(54,200,6,10);
  rect(63,200,6,10);
  rect(72,200,6,10);
  rect(81,200,6,10);
  rect(90,200,6,10);
  rect(99,200,6,10);
  rect(108,200,6,10);
  rect(117,200,6,10);
  rect(126,200,6,10);
  rect(135,200,6,10);
  rect(144,200,6,10);
  rect(153,200,6,10);  
}

function windowb3() {
  fill(41,31,30);
  // long black windows - 1st and 3rd row
  rect(100,296,138,10);
  rect(100,326,138,10);
  
  // small windows
  rect(100,311,18,8);
  rect(122,311,18,8);
  
  rect(149,311,18,8);
  rect(171,311,18,8);
  
  rect(198,311,18,8);
  rect(220,311,18,8);

  rect(100,341,18,8);
  rect(122,341,18,8);
  
  rect(149,341,18,8);
  rect(171,341,18,8);
  
  rect(198,341,18,8);
  rect(220,341,18,8);
}

// windows for building 3 at night
function windowb3n() {
  fill(41,31,30);
  //long black windows - 1st and 3rd row
  rect(100,296,138,10);
  rect(100,326,138,10);
  
  // black small windows
  rect(122,311,18,8);
  rect(149,311,18,8);
  rect(171,311,18,8);
  rect(171,341,18,8);
  rect(100,341,18,8);
  rect(220,311,18,8);
  
  // lit up small windows
  fill(213,185,66);
  rect(100,311,18,8);
  rect(198,311,18,8);
  rect(122,341,18,8);
  rect(149,341,18,8);
  rect(198,341,18,8);
  rect(220,341,18,8);
}

function windowb4() {
  rect(169,267,6,9);
  rect(179,267,6,9);
  rect(189,267,6,9);
  rect(199,267,6,9);
  rect(209,267,6,9);
  rect(219,267,6,9);
  rect(229,267,6,9);
  rect(239,267,3,9);
  
  rect(169,280,6,9);
  rect(179,280,6,9);
  rect(189,280,6,9);
  rect(199,280,6,9);
  rect(209,280,6,9);
  rect(219,280,6,9);
  rect(229,280,6,9);
  rect(239,280,3,9);
}

function windowb5() {
  fill(137,137,137);
  rect(252,246,22,27);
  rect(282,246,22,27);
  rect(312,246,22,27);
  rect(342,246,22,27);
  rect(372,246,22,27);
    
  rect(252,283,22,27);
  rect(282,283,22,27);
  rect(312,283,22,27);
  rect(342,283,22,27);
  rect(372,283,22,27);
  
  rect(252,320,22,27);
  rect(282,320,22,27);
  rect(312,320,22,27);
  rect(342,320,22,27);
  rect(372,320,22,27);
  
  fill(96,95,94);
  rect(255,250,6,8);
  rect(264,250,6,8);
  rect(255,261,6,8);
  rect(264,261,6,8);
  
  rect(285,250,6,8);
  rect(294,250,6,8);
  rect(285,261,6,8);
  rect(294,261,6,8);
  
  rect(315,250,6,8);
  rect(324,250,6,8);
  rect(315,261,6,8);
  rect(324,261,6,8);
  
  rect(345,250,6,8);
  rect(354,250,6,8);
  rect(345,261,6,8);
  rect(354,261,6,8);
  
  rect(375,250,6,8);
  rect(384,250,6,8);
  rect(375,261,6,8);
  rect(384,261,6,8);
  
  rect(255,287,6,8);
  rect(264,287,6,8);
  rect(255,298,6,8);
  rect(264,298,6,8);
  
  rect(285,287,6,8);
  rect(294,287,6,8);
  rect(285,298,6,8);
  rect(294,298,6,8);
  
  rect(315,287,6,8);
  rect(324,287,6,8);
  rect(315,298,6,8);
  rect(324,298,6,8);
  
  rect(345,287,6,8);
  rect(354,287,6,8);
  rect(345,298,6,8);
  rect(354,298,6,8);
  
  rect(375,287,6,8);
  rect(384,287,6,8);
  rect(375,298,6,8);
  rect(384,298,6,8);
  
  rect(255,324,6,8);
  rect(264,324,6,8);
  rect(255,335,6,8);
  rect(264,335,6,8);
  
  rect(285,324,6,8);
  rect(294,324,6,8);
  rect(285,335,6,8);
  rect(294,335,6,8);
  
  rect(315,324,6,8);
  rect(324,324,6,8);
  rect(315,335,6,8);
  rect(324,335,6,8);
  
  rect(345,324,6,8);
  rect(354,324,6,8);
  rect(345,335,6,8);
  rect(354,335,6,8);
  
  rect(375,324,6,8);
  rect(384,324,6,8);
  rect(375,335,6,8);
  rect(384,335,6,8);
}

// windows for building 5 at night
function windowb5n() {
  // outer border of windows
  fill(170,153,143);
  rect(252,246,22,27);
  rect(282,246,22,27);
  rect(312,246,22,27);
  rect(342,246,22,27);
  rect(372,246,22,27);
    
  rect(252,283,22,27);
  rect(282,283,22,27);
  rect(312,283,22,27);
  rect(342,283,22,27);
  rect(372,283,22,27);
  
  rect(252,320,22,27);
  rect(282,320,22,27);
  rect(312,320,22,27);
  rect(342,320,22,27);
  rect(372,320,22,27);
  
  fill(96,95,94);
  rect(285,250,6,8);
  rect(294,250,6,8);
  rect(285,261,6,8);
  rect(294,261,6,8);
  
  rect(315,250,6,8);
  rect(324,250,6,8);
  rect(315,261,6,8);
  rect(324,261,6,8);
  
  rect(375,250,6,8);
  rect(384,250,6,8);
  rect(375,261,6,8);
  rect(384,261,6,8);
  
  rect(255,287,6,8);
  rect(264,287,6,8);
  rect(255,298,6,8);
  rect(264,298,6,8);
  
  rect(285,287,6,8);
  rect(294,287,6,8);
  rect(285,298,6,8);
  rect(294,298,6,8);
  
  rect(345,287,6,8);
  rect(354,287,6,8);
  rect(345,298,6,8);
  rect(354,298,6,8);
  
  rect(375,287,6,8);
  rect(384,287,6,8);
  rect(375,298,6,8);
  rect(384,298,6,8);
  
  rect(255,324,6,8);
  rect(264,324,6,8);
  rect(255,335,6,8);
  rect(264,335,6,8);
  
  rect(315,324,6,8);
  rect(324,324,6,8);
  rect(315,335,6,8);
  rect(324,335,6,8);
  
  rect(345,324,6,8);
  rect(354,324,6,8);
  rect(345,335,6,8);
  rect(354,335,6,8);
  
  
  fill(247,227,175);
  
  rect(345,250,6,8);
  rect(354,250,6,8);
  rect(345,261,6,8);
  rect(354,261,6,8);
  
  rect(255,250,6,8);
  rect(264,250,6,8);
  rect(255,261,6,8);
  rect(264,261,6,8);
  
  rect(315,287,6,8);
  rect(324,287,6,8);
  rect(315,298,6,8);
  rect(324,298,6,8);
  
  rect(285,324,6,8);
  rect(294,324,6,8);
  rect(285,335,6,8);
  rect(294,335,6,8);
  
  rect(375,324,6,8);
  rect(384,324,6,8);
  rect(375,335,6,8);
  rect(384,335,6,8);
}

// stars by rios - https://editor.p5js.org/rios/sketches/60mJWGaWi
class Star {
  constructor(tx, ty, tz, tf, td) {
    this.x = tx;
    this.y = ty;
    this.z = tz;
    this.f = tf;
    this.down = td;
  }

  showStar() {
    stroke(this.z)
    point(this.x, this.y);
  }

  twinkle() {
    if (this.z >= 150) {
      this.down = true;
    }
    if (this.z <= 0) {
      this.down = false;
    }

    if (this.down) {
      this.z -= this.f
    } else {
      this.z += this.f
    }
  }
}