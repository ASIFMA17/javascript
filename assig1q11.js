const sample = require('readline-sync');

var size = sample.questionInt("Enter array size :- ");

let bbc = [size];
console.log("Enter array elements :-");
for (i=0;i<size;i++){
    bbc[i] = sample.questionFloat();
}

var sum = 0;
for (i=0;i<size;i++){
    if (bbc[i] % 2 == 0){
        sum++;
    }
}
console.log("Sum of even numbers in array :- "+sum);