///////// Definition of DataPoint class ////////
function DataPoint(val) {
	this.val = val;
	
	// Calculate this.componentVal and this.lvl
	var maxPowerOfTen = 0; // 4->0; 15->1; 18272->4
	var currentVal = this.val;
	while ( currentVal >= 10 ) {
		maxPowerOfTen += 1;
		currentVal /= 10;
	}
	var valueAtMaxPowerOfTen = this.val/Math.pow(10,maxPowerOfTen);
	this.componentVal = valueAtMaxPowerOfTen; // 523 -> 5.23, 81927 -> 8.1927
	this.lvl = maxPowerOfTen;

	this.draw = function(i, config, maxLevel) {
		var group = new Group();
		// The thin bar in the orders of magnitude smaller than the current number
		var thinBar = new Path();
		thinBar.add(new Point(config.horizontalOffset + i*20, config.verticalOffset));
		thinBar.add(new Point(config.horizontalOffset + i*20, config.verticalOffset-config.levelHeight*this.lvl));
		thinBar.strokeWidth = 2;
		group.addChild(thinBar);

		// The thick bar in the order of magnitude of the current number
		var thickBar = new Path();
		thickBar.add(new Point(config.horizontalOffset + i*20, config.verticalOffset-config.levelHeight*this.lvl));
		thickBar.add(new Point(config.horizontalOffset + i*20, config.verticalOffset-config.levelHeight*this.lvl-(this.componentVal*config.levelScaling)));
		thickBar.strokeWidth = 10;
		group.addChild(thickBar);

		// The thick but flat bar in the orders of magnitude larger than the current number
		for (var j = this.lvl+1; j<=maxLevel; j++) {
			var placeHolder = new Path();
			placeHolder.add(new Point(config.horizontalOffset + i*20, config.verticalOffset-config.levelHeight*j));
			placeHolder.add(new Point(config.horizontalOffset + i*20, config.verticalOffset-config.levelHeight*j-1));
			placeHolder.strokeWidth = 10;
			group.addChild(placeHolder);
		}
		group.strokeColor = 'black';
		group.onMouseEnter = enterGroup;
		group.onMouseLeave = leaveGroup;
	}

}

var enterGroup = function(event) {
	this.strokeColor = 'red';
}
var leaveGroup = function(event) {
	this.strokeColor = 'black';
}

function ScaleStackBarchart(data) {
	this.data = data

	this.config = {
		verticalOffset: 500,
		horizontalOffset: 50,
		levelScaling: 5, // number of pixels per unit. If = 5: value of 3 => 15 pixels
	}

	this.maxLevel = 0;
	this.dataPoints = [];
	for ( var i = 0; i < this.data.length; i++ ) {
		var dataPoint = new DataPoint(this.data[i]);
		if ( this.maxLevel < dataPoint.lvl) {
			this.maxLevel = dataPoint.lvl;
		}
		this.dataPoints.push(dataPoint);
	}

	// Draw guides
	this.drawGuides = function() {
		for (var i = 0; i <= this.maxLevel; i++) {
			var yPos = this.config.verticalOffset-this.config.levelHeight*i;
			var line = new Path();
			line.add(new Point(this.config.horizontalOffset - 30,yPos));
			line.add(new Point(this.config.horizontalOffset - 30+data.length*25,yPos));
			line.strokeColor = 'grey';
			var label = new PointText(new Point(this.config.horizontalOffset - 30+data.length*25,yPos));
			label.fillColor = 'grey';
			label.fontSize = 14;
			label.content = 1*Math.pow(10,i);

			// Add the smaller lines
			for (var j = 1; j < 10; j++) {
				var smallLine = new Path();
				smallLine.add(new Point(this.config.horizontalOffset - 30,yPos - (this.config.levelHeight/10)*j));
				smallLine.add(new Point(this.config.horizontalOffset - 30+data.length*25,yPos - (this.config.levelHeight/10)*j));
				smallLine.strokeColor = 'lightgrey';
			}
		}
	}

	// Draw the actual data
	this.drawDataPoints = function() {
		for (var i = 0; i < this.dataPoints.length; i++ ) {
			this.dataPoints[i].draw(i, this.config, this.maxLevel);
		}
	}

	this.draw = function() {
		this.config.levelHeight = 10*this.config.levelScaling
		this.drawGuides()
		this.drawDataPoints()
	}
}

var data = [13,123,3617,627,2938172,3,509,8261,19,29128,1,28];
var ssbc = new ScaleStackBarchart(data)
ssbc.draw()