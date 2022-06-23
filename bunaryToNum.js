///To Convert string into number parseInt(string) is used to covert string into number


// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Method 1: Using library methods
// In JavaScript, there exists a method parseInt(), that takes in two arguments first one is a string and second a number that represents a particular base, like 10 for decimal base, 2 for binary. This function parses the string argument and returns an integer of the specified radix ( base).

// In our case, to convert the array of binary to decimal, we can use the parseInt() function like this −

// const arr = [1, 0, 1, 1];
// const parseArray = arr => {
//    const binaryString = arr.join("");
//    return parseInt(binaryString, 2);
// };
// console.log(parseArray(arr));




// Method 2: Reducing the array
// In this method we iterate over the binary array and construct a decimal based on the corresponding binary numbers. We will use the left shift operator (<<) to shift the accumulated value to left by one bit every time and return the bitwise OR (|) of the shifted accumulated value and current value.

// The code for this using Bitwise Operator −

// const arr = [1, 0, 1, 1];
// const parseArray = arr => {
//    return arr.reduce((acc, val) => {
//       return (acc << 1) | val;
//    });
// };
// console.log(parseArray(arr));




//*************Convert Number to binary******************* */

//problem==>)Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// function addBinary(a,b) {
//     return (a+b).toString(2) 
//     }
//     console.log(addBinary(5,3));

//or
// function addBinary(a,b) {
//     var c = a + b;
//     var res = '';
//     while (c >= 1) {
//       var res = c % 2 + res;
//       c = Math.floor(c / 2);
//     }
//     return res;
//   }