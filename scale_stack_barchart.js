var verticalOffset = 700;
var horizontalOffset = 50;
var levelScaling = 5; // number of pixels per unit. If = 5: value of 3 => 15 pixels
var levelHeight = 10*levelScaling;
var data = [13,123,3617,627,2938172,3,509,8261,19,29128,1,28];

var calculateComponents = function(x) {
	var maxPowerOfTen = 0; // 4->0; 15->1; 18272->4
	var currentX = x;
	while ( currentX >= 10 ) {
		maxPowerOfTen += 1;
		currentX /= 10;
	}
	var valueAtMaxPowerOfTen = x/Math.pow(10,maxPowerOfTen);
	return {orig: x,
			val: valueAtMaxPowerOfTen,
			lvl: maxPowerOfTen};

}

var dataInComponents = [];
for (var i = 0; i < data.length; i++ ) {
	dataInComponents.push(calculateComponents(data[i]));
}
var maxLevel = Math.max.apply(Math,dataInComponents.map(function(o){return o.lvl;}))

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

for (var i = 0; i < dataInComponents.length; i++ ) {
	// The thin bar in the orders of magnitude smaller than the current number
	var thinBar = new Path();
	thinBar.add(new Point(horizontalOffset + i*20, verticalOffset));
	thinBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataInComponents[i].lvl));
	thinBar.strokeColor = 'black';
	thinBar.strokeWidth = 2;

	// The thick bar in the order of magnitude of the current number
	var thickBar = new Path();
	thickBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataInComponents[i].lvl));
	thickBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataInComponents[i].lvl-(dataInComponents[i].val*levelScaling)));
	thickBar.strokeColor = 'black';
	thickBar.strokeWidth = 10;

	// The thick but flat bar in the orders of magnitude larger than the current number
	for (var j = dataInComponents[i].lvl+1; j<=maxLevel; j++) {
		var placeHolder = new Path();
		placeHolder.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*j));
		placeHolder.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*j-1));
		placeHolder.strokeColor = 'black';
		placeHolder.strokeWidth = 10;
	}
}