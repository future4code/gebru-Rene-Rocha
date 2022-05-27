//exercicio 1
const myString:string = "someString"
const myNumber:number = 0
type person ={name:string, age:number, favoriteColor:string|undefined}

enum favColor {
    VERMELHO = 'Vermelho',
    LARANJA = 'Laranja',
    AMARLEO = 'Amarelo',
    VERDE = 'Verde',
    AZUL = 'Azul',
    ANIL = 'Anil',
    VIOLETA = 'Violeta'
 
 }

const personA:person = {
    name: "",
    age: 0,
    favoriteColor: favColor.VIOLETA
}
const personB:person = {
    name: "",
    age: 0,
    favoriteColor: favColor.ANIL
}
const personC:person = {
    name: "",
    age: 0,
    favoriteColor: favColor.VERMELHO
}
//exercicio 2

type amostraDeDados = {numeros:number[], obterEstatisticas:(numeros:number[])=>object}

function obterEstatisticas(numeros:number[]): object {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//Exercicio 3
type post = {author:string, text:string}
const posts:post[] = [
    {
      author: "Alvo Dumbledore",
      text: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      author: "Alvo Dumbledore",
      text: "Vale a pena viver sonhando e se esquecer de viver"
    },
    {
      author: "Severo Snape",
      text: "Menos 10 pontos para Grifinória!"
    },
    {
      author: "Hermione Granger",
      text: "É levi-ô-sa, não levio-sá!"
    },
    {
      author: "Dobby",
      text: "Dobby é um elfo livre!"
    },
    {
      author: "Lord Voldemort",
      text: "Avada Kedavra!"
    }
  ]
  function buscarPostsPorAutor(posts:post[], authorID:string) {
    return posts.filter((post) => 
    {
        return post.author === authorID
      }
    )
  }
  //Exercicio 4
  //B) Executaria o script colocando os endereços corretos no package para a transpilação ir para ./build
  //C)O processo seria diferente pois o caminho de entrada seria alterado
  //D) Sim, executando vários scripts de uma vez só

  //Exercício 5
  type appointment = {name:string, age:number, date:string}
  const schedule :appointment[] = [
    { name: "João", age: 23, date: "01/10/2021" },
    { name: "Pedro", age: 31, date: "02/07/2021" },
    { name: "Paula", age: 26, date: "03/11/2021" },
    { name: "Márcia", age: 45, date: "04/05/2021" }
  ]

  function nameSort(doctorSchedule:any) {
    return function (a:any,b:any) {
      return a[doctorSchedule].localeCompare(b[doctorSchedule]);
        }        
    
}
schedule.sort(nameSort("name"))
console.log(schedule)