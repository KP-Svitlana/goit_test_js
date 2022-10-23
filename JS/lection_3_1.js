// Example 1 - Основы обьектов - done
// Напиши скрипт, который, для объекта user, последовательно:
// Добавляет поле mood со значением 'happy'
// Заменяет значение hobby на 'skydiving'
// Заменяет значение premium на false
// Выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}:${user[key]}`);
// }

// Example 2 - метод Object.values() - done
// У нас есть объект, в котором хранятся зарплаты нашей команды.
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
// Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;

// const salary = Object.values(salaries);

// for (const key of salary) {
//   sum += key;
// }

// console.log(sum);

// Example 3 - Массив объектов - done
// Напишите ф-цию calcTotalPrice(stones, stoneName), которая принимает массив обьектов
// и строку с названием камня. Ф-ция считает и возвращает общую стоимость камней
// с таким именем, ценой и количеством из обьекта

// function calcTotalPrice(stones, stoneName) {
//   const result = {
//     totalPrice: 0,
//     quantity: 0,
//     name: null,
//     price: [],
//   };

//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       result.name = stone.name;
//       result.quantity += stone.quantity;
//       result.price.push(stone.price);
//       result.totalPrice += stone.quantity * stone.price;
//     }
//   }
//   return result;
// }

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 3 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 200, quantity: 2 },
//   { name: "Изумруд", price: 700, quantity: 2 },
// ];

// const result = calcTotalPrice(stones, "Изумруд");

// console.log(result);

// Example 4 - Комплексные задачи
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать
// методы для работы с балансом и историей транзакций.

//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */

//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},

// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,
//   transaction: [],

//   createTransaction(amount, type) {
//     const newTransaction = {
//       id: `${this.transaction.length + 1}__${type}`,
//       type,
//       amount,
//     };
//     this.transaction.push(newTransaction);

//     console.log(newTransaction);
//     return newTransaction;
//   },

//   deposit(amount) {
//     this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     this.createTransaction(amount, Transaction.WITHDRAW);

//     if (amount > this.balance) {
//       console.log("You don't have enough money at the account");
//       return;
//     }
//     this.balance -= amount;
//   },

//   getBalance() {
//     console.log(this.balance);
//   },

//   getTransactionDetails(id) {
//     for (const transaction of this.transaction) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//   },

//   getTransaction(type) {
//     let total = 0;
//     for (const transaction of this.transaction) {
//       if (type === transaction.type) {
//         total += transaction.amount;
//       }
//       return total;
//     }
//   },
// };

// account.deposit(2000);
// account.withdraw(1000);
// account.withdraw(2000);
// account.getBalance();
// console.log(account.transaction);
// console.log(account.getTransactionDetails("3__withdraw"));
