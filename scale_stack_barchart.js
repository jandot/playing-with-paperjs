var verticalOffset = 700;
var horizontalOffset = 50;
var levelScaling = 10; // number of pixels per unit. If = 5: value of 3 => 15 pixels
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

for (var i = 0; i < 5; i++) {
	var line = new Path();
	line.add(new Point(20,verticalOffset-levelHeight*i));
	line.add(new Point(20+data.length*25,verticalOffset-levelHeight*i));
	line.strokeColor = 'lightgrey';
}

var dataInComponents = [];
for (var i = 0; i < data.length; i++ ) {
	dataInComponents.push(calculateComponents(data[i]));
}
var maxLevel = Math.max.apply(Math,dataInComponents.map(function(o){return o.lvl;}))
for (var i = 0; i < dataInComponents.length; i++ ) {
	// The thin bar in the orders of magnitude smaller than the current number
	var thinBar = new Path();
	thinBar.add(new Point(horizontalOffset + i*20, verticalOffset));
	thinBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataInComponents[i].lvl));
	thinBar.strokeColor = 'grey';
	thinBar.strokeWidth = 2;

	// The thick bar in the order of magnitude of the current number
	var thickBar = new Path();
	thickBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataInComponents[i].lvl));
	thickBar.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*dataInComponents[i].lvl-(dataInComponents[i].val*levelScaling)));
	thickBar.strokeColor = 'grey';
	thickBar.strokeWidth = 10;

	// The thick but flat bar in the orders of magnitude larger than the current number
	for (var j = dataInComponents[i].lvl+1; j<=maxLevel; j++) {
		var placeHolder = new Path();
		placeHolder.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*j));
		placeHolder.add(new Point(horizontalOffset + i*20, verticalOffset-levelHeight*j-1));
		placeHolder.strokeColor = 'grey';
		placeHolder.strokeWidth = 10;
	}
}