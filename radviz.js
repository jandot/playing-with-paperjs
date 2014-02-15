// To calculate position, do this separately for x and y
// We calculate x so that the sum pulling power over all attractors is equal to zero.
// Say attractor A has x-position 10, B 60, and C 20
// and attraction forces for point p are 17, 50 and 33, respectively.
// (xA - xp) * 17 + (xB - xp) * 50 + (xC - xp) * 33 = 0
// => xp = 38.3

function AttractorSpace(attractors) {
	this.attractors = attractors
	this.draw = function() {
		this.attractors.map(function(a) {a.draw()})
	}
    this.distanceBetweenAttractors = function() {
    	return(Math.sqrt(Math.pow(this.attractors[0].x - this.attractors[1].x,2) +
    					 Math.pow(this.attractors[0].y - this.attractors[1].y,2)))
    }
    this.sortAttractorsX = function() {
    	return this.attractors.sort(function(a,b) {return (a.x-b.x)})
    }
    this.sortAttractorsY = function() {
    	return this.attractors.sort(function(a,b) {return (a.y-b.y)})
    }
    this.center = function() {
    	var x = this.attractors.reduce(function(a,b) {return a.x+b.x})/2
    	var y = this.attractors.reduce(function(a,b) {return a.y+b.y})/2
    	return [x,y]
    }
}
function Attractor(name, x, y) {
	this.name = name
	this.x = x
	this.y = y
	this.draw = function() {
    	var a = new Path.Circle(new Point(this.x, this.y),5);
    	a.fillColor = 'grey'
    }
}

function DataPoint(attractions) {
	this.attractions = attractions
    this.forces = this.attractions.map(function(a) {return a.force})
    this.totalAttractorForce = function() {
     return this.attractions.map(function(a) {return a.force}).reduce(function(a,b) {return a+b})
    }
    this.coordinateX = function() {
        return this.attractions.map(function(a) {return a.force*a.attractor.x}).reduce(function(a,b) {return a+b})/this.totalAttractorForce()
    }
    this.coordinateY = function() {
        return this.attractions.map(function(a) {return a.force*a.attractor.y}).reduce(function(a,b) {return a+b})/this.totalAttractorForce()
    }
    this.coordinates = [this.coordinateX(),this.coordinateY()]

	this.draw = function() {
		var a = new Path.Circle(this.coordinates, 5)
		a.fillColor = 'red'
		a.opacity = 0.2
	}
}

attractorA = new Attractor('A',50,50)
attractorB = new Attractor('B',550,50)
attractorC = new Attractor('C',300,300)
var attractorSpace = new AttractorSpace([attractorA,attractorB,attractorC])
attractorSpace.draw()
var points = new Array
for ( var i = 0; i < 1000; i++ ) {
    var p = new DataPoint([{attractor:attractorA,force:Math.random()},
                            {attractor:attractorB,force:Math.random()},
                            {attractor:attractorC,force:Math.random()}])
    p.draw()
}
