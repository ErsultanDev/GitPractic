"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмторенных фильмов?", ""),
  b = prompt("На скольоко оцените его?", ""),
  c = prompt("Один из последних просмторенных фильмов?", ""),
  d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

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

// // Место для третьей задачи
// function thirdTask() {
//   // Пишем решение вот тут
//   for (let i = 10; i % 0; i++) {
//     console.log(i);
//   }
// }

// thirdTask();

