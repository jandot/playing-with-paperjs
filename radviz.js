// To calculate position, do this separately for x and y
// We calculate x so that the sum pulling power over all attractors is equal to zero.
// Say attractor A has x-position 10, B 60, and C 20
// and attraction forces for point p are 17, 50 and 33, respectively.
// (xA - xp) * 17 + (xB - xp) * 50 + (xC - xp) * 33 = 0
// => xp = 38.3

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
		a.opacity = 0.1
        a.onMouseEnter = enter
        a.onMouseLeave = leave
	}
    this.toString = function() {
        return ("x:" + this.coordinateX().toFixed(2) + " y:" + this.coordinateY().toFixed(2) + " " + this.attractions.map(function(a) {return a.attractor.name + " " + a.force.toFixed(2)}).join(" ; "))
    }
}

var enter = function(event) {
  this.opacity = 1;
}
var leave = function(event) {
  this.opacity = 0.1;
}

attractorA = new Attractor('A',50,50)
attractorB = new Attractor('B',550,50)
attractorC = new Attractor('C',50,550)
attractorD = new Attractor('D',550,550)
var attractors = [attractorA,attractorB,attractorC,attractorD]
attractors.map(function(a) {a.draw()})
for ( var i = 0; i < 1000; i++ ) {
    var p = new DataPoint([{attractor:attractorA,force:Math.random()},
                            {attractor:attractorB,force:Math.random()},
                            {attractor:attractorC,force:Math.random()},
                            {attractor:attractorD,force:Math.random()}])
    p.draw()
    // console.log(p.toString())
}
