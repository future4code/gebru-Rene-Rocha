enum GENRE {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror",
    THRILLER="thriller"
}
type infoMovie = {name:string, year:number, genre:GENRE, rating?:number}
const movie = (name:string, year:number, genre:GENRE, rating?:number) => {
  let movieList:infoMovie = {name, year, genre, rating}
  if(rating == undefined){
     movieList = {name, year, genre}

  }
  return console.log(movieList)

}

movie("Colateral", 2004, GENRE.THRILLER)