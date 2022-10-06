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
