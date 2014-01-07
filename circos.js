// Trigonometric functions
var radial2degree = function(theta) {
  return theta/(2*Math.PI)*360;
}
var degree2radial = function(deg) {
  return deg/360*(2*Math.PI);
}
var cartesian2polar = function(x,y) {
  var r = Math.sqrt(x*x + y*y);
  var deg = radial2degree(Math.atan(y/x));

  if ( x < 0 ) {
    return [r,deg+180];
  } else if ( y < 0 ) {
    return [r,deg+360];
  } else {
    return [r,deg];
  }
}
var polar2cartesian = function(r,deg) {
  var theta = degree2radial(deg);
  var x = r*Math.cos(theta);
  var y = r*Math.sin(theta);
  return [x,y];
}

// Let's start
var data = [
  {from:40,to:150},
  {from:90,to:287},
  {from:122,to:243},
  {from:350,to:10}]
var radius = 100;
var offset = new Point(200,200);

var calculateHandle = function(point) {
  var x = point.x;
  var absoluteX = (x+200)/2;
  var relativeX = absoluteX - x;
  var y = point.y;
  var absoluteY = (y+200)/2;
  var relativeY = absoluteY - y;
  return [relativeX, relativeY]
}

var circle = new Path.Circle(offset, radius);
circle.strokeColor = 'grey';
for (var i = 0; i < data.length; i++ ) {
  var pointCoordinatesFrom = new Point(polar2cartesian(radius,data[i].from));
  pointCoordinatesFrom += offset;
  var pointFrom = new Path.Circle(pointCoordinatesFrom, 5);
  pointFrom.fillColor = 'red';

  var pointCoordinatesTo = new Point(polar2cartesian(radius,data[i].to));
  pointCoordinatesTo += offset;
  console.log(pointCoordinatesTo);
  var pointTo = new Path.Circle(pointCoordinatesTo, 5);
  pointTo.fillColor = 'blue';

  var firstSegment = new Segment({
    point: pointCoordinatesFrom,
    handleOut: calculateHandle(pointCoordinatesFrom)
  });
  var secondSegment = new Segment({
    point: pointCoordinatesTo,
    handleIn: calculateHandle(pointCoordinatesTo)
  })
  var bezier = new Path({
    segments: [firstSegment, secondSegment],
    strokeColor: 'lightgrey'
  })
}

