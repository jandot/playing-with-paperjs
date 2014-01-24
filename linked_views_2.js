var conf = {barchart_left: 50,
            barchart_bottom: 250,
            scatterplot_left: 400,
            scatterplot_bottom: 600}
var numberOfItems = 100
var data = [
  {name: "A", x: 40, y: 150},
  {name: "B", x: 270, y: 140},
  {name: "C", x: 140, y: 90},
  {name: "D", x: 120, y: 210},
  {name: "E", x: 160, y: 10},
  {name: "F", x: 10, y: 190},
  {name: "G", x: 180, y: 80}]

// Brushing and linking
function enter(event) {
  var allItemsWithId = [this];
  for ( var i = 0; i < project.activeLayer.children.length; i++ ) {
    if ( project.activeLayer.children[i].data.itemId == this.data.itemId ) {
      allItemsWithId.push(project.activeLayer.children[i]);
    }
  }
  for (var i = 0; i < allItemsWithId.length; i++ ) {
    allItemsWithId[i].fillColor = 'red';
    allItemsWithId[i].strokeColor = 'red';
    allItemsWithId[i].opacity = 1;
    allItemsWithId[i].strokeWidth = 3;
  }
}

function leave(event) {
  var allItemsWithId = [this];
  for ( var i = 0; i < project.activeLayer.children.length; i++ ) {
    if ( project.activeLayer.children[i].data.itemId == this.data.itemId ) {
      allItemsWithId.push(project.activeLayer.children[i]);
    }
  }

  for (var i = 0; i < allItemsWithId.length; i++ ) {
    allItemsWithId[i].fillColor = this.data.color;
    allItemsWithId[i].strokeColor = this.data.color;
    allItemsWithId[i].opacity = 0.5;
    allItemsWithId[i].strokeWidth = 2;
  }

}

// The axes
var xAxis = new Path();
xAxis.add(new Point(conf.scatterplot_left, conf.scatterplot_bottom));
xAxis.add(new Point(conf.scatterplot_left+300, conf.scatterplot_bottom));
xAxis.strokeWidth = 1;
xAxis.strokeColor = 'black';
var yAxis = new Path();
yAxis.add(new Point(conf.scatterplot_left, conf.scatterplot_bottom-200));
yAxis.add(new Point(conf.scatterplot_left, conf.scatterplot_bottom));
yAxis.strokeWidth = 1;
yAxis.strokeColor = 'black';
for (var i = 0; i < data.length; i++ ) {
}

// The data
for (var i = 0; i < numberOfItems; i++ ) {
  var x = Math.random() * 200
  var y = Math.random() * 200
  var colour = new Color(Math.random(), Math.random(), Math.random())
  // The barchart
  var bar = new Path();
  bar.name = "bar_" + i;
  bar.add(new Point(conf.barchart_left+i*3, conf.barchart_bottom));
  bar.add(new Point(conf.barchart_left+i*3, conf.barchart_bottom-y));
  bar.strokeWidth = 2;
  bar.opacity = 0.5;
  bar.onMouseEnter = enter;
  bar.onMouseLeave = leave;

  bar.data.itemId = i; // We'll use this to match different marks for the same item

  bar.strokeColor = colour;
  bar.fillColor = colour;
  bar.data.color = colour; // item.data can contain arbitrary data, necessary for use in enter() and leave()

  // The scatterplot
  var point = new Path.Circle(new Point(conf.scatterplot_left+x, conf.scatterplot_bottom-y),5);
  point.opacity = 0.5
  point.name = "point_" + i;
  point.onMouseEnter = enter;
  point.onMouseLeave = leave;

  point.data.itemId = i; // We'll use this to match different marks for the same item

  point.strokeColor = colour;
  point.fillColor = colour;
  point.data.color = colour; // item.data can contain arbitrary data, necessary for use in enter() and leave()  
}
