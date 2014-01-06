var data = [
  {name: "A", x: 40, y: 150, color: "red"},
  {name: "B", x: 270, y: 140, color: "green"},
  {name: "C", x: 140, y: 190, color: "blue"}]

// The barchart
function enter(event) {
  this.strokeColor = 'yellow';
  var baseName = this.name.replace(/^.*_/,''); // Can't use "this" in filter definition below.
  console.log(this.name + " => " + baseName);
  var otherItem = project.activeLayer.children.filter(function(x) { return x.name == "point_" + baseName})[0];
  otherItem.fillColor = 'yellow';

//  Or using the longer approach:
//    for (var i = 0; i < project.activeLayer.children.length; i++) {
//        if ( project.activeLayer.children[i].name == "point_" + this.name) {
//            project.activeLayer.children[i].fillColor = 'yellow';
//            break;
//        }
//    }
}
function leave(event) {
  this.strokeColor = this.data.strokeColor;
  var baseName = this.name.replace(/^.*_/,''); // Can't use "this" in filter definition below.
  console.log(this.name + " => " + baseName);
//    var otherItem = project.activeLayer.children.filter(function(x) { return x.name == "point_" + baseName})[0];
//    otherItem.fillColor = this.data.strokeColor;

//  Or using the longer approach:
//    for (var i = 0; i < project.activeLayer.children.length; i++) {
//        if ( project.activeLayer.children[i].name == "point_" + this.name) {
//            project.activeLayer.children[i].fillColor = this.data.strokeColor;
//            break;
//        }
//    }
}
for (var i = 0; i < data.length; i++ ) {
  var bar = new Path();
  bar.name = "bar_" + data[i].name;
  bar.add(new Point(50+i*30,500));
  bar.add(new Point(50+i*30, 500-data[i].y));
  bar.strokeWidth = 20;
  bar.strokeColor = data[i].color;
  bar.data.strokeColor = bar.strokeColor; // item.data can contain arbitrary data, necessary for use in enter() and leave()
  bar.onMouseEnter = enter;
  bar.onMouseLeave = leave;
}

// The scatterplot
var xAxis = new Path();
xAxis.add(new Point(200, 250));
xAxis.add(new Point(500, 250));
xAxis.strokeWidth = 1;
xAxis.strokeColor = 'black';
var yAxis = new Path();
yAxis.add(new Point(200, 50));
yAxis.add(new Point(200, 250));
yAxis.strokeWidth = 1;
yAxis.strokeColor = 'black';
for (var i = 0; i < data.length; i++ ) {
  var point = new Path.Circle(new Point(200+data[i].x, 250-data[i].y),10);
  point.name = "point_" + data[i].name;
  point.fillColor = data[i].color;
  point.onMouseEnter = enter;
  point.onMouseLeave = leave;
}
