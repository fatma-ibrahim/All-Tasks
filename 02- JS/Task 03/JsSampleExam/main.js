console.log("1- Create Function sumObjectValues()");
function sumObjectValues(obj) {
  let sum = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      console.log(`Processing key: ${key}, value: ${value}`);
      sum += value;
    }
  }
  return sum;
}

const exampleObj = { a: 1, b: "string", c: 2, d: 3 };
console.log(sumObjectValues(exampleObj)); // 6

// ============================================================

// console.log("2- Show the execution of 3 asynchronous block of code");
function asyncTask1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2- Show the execution of 3 asynchronous block of code");
      console.log("Task 1");
      resolve();
    }, 1000);
  });
}

function asyncTask2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2");
      resolve();
    }, 1000);
  });
}

function asyncTask3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3");
      resolve();
    }, 1000);
  });
}

async function executeTasks() {
  await asyncTask1();
  await asyncTask2();
  await asyncTask3();
}

executeTasks();

// ============================================================

console.log("3- Get the maximum value from a numbers array");
function findMax(arr) {
  let max = arr[0];
  let maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }

  return { max, maxIndex };
}

const numbers = [1, 3, 7, 4, 9, 2];
console.log(findMax(numbers));

// ============================================================

console.log("4- Write a function which accepts two valid dates");
function dateDifferenceInDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000;
  const diffInMins = Date.parse(date2) - Date.parse(date1);
  const diffDays = Math.floor(diffInMins / oneDay);
  return diffDays;
}

console.log(dateDifferenceInDays("2024-01-05", "2024-07-06"));

// ============================================================

// console.log("5- Design a Calulator interface for 2 number inputs");
function add() {
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  const result = num1 + num2;
  document.querySelector("#result").textContent = result;
}

function subtract() {
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  const result = num1 - num2;
  document.querySelector("#result").textContent = result;
}

function multiply() {
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  const result = num1 * num2;
  document.querySelector("#result").textContent = result;
}

function divide() {
  const num1 = parseFloat(document.querySelector("#num1").value);
  const num2 = parseFloat(document.querySelector("#num2").value);
  if (num2 === 0) {
    alert("Cannot divide by zero!");
    return;
  }
  const result = num1 / num2;
  document.querySelector("#result").textContent = result;
}

// ============================================================

console.log(
  "6- Write a function which can return multiple values from a function"
);
function calculateCircle(radius) {
  const areaCalc = Math.PI * radius * radius;
  const perimeterCalc = 2 * Math.PI * radius;
  return {
    area: areaCalc,
    perimeter: perimeterCalc,
  };
}

const circleData = calculateCircle(5);
console.log("Area:", circleData.area);
console.log("Perimeter:", circleData.perimeter);

// ============================================================

console.log("7- Write a function to reverse an array");
function reverseArray(array) {
  array.reverse();
  return array;
}

const originalArray = [1, 2, 3, 4];
const reversedArray = reverseArray(originalArray);
console.log("Original array:", originalArray);
console.log("Reversed array:", reversedArray);

// ============================================================

console.log("8- Write a function that converts an object into an array");
function objectToArray(obj) {
  return Object.entries(obj);
}

const myObject = { a: 1, b: 2 };
const keyValueArray = objectToArray(myObject);
console.log(keyValueArray); // Output: [["a", 1], ["b", 2]]

// ============================================================
// Bonus ++

console.log("1- Write a function which can convert the time");
function convertTimeFormat(timeString) {
  // Split the time into two parts: time (hours:minutes) and period (AM/PM)
  const [time, modifier] = timeString.split(" ");

  // Split the time into hours and minutes
  let [hours, minutes] = time.split(":");

  // Convert hours to integer
  hours = parseInt(hours, 10); // The second argument 10 specifies that the string should be parsed as a decimal (base 10) number

  // If the hours are 12 and period is AM, set them to 00
  if (hours === 12 && modifier === "AM") {
    hours = 0;
  }
  // If the period is PM and the hours are not 12, add 12 to the hours to convert to 24-hour format
  else if (modifier === "PM" && hours !== 12) {
    hours += 12;
  }

  // Format the hours to always have two digits and return the time in 24-hour format
  return `${hours.toString().padStart(2, "0")}:${minutes}`;
}

// Example usage:
console.log(convertTimeFormat("02:30 PM"));
console.log(convertTimeFormat("12:00 AM"));

// ============================================================

console.log("2- Make this syntax possible: var a = add(2)(3);");
function add(x) {
  return function (y) {
    return x + y;
  };
}

const a = add(2)(3);
console.log(a);

// ============================================================

console.log(
  "3- Check if the user with the name 'John' exists in the array of objects"
);
const users = [
  { name: "Ali" },
  { name: "Ahmed" },
  { name: "John" },
  { name: "Mostafa" },
];

let userExists = false;

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "John") {
    userExists = true;
    break;
  }
}

console.log(userExists);
