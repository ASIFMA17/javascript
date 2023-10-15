const sample = require('readline-sync');

var p = sample.questionInt("Enter Principal Amount :-\n");
var r = sample.questionFloat("Enter Interet Rate :-\n");
var n = sample.questionFloat("Enter Number of Years :-\n");

var si = (p*r*n)/100;

console.log("Simple Interest :-"+si);