// task_1
// Given two arrays a and b write a function comp(a, b)
// (orcompSame(a, b)) that checks whether the two arrays have
// the "same" elements, with the same multiplicities
// (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared,
//  regardless of the order.

// a = [121, 144, 19, 161, 19, 144, 19, 11];
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// a2 = [121, 144, 19, 161, 19, 144, 19, 11];
// b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// a3 = [1, 6, 9, 0, 9, 9, 8, 0, 4, 6, 9, 1, 3];
// b3 = [81, 9, 36, 1, 0, 36, 1, 1, 81, 81, 64, 81, 16];

// a4 = [2, 2, 3];
// b4 = [4, 9, 9];

// function comp(array1, array2) {
//   if (array1 === [] || array1 === null || array2 === [] || array2 === null) {
//     return false;
//   } else {
//     return array2
//       .map((element) => Math.sqrt(element))
//       .every((el) => array1.includes(el));
//   }
// }

// function comp(array1, array2) {
//   if (array1 === [] || array1 === null || array2 === [] || array2 === null) {
//     return false;
//   }
//   const array3 = array2
//     .map((element) => Math.sqrt(element))
//     .filter((el) => array1.includes(el))
//     .sort((a, b) => a - b);

//   if (array1.length != array3.length) return false;

//   for (let i = 0; i < array1.length; i += 1)
//     if (array1.sort((a, b) => a - b)[i] !== array3[i]) return false;

//   return true;
// }
// console.log(comp(a, b));
// console.log(comp(a2, b2));
// console.log(comp(a3, b3));
// console.log(comp(a4, b4));

// task_2
// Convert number to reversed array of digits
// Given a random non-negative number,
// you have to return the digits of this number within
// an array in reverse order.

// EX: 35231 => [1,3,2,5,3]
// 0 => [0]

// function digitize(n) {
//   const string = `${n}`;

//   const result = string
//     .split("")
//     .reverse()
//     .map((el) => Number(el));
//   return result;
// }

// console.log(digitize(12345));

// task_3
// function greet(name) {
//   return console.log(`"Hello, ${name} how are you doing today?"`);
// }

// function greet(name) {
//   const string = `'Hello, ${name} how are you doing today?'`;
//   console.log(string);
//   return string;
// }

// greet("Rayn");

// task_4
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns
// the time since midnight in milliseconds.

// function getFoundMillisec(h, m, s) {
//   const minutes = h * 60;
//   const seconds = (minutes + m) * 60;
//   const millisec = (seconds + s) * 1000;

//   return millisec;
// }

// getFoundMillisec(0, 1, 1);

// Task_4

// const a = [6, 2, 1, 8, 10];
// const b = [1, 1, 11, 2, 3];
// const c = [null, 0];
// const d = [[-6, -20, -1, -10, -12], -28];
// const f = [];

// function sumArrey(array) {
//   if (array.length === 1 || !array) {
//     return 0;
//   } else {
//     const newArray = [...array]
//       .join(",")
//       .split(",")
//       .map((el) => Number(el))
//       .sort((a, b) => a - b);
//     const deleteFirstElement = newArray.splice(0, 1);
//     const deleteLastElement = newArray.splice(newArray.length - 1, 1);
//     const sumOfArray = newArray.reduce(
//       (total, element) => (total += element),
//       0
//     );

//     return sumOfArray;
//   }
// }

// console.log(sumArrey(a));
// console.log(sumArrey(b));
// console.log(sumArrey(c));
// console.log(sumArrey(d));
// console.log(sumArrey(f));

// Task_5

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// const array = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// function countSheeps(arrayOfSheep) {
//   const totalSheep = arrayOfSheep.reduce((total, el) => {
//     if (el === true) {
//       total += 1;
//     }
//     return total;
//   }, 0);
//   return totalSheep;
// }

// console.log(countSheeps(array));

// Task_6

// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
//     return true;
//   } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lovefunc(0, 0));

// Task_7

// a = [78, 56, 232, 12, 8];
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     const el = Math.min(...args);
//     console.log(el);
//     return el;
//   }
// }

// const finder1 = new SmallestIntegerFinder();
// finder1.findSmallestInt(a);

// Task_8
// var min = function (list) {
//   return Math.min(...list);
// };

// var max = function (list) {
//   return Math.max(...list);
// };

// Task_9
// function hero(bullets, dragons) {
//   if (bullets / dragons >= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(hero(0, 1));

// Task_10
// const stringToNumber = function (str) {
//   return Number(str);
// };

// console.log(stringToNumber("1234"));

// Task_11

// function rentalCarCost(d) {
//   if (d >= 3 && d < 7) {
//     return (cost = 40 * d - 20);
//   } else if (d >= 7) {
//     return (cost = 40 * d - 50);
//   } else {
//     return (cost = 40 * d);
//   }
// }

// console.log(rentalCarCost(10));

// Task_12

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log(evenOrOdd(345));

// Task_13

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//   const string = `${num}`;
//   const array = string.split("");
//   const newArray = array.map((el) => Math.pow(Number(el), 2)).join("");
//   const final = Number(newArray);
//   console.log(newArray);
//   console.log(final);
// }

// function squareDigits(num) {
//   return Number(
//     num
//       .toString()
//       .split("")
//       .map((el) => Math.pow(Number(el), 2))
//       .join("")
//   );
// }
// console.log(squareDigits(34));

// Task_14

// var isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n));
// };

// console.log(isSquare(-1));

// TAsk_15

// var binary = "1101000";
// var digit = parseInt(binary, 2);

// console.log(digit);

// const a = [1, 0, 1, 1];

// const binaryArrayToNumber = (arr) => {
//   const stringBinary = arr.join("");
//   const digit = parseInt(stringBinary, 2);
//   return digit;
// };

// console.log(binaryArrayToNumber(a));

// Task_16

// function litres(time) {
//   return Math.floor(time * 0.5);
// }

// console.log(litres(12.3));

// Task_17

// Чтобы быть пожилым, член должен быть не моложе 55 лет и иметь гандикап больше 7.
// В этом крокетном клубе гандикап варьируется от - 2 до + 26; чем лучше игрок, тем ниже гандикап.

// const input = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ];

// function openOrSenior(data) {
//   return data.map((e) => {
//     if (e[0] >= 55 && e[1] >= 7) {
//       return "Senior";
//     } else {
//       return "Open";
//     }
//   });
// }

// console.log(openOrSenior(input));

// Task_18

// function makeNegative(num) {
//   if (num === 0) {
//     return 0;
//   } else {
//     return Number("-" + Math.abs(num));
//   }
// }
// console.log(makeNegative(1)); // return -1
// console.log(makeNegative(-5)); // return -5
// console.log(makeNegative(0)); // return 0
// console.log(makeNegative(0.12)); // return -0.12

// Task_19

// const a = [1, 2, 2];

// function squareSum(numbers) {
//   return numbers
//     .map((el) => el * el)
//     .reduce((total, el) => {
//       return total + el;
//     }, 0);
// }

// console.log(squareSum(a));

// TAsk_20

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// console.log(solution("world"));

// Task_21

// function areYouPlayingBanjo(name) {
//   if (name[0] === "R" || name[0] === "r") {
//     return `${name} plays banjo`;
//   }
//   return `${name} does not play banjo`;
// }

// console.log(areYouPlayingBanjo("Adam"));
// console.log(areYouPlayingBanjo("Ringo"));

// Task_22

// const reverseSeq = (n) => {
//   const array = [];
//   for (let i = 1; i <= n; i += 1) {
//     array.push(i);
//   }
//   return array.reverse();
// };

// console.log(reverseSeq(5));

// Task_23

// function highAndLow(numbers) {
//   const array = numbers.split(" ");
//   const minNumber = Math.min(...array);
//   const maxNumber = Math.max(...array);
//   return `"${maxNumber} ${minNumber}"`;
// }

// console.log(highAndLow("1 2 3 4 5")); // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

// Task_24
// a = [1];
// b = [3, 5];
// c = [7, 9, 11];
// d = [13, 15, 17, 19];
// e = [21, 23, 25, 27, 29];

// function rowSumOddNumbers(n) {
//   return n.reduce((t, el) => t + el);
// }

// console.log(rowSumOddNumbers(a));
// console.log(rowSumOddNumbers(b));
// console.log(rowSumOddNumbers(c));
// console.log(rowSumOddNumbers(d));
// console.log(rowSumOddNumbers(e));

// // Task_25
// function grow(x) {
//   return x.reduce((t, el) => t * el);
// }

// Task_26
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (mpg * fuelLeft >= distanceToPump) {
//     return true;
//   }
//   return false;
// };

// console.log(zeroFuel(100, 50, 1));

// Task_27

// function descendingOrder(n) {
//   const string = `${n}`;
//   return string
//     .split("")
//     .map((el) => Number(el))
//     .sort((a, b) => b - a);
// }

// console.log(descendingOrder(42145));
// console.log(descendingOrder(123456789)); //987654321
