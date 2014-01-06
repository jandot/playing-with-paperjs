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
var data = [40,90,122,150,243,287,350]; // We'll put points along the circle at these degrees.
var radius = 100;
var offset = new Point(200,200);

console.log(data);
var circle = new Path.Circle(offset, radius);
circle.strokeColor = 'grey';
for (var i = 0; i < data.length; i++ ) {
  console.log(polar2cartesian(radius, data[i]));
  var pointCoordinates = polar2cartesian(radius,data[i]);
  var point = new Path.Circle(pointCoordinates, 5);
  point.position += offset;
  point.fillColor = 'red';
}

