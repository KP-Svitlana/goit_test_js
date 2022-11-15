// task_1
//Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`

// const user = function (userObj) {
//   const { userName, age, numberOfPost } = userObj;
//   this.userName = userName;
//   this.age = age;
//   this.numberOfPost = numberOfPost;
//   //   this.getInfo = function () {
//   //     console.log(
//   //       `Пользователю ${userName} ${age} лет и у него ${numberOfPost} публикаций.`
//   //     );
//   //   };
// };

// user.prototype.getInfo = function () {
//   console.log(
//     `Пользователю ${this.userName} ${this.age} лет и у него ${this.numberOfPost} публикаций.`
//   );
// };

// const poly = new user({ userName: "Poly", age: 33, numberOfPost: 567 });

// console.log(poly);
// poly.getInfo();

// task_2

//Напиши класс Client котрорый создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return { login: this.#login, email: this.#email };
//   }
//   set setChangeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new Client("Mango", "admin@gmail.com");

// console.log(mango.login);
// console.log(mango.getClientData.email);
// console.log((mango.setChangeEmail = "mango@gmail.com"));

// task_3_HW

//Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)

// class Notes {
//     static = {
//       LOW_priority: "low",
//       MEDIUM_priority: "medium",
//       HIEGHT_priority: "hieght",
//     };

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   removeNote(text) {
//     const index = this.items.findIndex((element) => element.text === text);

//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//     console.log(index);
//   }

//   updatePriority({ text, newPriority }) {
//     this.items.filter((text) => {
//       if (text === this.items.text) {
//         return (this.items.text = newPriority);
//       }
//       console.log(this.items.text);
//     });
//   }
// }

// const note1 = new Notes();
// note1.addNote({ text: "I love JS!", priority: "hight" });
// note1.addNote({ text: "I love HTML", priority: "hight" });
// note1.addNote({ text: "I love Node", priority: "hight" });
// note1.removeNote("I love JS!");
// note1.updatePriority("I love HTML", "low");
// console.table(note1);
