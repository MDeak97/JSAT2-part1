// File: script.js
// Description: A file to answer questions from JSAT 2 Part 1
// Author: Michael Deak
// Date: 08/08/2025
// Version: 1.0.0

// Defining the array
const myArray = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20];
console.log(myArray);

// Sorting the array in ascending order
const sortedArray = myArray.sort(function (a, b) {
  return a - b;
});
console.log(sortedArray);

// Adding three numbers to the sorted array and keeping it in ascending order.
sortedArray.splice(6, 0, 19, 23, 30);
const sortedArrayA = sortedArray.sort(function (a, b) {
  return a - b;
});
console.log(sortedArrayA);
