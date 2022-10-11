// task_1
// 1. Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"

// const message = prompt("Яка офіційна назва JavaScript?");

// const answer = "ECMAScript";

// if (message.toLowerCase() === answer.toLowerCase()) {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// console.log(message);

// task_2 - перевірити
//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// // У консоль виведіть усі парні числа від min до max

// const max = 50;
// const min = 23;

// for (let i = max; i >= min; i -= 1) {
//   if (1 % 2 === 0) {
//     console.log(i);
//   }
// }

// task_3
// За допомогою цикла for додайте всі парні числа від min до max

// const max = 50;
// const min = 0;
// let sumEvenNumber = 0;

// for (i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) continue;
//   {
//     sumEvenNumber += i;
//   }
// }
// console.log("sumEvenNumber:", sumEvenNumber);

// task_4 - перевірити
// Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// // Якщо користувач вводить "Адмін", то promt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
// //     вивести рядок "Відмінено"
// //     У іншому випадку вивести рядок "Я вас не знаю!"

// // Пароль перевіряти так:
// // якщо введено пароль "Я головний", то вивести "Вітаю!",
// //     у іншому випадку виводити рядок "Невірний пароль!".

// const loginAdmin = "Адмін";
// const passwordAdmin = "Я головний";
// const loginUser = prompt("Ввведіть пароль:");

// if (loginUser === loginAdmin) {
//   const passwordUser = prompt("Введіть пароль:");
//   if (passwordUser === passwordAdmin) {
//     console.log("Вітаю!");
//   } else {
//     console.log("Невірний пароль!");
//   }
// } else if (loginUser === null) {
//   console.log("Відмінено");
// } else {
//   console.log("Я вас не знаю!");
// }

// task_5
// Напишіть функцію each(array, callback), яка першим параметром приймає масив,
//     а другим - функцію, яка буде застосована до кожного елемента масиву.
//     Функція each повинна повернути новий масив, елементами якого будуть результати виклику callback
// callback повинна помножувати елементи на 2

// const arrayNumber = [3, 5, 6, 34, 8, 83, 12, 34];

// function cb(number) {
//   return number * 2;
// }

// // console.log(cb(5));

// function each(array, callback) {
//   const menu = [];
//   for (const item of array) {
//     console.log(item);
//     menu.push(callback(item));
//   }
//   console.log(menu);
// }
// each(arrayNumber, cb);

// task_6
// Дано рядок, який складається із символів.Наприклад, 'abcde'.
// //     Перевірте, що першим символом цього рядка є літера 'a'.
// //  Якщо це так - вивести "так", у іншому випадку вивести "ні"

// const string = "abcde";
// const string2 = "bcde";

// function testString(str) {
//   if (str.indexOf("a") === 0) {
//     console.log("yes");
//     return;
//   }
//   console.log("no");
// }

// testString(string);
// testString(string2);

// const string = "abcde";
// const string2 = "bcde";
// const splitString = string.split("");
// console.log(splitString);
// const testString =
//   splitString[0] === "a" ? console.log("так") : console.log("ні");

// task_7
// При завантаженні сторінки користувачу пропонується у prompt ввести число.
// //     Те, що вводить користувач, додається до значення змінної total.
// // Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// // Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
// //     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// // Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.

// моя
// const total = [];
// let check = false;
// let sum = 0;

// do {
//   const inputValue = prompt("Enter the number");
//   total.push(Number(inputValue));
//   check = true;
//   if (!inputValue) {
//     check = false;
//   }
// } while (check);

// for (const number of total) {
//   sum += number;
// }

// console.log(sum);

// Денис
// const total = [];
// let sum = 0;
// let check = false;
// do {
//   const inputValue = prompt("Введіть число");
//   total.push(Number(inputValue));
//   check = true;
//   if (!inputValue) {
//     check = false;
//   }
// } while (check);
// for (const number of total) {
//   sum += number;
// }
// console.log(sum);

// task_8 - ДЗ - done
// Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

// let userName = "";

// do {
//   userName = Number(prompt("Enter the number more then 100", ""));
// } while (userName < 100);

// console.log("The number is:", userName);

// task_9 - ДЗ -done
// У змінній  min лежить число від 0 до 59.
// // Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)

// let min = 46;

// if (min < 15) {
//   console.log(`Number ${min} apply to 1 quarter`);
// } else if (min < 30 && min > 15) {
//   console.log(`Number ${min} apply to 2 quarter`);
// } else if (min < 45 && min > 30) {
//   console.log(`Number ${min} apply to 3 quarter`);
// } else {
//   console.log(`Number ${min} apply to 4 quarter`);
// }

// task_10 - ДЗ - done
// Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин

// let userMinutes = 1400;

// let hours = Math.floor(userMinutes / 60);
// console.log(hours);

// let minutes = userMinutes % 60;
// console.log(minutes);

// console.log(`${hours} hours, ${minutes} minutes`);

// task_11
// Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
//     яка пам"ятає ім"я шефа під час свого виклику

// const makeShef = function (shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };

// console.log(makeShef);

// const mango = makeShef("Mango");

// mango("apple pie");

// console.log(mango);
// const poly = makeShef("Poly");

// mango("muffins");

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// task_12 -ДЗ - done
// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає

// function savePassword(corectPassword) {
//   const userDate = prompt("Please add the password:");
//   return userPassword(userDate, corectPassword);
// }

// function userPassword(userDate, corectPassword) {
//   if (userDate === corectPassword) {
//     result = true;
//     alert("YeeY!");
//   } else {
//     result = false;
//     alert("Wrong password");
//   }

//   return result;
// }

// savePassword("Admin");
