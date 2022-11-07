// task_1
// Given two arrays a and b write a function comp(a, b)
// (orcompSame(a, b)) that checks whether the two arrays have
// the "same" elements, with the same multiplicities
// (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared,
//  regardless of the order.

a = [121, 144, 19, 161, 19, 144, 19, 11];
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

a2 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];

// a.forEach((element) => {
//   let el = Math.pow(element, 2);
//   if (b.includes(el)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// });

// function comp(array1, array2) {
//   let result = false;
//   array1.forEach((element) => {
//     let el = Math.pow(element, 2);
//     if (array2.includes(el)) {
//       console.log((result = true));
//     } else {
//       console.log(result);
//     }
//   });
// }

// function comp(array1, array2) {
//   let result = false;
//   array1.forEach((element) => {
//     let el = Math.pow(element, 2);
//     if (array2.includes(el)) {
//       console.log((result = true));
//     } else {
//       console.log((result = false));
//     }
//   });
// }

// // comp(a, b);
// console.log(comp(a2, b2));
