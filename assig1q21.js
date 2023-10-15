function multiplyAdjacentValues(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i] * arr[i+1]);
    }
    return result;
  }
  
  
  function main() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
  
    readline.question('Enter the array limit:\n', limit => {
      limit = parseInt(limit, 10);
    


if (isNaN(limit) || limit <= 0) {
    console.log('Invalid array limit.');
    readline.close();
    return;
  }


  readline.question('Enter the values of the array separated by spaces:\n', input => {
    const inputArray = input.split(' ').map(value => parseInt(value, 10));


    if (inputArray.length < 2) {
      console.log('Please enter at least two values in the array.');
      readline.close();
      return;
    }


    const outputArray = multiplyAdjacentValues(inputArray);


    console.log('Output:');
    console.log(outputArray.join(' '));
    readline.close();
  });
 });
}


main()  