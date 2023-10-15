// 8. Solve the below questions using this array using array methods
var covid_data = [
    [1, "tvm", 40000, 200, 38000, 8, 5],
    [2, "kollam", 35000, 250, 33000, 7, 3],
    [3, "kottayam", 50000, 500, 45000, 5, 2],
    [4, "alapuzha", 25000, 150, 24000, 9, 5],
    [5, "ekm", 70000, 500, 65000, 9, 5],
    [6, "thrissur", 65000, 550, 60000, 8, 7],
    [7, "iduky", 10000, 50, 9500, 9, 6],
]

// 1. Highest test +ve case district

// let highPositive = covid_data.reduce((p, c) => {
//     return c[2] > p[2] ? c : p;
// }, covid_data[0]);
// console.log( highPositive[1]);



// 2. District with highest first dose vaccination rate 

// let highVaccination = covid_data.reduce((p, c) => {
//     return c[3] > p[3] ? c : p;
// }, covid_data[0]);
// console.log( highVaccination[1]);



// 3. District with lowest death cases

let highDeath = covid_data.reduce((p, c) => {
    return c[5] < p[5] ? c : p;
}, covid_data[0]);
console.log( highDeath[1]);



// 4. Sort district with +ve cases

// covid_data.sort(function (a,b){
//     return b[2] - a[2];
// });
// console.log(covid_data);



// 5. Sort district based on first dose

// covid_data.sort(function (a,b){
//     return b[3] - a[3];
// });
// console.log(covid_data);



// 8. Is there any districts with +ve cases > 60000

// let checkingCase = (data) => {
//     return covid_data.filter((elements) => (elements[2] > data))
// };
// console.log(checkingCase(60000));



// 7. Print thrissure details

// function checkinData(data){
//     return covid_data.filter((elements) => ( elements[1] == data ));
// }
// console.log(checkinData("thrissur"));



// 8. Total number of +ve cases


// covid_data.forEach((element) => console.log(element[2]));



// 9. Total number of cured cases 


// covid_data.forEach((elements) => console.log(elements[4]));



// 10. Cured number of idukky


// const CuredCases = covid_data.find((elements) => elements[1] === "iduky")[4];
// console.log( CuredCases);