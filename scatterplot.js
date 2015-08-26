var csvfile = "data.csv"
var scale = 100

// Set size of canvas
view.viewSize = new Size(800,800)

var colors = {'Iris-setosa': '#7fc97f','Iris-versicolor':'#beaed4','Iris-virginica':'#fdc086'}

var tooltipRectangle = new Path.Rectangle({
    point: [0,0],
    size: [10,10],
    fillColor: 'white',
    opacity: 0.9
});
tooltipRectangle.visible = false;
var tooltip = new PointText(new Point(25, 25));
tooltip.fillColor = 'black';
tooltip.fontSize = 14;

$.get(csvfile, function(data,error) {
  var csvdata = Papa.parse(data, {delimiter:',',header:true,dynamicTyping:true})
  csvdata.data.forEach(function(d) {
    var circle = new Path.Circle(new Point(d.sepalLength * scale, d.sepalWidth * scale), 5);
    circle.fillColor = colors[d.species];
    circle.opacity = 0.5

    circle.onMouseEnter = function() {
      this.fillColor = 'red'
      this.opacity = 1

      tooltip.content = JSON.stringify(d);
      tooltip.position = [event.clientX + 50, event.clientY + 20]
      tooltipRectangle.bounds.width = tooltip.handleBounds.width + 4;
      tooltipRectangle.bounds.height = tooltip.handleBounds.height + 4;
      tooltipRectangle.position = tooltip.position;
      tooltipRectangle.visible = true;
      tooltipRectangle.bringToFront();
      tooltip.visible = true;
      tooltip.bringToFront();

    }
    circle.onMouseLeave = function() {
      this.fillColor = colors[d.species]
      this.opacity = 0.5

      tooltip.visible = false;
      tooltipRectangle.visible = false;
    }
  })
  view.update()
})
