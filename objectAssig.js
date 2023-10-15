const sample = require('readline-sync');
// 1. Create an object with properties eid,ename,salary,designation

// var propertice = {
//     id : 1 , 
//     name : "Faha" ,
//     designation : "Web develaper",
// }

// console.log(propertice);


// 2. Check employee experience in object and if not add the key and values as 1 if already exist increment 1;

// var propertice = {
//     id: 1,
//     name: "Faha",
//     designation: "Web develaper",
// }

// 'Experience' in propertice ? propertice.Experience ++ : propertice.Experience = 1;

// console.log(propertice);


// 3. Solve the below questions using this Object


// var student = {
//     name: "ahaan",
//     age: 25,
//     course: "ms"
// }

// a. print course of the student

// console.log(student.course);

// b. check gender is avaialable in the student object - retun true or false

// "genter" in student ? console.log("true") : console.log("flase");

// c. add gender key and value to the student object

// student.genter = 'male';
// console.log(student);

// d. add total marks key to the student object

// student.totalMark = 147;
// console.log(student);

// e. if total > 145 add grade key Aplus else A

// student.totalMark = 147;
// student.totalMark > 145 ? console.log("A Plus") : console.log("A");



// 4. Count the words in this variable var text = "hello hai hello hai";

var text = "hello hai hello hai";

let res = text.split(" ");

let lng = res.length;

console.log("count of words :- " + lng);


// 5. Create function for the below actions using this object

// var users = {
//     1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone",transactions:[] },
//     1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo" ,transactions:[]},
//     1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree",transactions:[] },
//     1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour",transactions:[] },

// }



// a. Validate account. Return true if account exists else return false

// let valiDation = (x) => {
//     return x in users;
// }
// let ac = sample.questionInt("Enter Account Number :-");
// console.log(valiDation(ac));



// b. Authenticate, return 1 if account and password matches, else return -1

// let ac = sample.questionInt("Enter Account Number :-");
// let pass = sample.question("Enter password :-");

// let valiDation = (x) => {
//     return x in users;
// }

// let authentication = (Ac,Pass) => {
//     if(valiDation(ac)){
//         let account = users[Ac];
//         if (account.password === Pass){
//             return 1;
//         }else{
//             return -1;
//         }

//     }else{
//         console.log("not valid this account number");
//     }
// }

// console.log(authentication(ac,pass));



// c. Balance Enquiry

// let ac = sample.questionInt("Enter Account Number :-");
// let pass = sample.question("Enter password :-");

// let valiDation = (x) => {
//     return x in users;
// }

// let authentication = (Ac,Pass) => {
//     if(valiDation(Ac)){
//         let account = users[Ac];
//         if (account.password === Pass){
//             return 1;
//         }else{
//             return -1;
//         }

//     }else{
//         console.log("not valid this account number");
//     }
// }

// let balance = (Ac,Pass) => {
//     if (authentication(Ac,Pass)){
//         let accound = users[Ac];
//         return accound.balance;
//     }
// }

// console.log(balance(ac,pass));



// d. Transfer fund from an account

// let fromAccount = sample.questionInt("Enter From Account Number :-");
// let password = sample.question("Enter Password :-");
// let toAccount = sample.questionInt("Enter To Account Number :-");
// let amound = sample.questionFloat("Enter Amount :-")

// let valiDation = (x) => {
//     return x in users;
// }

// let authentication = (Ac,Pass) => {
//     if(valiDation(Ac)){
//         let account = users[Ac];
//         if (account.password === Pass){
//             return 1;
//         }else{
//             return -1;
//         }

//     }else{
//         ''
//     }
// }

// let balance = (Ac,Pass) => {
//         if (authentication(Ac,Pass)){
//             let accound = users[Ac];
//             return accound.balance;
//         }
//     }

// let fundTransfer = (FromAc,Pass,ToAc,amt) => {
//     let currentBalance = balance(FromAc,Pass);
//     if(currentBalance){
//         valiDationFromAn = valiDation(ToAc);
//         if (valiDationFromAn){
//             let FromAccount = users[FromAc];
//             let TransferAccount = users[ToAc];
//             if (currentBalance >= amt){
//                 FromAccount = FromAccount.balance - amt;
//                 TransferAccount = TransferAccount.balance + amt;
//                 console.log(" ");
//                 console.log("Transfer Amound :" + amt);
//                 console.log(" ");
//                 console.log("Tranfer Accound Blance :" + TransferAccount);
//                 console.log(" ");
//                 console.log("From Account Debited :" + amt);
//                 console.log(" ");
//                 console.log("From Accound Balance :" + FromAccount);
//             }else{
//                 console.log("insufficint balance");
//             }
//         }else{
//             console.log("To Account Number Invalid");
//         }
//     }else{
//         console.log("From accound number and password not match");
//     }

// }

// fundTransfer(fromAccount,password,toAccount,amound);



// 6. Solve the following questions using this Object

// var users = {
//     1000: { accno: 1000, personName: "ram", balance: 5000, password: "userone", transactions: [{ creditTransactions: [] }, { debitTransactions: [] },] },
//     1001: { accno: 1001, personName: "ravi", balance: 7000, password: "usertwo", transactions: [{ creditTransactions: [] }, { debitTransactions: [] },] },
//     1002: { accno: 1002, personName: "raju", balance: 8000, password: "userthree", transactions: [{ creditTransactions: [] }, { debitTransactions: [] },] },
//     1003: { accno: 1003, personName: "vivek", balance: 15000, password: "userfour", transactions: [{ creditTransactions: [] }, { debitTransactions: [] },] },

// }

// a. print 1000 's details

// console.log(users[1000]);


// b. print balance of 1001

// console.log(users[1001].balance);


// c. print person name of 1001

// console.log(users[1001].personName);


// d. check the account number 1005 exists or not

// let abc = sample.questionInt("Enter account number :-");

// let valiDation = (x) => {
//     return x in users;
// }



// console.log(valiDation(abc));


// e .Define a function to grant or deny access

// let ac = sample.questionInt("Enter account number :-");
// let pass = sample.question("Enter Password :-");

// let valiDation = (x) => {
//     return x in users;
// }

// let authentication = (Ac,Pass) => {
//     if (valiDation(Ac)) {
//         let account = users[Ac];
//         if(account.password === Pass){
//             return console.log("Grant access success");
//         } else {
//             return console.log("Grand access not success");
//         }
//     }else{
//         console.log("Account number Invalid");
//     }
// }

// authentication(ac,pass);


// f. Define function to Transfer fund from an account to another account

// let FromAc = sample.questionInt("Enter From Account Number :-");
// let password = sample.question("Enter Password :-");
// let ToAc = sample.questionInt("Enter To Account Number :-")
// let amount = sample.questionFloat("Enter Transfer Amound :-")

// let valiDation = (x) => {
//     return x in users;
// }

// let authentication = (Ac, Pass) => {
//     if (valiDation(Ac)) {
//         let account = users[Ac];
//         if (account.password === Pass){
//             return 1;
//         }else{
//             return -1;
//         }
//     }else{
//         ''
//     }
// }

// let balance = (Ac,Pass) =>{
//     if (authentication(Ac,Pass)) {
//        let account = users[Ac];
//        return account.balance
//     }
// }

// let FundTransfer = (fromAc,Pass,toAc,amt) => {
//     let currentBalance = balance(fromAc,Pass)
//     if(currentBalance){
//         let valiDationToAc = valiDation(toAc);
//         if(valiDationToAc){
//             let FromAccount = users[fromAc];
//             let TranferAccount = users[toAc];
//             if(currentBalance >= amt){
//                 FromAccount = FromAccount.balance - amt;
//                 TranferAccount = TranferAccount.balance + amt;
//                 console.log(" ");
//                 console.log("Transfer Amound :" + amt);
//                 console.log(" ");
//                 console.log("Transfer Account Balance :" + TranferAccount);
//                 console.log(" ");
//                 console.log("From Account Debited :" + amt);
//                 console.log(" ");
//                 console.log("From Account Balance :" + FromAccount);
//             }else{
//                 console.log("insufficint balance");
//             }
//         }else{
//             console.log("To Account Invalid");
//         }
//     }else{
//         console.log("From account number and password not match");
//     }
// }
// console.log(FundTransfer(FromAc,password,ToAc,amount));



// g. Define a function for account balance check

// let ac = sample.questionInt("Enter Account Number :-");
// let pass = sample.question("Enter Password :-");

// let valiDation = (x) => {
//     return x in users;
// }

// let authentication = (Ac, Pass) => {
//     if (valiDation(Ac)) {
//         let account = users[Ac];
//         if (account.password === Pass){
//             return 1;
//         }else{
//             return -1;
//         }
//     }else{
//         console.log("Account Number Invalid");
//     }
// }

// let balance = (Ac,Pass) =>{
//     if (authentication(Ac,Pass)) {
//        let account = users[Ac];
//        return account.balance
//     }
// }

// console.log(balance(ac,pass));
