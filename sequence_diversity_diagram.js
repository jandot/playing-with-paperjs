var scalingFactorX = 50
var scalingFactorY = 20

var dagNodes = [{id:"A", x:1, y:2, val:'valine', weight:5}, // Have to remove y and calculate from categories.
	        	{id:"B", x:2, y:3, val:'leucine', weight:4},
	        	{id:"C", x:2, y:5, val:'proline', weight:1},
	        	{id:"D", x:3, y:3, val:'leucine', weight:1},
	        	{id:"E", x:3, y:5, val:'proline', weight:3},
	        	{id:"F", x:4, y:7, val:'threonine', weight:4},
	        	{id:"G", x:5, y:4, val:'tyrosine', weight:4},
	        	{id:"H", x:5, y:6, val:'isoleucine', weight:1},
	        	{id:"I", x:6, y:1, val:'serine', weight:5},
	        	{id:"J", x:4, y:3, val:'leucine', weight:1}]
var dagLinks = [{from:"A", to:"B", weight:4},
	        	{from:"A", to:"C", weight:1},
	        	{from:"B", to:"E", weight:4},
	        	{from:"C", to:"D", weight:1},
	        	{from:"D", to:"F", weight:1},
	        	{from:"E", to:"J", weight:1},
	        	{from:"E", to:"F", weight:3},
	        	{from:"F", to:"G", weight:3},
	        	{from:"F", to:"H", weight:1},
	        	{from:"G", to:"I", weight:4},
	        	{from:"H", to:"I", weight:1}]

var dagPaths = [{id:1, nodes:["A","B","E","F","G","I"]},
                {id:2, nodes:["A","C","E","F","H","I"]},
                {id:3, nodes:["A","B","E","J"]},
                {id:4, nodes:["A","C","D","F","G","I"]}]


function enter(event) {
	for ( var i = 0; i < groups.length; i++ ) {
		var groupActive = false
		for ( var j = 0; j < groups[i].children.length; j++ ) {
			if ( groups[i].children[j].data.name == this.data.name ) {
				groupActive = true
			}
		}
		if ( groupActive ) {
			for ( var j = 0; j < groups[i].children.length; j++ ) {
				groups[i].children[j].fillColor = 'red'
				groups[i].children[j].strokeColor = 'red'
			}
		} else {
			groups[i].sendToBack()
		}
	}
}
function leave(event) {
    this.layer.children.map(function(d) { d.strokeColor = 'lightblue'})
    this.layer.children.map(function(d) { d.fillColor = 'lightblue'})
}

var groups = new Array();
for ( var i = 0; i < dagPaths.length; i++ ) {
	var group = new Group();
	for ( var j = 0; j < dagPaths[i].nodes.length; j++ ) {
		var node = dagNodes.filter(function(x) {return x.id == dagPaths[i].nodes[j]})[0];
		var rect = new Path.Rectangle(new Rectangle(node.x*scalingFactorX, node.y*scalingFactorY, 20, node.weight));
		rect.data.name = node.id
		rect.fillColor = 'lightblue';
		rect.onMouseEnter = enter
		rect.onMouseLeave = leave
		group.addChild(rect);
	}
	for ( var j = 1; j < dagPaths[i].nodes.length; j++ ) {
		var fromNode = dagPaths[i].nodes[j-1];
		var toNode = dagPaths[i].nodes[j];
		var fromX = dagNodes.filter(function(x) {return x.id == fromNode})[0].x;
		var fromY = dagNodes.filter(function(x) {return x.id == fromNode})[0].y;
		var toX = dagNodes.filter(function(x) {return x.id == toNode})[0].x;
		var toY = dagNodes.filter(function(x) {return x.id == toNode})[0].y;
		var line = new Path();
		line.add(new Point(fromX*scalingFactorX + 20, fromY*scalingFactorY));
		line.add(new Point(toX*scalingFactorX, toY*scalingFactorY));
		line.data.name = fromNode + "->" + toNode
		line.strokeWeight = 2;
		line.strokeColor = 'lightblue';
		line.onMouseEnter = enter
		line.onMouseLeave = leave
		group.addChild(line);
  }
  groups.push(group);
}
