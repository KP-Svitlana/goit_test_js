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

// Task_25
// function grow(x) {
//   return x.reduce((t, el) => t * el, 1);
// }

// console.log(grow([1, 2, 3]));

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
//   const number = string
//     .split("")
//     .map((el) => Number(el))
//     .sort((a, b) => b - a)
//     .join("");

//   return Number(number);
// }

// console.log(descendingOrder(42145));
// console.log(descendingOrder(123456789)); //987654321
// console.log(descendingOrder(0));

// Task_28
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// function addBinary(a, b) {
//   let sum = a + b;

//   const array = [];

//   for (i = sum; i >= 1; i = i / 2) {
//     if (i % 2 === 0) {
//       array.push(0);
//       i = parseInt(i);
//     } else {
//       array.push(1);
//       i = i - 1;
//     }
//     console.log(i);
//   }

//   return array.reverse().join("");
// }

// console.log(addBinary(99, 17));

// Task_29

// a = "aaabbbbhaijjjm"; //"0/14"
// b = "aaaxbbbbyyhwawiwjjjwwm"; //"8/22"

// function printerError(s) {
//   const array = s.split("");
//   const error = array.reduce((errors, el) => {
//     if (el > "m") {
//       errors += 1;
//     }
//     return errors;
//   }, 0);

//   return `${error}/${array.length}`;
// }

// // printerError(a);
// console.log(printerError(b));

// Task_30

// function simpleMultiplication(number) {
//   return number % 2 === 0 ? number * 8 : number * 9;
// }

// console.log(simpleMultiplication(3));

// Task_31

// function hasTwoCubeSums(n) {
//   const array = [];
//   for (i = 0; i <= n / 2; i += 1) {
//     let c = Math.cbrt(n - Math.pow(i, 3));

//     if (Number.isInteger(c)) {
//       array.push({ i, c });
//     }
//     continue;
//   }
//   console.log(array);
//   if (array.length >= 2) {
//     return true;
//   }
//   return false;
// }

// console.log(hasTwoCubeSums(1729));
// console.log(hasTwoCubeSums(42));

// Task_32

// function boolToWord(bool) {
//   return bool ? "Yes" : "No";
// }

// console.log(boolToWord(true));

// Task 33

// a = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// function findNeedle(haystack) {
//   const index = haystack.findIndex((el) => el === "needle");
//   return `found the needle at position ${index}`;
// }

// console.log(findNeedle(a));

// Task_34 - ???

// function towerBuilder(nFloors) {
//   const array = [];
//   const maxNumberOFstars = nFloors * 2 - 1;
//   for (i = 1; i <= nFloors; i += 1) {
//     const a = `*`;
//   }
// }

// Task_35

// a = [];
// b = ["Peter"];
// c = ["Jacob", "Alex"];
// d = ["Max", "John", "Mark"];
// e = ["Alex", "Jacob", "Mark", "Max"];

// function likes(names) {
//   if (names.length === 0) {
//     return "no one likes this";
//   } else if (names.length === 1) {
//     const string = names.join("");
//     return `${string} likes this`;
//   } else if (names.length === 2) {
//     const string = names.join(" and ");
//     return `${string} like this`;
//   } else if (names.length === 3) {
//     const lastName = names.pop();
//     const string = names.join(", ");
//     return `${string} and ${lastName} like this`;
//   } else {
//     const lastName = names.splice(2);
//     const string = names.join(", ");
//     return `${string} and ${lastName.length} others like this`;
//   }
// }

// console.log(likes(e));

// Task_36 - ?? no pass test

// const a = 1 + 1 / 4 + 1 / 7 + 1 / 10 + 1 / 13;
// const b = 1 + 1 / 4;
// const c = 1;
// const d = 0;

// function SeriesSum(n) {
//   return n.toFixed(2).toString();
// }

// console.log(SeriesSum(d));

// Task_37
// function opposite(number) {
//   return number > 0 ? -number : number * -1;
// }

// console.log(opposite(-4));

// Task_38
// function century(year) {
//   if (year % 100 !== 0) {
//     return Number.parseInt(year / 100) + 1;
//   } else {
//     return Number.parseInt(year / 100);
//   }
// }

// console.log(century(1601));

// Task_39 --?? do not passed the tests, need to lern String.prototype

// const a = "How can mirrors be real if our eyes aren't real";

// String.prototype.toJadenCase = function (string) {
//   const array = string
//     .split(" ")
//     .map((el) => getUpperCase(el).join(""))
//     .join(" ");
//   console.log(array);
// };

// String.prototype.toJadenCase(a);

// const b = "how";

// function getUpperCase(word) {
//   const array = word.split("");
//   const firstletter = array.splice(0, 1);
//   const firstletterToString = firstletter.join("").toUpperCase();

//   const newArray = array.unshift(firstletterToString);
//   return array;
// }

// console.log(getUpperCase(b));

// Task_40

// const a = [1, 2, "a", "b"];
// const b = [1, "a", "b", 0, 15];
// const c = [1, 2, "aasf", "1", "123", 123];

// function filter_list(l) {
//   const newArray = [];

//   l.forEach((element) => {
//     if (typeof element === "number") {
//       newArray.push(element);
//     }
//   });

//   return newArray;
// }
// console.log(filter_list(a));

// Task_41

// a = "din"; // "((("
// b = "recede"; //"()()()"
// c = "Success"; //")())())"
// d = "(( @"; //"))(("

// function duplicateEncode(word) {
//   const result = [];
//   toLowerCaseArray = word.toLowerCase().split("");
//   const array1 = toLowerCaseArray.filter((el, index, array) => {
//     const newArray = [...toLowerCaseArray];
//     newArray.splice(array.indexOf(el), 1);

//     if (array.indexOf(el) === index && !newArray.includes(el)) {
//       result.push("(");
//     } else {
//       result.push(")");
//     }
//   });

//   return result.join("");
// }

// duplicateEncode(d);

// Task_42 - ???

// a = [7]; //7
// b = [0]; // 0
// c = [1, 1, 2]; //2
// d = [0, 1, 0, 1, 0]; // 0
// e = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]; //1

// function findOdd(A) {
//   if (A.length === 1) {
//     return A[0];
//   }
//   const array = A.filter((el, i, a) => {
//     let total = 0;
//     if (a.indexOf(el) === i) {
//       total += 1;
//     } else {

//     }
//   });
// }

// console.log(findOdd(d));
// Task_43

// function getCount(str) {
//   const result = str.split("").reduce((total, el) => {
//     if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
//       total += 1;
//     }
//     return total;
//   }, 0);
//   return result;
// }

// console.log(getCount("fhjntrao"));

// Task_44

// function getSum(a, b) {
//   if (a === b) return a;

//   let sum = 0;

//   for (let i = Math.min(a, b); i <= Math.max(a, b); i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(getSum(-1, 2));
// console.log(getSum(1, 5));

// Task_45 -???

// function arrayDiff(a, b) {
//   a.map((el, i) => {
//     if (b.includes(el)) {
//       a.splice(i, 1);
//     }
//   });
//   console.log(a);
//   return a;
// }

// // arrayDiff([1, 2], [1]); //[2]
// // arrayDiff([2, 1], [1]); //[2]
// // arrayDiff([], [1]); //[]
// // arrayDiff([1, 2, 3, 4], [1]); //[2,3,4]
// arrayDiff([1, 2, 1, 1], [1]); // [2]
// arrayDiff([1, 2, 2, 2, 3], [2]); //[1,3]

// Task_46

// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// function getGrade(s1, s2, s3) {
//   const averegeGrade = (s1 + s2 + s3) / 3;

//   if (90 <= averegeGrade && averegeGrade <= 100) {
//     return "A";
//   } else if (80 <= averegeGrade && averegeGrade < 90) {
//     return "B";
//   } else if (70 <= averegeGrade && averegeGrade < 80) {
//     return "C";
//   } else if (60 <= averegeGrade && averegeGrade < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// // console.log(getGrade(95, 90, 93));
// // console.log(getGrade(100, 85, 96));
// // console.log(getGrade(92, 93, 94));
// console.log(getGrade(70, 70, 100));
// console.log(getGrade(82, 85, 87));
// console.log(getGrade(84, 79, 85));
// console.log(getGrade(89, 89, 90));

// Task_47
// function validatePIN(pin) {
//   const numberPin = Number(pin);
//   const array = pin.split("");

//   if (
//     !isNaN(numberPin) &&
//     Number.isInteger(numberPin) &&
//     !array.includes(".") &&
//     !array.includes("-") &&
//     (array.length === 4 || array.length === 6)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(validatePIN("123"));
// console.log(validatePIN("1.234"));
// console.log(validatePIN("1234"));
// console.log(validatePIN("123456"));
// console.log(validatePIN("-1.234"));

// Task_48
// function fakeBin(x) {
//   return x
//     .split("")
//     .map((el) => {
//       if (el < 5) {
//         return 0;
//       }
//       return 1;
//     })
//     .join("");
// }

// fakeBin("45385593107843568");

// Task_49

// var summation = function (num) {
//   const array = [];
//   for (let i = 1; i <= num; i += 1) {
//     array.push(i);
//   }

//   return array.reduce((t, el) => (t += el), 0);
// };

// console.log(summation(8));

// Task_50

// function getMiddle(s) {
//   const length = s.length;
//   if (length % 2 === 0) {
//     return `${s[length / 2 - 1]}${s[length / 2]}`;
//   } else {
//     return `${s[Math.round(length / 2 - 1)]}`;
//   }
// }

// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));
// console.log(getMiddle("middle"));

// Task_51
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// const b = [];
// const c = [1, 2, 0, -1, -2];

// function countPositivesSumNegatives(input) {
//   let x = 0;
//   let y = 0;
//   const newArray = [];
//   if (!input || input.length === 0) {
//     return [];
//   }
//   input.forEach((element) => {
//     if (element > 0) {
//       x += 1;
//     } else {
//       y += element;
//     }
//   });
//   newArray.push(x);
//   newArray.push(y);
//   return newArray;
// }

// console.log(countPositivesSumNegatives(b));

// Task_52

// const a = "wnXcHJHAiw!YkoNowMwHz UDzdpdTQeW!OqseDjnbPU";

// function removeExclamationMarks(s) {
//   return s.replaceAll("!", "");
// }

// console.log(removeExclamationMarks(a));

// Task_53

// const a = []; //[]
// const b = ["a", "b", "c"]; // ["1: a", "2: b", "3: c"]

// var number = function (array) {
//   if (!array || array.length === 0) {
//     return [];
//   }
//   return array.map((el, index) => `${index + 1}: ${el}`);
// };

// console.log(number(b));

// Task_54

// function countBy(x, n) {
//   let z = [];

//   for (let i = 1; i <= n; i += 1) {
//     a = x * i;
//     z.push(a);
//   }
//   return z;
// }

// console.log(countBy(1, 10));
// console.log(countBy(2, 5));
// console.log(countBy(3, 6));

// Task_55

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

// Task_56

// const rps = (p1, p2) => {
//   if (
//     (p1 === "scissors" && p2 === "scissors") ||
//     (p1 === "paper" && p2 === "paper") ||
//     (p1 === "rock" && p2 === "rock")
//   ) {
//     return "Draw!";
//   } else if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock") ||
//     (p1 === "rock" && p2 === "scissors")
//   ) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };

// console.log(rps("rock", "scissors"));
// console.log(rps("paper", "scissors"));
// console.log(rps("rock", "rock"));

// Task_57

// const a = "String"; // "SSttrriinngg"
// const b = "Hello World"; //"HHeelllloo  WWoorrlldd"
// const c = "1234!_ "; //"11223344!!__  "

// function doubleChar(str) {
//   const array = str.split("");

//   const newArray = [];
//   array.forEach((element) => {
//     newArray.push(element);
//     newArray.push(element);
//   });
//   return newArray.join("");
// }

// console.log(doubleChar(a));

// Task_58

// function count(string) {
//   const array = string.split("");
//   const result = {};

//   for (let elem of array) {
//     if (result[elem] === undefined) {
//       result[elem] = 1;
//     } else {
//       result[elem] += 1;
//     }
//   }
//   return result;
// }

// console.log(count("aba"));

// Task_59
// const a = [1, 5.2, 4, 0, -1]; //9,2
// const b = []; // 0
// const c = [-2.398]; // -2.398

// function sum(numbers) {
//   if (!numbers) {
//     return 0;
//   }
//   return numbers.reduce((total, el) => {
//     total += el;

//     return total;
//   }, 0);
// }

// console.log(sum(c));
// Task_60
// const a = "TTTT"; //"UUUU"
// const b = "GCAT"; //"GCAU"
// const c = "GACCGCCGCC"; // "GACCGCCGCC"

// function DNAtoRNA(dna) {
//   return dna.replaceAll("T", "U");
// }

// console.log(DNAtoRNA(c));

// Task_61
// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints);
//   const total = classPoints.reduce((total, el) => {
//     total += el;
//     return total;
//   }, 0);
//   const gpa = total / classPoints.length;
//   if (gpa > yourPoints) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(betterThanAverage([2, 3], 5)); //true
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true
// console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); //false

// Task_62
// function findAverage(array) {
//   if (!array || array.length === 0) {
//     return 0;
//   }
//   const averege =
//     array.reduce((t, e) => {
//       t += e;
//       return t;
//     }, 0) / array.length;
//   return averege;
// }

// console.log(findAverage([1, 2, 3, 4]));

// Task_63

// function alphabetPosition(text) {
//   const newArray = [];
//   const arr_en = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   const array = text
//     .replaceAll(".", "")
//     .replaceAll("'", "")
//     .replaceAll(" ", "")
//     .toLowerCase()
//     .split("");

//   array.forEach((element) => {
//     if (arr_en.includes(element)) {
//       newArray.push(arr_en.indexOf(element) + 1);
//     } else {
//       return 0;
//     }
//   });
//   return newArray.join(" ");
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// Task_64

// function isIsogram(str) {
//   const array = str.toLowerCase().split("");
//   const result = {};

//   array.forEach((element) => {
//     if (result[element] === undefined) {
//       result[element] = 1;
//     } else {
//       result[element] += 1;
//     }
//   });

//   const arrayOfValues = Object.values(result);
//   return arrayOfValues.every((el) => el === 1);
// }

// // console.log(isIsogram("Dermatoglyphics")); //true
// // console.log(isIsogram("moose")); //false
// // console.log(isIsogram("aba")); //false
// console.log(isIsogram("moOse")); //false
// console.log(isIsogram("isIsogram")); //false;
// console.log(isIsogram("")); //true;
// console.log(isIsogram("isogram")); //true;

// Task_65
// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else {
//     return value1 / value2;
//   }
// }

// console.log(basicOp("+", 4, 7));
// console.log(basicOp("-", 15, 18));

// Task_66
// function removeEveryOther(arr) {
//   const newArray = [];
//   arr.map((el, index) => {
//     if ((index + 1) % 2 !== 0) {
//       newArray.push(el);
//     }
//   });
//   return newArray;
// }

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

// Task_67
// function sumMix(x) {
//   return x
//     .map((el) => Number(el))
//     .reduce((total, el) => {
//       return (total += el);
//     }, 0);
// }

// console.log(sumMix([9, 3, "7", "3"]));
// Task_68

// function solution(string) {
//   const array = string.split("");
//   const result = [];
//   array.map((el, index, array) => {
//     const charCode = el.charCodeAt();
//     if (charCode >= 65 && charCode <= 90) {
//       result.push(index);
//     }
//   });

//   for (i = 0; i < result.length; i += 1) {
//     array.splice(result[i] + i, 0, " ");
//   }
//   return array.join("");
// }

// console.log(solution("camelCasingDoingWell"));
// console.log(solution("camelCasingTest"));
// console.log(solution("startHearNow"));
// console.log(solution("startHearNowDoBetterTimy"));

// Task_69
// function removeSmallest(numbers) {
//   const newArray = [...numbers];
//   const smallest = Math.min(...numbers);
//   const index = numbers.indexOf(smallest);
//   newArray.splice(index, 1);
//   return newArray;
// }

// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));

// Task_70
// var countSheep = function (num) {
//   const array = [];
//   for (i = 1; i <= num; i += 1) {
//     array.push(`${i} sheep...`);
//   }

//   return array.join("");
// };

// console.log(countSheep(3));

// Task_71
// function solution(str, ending) {
//   return str.endsWith(ending);
// }
// Task_72
// function getAge(inputString) {
//   const array = inputString.split("");
//   return Number(array[0]);
// }

// console.log(getAge("4 years old"));

// Task_73

// function accum(s) {
//   const newArray = [];
//   const array = s.toUpperCase().split("");
//   for (i = 0; i < s.length; i += 1) {
//     newArray.push(array[i].padEnd(i + 1, `${array[i].toLowerCase()}`));
//   }

//   return newArray.join("-");
// }

// console.log(accum("abcd")); //"A-Bb-Ccc-Dddd"

// Task_74
// function twoSum(numbers, target) {
//   for (i = 0; i <= numbers.length; i += 1) {
//     const diff = target - numbers[i];
//     const newArray = [...numbers];
//     newArray.splice(i, 1, " ");
//     if (newArray.includes(diff)) {
//       return [i, newArray.indexOf(diff)];
//     }
//   }
// }

// console.log(twoSum([1, 2, 3], 4));
// console.log(twoSum([1234, 5678, 9012], 14690));
// console.log(twoSum([2, 2, 3], 4));
// console.log(twoSum([2, 3, 1], 4));

// Task_75
// function greet(language) {
//   let answer;
//   switch (language) {
//     case "czech":
//       answer = "Vitejte";
//       break;
//     case "danish":
//       answer = "Velkomst";
//       break;
//     case "dutch":
//       answer = "Welkom";
//       break;
//     case "estonian":
//       answer = "Tere tulemast";
//       break;
//     case "finnish":
//       answer = "Tervetuloa";
//       break;
//     case "flemish":
//       answer = "Welgekomen";
//       break;
//     case "french":
//       answer = "Bienvenue";
//       break;
//     case "german":
//       answer = "Willkommen";
//       break;
//     case "irish":
//       answer = "Failte";
//       break;
//     case "italian":
//       answer = "Benvenuto";
//       break;
//     case "latvian":
//       answer = "Gaidits";
//       break;
//     case "lithuanian":
//       answer = "Laukiamas";
//       break;
//     case "polish":
//       answer = "Witamy";
//       break;
//     case "spanish":
//       answer = "Bienvenido";
//       break;
//     case "swedish":
//       answer = "Valkommen";
//       break;
//     case "welsh":
//       answer = "Croeso";
//       break;
//     default:
//       answer = "Welcome";
//   }
//   return answer;
// }

// console.log(greet("english"));
// greet("dutch");
// greet("IP_ADDRESS_INVALID");
// greet("czech");

// Task_76
// function points(games) {
//   return games.reduce((total, el) => {
//     const x = Number(el[0]);
//     const y = Number(el[2]);
//     if (x > y) {
//       total += 3;
//     } else if (x === y) {
//       total += 1;
//     } else {
//       total += 0;
//     }
//     console.log(x, y);
//     console.log(total);
//     return total;
//   }, 0);
// }

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// ); //30

// console.log(
//   points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
// );

// console.log(
//   points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
// );

// Task_77 -???

// function isValidWalk(walk) {
//   if (walk.length === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// );
// console.log(isValidWalk(["w"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));

// Task_78

// function testEven(n) {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// Task_79
// function tribonacci(signature, n) {
//   let array = [];
//   if (n === 0) {
//     return [];
//   } else if (n < 3) {
//     for (i = 1; i <= n; i += 1) {
//       array.push(signature[i - 1]);
//     }
//   } else {
//     array = [...signature];
//     for (i = 0; i <= n - 4; i += 1) {
//       let c =
//         array[array.length - 1] +
//         array[array.length - 2] +
//         +array[array.length - 3];

//       array.push(c);
//     }
//   }

//   return array;
// }

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci([0, 0, 1], 10));
// console.log(tribonacci([300, 200, 100], 0));
// console.log(tribonacci([16, 1, 16], 1));

// Task_80

// function sumTwoSmallestNumbers(numbers) {
//   const a = Math.min(...numbers);
//   numbers.splice(numbers.indexOf(a), 1);
//   const b = Math.min(...numbers);
//   const sum = a + b;
//   return sum;
// }

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));

// Task_81
// var number = function (busStops) {
//   return busStops.reduce((total, el) => {
//     total += el[0] - el[1];

//     return total;
//   }, 0);
// };

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// );

// Task_82
// function nbDig(n, d) {
//   const array = [];
//   for (i = 0; i <= n; i += 1) {
//     array.push(`${i * i}`);
//   }
//   return array
//     .join("")
//     .split("")
//     .reduce((total, el) => {
//       if (Number(el) === d) {
//         total += 1;
//       }

//       return total;
//     }, 0);
// }

// console.log(nbDig(10, 1));
// console.log(nbDig(25, 1));
// console.log(nbDig(5750, 0));
// console.log(nbDig(11011, 2));
// console.log(nbDig(12224, 8));
// console.log(nbDig(11549, 1));
// Task_83

// function stray(numbers) {
//   const obj = {};
//   numbers.forEach((element) => {
//     if (obj[element] === undefined) {
//       obj[element] = 1;
//     } else {
//       obj[element] += 1;
//     }
//   });

//   for (const key in obj) {
//     if (obj[key] === 1) {
//       return Number(key);
//     }
//   }
// }

// console.log(stray([1, 1, 2]));
// console.log(stray([17, 17, 3, 17, 17, 17, 17]));
// console.log(stray([1, 2, 1]));
// console.log(stray([2, 1, 1]));

// Task_84

// function arithmetic(a, b, operator) {
//   let result = 0;

//   switch (operator) {
//     case "add":
//       result = a + b;
//       break;
//     case "subtract":
//       result = a - b;
//       break;
//     case "multiply":
//       result = a * b;
//       break;
//     case "divide":
//       result = a / b;
//   }
//   return result;
// }

// console.log(arithmetic(1, 2, "add"));

// Task_85
// function findDifference(a, b) {
//   return Math.abs(
//     a.reduce((total, el) => (total *= el), 1) -
//       b.reduce((total, el) => (total *= el), 1)
//   );
// }

// console.log(findDifference([11, 2, 5], [1, 10, 8]));

// Task_86
// Task_87
