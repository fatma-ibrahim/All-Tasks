console.log("Q3: 1- Check if string is palindrome or not");
function isPalindrome(str) {
  str = str.toLowerCase();

  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("eye"));
console.log(isPalindrome("Welcome"));
console.log(isPalindrome("Racecar"));

// ============================================================

console.log("Q3: 2- 1- Use only if statement without else");
let number1 = Number(prompt("Enter Your Number (Even or Not) : "));
let isEven1;

if (number1 % 2 === 0) {
  isEven1 = true;
}
if (number1 % 2 !== 0) {
  isEven1 = false;
}

console.log(isEven1);

// ============================================================

console.log("Q3: 2- 2- Use ternary operator");
let number2 = Number(prompt("Enter Your Number (Even or Not)2 : "));
let isEven2 = number2 % 2 === 0 ? true : false;

console.log(isEven2);

// ============================================================

console.log("Q3: 3- Find Largest Number In Array");
const numbers = [10, 100, 50, 4];
let largestNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largestNumber) {
    largestNumber = numbers[i];
  }
}

console.log(largestNumber);

// ============================================================

console.log(
  "Q3: 4- Write a function that takes an integer hours and converts it to seconds."
);
function convertHoursToSeconds(hours) {
  // 1 hour = 3600 seconds
  const secondsInAnHour = 3600;
  return hours * secondsInAnHour;
}

console.log(convertHoursToSeconds(1)); // Output: 3600
console.log(convertHoursToSeconds(2.5)); // Output: 9000
console.log(convertHoursToSeconds(0)); // Output: 0
console.log(convertHoursToSeconds(10)); // Output: 36000

// ============================================================

console.log("Q3: 5- The Power of a Number");
let base = Number(prompt("Enter the base Number : "));
let exponent = Number(prompt("Enter the exponent Number : "));
let result = 1;

for (let i = 0; i < exponent; i++) {
  result *= base;
}

console.log(`${base}^${exponent} = ${result}`);

// ============================================================

console.log("Q4: Using html , css and js make this possible");
let body = document.querySelector("body");
let firstInput = document.querySelector("#f-input");
let secondInput = document.querySelector("#s-input");

function setGradientBackgroundToBody() {
  body.style.background = `linear-gradient(to right , ${firstInput.value} 
    ,${secondInput.value})`;
}

firstInput.addEventListener("input", setGradientBackgroundToBody);
secondInput.addEventListener("input", setGradientBackgroundToBody);

// ============================================================

console.log("Q5: 1- 1- Switch");
const keyNum1 = Number(prompt("enter key num : "));

switch (keyNum1) {
  case 1:
    console.log("The key is on");
    break;

  default:
    console.log("The key is off");
}

// ============================================================

console.log("Q5: 1- 2- Ternary Operator");
const keyNum2 = Number(prompt("enter key num : "));

console.log(keyNum2 === 1 ? "The key is on" : "The key is off");

// ============================================================

console.log("Q5: 2- Refactor this code using for loop");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
