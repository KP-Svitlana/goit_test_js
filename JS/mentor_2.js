// task_1
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const getTotalSalaries = (salary) =>
//   Object.values(salary).reduce((acc, value) => acc + value, 0);

// console.log(getTotalSalaries(salaries));

// task_2
//Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой

// const letMeSeeYourName = (checkCallback) => {
//   const answer = prompt("Tell me your name, please:");
//   checkCallback(answer, greet);
// };

// const greet = (name) => {
//   console.log(`Hey ${name}`);
// };

// const checkAnswer = (inputValue, callbackGreet) => {
//   if (!inputValue) {
//     return prompt("Ти введеш своє ім'я чи будемо чекати");
//   } else {
//     callbackGreet(inputValue);
//   }
// };

// console.log(letMeSeeYourName(checkAnswer));

// HW_1
//Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль

// HW_2
//Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функци должна умножать элементы на 2
// const array = [3, 5, 6, 34, 8, 83, 12, 34];

// HW_3
//Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает
