function rescale(valueFrom, minFrom, maxFrom, minTo, maxTo) {
    return (valueFrom - minFrom) * ((maxTo - minTo)/(maxFrom - minFrom)) + minTo
}

// Blue circle
var circle = new Path.Circle({
    x:200,
    y:300,
    radius: 20,
    fillColor: "blue"})

// Grey bar
var bar = new Path();
bar.add(new Point(300,400));
bar.add(new Point(500,400));
bar.strokeColor = 'lightgrey';
bar.strokeWidth = 20;

// Black circle on bar
var marker = new Path.Circle({
    x:300,
    y:400,
    radius: 5,
    fillColor: "black"})

// This is where the magic happens
function onMouseDrag(event) {
    var hitResult = bar.hitTest(event.point, {stroke: true, tolerance: 0});
    if (hitResult) {
        circle.position.y = rescale(event.point.x,300,500,300,700);
        marker.position.x = event.point.x;
    }
}
