// File: script.js
// Description: A file to answer questions from JSAT 2 Part 1
// Author: Michael Deak
// Date: 08/08/2025
// Version: 1.0.0

// Q1.1 - Defining the array.
const myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(myArray);

// Q1.2 - Sorting the array in ascending order.
const sortedArray = myArray.sort(function (a, b) {
  return a - b;
});
console.log(sortedArray);

// Q1.3 - Adding three numbers to the sorted array and keeping it in ascending order.
sortedArray.splice(6, 0, 19, 23, 30);
const sortedArrayB = sortedArray.sort(function (a, b) {
  return a - b;
});
console.log(sortedArrayB);

// Q1.4 - Removing 8, 31 from the array and keeping the array in ascending order.
sortedArrayB.splice(2, 1);
sortedArrayB.splice(10, 1);
console.log(sortedArrayB);
