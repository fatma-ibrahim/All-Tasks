// 1- Recursive Function
function recursiveLength(str) {
  // Base case: if the string is empty, return 0
  if (str === "") {
    return 0;
  } else {
    // Recursive case: return 1 plus the length of the rest of the string
    return 1 + recursiveLength(str.slice(1));
  }
}

console.log(recursiveLength("Fatma")); // Output: 5
console.log(recursiveLength("")); // Output: 0

// ------------------------------------------

// 2- Function to print the multiplication table
function printTableForTwelve() {
  const number = 12;

  for (let i = 1; i <= 12; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
  }
}

printTableForTwelve();

// ------------------------------------------

// 3- Function that returns the elements on odd positions
function elementsOnOddPositions(list) {
  let result = [];

  for (let i = 0; i < list.length; i++) {
    if (i % 2 !== 0) {
      result.push(list[i]);
    }
  }

  return result;
}

let myList = [10, 20, 30, 40, 50, 60];
let oddPositionElements = elementsOnOddPositions(myList);
console.log(oddPositionElements); // Output: [20, 40, 60]

// ------------------------------------------

// 4- Check If The Number Is Prime Or Not
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  if (num === 2) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(29)); // Output: true
/**
 * 1. Number is greater than 1: Yes, 29 > 1.
 * 2. Number is not 2: Yes, 29 is not 2.
 * 3. Number is not even: Yes, 29 is odd.
 * 4. Check for Divisors: We check odd numbers starting from 3 up to the square root of 29
 *    (which is approximately 5.39). We only need to check 3 and 5 because:
 *    - 29 % 3 = 2 (not divisible by 3)
 *    - 29 % 5 = 4 (not divisible by 5)
 * Since 29 is not divisible by any of these numbers, it has no divisors other than 1 and itself.
 * Therefore, 29 is a prime number.
 */

console.log(isPrime(2)); // Output: true
console.log(isPrime(10)); // Output: false

// ------------------------------------------

// 5- in Q5.html

// ------------------------------------------

// 6- Function that counts the number of vowels
function countVowels(str) {
  // Define a regular expression to match vowels (both lowercase and uppercase)
  const vowels = /[aeiouAEIOU]/g; // g => should be global

  // Match the vowels in the string and store the result in an array
  const matches = str.match(vowels);

  return matches ? matches.length : 0;
}

const exampleString = "Hello, World!";
console.log(countVowels(exampleString)); // Output: 3

// ------------------------------------------

// 7- in Q7.ts

// ------------------------------------------

// 8- in Q8.html & Q8.css

// ------------------------------------------

// 9- Provide one or more alternate implementations that will work as expected.
// Improved Code for Better Script Performance
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}

MyObject.prototype.getName = function () {
  return this.name;
};

MyObject.prototype.getMessage = function () {
  return this.message;
};

// Improved Code Using ES6 Classes
class MyObject2 {
  constructor(name, message) {
    this.name = name.toString();
    this.message = message.toString();
  }

  getName() {
    return this.name;
  }

  getMessage() {
    return this.message;
  }
}

// ------------------------------------------

// 10- in Q10.ts

// ++ Youtube Clone Task