const sample = require('readline-sync');

try {
    var my_string = 1;
        my_string.split().reverse().join();
} catch (err) {
    console.log(err.message);
} finally {
    console.log(typeof my_string);
}