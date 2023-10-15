const sample = require('readline-sync');

var limit = sample.questionInt("Enter the limit :-");
var sum=0;
for (var i=1;i<=limit;i++){
    if(i % 2 ==1){
        sum=sum+i;
    }
}
console.log("Sum of all odd numbers :-"+sum);