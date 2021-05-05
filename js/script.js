"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        let titles = [],
            ratings = [];
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
            console.log("Вы классический зритель");
        } else {
            console.log('Произошла ошибка');
        }
    },
    writeYourGenres: function() {    
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (genre != '' && genre != null) {
                personalMovieDB.genres[i] = genre;
            } else {
                console.log("Введите, пожалуйста, корректные данные");
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.writeYourGenres();

// personalMovieDB.showMyDB(personalMovieDB.privat);