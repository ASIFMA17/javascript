// find the common elements from these two arrays using for loop

var arr1 = [10, 11, 20, 21];
var arr2 = [11, 12, 20, 21];

var commonElements = [];

for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            commonElements.push(arr1[i]);
            break;
        }
    }
}
console.log(commonElements);

