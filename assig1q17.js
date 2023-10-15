const sample = require('readline-sync');

var x = sample.questionFloat("Enter two numbers :-\n");
var y = sample.questionFloat();
var res;
console.log("Chose operation :");
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Divition");
console.log("Enter Your Choice :- ");
res = sample.questionInt();


var addition = (num1, num2) => {
    res = num1 + num2;
    return res;
}
var subtraction = (num1, num2) => {
    res = num1 - num2;
    return res;
}
var multiplication = (num1, num2) => {
    res = num1 * num2;
    return res;
}
var divition = (num1, num2) => {
    res = num1 / num2;
    return res;
}
var c;
switch (res) {
    case 1:
        c = addition(x, y);
        console.log("Result of :- " + c);
        break;
    case 2:
        c = subtraction(x, y);
        console.log("Result of :- " + c);
        break;
    case 3:
        c = multiplication(x, y);
        console.log("Result of :- " + c);
        break;
    case 4:
        c = divition(x, y);
        console.log("Result of :- " + c);
        break;
    default:
        console.log("Invalid Entry");
}

