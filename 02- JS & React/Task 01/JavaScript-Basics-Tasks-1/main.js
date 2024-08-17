console.log("1- Check The Number Is Even or Odd");
let num = Number(
  prompt("Enter the Number to check if it is an Even or Odd Number : ")
);
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

// ============================================================

console.log("2- Fizz Buzz Game");
let number = Number(prompt("Enter the Number to play the Fizz Buzz Game : "));

if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(number);
}

// ============================================================

console.log("3- Reverse String for example welcome => emoclew");
function reverseWord(word) {
  return word.split("").reverse().join("");
}
console.log(reverseWord("welcome"));

// ============================================================

console.log("4- Compute Circle Area and Circumference");
function calculateCircle(radius) {
  if (isNaN(radius) || radius <= 0) {
    return "Invalid radius. Please enter a positive number.";
  }

  const pi = Math.PI;
  const area = pi * radius * radius;
  const circumference = 2 * pi * radius;

  return {
    area: area.toFixed(2),
    circumference: circumference.toFixed(2),
  };
}

const radius = prompt("Enter the circle's radius: ");
const results = calculateCircle(radius);

if (typeof results === "string") {
  console.error(results);
} else {
  console.log("Area:", results.area);
  console.log("Circumference:", results.circumference);
}

// ============================================================

console.log(
  "5- check two given numbers and return true if one of the number is 50 or if their sum is 50."
);
let x1 = 50,
  y1 = 50;
let result1 = x1 === 50 || y1 === 50 || x1 + y1 === 50;
console.log(`Result for (${x1}, ${y1}): ${result1}`);

let x2 = 10,
  y2 = 50;
let result2 = x2 === 50 || y2 === 50 || x2 + y2 === 50;
console.log(`Result for (${x2}, ${y2}): ${result2}`);

let x3 = 25,
  y3 = 15;
let result3 = x3 === 50 || y3 === 50 || x3 + y3 === 50;
console.log(`Result for (${x3}, ${y3}): ${result3}`);

let x4 = 20,
  y4 = 30;
let result4 = x4 === 50 || y4 === 50 || x4 + y4 === 50;
console.log(`Result for (${x4}, ${y4}): ${result4}`);

// ============================================================

console.log(
  "6- check from two given integers, whether one is positive and another one is negative."
);
let a1 = -10,
  b1 = 10;
let result5 = (a1 > 0 && b1 < 0) || (a1 < 0 && b1 > 0);
console.log(`Result for (${a1}, ${b1}): ${result5}`);

let a2 = -20,
  b2 = -20;
let result6 = (a2 > 0 && b2 < 0) || (a2 < 0 && b2 > 0);
console.log(`Result for (${a2}, ${b2}): ${result6}`);

let a3 = 30,
  b3 = -30;
let result7 = (a3 > 0 && b3 < 0) || (a3 < 0 && b3 > 0);
console.log(`Result for (${a3}, ${b3}): ${result7}`);

let a4 = 40,
  b4 = 40;
let result8 = (a4 > 0 && b4 < 0) || (a4 < 0 && b4 > 0);
console.log(`Result for (${a4}, ${b4}): ${result8}`);

// ============================================================

console.log(
  "7- check whether a given positive number is a multiple of 5 or a multiple of 8."
);
let numbers = Number(
  prompt("Enter the Number to check if a multiple of 5 or 8 : ")
);

if (numbers % 5 === 0 || numbers % 8 === 0) {
  console.log(`The number ${numbers} is a multiple of 5 or 8.`);
} else {
  console.log(`The number ${numbers} isn't a multiple of 5 or 8.`);
}

// ============================================================

console.log("8- find the largest of three given integers");
let num1 = 20;
let num2 = 50;
let num3 = 35;

let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

console.log(`The largest number is ${largest}`);

// ============================================================

console.log("9- Compute The sum of the numbers from 1 to 10");
var sum1 = 0;

for (let i = 1; i <= 10; i++) {
  sum1 += i;
}

console.log(`The sum of the numbers ${sum1}`);

// ============================================================

console.log(
  "10- display the pattern like right angle triangle using an asterisk."
);
let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}

// ============================================================

console.log("11- check whether a given number is positive or negative.");
let number1 = Number(
  prompt("Enter Your Number to check whether it is positive or negative : ")
);
if (number1 > 0) {
  console.log(`The number ${number1} is positive.`);
} else if (number1 < 0) {
  console.log(`The number ${number1} is negative.`);
} else {
  console.log(`The number ${number1} is zero.`);
}

// ============================================================

console.log("12- store elements in an array and print it.");
let Numbers = [];

for (let i = 0; i < 10; i++) {
  let element = prompt(`Enter element ${i + 1}: `);
  Numbers.push(element);
}

console.log("The elements of the array are:");
for (let i = 0; i < Numbers.length; i++) {
  console.log(`element - ${i} : ${Numbers[i]}`);
}

// ============================================================

console.log("13- print the sum of two numbers");
let num4 = Number(prompt("Enter the first sum Number : "));
let num5 = Number(prompt("Enter the second sum Number : "));
let sum2 = num4 + num5;

console.log(`${num4} + ${num5} = ${sum2}`);

// ============================================================

console.log("14- calculate the factorial of a given number");
let number2 = Number(prompt("Enter Your Number of factorial : "));
let factorial = 1;

for (let i = 1; i <= number2; i++) {
  factorial *= i;
}

console.log(`The factorial of ${number2} is ${factorial}`);

// ============================================================

console.log("15- Create Simple Calculator (+ , - , * , /)");
let num6 = Number(prompt("Enter the first number: "));
let num7 = Number(prompt("Enter the second number: "));
let sum3 = num4 + num5;
let diff = num4 - num5;
let mul = num4 * num5;
let div = num4 / num5;

console.log(`${num6} + ${num7} = ${sum3}`);
console.log(`${num6} - ${num7} = ${diff}`);
console.log(`${num6} * ${num7} = ${mul}`);
console.log(`${num6} / ${num7} = ${div}`);
