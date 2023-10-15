const sample = require('readline-sync');

let getarray = (num1) => {
    var array1 = [];

    for (i = 0; i < num1; i++) {
        array1[i] = [];
    }

    console.log("Enter array1 elements :-");
    for (i = 0; i < num1; i++) {
        for (j = 0; j < num1; j++) {
            array1[i][j] = sample.questionFloat();
        }
    }

    var array2 = [];


    for (i = 0; i < num1; i++) {
        array2[i] = [];
    }

    console.log("Enter array2 elements :-");
    for (i = 0; i < num1; i++) {
        for (j = 0; j < num1; j++) {
            array2[i][j] = sample.questionFloat();
        }
    }

    var sum = [];

    for (i=0;i<num1;i++){
        sum[i] = [];
    }

    for (i=0;i<num1;i++){
        for (j=0;j<num1;j++){
            sum[i][j] = array1[i][j] + array2[i][j];
        }
    }

    return sum;
}

let displayarray = (num1,abc) => {

    console.log("Sum of array1 and array2 :-");
    for (i=0;i<num1;i++){
        for (j=0;j<num1;j++){
            console.log(abc[i][j]);
        }
    }
}

var size = sample.questionInt("Enter array size :-");

var bbc = getarray(size);
displayarray(size,bbc);





