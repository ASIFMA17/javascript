const sample = require('readline-sync');
// var abc = 10;
// var bbc = 40;
//  var sum = abc + bbc;
// console.log("Result of"+sum);

// let d = 34;
//  d = 67;
// console.log(d);

// const v=10;

// let person = [{
//     firstName:"asif",
//     age:17,
//     place:"panakked",
// },
// {
//     firstName:"hiihiihii",
//     age:8,
//     place:"panakked",
// }

// ];
// console.log(person[0]);
// console.log(person[1]);
// console.log(person[0].firstName);
// console.log(person[1].firstName);
// console.log(person);

// function display(num1,num2){
// var num3 = num1 + num2;
// console.log("sum of two numbers :-" +num3);
// }

// // console.log("Enter two numbers");
// var x = sample.questionInt("Enter two number\n" );
// let y = sample.questionInt();

// display(x,y);


// let fun = function(x,y) {
//     console.log("result is",+ x+y);  
// }

// var a = sample.questionInt("Enter two numbers :-\n");
// var b = sample.questionInt();

// fun(a,b);

// let ffr = () => console.log("Good moring");

// ffr();


// let bbc = (x,y) => console.log("sum of two numbers :-",+ x+y);


// var a = sample.questionFloat("Enter two numbers :-\n");
// var b = sample.questionFloat();
// bbc(a,b);

// let abc = (num) => { if(num>0){
//     console.log("Positive");
// }else{
//     console.log("Negative");
// }
// }

// abc(-5);

//Global scope

// var c1 = "html";
// let c2 = "css";
// const c3 = "Javascript";

// function message() {
//     console.log(c1);
//     console.log(c2);
//     console.log(c3);  
// }

// message();

// console.log(c1);
// console.log(c2);
// console.log(c3);


// function abc() {

//     if (true){
//         var c1 = "html"; //function scope
//         let c2 = "css"; //block scope
//         const c3 = "Javascript"; //block scope
//         console.log(c1);
//         console.log(c2);
//         console.log(c3);
//     }

//     console.log(c1);
//     console.log(c2);
//     console.log(c3);  
// }

// abc();



//callback function

// var hello=function(ffr,data){
//    console.log(" Data: "+ data + "Value:" + ffr);
// }

// var hey=function(callback){

//    callback(7,"Ronaldo");
// }

// hey(hello);

// function abc(x,y) {
   
//    console.log(" Jersey No: "+ y + " Player Name is " + x);
   
// }

// function bbc(callback) {

//    var x=sample.question("Enter you name :-\n");
//    var y=sample.questionInt("Enter your Jersey number :-\n");
//    callback(x,y);
   
// }

// bbc(abc);


//Exception handling


try {

   let age = sample.questionInt("Enter your age :-\n");

   if(age < 18 ){
      throw Error("You are minor!");
   }
   console.log("Access granted");
   
} catch (error) {
   console.log(error.message); // message //stack
}
finally{
   console.log("Program end");
}







