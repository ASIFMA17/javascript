const sample = require('readline-sync');

var n = sample.questionInt("Enter a positive number :-");

var flag=0;
for (i=2;i<n/2;i++){
    if (n % i == 0){
        flag=1;
        break;
    }
}
if (n==1){
    console.log("Please Enter >1");
}else if (flag==0){
    console.log("Enter number is a prime number");
}else{
    console.log("Enter number is not a prime number");
}