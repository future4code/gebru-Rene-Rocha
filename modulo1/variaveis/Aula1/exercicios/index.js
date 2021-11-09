
//----------------------------Interpretação de Código----------------------------------------------------------->

//1. Primeiro será impresso no console o "10" e depois "10, 5". O 10 será referente a varíavel A, e o 5 referente a variável B pois a variável B muda com o decorrer do programa.
//2. Sabendo que o código e executado linha por linha ele irá imprimir no console "10, 10, 10". 
//3. let p seria let porHora e let porDia, não pode esquecer de altera o caminho da variável na linha do alert

//



//---------------------------- Escrita de Código----------------------------------------------------------->
//1.
/*

let nome
let idade
console.log("-----------------Exercício de Código 1----------------------------------")

console.log(typeof nome, idade)
console.log("------------------------------------------------------------------------")
//O console imprime undefinded pois não foi atribuido nenhum valor às minhas variáveis e então o console imprime undefined de indefinido.
nome = prompt("Qual o seu Nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, typeof idade)
//Agora o console imprimiu o typeof de cada variável como string pois o valor delas foi atribuido pelo prompt que só atribui variáveis de tipo strings.
console.log("Olá", nome, ", você tem", idade, "anos de idade!")

*/



//2.
/*
let resposta1 = "SIM"
let resposta2 = "NÃO"
let resposta3 = "SIM"
let resposta4 = "SIM"

console.log("O Diabo veste prada?", resposta1)
console.log("O Vasco vai subir?", resposta2)
console.log("A Xuxa namorou o Pelé?", resposta3)
console.log("Ayton Senna do Brasil?", resposta4)

//===================> Parte 2 do exercício 2.

let a = 10
let b = 25
let troca

//Lógica para trocar os valores.1
troca = b
b = a
a = troca

console.log(a,b)
*/

let a = prompt("Escolhe o primeiro numero:")
let b = prompt("Escolhe o segundo numero:")
let soma, mult

a = Number(a)
b = Number(b)

soma = a+b
mult = a*b

console.log("A sua soma é ", soma)
console.log("A sua multiplicação é ", mult)