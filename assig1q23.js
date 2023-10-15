const sample = require('readline-sync');

let getarray = (size) => {
    var abc = [];

    for (i = 0; i < size; i++) {
        abc[i] = [];
    }

    console.log("Enter array elements :-");
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            abc[i][j] = sample.questionFloat();
        }
    }
    return abc;
}
let displayarray = (size, bbc) => {
    console.log("Elements of array :-");
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            console.log(""+bbc[i][j]);
        }
    }
}

var size = sample.questionInt("Enter array size :- ");
let abc = getarray(size);
displayarray(size, abc);