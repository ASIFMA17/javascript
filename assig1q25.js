const sample = require('readline-sync');

let book1 = () => {
    var readingStatus = true;
    if (readingStatus = true) {
        console.log("Already read 'The Road Ahead' by Bill Gates");
    }
}
let book2 = () => {
    var readingStatus = true;
    if (readingStatus = true) {
        console.log("Already read  'Walter Isaacson' by Steve Jobs");
    }
}
let book3 = () => {
    var readingStatus = true;
    if (readingStatus = true) {
        console.log("Already read 'Suzanne Collins' by Mockingjay: The Final Book of The Hunger Games");
    }
}

const choice = sample.questionInt("Select a book  to know the reading status :" + "\n" + "1.The Road Ahead" +
 "\n"+ "2.Walter Isaacson" + "\n" + "3.Suzanne Collins" + "\n");

switch (choice) {
    case 1:
        book1();
        break;
    case 2:
        book2();
        break;
    case 3:
        book3();
        break;
    default:
        console.log("Invalid Entry");
        break;
}