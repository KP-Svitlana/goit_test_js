//  Example 1 - Математические операторы
// Выведи на экран общее количество яблок
// и винограда.
// Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;

// const total = apples + grapes;
// console.log(total);

// const diff = apples - grapes;
// console.log(diff);

// Example 2 - Комбинированные операторы
// Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students -= 50;
// console.log(students);

// Example 3 - Приоритет операторов
// Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 8 + 2 * 5;
// console.log(result);

// Example 4 - Класс Math
// Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д. значения переменной value.
// Используй методы Math.floor(), Math.ceil() и Math.round().
// Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.3;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// const secondvalue = 27.9;
// console.log(Math.floor(secondvalue));
// console.log(Math.ceil(secondvalue));
// console.log(Math.round(secondvalue));

// Example 5 - Шаблонные строки
// Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;

// const total = repairBots + defenceBots;

// console.log(`${companyName} has ${total} bots in stock`);

// Example 6 - Методы строк и чейнинг
// Напиши скрипт который рассчитывает индекс массы тела человека.
// Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи).
// Нецелые числа могут быть заданы в виде 24.7 или 24, 7,
//     то есть в качестве разделителя дробной части может быть запятая.

// Индекс массы тела необходимо округлить до одной цифры после запятой;

// let weight = "88,3";
// let height = "1,75";

// let normWeight = Number(weight.replace(",", "."));
// let normHeight = Number(height.replace(",", "."));

// console.log(normHeight, normWeight);

// // let bodyMassIndex = normWeight / normHeight ** 2;
// let bodyMassIndex = normWeight / Math.pow(normHeight, 2);

// console.log(bodyMassIndex.toFixed(1));

// Example 7 - Операторы сравнения и приведение типов
// Каким будет результат выражений?

// console.log(5 > 4); true

// console.log(10 >= "7"); true

// console.log("A" > "Z"); false

// console.log("3" > "111"); // 51 > 49 true

// console.log("A".charCodeAt()); 65
// console.log("B".charCodeAt()); 66

// console.log("2" < "12"); false

// console.log("4" == 4); true

// console.log("6" === 6); false

// console.log("false" === false); false

// console.log(1 == true); true

// console.log(1 === true); false

// console.log("0" == false); true

// console.log("0" === false); false

// console.log("Papaya" < "papaya"); true

// console.log("Papaya" === "papaya"); false

// console.log(undefined == null); true

// console.log(undefined === null); false

// Example 8 - Логические операторы
// Каким будет результат выражений?

// && -> першу брехню(false) або останню правду(true);
// || -> першу правду(true) або останню брехню(false);

// console.log(true && 3);
// 3;

// console.log(false && 3);
// false;

// console.log(true && 4 && "kiwi");
// ("kiwi");

// console.log(true && 0 && "kiwi");
// 0;

// console.log(true || 3);
// true;

// console.log(true || 3 || 4);
// true;

// console.log(1232 || false || 7);
// 1232

// console.log(null || 2 || undefined);
// 2

// console.log((1 && null && 2) > 0);
// false

// console.log(null || (2 && 3) || 4);
// 3

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной
//  incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue:
// null, undefined, 0, false. Используй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defoultValue = 10;
// const value = incomingValue || defoultValue;
// console.log(value);

// const dbName = '';
// const name = dbName ?? 'undefined';
// console.log(name);

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes
// (количество минут) в строку в формате часов и минут HH:MM.

// const totalMinutes = 1441;

// const hours = (totalMinutes / 60).toFixed(0);
// const minutes = (totalMinutes % 60).toString();

// console.log(hours, minutes);

// const parsedHours = hours.padStart(2, 0);
// const parsedMinutes = minutes.padStart(2, 0);

// console.log(parsedHours, parsedMinutes);

// console.log(`${parsedHours}:${parsedMinutes}`);
