// 1. Using the reverse() Method
const arr1 = [1, 2, 3, 4, 5];
console.log(arr1.reverse());

// 2. Using a for Loop
const arr2 = [1, 2, 3, 4, 5];
const reversedArr1 = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  reversedArr1.push(arr2[i]);
}
console.log(reversedArr1);

// 3. Using the reduce() Method
const arr3 = [1, 2, 3, 4, 5];
const reversedArr2 = arr3.reduce((acc, curr) => [curr, ...acc], []);
console.log(reversedArr2);

// 4. Using unshift() in a Loop
const arr4 = [1, 2, 3, 4, 5];
const reversedArr3 = [];
arr4.forEach((element) => reversedArr3.unshift(element));
console.log(reversedArr3);

// 5. Using slice() and reverse()
const arr5 = [1, 2, 3, 4, 5];
const reversedArr5 = arr5.slice().reverse();
console.log(reversedArr5);

// 6. Using a Stack (LIFO Structure)
const arr6 = [1, 2, 3, 4, 5];
const stack = [...arr6];
const reversedArr6 = [];
while (stack.length) {
  reversedArr6.push(stack.pop());
}
console.log(reversedArr6);
