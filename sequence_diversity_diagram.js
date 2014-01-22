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

// Draw all nodes
for ( var i = 0; i < dagNodes.length; i++ ) {
	var path = new Path.Rectangle(new Rectangle(dagNodes[i].x*50, dagNodes[i].y*50, 20, dagNodes[i].weight));
	path.fillColor = 'blue';
}

// Draw all edges
for ( var i = 0; i < dagLinks.length; i++ ) {
	var fromNode = dagLinks[i].from;
	var toNode = dagLinks[i].to;
	var fromX = dagNodes.filter(function(x) {return x.id == fromNode})[0].x;
	var fromY = dagNodes.filter(function(x) {return x.id == fromNode})[0].y;
	var toX = dagNodes.filter(function(x) {return x.id == toNode})[0].x;
	var toY = dagNodes.filter(function(x) {return x.id == toNode})[0].y;
	var path = new Path();
	path.add(new Point(fromX*50 + 20, fromY*50));
	path.add(new Point(toX*50, toY*50));
	path.strokeWeight = dagLinks[i].weight;
	path.strokeColor = 'blue';
}