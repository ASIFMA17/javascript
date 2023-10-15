let employee = [
    [1,"ram","10 years",35],
    [2,"anil","2 years",25],
    [3,"nikhil","4 years",28],
    [4,"nikhil","4 years",25],
];

// 1. Check employee anil is in the array or not return a Boolean value

// let elmployeeChecking = employee.some( (element) => element[1] == "anil" );
// console.log(elmployeeChecking);



// 2. Find the employee details whose id is 02

// let checkingId = employee.find((element) => element[0] == 2);
// console.log(checkingId);



// 3. Find all the employees whose age is 25

function checkingAge(age){
    return employee.filter((elements) => (elements[3] === age));
}
console.log(checkingAge(25));
