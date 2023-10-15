const sample = require('readline-sync');

let text = sample.questionFloat("Enter your written text mark :-");
let lab = sample.questionFloat("Enter your lab exam mark :-");
let assig = sample.questionFloat("Enter your assignment mark :-");
let total = (text * 70) / 100 + (lab * 20) / 100 + (assig * 10) / 100;
console.log("Your Overall Grade :- "+total);