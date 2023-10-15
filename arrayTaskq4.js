var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5g"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite",30000,"mediatek","LED","4g"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5g"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4g"]
]

// Print all mobile names

// mobiles.forEach((mob) => console.log(mob[2]));


// Print all mobile prices

// mobiles.forEach((mob) => console.log(mob[3]));


// 3.Print only mobiles with Samsung brand

// let result = mobiles.filter((mob) => mob[1] == "samsung");
// console.log(result);


// 4.Print all mobile phones below 25000

// let result = mobiles.filter((elements) => ( elements[3] < 25000 ));
// console.log(result);



// 6.List all 5g mobile names

// let result = mobiles.filter((elements) => ( elements[6] == "5g"));
// console.log(result);


// 7.List all 5g mobiles under 35000

// let result = mobiles.filter((elements) => ( elements[6] == "5g" ) && ( elements[3] < 35000 ));
// console.log(result);



// 8.List all Samsung mobile whose band=4g and display type is AMOLED

let result = mobiles.filter((elements) => ( elements[6] == "4g" ) && ( elements[1] == "samsung") && 
( elements[5] == "AMOLED"));
console.log(result);
