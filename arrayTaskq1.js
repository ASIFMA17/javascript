// Make all elements squares and console output array

const numbers = [2,3,4,5,6,7,8];

// var res = numbers.map((elements) => elements*elements)
// console.log(res);



// 2.Add 2 to each element of the array and console output array

// const numbers = [2,3,4,5,6,7,8];

// let count = numbers.push(9,10);
// console.log(numbers);



// 3.Print only even numbers from the array

// const numbers = [2,3,4,5,6,7,8];

// let result = numbers.filter((element) => element % 2 == 0);

// console.log(result);


// 4.Find the largest element in the array

const largest = numbers.reduce((p,c) => {
    if (c > p){
        return c;
    }return p ;
},0);
console.log(largest);


// 5.Sort the array in descending order

// const numbers = [2,3,4,5,6,7,8];

// numbers.sort((a,b) => {
//     return b-a;
// });
// console.log(numbers);


// Check 10 is existing in the array, console boolean

// const numbers = [2,3,4,5,6,7,8];
// console.log(numbers.includes(10));