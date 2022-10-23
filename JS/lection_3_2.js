// Example 1 - Деструктуризация
// Перепиши функцию так, чтобы она принимала один объект параметров,
// вместо набора независимых аргументов.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(",", "."));
//   const numericHeight = Number(height.replace(",", "."));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// Было
// console.log(calcBMI("88,3", "1.75"));
// console.log(calcBMI("68,3", "1.65"));
// console.log(calcBMI("118,3", "1.95"));

// Ожидается
// console.log(
//   calcBMI({
//     weight: "88,3",
//     height: "1.75",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "68,3",
//     height: "1.65",
//   })
// );
// console.log(
//   calcBMI({
//     weight: "118,3",
//     height: "1.95",
//   })
// );

// Example 4 - Деструктуризация - done
// Перепиши функцию так, чтобы она принимала объект параметров
// со свойствами companyName и stock
// и выводила репорт о количестве товаров на складе любой компании.

// Var_1
// function getStockReport({ companyName, stock: { repairBots, defenceBots } }) {
//   let totalBots = repairBots + defenceBots;
//   return `${companyName} has ${totalBots} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );

// Var_2

// function getStockReport({ companyName, stock }) {
//   let totalBots = 0;

//   for (const value of Object.values(stock)) {
//     totalBots += value;
//   }
//   return `${companyName} has ${totalBots} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: "Cyberdyne Systems",
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   })
// );
// console.log(
//   getStockReport({
//     companyName: "Belacci",
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   })
// );

// Example 5 - Операция spread
// Дополни функцию createContact(partialContact) так,
// чтобы она возвращала новый объект контакта
// с добавленными свойствами id и createdAt,
// а также list со значением "default" если в partialContact нет такого свойства.

// function generateId() {
//   return "_" + Math.random().toString(36).substr(2, 9);
// }

// function createContact(partialContact) {
//   return (newContact = {
//     id: generateId(),
//     createdAt: Date.now(),
//     list: "default",
//     ...partialContact,
//   });
// }

// console.log(
//   createContact({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );

// console.log(
//   createContact({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// Example 6 - Операция rest
// Напиши функцию transformUsername(user) так,
// чтобы она возвращала новый обьект со свойством fullName, вместо firstName и lastName.
