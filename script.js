'use strict';
const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count : numberOfFilms ,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};
personalMovieDB.movies[lastFilm] = ratingOfFilms;

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
console.log(personalMovieDB);

