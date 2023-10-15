const sample = require('readline-sync');

let mark = sample.questionFloat("Enter Your Total Mark :-")

if (mark >= 100 || mark <= 0){
    console.log("Invalid Entry");
}else if (mark >= 90){
    console.log("A Grade");
}else if (mark >= 80){
    console.log("B Grade");
}else if (mark >= 70){
    console.log("C Grade");
}else if (mark >= 60){
    console.log("D Grade");
}else if (mark >= 50){
    console.log("E Grade");
}else{
    console.log("Failed");
}