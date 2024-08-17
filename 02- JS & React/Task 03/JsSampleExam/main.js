console.log("1- Create Function sumObjectValues()");
const testObj = {
  a: 10,
  b: "text",
  c: 20,
  d: true,
  e: 30,
};

Object.prototype.num = 50;

function sumObjectValues(obj) {
  let total = 0;
  for (let key of Object.keys(obj)) {
    if (typeof obj[key] === "number") {
      total += obj[key];
    }
  }
  console.log(total);
}

sumObjectValues(testObj); // Output should be 60

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

console.log("5- Design a Calulator interface for 2 number inputs");
function calulator(num1, num2) {
  function sum() {
    return num1 + num2;
  }
  function diff() {
    return num1 - num2;
  }
  function mul() {
    return num1 * num2;
  }
  function div() {
    return num1 / num2;
  }
  return { sum, diff, mul, div };
}

const calc = calulator(50, 2);
console.log(calc.sum());
console.log(calc.diff());
console.log(calc.mul());
console.log(calc.div());

// ============================================================

console.log(
  "6- Write a function which can return multiple values from a function"
);
function calculateCircle(radius) {
  function area() {
    return Math.PI * radius * radius;
  }
  function perimeter() {
    return 2 * Math.PI * radius;
  }
  return { area, perimeter };
}

const circle = calculateCircle(5);
console.log("Area:", circle.area());
console.log("Perimeter:", circle.perimeter());

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

console.log("Bonus ++ 1- Write a function which can convert the time");
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
