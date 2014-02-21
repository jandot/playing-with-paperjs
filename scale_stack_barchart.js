var verticalOffset = 500;
var horizontalOffset = 50;
var levelScaling = 5; // number of pixels per unit. If = 5: value of 3 => 15 pixels
var levelHeight = 10*levelScaling;
var data = [13,123,3617,627,2938172,3,509,8261,19,29128,1,28];

///////// Definition of DataPoint class ////////
function DataPoint(val) {
	this.val = val;
	this.calculateComponents(); // Sets this.componentVal and this.lvl
}
DataPoint.prototype.calculateComponents = function() {
	var maxPowerOfTen = 0; // 4->0; 15->1; 18272->4
	var currentVal = this.val;
	while ( currentVal >= 10 ) {
		maxPowerOfTen += 1;
		currentVal /= 10;
	}
	var valueAtMaxPowerOfTen = this.val/Math.pow(10,maxPowerOfTen);
	this.componentVal = valueAtMaxPowerOfTen; // 523 -> 5.23, 81927 -> 8.1927
	this.lvl = maxPowerOfTen;
}
var enterGroup = function(event) {
	this.strokeColor = 'red';
}
var leaveGroup = function(event) {
	this.strokeColor = 'black';
}
DataPoint.prototype.draw = function() {
	var group = new Group();
	// The thin bar in the orders of magnitude smaller than the current number
	var thinBar = new Path();
	thinBar.add(new Point(horizontalOffset + i*20, verticalOffset));
	thinBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataPoints[i].lvl));
	thinBar.strokeWidth = 2;
	group.addChild(thinBar);

	// The thick bar in the order of magnitude of the current number
	var thickBar = new Path();
	thickBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataPoints[i].lvl));
	thickBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataPoints[i].lvl-(dataPoints[i].componentVal*levelScaling)));
	thickBar.strokeWidth = 10;
	group.addChild(thickBar);

	// The thick but flat bar in the orders of magnitude larger than the current number
	for (var j = dataPoints[i].lvl+1; j<=maxLevel; j++) {
		var placeHolder = new Path();
		placeHolder.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*j));
		placeHolder.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*j-1));
		placeHolder.strokeWidth = 10;
		group.addChild(placeHolder);
	}
	group.strokeColor = 'black';
	group.onMouseEnter = enterGroup;
	group.onMouseLeave = leaveGroup;
}
////////////////////

var maxLevel = 0;
var dataPoints = [];
for ( var i = 0; i < data.length; i++ ) {
	var dataPoint = new DataPoint(data[i]);
	if ( maxLevel < dataPoint.lvl) {
		maxLevel = dataPoint.lvl;
	}
	dataPoints.push(dataPoint);
}

// Draw guides
for (var i = 0; i <= maxLevel; i++) {
	var yPos = verticalOffset-levelHeight*i;
	var line = new Path();
	line.add(new Point(20,yPos));
	line.add(new Point(20+data.length*25,yPos));
	line.strokeColor = 'grey';
	var label = new PointText(new Point(20+data.length*25,yPos));
	label.fillColor = 'grey';
	label.fontSize = 14;
	label.content = 1*Math.pow(10,i);

	// Add the smaller lines
	for (var j = 1; j < 10; j++) {
		var smallLine = new Path();
		smallLine.add(new Point(20,yPos - (levelHeight/10)*j));
		smallLine.add(new Point(20+data.length*25,yPos - (levelHeight/10)*j));
		smallLine.strokeColor = 'lightgrey';
	}
}

// Draw the actual data
for (var i = 0; i < dataPoints.length; i++ ) {
	dataPoints[i].draw();
}