const sample = require('readline-sync');
let count=0;
let num = sample.questionInt("Enter number of rows :- ");
for (i=1;i<num;i++){
    let row = '';
    for (j=1;j<=i;j++){
        count++;
        row = row + count + '  ';
    }
    console.log(row);
}