const employees = [
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"mrkt",1991,2010],
    [1004,"tom",40000,"ba",1990,2015],
    [1005,"ajesh",35000,"developer",2010,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

// 1.Print all Employee details

// employees.forEach((elements) => console.log(elements));


// 2.Print all employees names

// employees.forEach((elements) => console.log(elements[1]));


// 3.Print employee details have salary above 30,000

// let result = employees.filter((elements) => (elements[2] > 30000) );
// console.log(result);


// 4.Print employees experience

// employees.forEach((elements) => console.log(elements[5] - elements[4] ) ); 



// 5. Print the maximum salary

const maximumSalary = employees.reduce((p,c) => {
    if (c[2] > p[2]){
        return c[2];
    }return p[2];
},0);
console.log(maximumSalary);



// 6. Second highest salary

// 7. Lowest salary  

// 8. Number of employees

// console.log(employees.length);



// 9. Highest salary among developers
