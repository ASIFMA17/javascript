const sample = require('readline-sync');

var size = sample.questionInt("Enter array size :-\n");
 
let array1=[size];
console.log("Enter array1 elements :-");
for (var i=0;i<size;i++){
    array1[i]=sample.questionFloat();
}

let array2=[size];
console.log("Enter array2 elements :-");
for (var i=0;i<size;i++){
    array2[i]=sample.questionFloat();
}

var temp;
for (var i=0;i<size;i++){
    temp = array1[i];
    array1[i] = array2[i];
    array2[i] = temp;
}

console.log("Array1 Swaping :-");
for (i=0;i<size;i++){
    console.log(""+array1[i]);
}

console.log("Array2 Swaping :-");
for (i=0;i<size;i++){
    console.log(""+array2[i]);
}