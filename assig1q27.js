const sample = require('readline-sync');

let get_height = () => { 
    var my_height = sample.questionFloat("Enter your height :-");

    try {
        if (my_height < 8) {
            throw Error("TinyHeight Error");
        } else if (my_height > 7) {
            throw Error("HugeHeightError");
        } else if (isNaN(my_height)) {
            throw Error("notANumberError")
        } else {
            console.log(`Your height is ${my_height}`);
        }
    } catch (error) {
        console.log(error.message);
    }

}

get_height();