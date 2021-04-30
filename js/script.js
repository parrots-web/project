"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let i = 0;
const titles = [],
      ratings = [];

do {
    titles[i] = prompt('Один из последних просмотренных фильмов?', '');
    ratings[i] = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[titles[i]] = ratings[i];
    i++;
    }
while (i < 2);

console.log(personalMovieDB);