// task_11

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(" ");
//   console.log(words);

//   const total = words.length;
//   console.log(total);

//   console.log(total * pricePerWord);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

// task_13

// function slugify(title) {
//   console.log(title.toLowerCase().split(" ").join("-"));
// }

// slugify("Arrays for begginers");

// task_16

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);

//   if (newArray.length > maxLength) {
//     return newArray.slice(0, maxLength);
//   }

//   return newArray;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

// task_18

// function calculationTotal(number) {
//   let sum = 0;
//   for (i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
// }

// calculationTotal(1);
// calculationTotal(2);
// calculationTotal(3);

// task_20

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

// task_21

// function findLongestWord(string) {
//   const array = string.split(" ");

//   let longestWordLength = array[0].length;
//   let longestWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].length > longestWordLength) {
//       longestWordLength = array[i].length;
//       longestWord = array[i];
//     }

//     console.log(longestWord);
//   }
// }

// function findLongestWord(string) {
//   const array = string.split(" ");

//   let lengthOfWord = array[0].length;
//   let longestWord = array[0];

//   for (let i = 1; i < array.length; i += 1) {
//     if (array[i].length > lengthOfWord) {
//       lengthOfWord = array[i].length;
//       longestWord = array[i];
//     }
//     console.log(longestWord);
//   }
//   return longestWord;
// }

// var_win
// function findLongestWord(string) {
//   console.log(string.split(" ").sort((a, b) => b.length - a.length)[0]);
// }

// task_22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(1, 3);

// task_23

// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//     }
//   }

//   return newArray;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// task_25
// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }

// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// task_26

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let price of order) {
//     total += price;
//   }

//   console.log(total);
// }

// calculateTotalPrice([12, 85, 37, 4]);

// task_32

// function includes(array, value) {
//   let result = false;
//   for (const key of array) {
//     if (key === value) {
//       result = true;
//     }
//   }
//   console.log(result);
//   return result;
// }

// includes([1, 2, 3, 4, 5], 3);
// includes([1, 2, 3, 4, 5], 17);
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus");
// includes(["apple", "plum", "pear", "orange"], "plum");
// includes(["apple", "plum", "pear", "orange"], "kiwi");
