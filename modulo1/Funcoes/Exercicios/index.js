//======Exercicio de Interpretação de Código=======================================>
//1.
//A) Será impresso no console o resultado das multiplicações: 10 e 50
//B) Nada apareceria no console pois ele foi retirado

//2.
//A) Essa executa outra função chamada toLowerCase e procura a palavra cenoura dentro do texto
//B) A Saida será "Eu gosto de cenoura"
//======Exercicio de escrita de Código=============================================>
//1)
//A
let nome = "Rene", idade = "21", estado = "Rio de Janeiro", profissao = "Estudante"

const pessoa = () => console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade, moro em ${estado} e sou ${profissao}`)

//B
const pessoa2 = (nome, idade, estado, profissao) =>{
    nome = prompt('Qual o seu nome?')
    idade = Number(prompt('Qual a sua idade; ex.: 18'))
    estado = prompt('Qual estado você mora?')
    profissao = prompt('Qual a sua profissão?').toLowerCase()

    console.log(`Meu nome é ${nome}, tenho ${idade} anos de idade, moro em ${estado} e sou ${profissao}`)
    
} 
//2)
//A
const soma = (num1,num2) => console.log(num1+num2)
//soma(1,10)

//B

const maiorIgual = (num1,num2) => console.log(num1>=num2)
//maiorIgual(1,5)

//C
const eParOuNao = (num1) => console.log(num1 % 2 === 0)
//eParOuNao(15)

//D
const imprimirFrase = (frase) =>{ 
    frase = prompt('Escreva uma frase')
    console.log(frase.length, "\n", frase.toUpperCase())
}
//imprimirFrase()

//3 ==> Fiz várias funções mas apaguei pq achei mais divertido fazer assim pq não tinha praticado o modelo básico de função
function exercicio3(num1,num2){
    num1 = Number(prompt('Escolha o primeiro número?'))
    num2 = Number(prompt('Escolha o segundo número?'))
    console.log(`O Resultado da soma é `, num1+num2)
    console.log(`O Resultado da subtração é`, num1-num2)
    console.log(` O resultado da multiplicação é`, num1*num2)
    console.log(` O resultado da divisão é `, num1/num2)

}

//Desafios
//Desafio 1
const desafioUmA = a => console.log(a)
desafioUmA('PAPANAMERICANO')

const desafioUmB = (a, b) => {
    let resultado = a+b
    console.log(resultado)
}
desafioUmB(1,2)
//Desafio 2
const desafioDois = (c1, c2) => {
   let h = ((c1*c1)+(c2*c2))
   console.log(Math.sqrt(h))
} 
desafioDois(3,4)