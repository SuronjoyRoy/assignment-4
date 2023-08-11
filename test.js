// Calculate the cube of a number
// function cube(number) {
//     return Math.pow(number, 3);
//   }
  
//   // Example usage
//   const num = 3;
//   const cubeResult = cube(num);
//   console.log(cubeResult);
  
//   Problem 2
function matchFinder(str1, str2) {
    // Check if both input strings are provided
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return "Both input strings are required.";
    }
  
    // Validate that the input strings are not empty
    if (str1.trim() === '' || str2.trim() === '') {
      return "Input strings cannot be empty.";
    }
  
    // Search for the second string as a substring in the first string
    if (str1.includes(str2)) {
      return true;
    } else {
      return false;
    }
  }

console.log(matchFinder("John Doe", "ohn")); 
console.log(matchFinder("JavaScript", "Code"));   
console.log(matchFinder("Peter Parker", "Pen"));       
console.log(matchFinder("Peter Parker", "Pet"));

// problem 4

function findAddress(inputObject) {
  let street = inputObject.street;
  let house = inputObject.house || '__';
  let society = inputObject.society || '__';
  
  return `${street},${house},${society}`;
}

// Test cases
const input1 = { street: 10, house: "15A", society: "Earth Perfect" };
console.log(findAddress(input1));  // Output: 10,15A,Earth Perfect

const input2 = { street: 10, society: "Earth Perfect" };
console.log(findAddress(input2));  // Output: 10,__,Earth Perfect

const input3 = { street: 10 };
console.log(findAddress(input3));  // Output: 10,__,__ 

// problems 3

function sortMaker(arr) {
  let isNumber = true;
  let isEqual = true;
  
  // Check if the array contains exactly 2 elements
  if (arr.length !== 2) {
      return "Invalid Input";
  }
  
  // Check if both elements are numbers
  for (const element of arr) {
      if (typeof element !== 'number') {
          isNumber = false;
          break;
      }
  }
  
  // Check if the elements are equal
  if (arr[0] !== arr[1]) {
      isEqual = false;
  }
  
  // Process based on conditions
  // if (isNumber) {
  //     return arr.sort((a, b) => a - b);
  // } else if (isEqual) {
  //     return "equal";
  // } else {
  //     return "Invalid Input";
  // }
}

// Example usage
const array1 = [5, 3];
const result1 = sortMaker(array1);
console.log(result1); // Output: [3, 5]

const array2 = [2, 2];
const result2 = sortMaker(array2);
console.log(result2); // Output: "equal"

const array3 = [1, "hello"];
const result3 = sortMaker(array3);
console.log(result3); // Output: "Invalid Input"




  