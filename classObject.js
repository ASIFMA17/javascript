// constructor method

// class Bike{
//     constructor(){
//         let model_name;
//         let colour;
//         let price;
//     }
// }

// let b1 = new Bike();
// b1.model_name = "Hero Splender Plus";
// b1.colour = "red";
// b1.price = 50000;
// console.log("Bike model name :- " + b1.model_name +"\n Bike colour :- "+ b1.colour +"\n Bike Price :- "+ b1.price);


// class Bike {
//     constructor(a,b,c){
//         this.model_name = a;
//         this.colour = b;
//         this.price = c;
//     }
// }

// let b1 = new Bike("Hero Splender Plus","Black",50000);
// console.log(b1.model_name);
// console.log(b1.colour);
// console.log(b1.price);

// let b2 = new Bike("KTM","Black",200000);
// console.log(b2.model_name);
// console.log(b2.colour);
// console.log(b2.price);



// Prototype Method

// class Bike {
//     constructor (a,b,c){
//         this.model_name = a;
//         this.colour = b;
//         this.price = c;
//     }

//     // Prototype Method

//     bikeDeatails(){
//         console.log("Bike :" + this.model_name);
//         console.log("Clour :" + this.colour);
//         console.log("Price :" + this.price);
//     }
//     showPrice(){
//         console.log("Price of " + this.model_name + " is " + this.price);
//     }
// }

// let b1 = new Bike("Hero Splender Plus","Red",50000);
// let b2 = new Bike("KTM","Black",200000);

// b1.bikeDeatails();
// b1.showPrice();
// b2.bikeDeatails();
// b2.showPrice();




// Static Method

// class Bike {

//     constructor (){
//         let model_name ;
//         let colour ;
//         let price ;
//     }

//     // Static Method

//     static message(){
//         console.log("Bike :" + this.model_name + "\nColour :" + this.colour + "\nPrice :" + this.price);
//     }
// }

// Bike.model_name = " Hero Splender Plus ";
// Bike.colour = " Black ";
// Bike.price = " 50000 ";

// Bike.message();