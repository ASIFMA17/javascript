const sample = require('readline-sync');

var day = sample.questionInt("Enter a number (1 to 7) :-");

switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Firday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalud Entry");
        break;
}