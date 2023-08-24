'use strict';
let numberOfFilms;
function start () {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
start ();
}
const personalMovieDB = {
    count : numberOfFilms ,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
function showMyDB (a) {
    if (a.privat === false) {
        console.log(a);
    }
};
showMyDB(personalMovieDB);
personalMovieDB.movies[lastFilm] = ratingOfFilms;

function rememberMyFilms() {
    for (let i = 0 ; i < 2; i++)
{
    const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
          ratingOfFilms = prompt("На сколько оцените его?", "");
    
    if (lastFilm != null && ratingOfFilms != null && lastFilm != '' && ratingOfFilms != '' && lastFilm.length < 50 )
    {
        personalMovieDB.movies[lastFilm] = ratingOfFilms;
        console.log("done");
    }
    else {
        console.log(error);
        i--;
    }
}
}
rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB < 10)
{
    console.log('Просмотрено довольно мало фильмов');
}
else if (personalMovieDB >= 10 && personalMovieDB <= 30)
{
    console.log("Вы классический зритель");
}
else if (personalMovieDB >= 30)
{
    console.log('Вы киноман');
}
else {console.log("Произошла ошибка")}
}
detectPersonalLevel();
console.log(personalMovieDB);


