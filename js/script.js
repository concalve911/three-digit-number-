"use strict";
const num = prompt("Enter a three number");
let sum = null;
if (num === null) {
  // проверяем, не отменил ли пользователь запрос
  alert("You rejected");
} else {
  sum = Number(num); // преобразуем строку в число
  if (isNaN(sum)) {
    // проверяем, является ли введенное значение числом
    alert("You entered a wrong number");
  } else if (sum < 100 || sum > 999) {
    // проверяем, что это трехзначное число
    alert("You entered a wrong number");
  } else {
    // Переводим число в строку, чтоб разбить на отдельбные цифры
    const sumStr = sum.toString();
    const number0 = sumStr[0];
    const number1 = sumStr[1];
    const number2 = sumStr[2];
    // сравниваем одинаковое трезначные числа
    if (number0 === number1 && number0 === number2) {
      alert("All numbers are the same");
      //  сравниваем имеются ли дублирующие цифры
    } else if (
      number0 === number1 ||
      number0 === number2 ||
      number1 === number2
    ) {
      alert("Your number has duplicate numbers");
    } else {
      alert(`Your number is ${sum}`);
    }
  }
}

/*
1.проверяем, не отменил ли пользователь запрос
2. преобразуем строку в число (Так как пользователь мы всегда получаем строку из запроса promt)
3. проверяем, является ли введенное значение числом (Используя логический оператор ИЛИ)
4. Переводим число  обратно в строку, чтоб разбить на отдельбные цифры
5. сравниваем одинаковое ли число (используя логический оператор &&, и операторы строгого сравнения)
6. сравниваем имеются ли дублирующие цифры
*/
