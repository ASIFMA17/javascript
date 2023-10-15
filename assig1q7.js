const sample = require('readline-sync');

function multiplication(num1){

    for (var i=1;i<=10;i++){
        console.log(""+i+" * "+num1+ " = "+i*x);
    }
}

let x = sample.questionInt("Enter a Number Creating Multiplication Table:-");
multiplication(x);
