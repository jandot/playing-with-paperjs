// QuadTree example, see http://bl.ocks.org/mbostock/4343214 and Wikipedia
var objects = new Array;
var mainBox = new Path.Rectangle([0,0],[400,400]);
mainBox.strokeColor = 'black';
for (var i = 0; i < 10; i ++) {
  var circle = new Path.Circle(new Point(Math.round(Math.random()*400), Math.round(Math.random()*400)), 5)
  circle.fillColor = 'lightgrey';
  circle.strokeColor = 'black';
  circle.opacity = 0.5;
  objects.push(circle);
}

var intermediateCells = new Array;
var finalCells = new Array;
function Cell(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.objects = new Array;
  this
  intermediateCells.push(this);
}
Cell.prototype.toString = function() {
  return this.x + " " +
    this.y + " " +
    this.width + " " +
    this.height + " " +
    this.objects.length;
}
Cell.prototype.split = function() {
  console.log("Trying to split " + this.toString());
  console.log("  Points:")
  for (var i = 0; i < this.objects.length; i++ ) {
    console.log("    " + this.objects[i].bounds.x + " " + this.objects[i].bounds.y)
  }
  if ( this.objects.length <= 2 ) {
    console.log("--Cell finished for " + this.x + "," + this.y)
    finalCells.push(this);
    for ( var i=0; i < intermediateCells.length; i++ ) {
      if ( intermediateCells[i].x == this.x && intermediateCells[i].y == this.y ) {
        intermediateCells.splice(i, 1);  //removes 1 element at position i
        break;
      }
    }
  } else {
    var cell_nw = new Cell(this.x, this.y, this.width/2, this.height/2);
    var cell_ne = new Cell(this.x + this.width/2, this.y, this.width/2, this.height/2);
    var cell_sw = new Cell(this.x, this.y + this.height/2, this.width/2, this.height/2);
    var cell_se = new Cell(this.x + this.width/2, this.y + this.height/2, this.width/2, this.height/2);

    for ( var i = 0; i < this.objects.length; i++ ) {
      if ( objects[i].bounds.x < this.width/2) {
        if ( objects[i].bounds.y < this.height/2 ) {
          cell_nw.objects.push(objects[i])
        } else {
           cell_sw.objects.push(objects[i])
        }
      } else {
        if ( objects[i].bounds.y < this.height/2) {
          cell_ne.objects.push(objects[i])
        } else {
          cell_se.objects.push(objects[i])
        }
      }
    }
    cell_nw.split();
    cell_ne.split();
    cell_sw.split();
    cell_se.split();
  }
}
Cell.prototype.draw = function() {
  var rectangle = new Path.Rectangle({
    x: this.x,
    y: this.y,
    width: this.width,
    height: this.height
  })
  rectangle.fillColor = new Color(Math.random(), Math.random(), Math.random());
  rectangle.opacity = 0.2;
}

var mousePositionText;
function onMouseMove(event) {
  if ( mousePositionText ) { mousePositionText.remove() };
  mousePositionText = new PointText(new Point(50,500));
  mousePositionText.fillColor = 'black';
  mousePositionText.fontSize = 14;
  mousePositionText.content = event.point.x + " . " + event.point.y;
}


//////

var cell1 = new Cell(0,0,400,400);
cell1.objects = objects;
cell1.split();
for ( var i = 0; i < finalCells.length; i++ ) {
  finalCells[i].draw();
}
console.log("Number of final cells: " + finalCells.length);

// Gehele mainBox = 1 cel
// cel heeft > 1 datapunten => split in 4
// elk van dochtercellen: check of > 1 datapunt
// if so: splits in 4
