// File: script.js
// Description: A file to answer questions from JSAT 2 Part 1
// Author: Michael Deak
// Date: 17/10/2025
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

// Q1.4 - Removing 8 and 31 from the array and keeping the array in ascending order.
sortedArrayB.splice(2, 1);
sortedArrayB.splice(10, 1);
console.log(sortedArrayB);

// Q1.5 - Creating a sequential search function to find a specific value within an array.
// Array we are searching
const searchArray = [20, 12, 55, 70, 100, 30, 28, 19, 18, 92, 66];
console.log(searchArray);

// Value we are searching for within array
let value = 28;
console.log(`Value: ${value}`);

// Creating Sequential search function
function sequentialSearch(arraySearch, target) {
  // Setting found variable to -1
  let found = -1;
  // Logging the array to search and the value to find
  console.log(`Array to search is: ${arraySearch}`);
  console.log(`Value to search is: ${value}`);
  // Loop through array
  for (i = 0; i < arraySearch.length; i++) {
    // Log out element
    console.log(`ArraySearch[${i}]: ${arraySearch[i]}`);
    // Test to see if we found target
    if (arraySearch[i] == target) {
      found = i;
      break;
    }
  }
  return found;
}
// Call function sequentialSearch
const result = sequentialSearch(searchArray, value);
// Output results
if (result == -1) {
  console.log(`The value of ${value} was not found`);
} else {
  console.log(`The value of ${value} was found at index ${result}`);
}

// Q1.6 - Creating a Binary search function to find a specific value within an array.
// Array we are searching
const searchArrayB = [13, 17, 90, 23, 66, 78, 100, 112, 16, 53];
console.log(searchArrayB);

// Value we are searching for within array
value = 1;
console.log(`Value: ${value}`);

// Creating Binary Search function
function binarySearch(arraySearch, target) {
  // Setting found variable to -1
  let found = -1;
  // Logging the array to search and the value to find
  console.log(`Array to search is: ${arraySearch}`);
  console.log(`Value to search is: ${value}`);

  // Declare start and end points of the array
  let start = 0;
  let end = arraySearch.length - 1;
  console.log(`Start: ${start}, End: ${end}`);

  // Loop through array while start does not meet the end
  while (start <= end) {
    // Find mid point
    let mid = Math.floor((start + end) / 2);
    console.log(`Mid: ${mid}`);
    // Test if value is present at the mid point
    if (arraySearch[mid] == target) {
      console.log(`ArraySearch[${mid}]: ${arraySearch[mid]}`);
      found = mid;
      break;
    } else if (arraySearch[mid] < target) {
      // Look at right side of array
      console.log(`ArraySearch[${mid}] : ${arraySearch[mid]}`);
      start = mid + 1;
      console.log(`Start: ${start}, End: ${end}`);
    } else {
      console.log(`ArraySearch[${mid}] : ${arraySearch[mid]}`);
      end = mid - 1;
      console.log(`Start: ${start}, End: ${end}`);
    }
  } // End of while loop
  return found;
}
// Call function binarySearch
const resultB = binarySearch(searchArrayB, value);
// Output results
if (resultB == -1) {
  console.log(`The value of ${value} was not found`);
} else {
  console.log(`The value of ${value} was found at index ${resultB}`);
}

// Q1.7 - View attached Excel file to see Test Plan
