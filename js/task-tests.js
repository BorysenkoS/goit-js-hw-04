// 1. Напиши функцію, яка приймає рядок та повертає перевернутий рядок:

// function reverseString(string) {
//   const arrReverseJoin = string.split('').reverse().join('');

//   return arrReverseJoin;
// }

// console.log(reverseString('Hello World'));

// =============================================================================================================

// 2. Напиши функцію, яка приймає рядок та повертає перевернутий рядок де кожен другий символ у верхньому регістрі:

// =============================================================================================================

// 3. Напиши цикл, який виведе на консоль числа від 1 до 10.

// const numbers = 10;
// for (let i = 1; i <= numbers; i++) {
//   console.log(i);
// }

// =============================================================================================================

// 4. Напиши цикл, який виведе на консоль парні числа від 1 до 20.

// const numbers = 100;
// for (let i = 0; i <= numbers; i += 2) {
//   console.log(i);
// }

// ==============================================================================================================

// 5. Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript".

// let string = 'JavaScript';
// let arrString = string.split('');
// let arr = '';

// for (let i = 1; i < arrString.length; i += 2) {
//   arr += arrString[i];
// }
// console.log(arr);

// ==============================================================================================================

// 6. Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100.

// const num = 100;
// let total = 0;
// for (let i = 0; i <= num; i++) {
//   total += i;
// }
// console.log(total);

// 7. Напиши цикл, який перевірить, чи число, яке вводить користувач, є простим.
// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }
// console.log(isPrime(3));

// 8. Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10).
// let num = 7;
// let result = 0;
// for (let i = 1; i <= 10; i++) {
//   result = i * num;
//   console.log(`${i} * ${num} = ${result}`);
// }

// 9. Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал 5 = 5 _ 4 _ 3 _ 2 _ 1).

// const userNumber = 5;
// let factorial = userNumber;
// for (let i = userNumber; i > 1; i--) {
//   // console.log(i);
//   factorial *= i - 1;
//   console.log(factorial);
// }

// 10. Напиши цикл, який виведе на консоль всі прості числа від 1 до 50.

// 11. Напиши цикл, який знайде найбільший спільний дільник (НСД) двох чисел, введених користувачем.

// ============================================================================================================

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
//   console.log(values);
// }

// ================================================================================================================
// let propCount = 0;

// function countProps(object) {
//   const keys = Object.keys(object);
//   for (let key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
// }
// console.log(countProps({ name: 'Mango', age: 2 }));

// ===================================================================================================================
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const valuesSalary = Object.values(salaries);
//   for (let key of valuesSalary) {
//     totalSalary += key;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// ======================================================================================================================

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
//   console.log(hexColors);
//   console.log(rgbColors);
// }

// =============================================================================================================

// function getProductPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Engine'));

// =======================================================================================================
// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const arr = [];
//   for (let product of products) {
//     if (product[propName]) {
//       arr.push(product[propName]);
//     }
//   }
//   return arr;
// }

// console.log(getAllPropValues('price'));

// ===============================================================================================================

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];
//   let total = 0;

//   for (let product of products) {
//     if (product.name === productName) {
//       total = product.price * product.quantity;
//       return total;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Droidss'));

// ===========================================================================================================

// function add(...args) {
//   let total = 0;
//   for (let arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(12, 4, 11, 48));

// =================================================================================================================

// function getExtremeScores(scores) {
//   const score = {};
//   (score.best = Math.max(...scores)), (score.worst = Math.min(...scores));
//   return score;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));

// ====================================================================================================================
