const sample = require('readline-sync');

let bbc = sample.questionInt("Enter Number of Rows :-");
for (var i=1;i<=bbc;i++){
    let row = '';
    for (var j=1;j<=i;j++){
        row = row + j + ' ';
    }
    console.log(row);
}
