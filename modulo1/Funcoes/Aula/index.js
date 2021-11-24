//Declaração da Função

//Exercício 1.
function formatar( nome ){
    //ação
    nome = nome.toLowerCase()
    nome = nome.trim()
    nome = nome.replaceAll(' ', '-')
    return console.log(`Olá ${nome}`)

}
//Invocação da função
/*let nome1 = prompt('nome1?')
formatar(nome1)
nome1 = prompt('nome2?')
formatar(nome1)
nome1 = prompt('nome3?')
formatar(nome1)
*/
//Exercicio 2.
function somar(num1, num2){
    return console.log(num1+num2)
}

//Funções Anonimas
const formatarComAnonima = function( nome ){
    //Lógica
    return 
}


//Arrow Function -> Não precisa usar a palavra FUNCTION
//Consegue tirar as chaves com arrow se tiver um comando só, e o parenteses se tiver um só parametro
const formatarComArrow = (nome) => {
//Lógica
}

//Exercicio 3.
//1.
const formatarComAnonima2 = function (nome){
    nome = nome.toLowerCase()
    nome = nome.trim()
    nome = nome.replaceAll(' ', '-')
    return console.log(`Olá ${nome}`)

}
formatarComAnonima2(prompt("Escolha um nome"))


//2.
let SomarComArrow = (num1,num2) => console.log(num1+num2)

SomarComArrow(1,2)
