const sample = require('readline-sync');

let circle = () => {
    var pi = 3.14;
    var radius = sample.questionFloat("Enter the radius of Circle :- ");
    var area = pi * radius * radius;
    return area;
}
let square = () => {
    var length = sample.questionFloat("Enter the length of Square :- ");
    var area = length * length;
    return area;
}
let rectangle = () => {
    var width = sample.questionFloat("Enter width of the Rectangle :- ");
    var hieght = sample.questionFloat("Enter height of the Rectangle :- ");
    var area = width * hieght;
    return area;
}
let triangle = () => {
    var base = sample.questionFloat("Enter base of the Triangle :- ");
    var hiegth = sample.questionFloat("Enter height of the Tringle :- ");
    var area = (base * hiegth) / 2;
    return area;
}

var res;
console.log("Chose operation :");
console.log("1.Area of the Circle");
console.log("2.Area of the Square");
console.log("3.Area of the Rectangle");
console.log("4.Area of the Triangle");
res = sample.questionInt("Enter Your Choice :- ");
var abc;
switch (res) {
    case 1:
        abc = circle();
        console.log("Area of the Circle :- "+abc);
        break;
    case 2:
        abc = square();
        console.log("Area of the Square :- "+abc);
        break;
    case 3:
        abc = rectangle();
        console.log("Area of the Rectangle :- "+abc);
        break;
    case 4:
        abc = triangle();
        console.log("Area of the Triangle :- "+abc);
        break;
    default:
        console.log("Invalid Entry");
        break;
}
