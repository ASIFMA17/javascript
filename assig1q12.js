const sample = require('readline-sync');

var size = sample.questionInt("Enetr array size :- ");

var bbc = [size];
console.log("Enter array elements :-");
for (i=0;i<size;i++){
    bbc[i]=sample.questionFloat();
}

var temp;
for (i=0;i<size;i++){
    for (j=i+1;j<size;j++){
        if (bbc[i] < bbc[j]){
            temp = bbc[i];
            bbc[i] = bbc[j];
            bbc[j] = temp;
        }
    }
}
 
console.log("Sorted array :-");
for (i=0;i<size;i++){
    console.log(""+bbc[i]);
}