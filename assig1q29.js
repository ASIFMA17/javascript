const sample = require('readline-sync');

let arraySum = (size) => {

    let myarray = [size];
    console.log("Enter array elements :-");
    for (i=0;i<size;i++){
        myarray[i] = sample.questionFloat();
    }

    let sum=0;
    for (i=0;i<size;i++){
        sum = sum + myarray[i];
    }
    return sum;
}
let myfilter = (callback) => {
    let size = sample.questionInt("Enter array size :- ");
    var sum = callback(size);
    console.log("Sum of array :- "+sum);
}

myfilter(arraySum);

