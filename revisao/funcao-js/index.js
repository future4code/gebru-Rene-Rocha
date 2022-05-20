//Exercicio de Interpretação
//1.A) Será impresso o valor de 2*5=10 e 2*10=20
//1.B) Não apareceria nada no console
//2.A) A função deixa o texto de entrada todo em minúsculo e determina em boolean se ele contém a frase "cenoura"
//2.B) True, , True, false

const exercicio1A = () =>{
    console.log('Eu sou Rene, tenho 22 anos, moro em Rio de Janeiro e sou estudante')

}
const exercicio1B = (name, age, city,job) =>{
    console.log(`My name is ${name}, I'm ${age} years old, I live in ${city} and I'm an ${job}`)

}
const exercicio2A = (a,b) =>{
    return console.log(a+b)

}
const exercicio2B = (a,b) =>{
    return console.log(a>b)

}
const exercicio2C = (a) =>{
    let resultado = a%2
    return console.log(resultado===0)
   

}
const exercicio2D = (frase) =>{
    return console.log(frase.toUpperCase(), frase.length)

}
const exercicio3 = (a,b) =>{
    console.log(`Números inseridos ${a} e ${b}`)
        const soma = () =>{
            return console.log('Adição', a+b)
        }
        const sub = () =>{
            return console.log("Subtração",a-b)
        }
        const mult = () =>{
            return console.log('Mult', a*b)
        }
        const divis = () =>{
            return console.log('Divisão', a/b)
        }
    soma()
    sub()
    mult()
    divis()

}
