// Exercício 1
function exercicio1(){
    const nome = prompt('Informe seu nome:')
    const corFavorita = prompt("Informe sua cor favorita:")

    const fraseConcatenada = 'A cor favorita de ' + nome + ' é '+ corFavorita;
    console.log(fraseConcatenada)

    const templateString = `A cor favorita de ${nome} é ${corFavorita}`
    console.log(templateString)
}
//Protótipo de Strings

//Length
function letras(){
    const nome = "Rene Rocha"
    console.log(nome.length)
}
//toLowerCase

function falandobaixo(){
    frase = "Olá GeBrU O BoTa Já SuBiU"
    console.log(frase.toLowerCase())

}

//toUpperCase
function falandoalto(){
    frase = "SiRi PomPuDo AAAAAAAAAAAAAAAAAAA"
    console.log(frase.toUpperCase())
}

//Método trim() retira por exemplo espaços desnecessários
function metodoTrim (){
    const email= "      rene@gmail.com      "
    console.log(email.trim())
}

//Includes
function metodoIncludes(){

    const frase = "Tem banana na frase?"
    const frase2 = "Tem banana na frese?"
    console.log("Tem banana na frase?", frase.includes("parque"))
    console.log("Tem frese na frese?", frase2.includes("frese"))
}
//Replace.All
function substituir(){

    const frase2 = "Tem banana na frese?"
    console.log(frase2.replaceAll("frese", "frase"))
}
//Exercicio 2

//Obs.: Utilizar as crases me permite usar ${} para incluir variaveis na frase(Template String)

//Arrays
//Exercicio 3
function exercicio3(){
    const listaDeCachorros = ['poodle', 'pastor alemão', 'beagle', 'caramelo', 'vira-lata']
    const numeroDaPosicao = prompt('Insira um número de 1 a 5')
    const resultado = `A raça escolhida foi ${listaDeCachorros[numeroDaPosicao-1]}`
    console.log(resultado)
}

function cores(){
    const cores = ['Amarelo', 'Verde ', 'Azul']
    console.log(`${cores.length} cores`)
}
//Include em Array

function coresincludes(){
    const cores = ['Amarelo', 'Verde', 'Azul']
    console.log(`${cores.includes('ocre')}`)

}

//Método push(elemento)
function coresPush(){
    const cores = ['Amarelo', 'Verde', 'Azul']
    const adicionarCor = cores.push('Ocre')
    console.log(cores)

}
//cores.shift -> remove o primeiero elemento sempre
//cores.pop -> remove o último elemento sempre
//Metodo Splice(i,n) ex.: a partir do numero i remova n elementos
function coresSplice(){
    const cores = ['Amarelo', 'Verde', 'Azul']
    const removecores =  cores.splice(1,1)
    console.log(cores)

}

//Exercício 4
function exercicio4(){
    const array = [1, 2, 3, 4, 5, 6]
    console.log("Adiciona número", array.push(7))
    console.log(array)
    console.log(`remover ${array.splice(1, 3)}`) //====> Template String <======
    console.log(array.length, array)
}
