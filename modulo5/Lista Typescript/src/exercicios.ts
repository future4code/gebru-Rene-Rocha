//exercicio 1
const ex1 = (str:string, age:string) =>{
  const dataArray:string[] = age.split('/')
  return console.log(`My name is ${str}, i was born ${dataArray[0]} of the month ${dataArray[1]} of the year of ${dataArray[2]}`)

}

ex1('Sampaio','24/04/1987')

//exercicio 2
const ex2 = (a:any) =>{return console.log(typeof(a))}

ex2(2)

//exercicio 3

const ex3 = () =>{

  enum GENRE {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
  }
  type infoMovie = {name:string, year:number, genre:GENRE, rating?:number}
  const movie = (name:string, year:number, genre:GENRE, rating?:number) => {
    const movieList:infoMovie = {name, year, genre, rating}
    return movieList

  }


}

//colaretal 2004 drama
//american psycho  2000 thriller

