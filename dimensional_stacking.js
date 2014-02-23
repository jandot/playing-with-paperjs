function DataPoint(data) {
    this.data = data
    this.dimensionality = this.data.length

    this.normalizedCoordinates = function() {
        var xPos = 0
        var yPos = 0
        var direction = 'x'
        for ( var i = 0; i < this.dimensionality; i++ ) {
            if ( direction == 'x' ) {
                xPos += this.data[i]/Math.pow(10,Math.floor(i/2))
                direction = 'y'
            } else if ( direction == 'y' ) {
                yPos += this.data[i]/Math.pow(10,Math.floor(i/2))
                direction = 'x'
            }
        }
        return [xPos,yPos]
    }
    
    this.draw = function(scaling) {
    	console.log(scaling)
        var x = this.normalizedCoordinates()[0]*scaling
        var y = this.normalizedCoordinates()[1]*scaling
        var point = new Path.Circle(new Point(x,y), 3)
        point.fillColor = 'red'
    }
}

function DimensionalScalingPlot(data) {
	this.dataPoints = data.map(function(x) {return new DataPoint(x)})
	this.dimensionality = this.dataPoints[0].dimensionality
    this.dataCoordinates = []
    
	this.config = {
		scaling: 500
	}

	this.drawGuides = function() {
		
	}

	this.drawDataPoints = function(scaling) {
		this.dataPoints.map(function(x) {x.draw(scaling)})
	}

	this.draw = function() {
		this.drawGuides(this.config.scaling)
		this.drawDataPoints(this.config.scaling)
	}
}

////////////////////////////

var data = [
	[0.4,0.6,0.4,0.8,0.4,1,0.8,0,0.6,0.4,0.2,0.6,0,0.2,0.8,0,0.8,0.2,0.8,0.8],
	[0.6,0.8,0.8,0.4,0.6,1,0.8,0.2,0.2,0.2,0.4,0.6,0.8,0.2,0.2,0.6,0.8,0.8,0,0.2],
	[0.6,1,0.6,0.2,0.2,0.4,0.8,0.6,0.2,0.8,0.6,0.4,0.2,0.4,0.4,0.8,0.6,0.8,0.8,0.8],
	[0,0.6,0.2,0.6,0.4,0.2,0.2,0.4,0.6,0,0.4,0.4,0.6,0.6,0.6,1,0.6,0,0,0.6],
	[0.2,0.6,0.6,0.2,0.2,0.4,0.6,0.8,0.6,0.2,0.2,0.2,0.6,0.8,0.4,0.8,0.8,0.6,0.2,1],
	[0.4,0.6,1,0.2,0.8,0.4,0.2,0.2,0.2,0.8,0.6,0.6,0.4,0.2,0.6,0.2,0.6,0.8,0.8,0.8],
	[0.2,1,0.6,0.2,0.6,0.8,1,0.2,0.8,0.8,1,1,0.6,0,0.4,0.2,0.6,0.6,0.8,0.4],
	[0.2,0.6,0.4,1,0.2,0.6,0.6,0,0.6,1,0.6,0.2,0.4,0.4,0.2,0.8,0.6,0.6,0.6,0.2],
	[0.4,1,0.6,0.4,0.8,0.4,0.2,0.8,1,0.2,0.4,0.2,0.4,0.4,1,0.4,0.2,0.6,0.2,0.4],
	[0.4,0.4,0.4,0,0.8,0.6,0.6,0.8,0.8,0.2,0.2,0.4,0.2,0.6,0.2,0.8,0.2,0.6,1,0.6],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]

var dsp = new DimensionalScalingPlot(data)
dsp.draw()