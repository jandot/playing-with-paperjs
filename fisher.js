var irisData = [
  {sepalLength:5.1,sepalWidth:3.5,petalLength:1.4,petalWidth:0.1,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.9,sepalWidth:3.0,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.7,sepalWidth:3.2,petalLength:1.3,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.6,sepalWidth:3.1,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.6,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.4,sepalWidth:3.9,petalLength:1.7,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.6,sepalWidth:3.4,petalLength:1.4,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.4,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.4,sepalWidth:2.9,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.9,sepalWidth:3.1,petalLength:1.5,petalWidth:0.1,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.4,sepalWidth:3.7,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.8,sepalWidth:3.4,petalLength:1.6,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.8,sepalWidth:3.0,petalLength:1.4,petalWidth:0.1,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.3,sepalWidth:3.0,petalLength:1.1,petalWidth:0.1,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.8,sepalWidth:4.0,petalLength:1.2,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.7,sepalWidth:4.4,petalLength:1.5,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.4,sepalWidth:3.9,petalLength:1.3,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.5,petalLength:1.4,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.7,sepalWidth:3.8,petalLength:1.7,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.8,petalLength:1.5,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.4,sepalWidth:3.4,petalLength:1.7,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.7,petalLength:1.5,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.6,sepalWidth:3.6,petalLength:1.0,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.3,petalLength:1.7,petalWidth:0.5,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.8,sepalWidth:3.4,petalLength:1.9,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.0,petalLength:1.6,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.4,petalLength:1.6,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.2,sepalWidth:3.5,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.2,sepalWidth:3.4,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.7,sepalWidth:3.2,petalLength:1.6,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.8,sepalWidth:3.1,petalLength:1.6,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.4,sepalWidth:3.4,petalLength:1.5,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.2,sepalWidth:4.1,petalLength:1.5,petalWidth:0.1,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.5,sepalWidth:4.2,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.9,sepalWidth:3.1,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.2,petalLength:1.2,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.5,sepalWidth:3.5,petalLength:1.3,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.9,sepalWidth:3.6,petalLength:1.4,petalWidth:0.1,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.4,sepalWidth:3.0,petalLength:1.3,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.4,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.5,petalLength:1.3,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.5,sepalWidth:2.3,petalLength:1.3,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.4,sepalWidth:3.2,petalLength:1.3,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.5,petalLength:1.6,petalWidth:0.6,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.8,petalLength:1.9,petalWidth:0.4,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.8,sepalWidth:3.0,petalLength:1.4,petalWidth:0.3,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.1,sepalWidth:3.8,petalLength:1.6,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:4.6,sepalWidth:3.2,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.3,sepalWidth:3.7,petalLength:1.5,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:5.0,sepalWidth:3.3,petalLength:1.4,petalWidth:0.2,species:"I. setosa",color:"#66c2a5"},
  {sepalLength:7.0,sepalWidth:3.2,petalLength:4.7,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.4,sepalWidth:3.2,petalLength:4.5,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.9,sepalWidth:3.1,petalLength:4.9,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.5,sepalWidth:2.3,petalLength:4.0,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.5,sepalWidth:2.8,petalLength:4.6,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.7,sepalWidth:2.8,petalLength:4.5,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.3,sepalWidth:3.3,petalLength:4.7,petalWidth:1.6,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:4.9,sepalWidth:2.4,petalLength:3.3,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.6,sepalWidth:2.9,petalLength:4.6,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.2,sepalWidth:2.7,petalLength:3.9,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.0,sepalWidth:2.0,petalLength:3.5,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.9,sepalWidth:3.0,petalLength:4.2,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.0,sepalWidth:2.2,petalLength:4.0,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.1,sepalWidth:2.9,petalLength:4.7,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.6,sepalWidth:2.9,petalLength:3.6,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.7,sepalWidth:3.1,petalLength:4.4,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.6,sepalWidth:3.0,petalLength:4.5,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.8,sepalWidth:2.7,petalLength:4.1,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.2,sepalWidth:2.2,petalLength:4.5,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.6,sepalWidth:2.5,petalLength:3.9,petalWidth:1.1,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.9,sepalWidth:3.2,petalLength:4.8,petalWidth:1.8,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.1,sepalWidth:2.8,petalLength:4.0,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.3,sepalWidth:2.5,petalLength:4.9,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.1,sepalWidth:2.8,petalLength:4.7,petalWidth:1.2,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.4,sepalWidth:2.9,petalLength:4.3,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.6,sepalWidth:3.0,petalLength:4.4,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.8,sepalWidth:2.8,petalLength:4.8,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.7,sepalWidth:3.0,petalLength:5.0,petalWidth:1.7,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.0,sepalWidth:2.9,petalLength:4.5,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.7,sepalWidth:2.6,petalLength:3.5,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.5,sepalWidth:2.4,petalLength:3.8,petalWidth:1.1,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.5,sepalWidth:2.4,petalLength:3.7,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.8,sepalWidth:2.7,petalLength:3.9,petalWidth:1.2,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.0,sepalWidth:2.7,petalLength:5.1,petalWidth:1.6,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.4,sepalWidth:3.0,petalLength:4.5,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.0,sepalWidth:3.4,petalLength:4.5,petalWidth:1.6,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.7,sepalWidth:3.1,petalLength:4.7,petalWidth:1.5,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.3,sepalWidth:2.3,petalLength:4.4,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.6,sepalWidth:3.0,petalLength:4.1,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.5,sepalWidth:2.5,petalLength:4.0,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.5,sepalWidth:2.6,petalLength:4.4,petalWidth:1.2,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.1,sepalWidth:3.0,petalLength:4.6,petalWidth:1.4,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.8,sepalWidth:2.6,petalLength:4.0,petalWidth:1.2,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.0,sepalWidth:2.3,petalLength:3.3,petalWidth:1.0,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.6,sepalWidth:2.7,petalLength:4.2,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.7,sepalWidth:3.0,petalLength:4.2,petalWidth:1.2,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.7,sepalWidth:2.9,petalLength:4.2,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.2,sepalWidth:2.9,petalLength:4.3,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.1,sepalWidth:2.5,petalLength:3.0,petalWidth:1.1,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:5.7,sepalWidth:2.8,petalLength:4.1,petalWidth:1.3,species:"I. versicolor",color:"#fc8d62"},
  {sepalLength:6.3,sepalWidth:3.3,petalLength:6.0,petalWidth:2.5,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:5.8,sepalWidth:2.7,petalLength:5.1,petalWidth:1.9,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.1,sepalWidth:3.0,petalLength:5.9,petalWidth:2.1,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.3,sepalWidth:2.9,petalLength:5.6,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.5,sepalWidth:3.0,petalLength:5.8,petalWidth:2.2,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.6,sepalWidth:3.0,petalLength:6.6,petalWidth:2.1,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:4.9,sepalWidth:2.5,petalLength:4.5,petalWidth:1.7,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.3,sepalWidth:2.9,petalLength:6.3,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.7,sepalWidth:2.5,petalLength:5.8,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.2,sepalWidth:3.6,petalLength:6.1,petalWidth:2.5,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.5,sepalWidth:3.2,petalLength:5.1,petalWidth:2.0,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.4,sepalWidth:2.7,petalLength:5.3,petalWidth:1.9,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.8,sepalWidth:3.0,petalLength:5.5,petalWidth:2.1,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:5.7,sepalWidth:2.5,petalLength:5.0,petalWidth:2.0,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:5.8,sepalWidth:2.8,petalLength:5.1,petalWidth:2.4,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.4,sepalWidth:3.2,petalLength:5.3,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.5,sepalWidth:3.0,petalLength:5.5,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.7,sepalWidth:3.8,petalLength:6.7,petalWidth:2.2,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.7,sepalWidth:2.6,petalLength:6.9,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.0,sepalWidth:2.2,petalLength:5.0,petalWidth:1.5,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.9,sepalWidth:3.2,petalLength:5.7,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:5.6,sepalWidth:2.8,petalLength:4.9,petalWidth:2.0,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.7,sepalWidth:2.8,petalLength:6.7,petalWidth:2.0,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.3,sepalWidth:2.7,petalLength:4.9,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.7,sepalWidth:3.3,petalLength:5.7,petalWidth:2.1,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.2,sepalWidth:3.2,petalLength:6.0,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.2,sepalWidth:2.8,petalLength:4.8,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.1,sepalWidth:3.0,petalLength:4.9,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.4,sepalWidth:2.8,petalLength:5.6,petalWidth:2.1,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.2,sepalWidth:3.0,petalLength:5.8,petalWidth:1.6,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.4,sepalWidth:2.8,petalLength:6.1,petalWidth:1.9,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.9,sepalWidth:3.8,petalLength:6.4,petalWidth:2.0,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.4,sepalWidth:2.8,petalLength:5.6,petalWidth:2.2,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.3,sepalWidth:2.8,petalLength:5.1,petalWidth:1.5,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.1,sepalWidth:2.6,petalLength:5.6,petalWidth:1.4,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:7.7,sepalWidth:3.0,petalLength:6.1,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.3,sepalWidth:3.4,petalLength:5.6,petalWidth:2.4,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.4,sepalWidth:3.1,petalLength:5.5,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.0,sepalWidth:3.0,petalLength:4.8,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.9,sepalWidth:3.1,petalLength:5.4,petalWidth:2.1,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.7,sepalWidth:3.1,petalLength:5.6,petalWidth:2.4,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.9,sepalWidth:3.1,petalLength:5.1,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:5.8,sepalWidth:2.7,petalLength:5.1,petalWidth:1.9,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.8,sepalWidth:3.2,petalLength:5.9,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.7,sepalWidth:3.3,petalLength:5.7,petalWidth:2.5,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.7,sepalWidth:3.0,petalLength:5.2,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.3,sepalWidth:2.5,petalLength:5.0,petalWidth:1.9,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.5,sepalWidth:3.0,petalLength:5.2,petalWidth:2.0,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:6.2,sepalWidth:3.4,petalLength:5.4,petalWidth:2.3,species:"I. virginica",color:"#8da0cb"},
  {sepalLength:5.9,sepalWidth:3.0,petalLength:5.1,petalWidth:1.8,species:"I. virginica",color:"#8da0cb"}
]

function Attractor(name, x, y) {
	this.name = name
	this.x = x
	this.y = y
	this.draw = function() {
    	var a = new Path.Circle(new Point(this.x, this.y),5);
    	a.fillColor = 'grey'
        var t = new PointText(new Point(this.x, this.y-10))
        t.justification = 'center'
        t.fillColor = 'black'
        t.content = this.name
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
        a.fillColor = this.fillColor
		a.opacity = 0.3
	}
}

attractorSepalLength = new Attractor('sepal length',150,150)
attractorSepalWidth = new Attractor('sepal width',450,150)
attractorPetalLength = new Attractor('petal length',150,450)
attractorPetalWidth = new Attractor('petal width',450,450)
var attractors = [attractorSepalLength,attractorSepalWidth,attractorPetalLength,attractorPetalWidth]
var c = new Path.Circle(new Point(300,300),212.13)
c.strokeColor = 'grey'
attractors.map(function(a) {a.draw()})
for ( var i = 0; i < irisData.length; i++ ) {
    var p = new DataPoint([{attractor:attractorSepalLength,force:irisData[i].sepalLength},
                            {attractor:attractorSepalWidth,force:irisData[i].sepalWidth},
                            {attractor:attractorPetalLength,force:irisData[i].petalLength},
                            {attractor:attractorPetalWidth,force:irisData[i].petalWidth}])
    p.fillColor = irisData[i].color
    p.draw()
}
var b1 = new Path.Rectangle(new Rectangle(new Point(550,200),10))
b1.fillColor = '#66c2a5'
var t1 = new PointText(new Point(570,210))
t1.justification = 'left'
t1.fillColor = 'black'
t1.content = 'I.setosa'
var b2 = new Path.Rectangle(new Rectangle(new Point(550,230),10))
b2.fillColor = '#fc8d62'
var t2 = new PointText(new Point(570,240))
t2.justification = 'left'
t2.fillColor = 'black'
t2.content = 'I.versicolor'
var b3 = new Path.Rectangle(new Rectangle(new Point(550,260),10))
b3.fillColor = '#8da0cb'
var t3 = new PointText(new Point(570,270))
t3.justification = 'left'
t3.fillColor = 'black'
t3.content = 'I.virginica'