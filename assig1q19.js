const sample = require('readline-sync');

let income = sample.questionFloat("Enter Your Annual Income :- ");
let res;
if (income < 250000){
    console.log("No Tax");
}else if (income <= 500000){
    res = (income * 5)/100;
    console.log("Income Tax Amount :- "+res);
}else if (income <= 1000000){
    res = (income * 20)/100;
    console.log("Income Tax Amount :- "+res);
}else if (income <= 5000000){
    res = (income * 30)/100;
    console.log("Income Tax Amount :- "+res);
}