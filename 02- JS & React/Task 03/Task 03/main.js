// sort();
let mixedArray = ["10", "apple", 2, "banana", 30, "cherry"];
mixedArray.sort();
console.log(mixedArray);
// ['10', 2, 30, 'apple', 'banana', 'cherry']

mixedArray.sort((a, b) => {
  // إذا كان كلا العنصرين أرقاماً، قم بمقارنتها كأرقام
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  }
  // إذا كان كلا العنصرين نصوصاً، قم بمقارنتها كنصوص
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  }
  // إذا كان العنصر الأول رقماً والثاني نصاً، ضع الرقم أولاً
  return typeof a === "number" ? -1 : 1;
});
console.log(mixedArray);
// [2, 30, '10', 'apple', 'banana', 'cherry']

mixedArray.sort((a, b) => {
  // تحويل الأرقام النصية إلى أرقام باستخدام parseFloat
  let numA = parseFloat(a);
  let numB = parseFloat(b);

  // التحقق من أن كلا العنصرين أرقام بعد التحويل
  if (!isNaN(numA) && !isNaN(numB)) {
    return numA - numB;
  }
  // إذا كان كلا العنصرين نصوصاً (أو غير قابلين للتحويل إلى أرقام)، قم بمقارنتها كنصوص
  if (typeof a === "string" && typeof b === "string") {
    return a.localeCompare(b);
  }
  // فرز الأرقام قبل النصوص
  return isNaN(numA) ? 1 : -1;
});
console.log(mixedArray);
// [2, '10', 30, 'apple', 'banana', 'cherry']

// reverse();
// 1. عكس ترتيب الأرقام
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log("Reverse the order of numbers:", numbers); // [5, 4, 3, 2, 1]

// 2. إنشاء نسخة معكوسة من المصفوفة دون تعديل الأصلية
let originalNumbers = [1, 2, 3, 4, 5];
let reversedNumbers = [...originalNumbers].reverse();
console.log("originalNumbers:", originalNumbers); // [1, 2, 3, 4, 5]
console.log("reversedNumbers:", reversedNumbers); // [5, 4, 3, 2, 1]

// 3. عكس ترتيب النصوص
let words = ["banana", "apple", "cherry"];
words.reverse();
console.log("Reverse text order:", words); // ['cherry', 'apple', 'banana']

// 4. عكس ترتيب المصفوفة بعد الترتيب
let moreNumbers = [10, 2, 5, 1, 9];
moreNumbers.sort((a, b) => a - b);
console.log("Order of numbers:", moreNumbers); // [1, 2, 5, 9, 10]
moreNumbers.reverse();
console.log("Reverse the order of numbers:", moreNumbers); // [10, 9, 5, 2, 1]

// 5. التعامل مع أنواع بيانات مختلفة
let mixed = [1, "apple", undefined, null, 2];
mixed.reverse();
console.log("Reverse the order of the multiple array:", mixed); // [2, null, undefined, 'apple', 1]

// 6. التأثير الجانبي على المصفوفة الأصلية عند التلاعب بالمصفوفة المقلوبة
let arr = [1, 2, 3, 4, 5];
let reversedArr = arr.reverse();
reversedArr[0] = 99;
console.log("Original after improvements:", arr); // [99, 4, 3, 2, 1]
console.log("Reversed array after progress:", reversedArr); // [99, 4, 3, 2, 1]

// [0: "Ahmed"] ["name" : "Ahmed"]
let people = [
  { name: "Ahmed", age: 25, phone: 1597522 },
  { name: "Sara", age: 20, phone: +2011999999 },
  { grade: 90, phone: 123456789 },
];

console.log(people[0].name); // Output: Ahmed
console.log(people[1].age); // Output: 20
console.log(people[2].phone); // Output: 123456789

// people.forEach((person) => {
//   const name = person.name !== undefined ? person.name : "unknown";
//   console.log(`['name': '${name}']`);
// });

let formattedPeople = people.map((person) => {
  return `['name': '${person.name ? person.name : "unknown"}']`;
});

console.log(formattedPeople);

// Object Methods
const person = {
  name: "Ahmed",
  age: 30,
  city: "Cairo",
};

// 1. Object.keys()
// استخراج أسماء الخصائص
const keys = Object.keys(person);
console.log("Object.keys:", keys); // ["name", "age", "city"]

// 2. Object.values()
// استخراج قيم الخصائص
const values = Object.values(person);
console.log("Object.values:", values); // ["Ahmed", 30, "Cairo"]

// 3. Object.entries()
// استخراج أزواج الخصائص والقيم
const entries = Object.entries(person);
console.log("Object.entries:", entries); // [["name", "Ahmed"], ["age", 30], ["city", "Cairo"]]

// 4. Object.assign()
// نسخ الخصائص من كائن إلى آخر
const additionalInfo = { country: "Egypt", occupation: "Engineer" };
const updatedPerson = Object.assign({}, person, additionalInfo);
console.log("Object.assign (updatedPerson):", updatedPerson); // { name: "Ahmed", age: 30, city: "Cairo", country: "Egypt", occupation: "Engineer" }
console.log("Object.assign (person):", person); // { name: "Ahmed", age: 30, city: "Cairo" }

// 5. Object.freeze()
// تجميد الكائن
Object.freeze(person);
person.age = 35; // محاولة تعديل خاصية مجمدة
console.log("Object.freeze:", person.age); // 30

// 6. Object.is()
// مقارنة قيمتين
console.log("Object.is (Ahmed, Ahmed):", Object.is("Ahmed", "Ahmed")); // true
console.log("Object.is ({}, {}):", Object.is({}, {})); // false
console.log("Object.is (NaN, NaN):", Object.is(NaN, NaN)); // true

// توضيح الحالة بعد استخدام جميع الأساليب
console.log("Final person object:", person); // { name: "Ahmed", age: 30, city: "Cairo" }
console.log("Additional info object:", additionalInfo); // { country: "Egypt", occupation: "Engineer" }
console.log("Updated person object:", updatedPerson); // { name: "Ahmed", age: 30, city: "Cairo", country: "Egypt", occupation: "Engineer" }
