let sum = 0;
let number;
let numbers = [];

do {
  number = Number(prompt("Please enter a number (enter 0 to stop):"));
  if (number !== 0) {
    numbers.push(number);
  }
  sum += number;
} while (number !== 0);

console.log("The numbers entered are: ");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
console.log("The total sum is: " + sum);
