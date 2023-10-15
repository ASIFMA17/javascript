const sample = require('readline-sync');

var size = sample.questionInt("Enter array size :- ");

var array1 = [];

for(let i = 0; i < size; i++){
    array1[i] = [];
}

console.log("Enter array1 elements :-");
for ( i=0;i<size;i++){
    for ( j=0;j<size;j++){
        array1[i][j] = sample.questionFloat();
    }
}

var array2 = [];

for(let i = 0; i < size; i++){
    array2[i] = [];
}

console.log("Enter array2 elements :-");
for (var i=0;i<size;i++){
    for (var j=0;j<size;j++){
        array2[i][j] = sample.questionFloat();
    }
}

let sum = [];

for(let i = 0; i < size; i++){
    sum[i] = [];
}


for (var i=0;i<size;i++){
    for (var j=0;j<size;j++){
        sum[i][j] = array1[i][j] + array2[i][j];
    }
}

console.log("Sum of array1 and array2 :-");
for (i=0;i<size;i++){
    for (j=0;j<size;j++){
        console.log(""+sum[i][j]);
    }
}