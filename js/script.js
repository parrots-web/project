"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let titles = [],
    ratings = [];

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        titles[i] = prompt('Один из последних просмотренных фильмов?', '');
        ratings[i] = prompt('На сколько оцените его?', '');
        if (titles[i] != '' && ratings[i] != '' && titles[i] != null && ratings[i] != null && titles[i].length < 50) {
            personalMovieDB.movies[titles[i]] = ratings[i];  
            console.log('done');
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        console.log("Вы классический зритель");
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function writeYourGenres() {
    let genres = [];

    for (let i = 0; i < 3; i++) {
        genres = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
        if (genres != '' && genres != null) {
            personalMovieDB.genres[i] = genres;
            console.log('done');
        } else {
            console.log("error");
            i--;
        }
    }
   
}

writeYourGenres();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);