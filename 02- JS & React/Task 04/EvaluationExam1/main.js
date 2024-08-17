// Q3: 3- Write a function areAnagrams
function areAnagrams(word1, word2) {
  if (word1.length != word2.length) {
    return false;
  }

  let sortedWord1 = word1.toLowerCase().split("").sort().join("");
  let sortedWord2 = word2.toLowerCase().split("").sort().join("");

  if (sortedWord1 == sortedWord2) {
    return true;
  } else {
    return false;
  }
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
console.log(areAnagrams("binary", "brainy")); // Output: true
console.log(areAnagrams("apple", "pale")); // Output: false

// ============================================================

// Q3: 4- Write a function calculateMean (average) of all the numbers in an array
function calculateMean(numbers) {
  if (numbers.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum / numbers.length;
}

console.log(calculateMean([1, 2, 3, 4, 5])); // Output: 3

// ============================================================

// Q3: 5- Check if the season is Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  month = month.toLowerCase();

  if (month === "september" || month === "october" || month === "november") {
    return "Autumn";
  } else if (
    month === "december" ||
    month === "january" ||
    month === "february"
  ) {
    return "Winter";
  } else if (month === "march" || month === "april" || month === "may") {
    return "Spring";
  } else if (month === "june" || month === "july" || month === "august") {
    return "Summer";
  } else {
    return "Invalid month";
  }
}

console.log(checkSeason("October")); // Output: Autumn
console.log(checkSeason("february")); // Output: Winter
console.log(checkSeason("April")); // Output: Spring
console.log(checkSeason("July")); // Output: Summer
console.log(checkSeason("InvalidMonth")); // Output: Invalid month

// ============================================================

// Q3: 6- How do you write a factorial code in JavaScript? your solution must be without loop
function factorial(num) {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));

// ============================================================

// Q3: 7- Make This Work: Dublicate([1 , 2 , 3 , 4]) => [1 , 2 , 3 , 4 , 1 , 2 , 3 , 4]
function duplicate(arr) {
  return arr.concat(arr);
}

console.log(duplicate([1, 2, 3, 4])); // Output: [1, 2, 3, 4, 1, 2, 3, 4]

// ============================================================

// Q3: 8- How to empty an array in javascript [4 ways]
// 1: Set the length to 0
let arr1 = [1, 2, 3, 4];
arr1.length = 0;
console.log(arr1); // Output: []

// 2: Use splice to remove all elements
let arr2 = [1, 2, 3, 4];
arr2.splice(0, arr2.length);
console.log(arr2); // Output: []

// 3: Reassign the array to an empty array
let arr3 = [1, 2, 3, 4];
arr3 = [];
console.log(arr3); // Output: []

// 4: Use a loop with pop to remove elements one by one
let arr4 = [1, 2, 3, 4];
while (arr4.length > 0) {
  arr4.pop();
}
console.log(arr4); // Output: []

// ============================================================

// Q4: 1- Make This Possible
let showBtn = document.querySelector("#showBtn");
let hideBtn = document.querySelector("#hideBtn");
let content = document.querySelector("#content");

function showContent() {
  content.style.display = "block";
}

function hideContent() {
  content.style.display = "none";
}

showBtn.addEventListener("click", showContent);
hideBtn.addEventListener("click", hideContent);


