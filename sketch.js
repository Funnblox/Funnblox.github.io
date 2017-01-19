var angle = 10
var x = 0
var y = 0
var slider;
var centerX = 250
var centerY = 250
var sliderX = 10
var sliderY = 10
var pointX = 0
var pointY = 0
var radius = 100
var numberButton;
var variableButton;
var variableSlider
var numberSlider
var currentSlider
var p = 0
function variable() {
  var val = variableSlider.value();
 angle = val
 var pointX = xOnCircle(centerX, centerY, radius, angle * -1)
 var pointY = yOnCircle(centerX, centerY, radius, angle * -1)


 clear()
 background(255)

 fill(255)
  //circle
 ellipse(centerX, centerY, radius * 2)
  //circle on circle
 ellipse(pointX, pointY, 10)
  //diameter line
 line(centerX - radius, centerY, xOnCircle(centerX, centerY, radius, 0), yOnCircle(centerX, centerY, radius, 0))
  //line between circle and the center
 line(centerX, centerY, pointX, pointY)
  //angle text
 fill(0)
 text("Angle = a", sliderX + 20, sliderY + 30)
  //opposite line, line between oncircle point and diameter
 line(pointX, centerY, pointX, pointY)
 noFill()
  //arc
 if (angle > 0) {
  arc(centerX, centerY, radius / 2, radius / 2, 0 - radians(angle), 0)
 }
 fill(0)
  //radius size
 text("h", (pointX + centerX) / 2 - 5, (pointY + centerY) / 2 - 5)
  //Opposite
 fill(0)
 text("opposite = y", sliderX + 20, sliderY + 50)
  //adjacent
 text("adjacent= x", sliderX + 20, sliderY + 70)
  //sin
 text("sin= y/h", sliderX + 20, sliderY + 90)
  //cosine
 text("cosine=x/h", sliderX + 20, sliderY + 110)
  //tangent
 text("tangent=y/x", sliderX + 20, sliderY + 130)
  //coordinates
 text("x, y", xOnCircle(centerX, centerY, radius + 20, angle * -1), yOnCircle(centerX, centerY, radius + 20, angle * -1))
 text("a = "+ val + "°", sliderX + 140, sliderY + 400)
 numberButton.show()
 variableButton.hide()
 variableSlider.show()
 numberSlider.hide()
}


function number() {
 clear()
 
 background(255)
 var val = numberSlider.value();
  angle = val
 var pointX = xOnCircle(centerX, centerY, radius, angle * -1)
 var pointY = yOnCircle(centerX, centerY, radius, angle * -1)

 fill(255)
  //circle
 ellipse(centerX, centerY, radius * 2)
  //circle on circle
 ellipse(pointX, pointY, 10)
  //diameter line
 line(centerX - radius, centerY, xOnCircle(centerX, centerY, radius, 0), yOnCircle(centerX, centerY, radius, 0))
  //line between circle and the center
 line(centerX, centerY, pointX, pointY)
  //angle text
 fill(0)
 text("Angle =" + val + "°", sliderX + 20, sliderY + 30)
  //opposite line, line between oncircle point and diameter
 line(pointX, centerY, pointX, pointY)
 noFill()
  //arc
 if (angle > 0) {
  arc(centerX, centerY, radius / 2, radius / 2, 0 - radians(angle), 0)
 }
 fill(0)
  //radius size
 text("1", (pointX + centerX) / 2 - 5, (pointY + centerY) / 2 - 5)
  //Opposite
 fill(0)
 text("opposite=" + abs(nf(pointY-centerY/100, 0, 2)) , sliderX + 20, sliderY + 50)
  //adjacent
 text("adjacent=" + abs(nf(pointX-centerX/100, 0, 2)), sliderX + 20, sliderY + 70)
  //sin
 text("sin=" + abs(nf(pointY-centerY/100, 0, 2)), sliderX + 20, sliderY + 90)
  //cosine
 text("cosine=" + abs(nf(pointX-centerX/100, 0, 2)), sliderX + 20, sliderY + 110)
  //tangent
 text("tangent=" + nf(abs(pointX - centerX) / abs(pointY - centerY),0,2) , sliderX + 20, sliderY + 130)
  //coordinates
 text(nf((pointX - 250) / 100,0,2) + ", " + (nf((pointY - 250)/-100,0,2)), xOnCircle(centerX, centerY, radius + 20, angle * -1), yOnCircle(centerX, centerY, radius + 20, angle * -1))
 text("Angle =" + val + "°", sliderX + 140, sliderY + 400)
 text("")

 variableButton.show()
 numberButton.hide()
 variableSlider.hide()
 numberSlider.show()
}


function setup() {
 createCanvas(1000, 1000)
 numberButton = createButton('Number');
 numberButton.position(sliderX + 80, sliderY + 362);
 numberButton.mousePressed(number);
 numberButton.hide()
  // numberButton.mousePressed(number);
 variableButton = createButton('Variable');
 variableButton.position(sliderX + 80, sliderY + 362);
 variableButton.mousePressed(variable);

 // variableButton.mousePressed(variable);
 variableSlider = createSlider(0, 360, 0);
 variableSlider.position(sliderX + 140, sliderY + 360);
 variableSlider.style('width', '200px');
  numberSlider = createSlider(0, 360, 0);
 numberSlider.position(sliderX + 140, sliderY + 360);
 numberSlider.style('width', '200px');
 val = 0
 angle = 0
 number();
 variableSlider.hide
 variableSlider.changed(variable);

numberSlider.changed(number);

}


function change() {
 console.log("hello")
}


function xOnCircle(centerX, centerY, radius, angle) {
 return (centerX + ((cos(radians(angle))) * radius));
 //x is equal to (cos (adjecent/hypotenuse))*hypotenuse to get adjacent, add original x to get x value
}


function yOnCircle(centerX, centerY, radius, angle) {
 return (centerY + ((sin(radians(angle))) * radius));
 //x is equal to (tan (opposite/hypotenuse))*adjacent to get opposite, add original y to get y value
}


function draw() {






}