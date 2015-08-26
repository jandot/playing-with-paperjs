function Person(x, y, color) {
   this.x = x;
   this.y = y;
   this.color = color;
}

Person.prototype.draw = function() {
    var path = new Path();
    console.log(this.color);
    path.strokeColor = this.color;
    path.strokeWidth = 3;
    path.add(new Point(this.x, this.y));
    path.add(new Point(this.x+20, this.y+20));
}

view.viewSize = new Size(800,800)

var person1 = new Person(50,150,"red");
var person2 = new Person(75,200,"green");
person1.draw();
person2.draw();
