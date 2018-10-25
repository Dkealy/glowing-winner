var x = 0;
var y = 1.5;

function setup() {
    createCanvas(600, 600);
    //background(156, 239, 233);
    background(180);
    //frameRate(10000);
}

function draw() {

    translate(300, 300);
    strokeWeight(5);
    stroke(0);
    point(x, y);
    drawAxis();
    var nextX = x +1;
    var nextY = y +1;
    x += nextX;
    y += nextY;
}

//maping
//map(y, -1, 1, 280, -280);

function drawAxis(){
    strokeWeight(2);
    line(-300, 0, 300, 0);
    line(0, 300, 0, -300);
}
