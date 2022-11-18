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

// function comp(array1, array2) {
//   const result = array1
//     .map((element) => Math.pow(element, 2))
//     .every((el) => array2.includes(el));
//   return result;
// }

// comp(a, b);

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

const a = [6, 2, 1, 8, 10];
const b = [1, 1, 11, 2, 3];
const c = [null, 0];
const d = [[-6, -20, -1, -10, -12], -28];
const f = [];

function sumArrey(array) {
  if (array.length === 1 || array.includes(null)) {
    return 0;
  } else {
    const newArray = [...array]
      .join(",")
      .split(",")
      .map((el) => Number(el))
      .sort((a, b) => a - b);
    const deleteFirstElement = newArray.splice(0, 1);
    const deleteLastElement = newArray.splice(newArray.length - 1, 1);
    const sumOfArray = newArray.reduce(
      (total, element) => (total += element),
      0
    );
    return sumOfArray;
  }
}

console.log(sumArrey(a));
console.log(sumArrey(b));
console.log(sumArrey(c));
console.log(sumArrey(d));
console.log(sumArrey(f));
