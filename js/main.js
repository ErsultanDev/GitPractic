"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмторенных фильмов?", ""),
    b = prompt("На скольоко оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("Done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

const num = 50;
switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно 100");
    break;
  case 50:
    console.log("True 50");
    break;
  default:
    console.log("Default");
    break;
}

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

// Место для первой задачи
function firstTask() {
  // Пишем решение вот тут
  for (let i = 5; i <= 10; i++) {
    console.log(i);
  }
}
firstTask();

// Место для второй задачи
function secondTask() {
  // Пишем решение вот тут
  for (let i = 20; i >= 10; i--) {
    console.log(i);
  }
}

secondTask();

function showFirstMessage() {
  console.log("Hello World!");
  let num = 20;
  console.log(num);
}

showFirstMessage();

function calc(a, b) {
  return a + b;
}

console.log(calc(23, 1));
console.log(calc(10, 1));
console.log(calc(3, 1));

function ret() {
  let num = 50;

  return num;
}
const anotherNum = ret();

console.log(anotherNum);

const usdCurr = 28;

function convert(amount, curr) {
  console.log(28 * amount);
}
convert(500);
