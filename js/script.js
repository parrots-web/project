"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// let i = 0;
const titles = [],
      ratings = [];

// do {
//     titles[i] = prompt('Один из последних просмотренных фильмов?', '');
//     ratings[i] = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[titles[i]] = ratings[i];
//     i++;
//     }
// while (i < 2);

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
    console.log("Вы классический зритель");
} else {
    console.log('Произошла ошибка');
}
console.log(personalMovieDB);