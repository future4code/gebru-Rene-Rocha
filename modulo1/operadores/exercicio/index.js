//========Interpretação de Código===========>

//1. -> Bool1 && Bool2 -> False
//   -> Bool1 && Bool2 && Bool3 -> False
//   -> Bool1 || Bool2 -> True
//   -> Boolean

//2. -> Será impresso no console a junção das duas Strings pois o prompt só devolve String por padrão ou seja concatena as informanções quando usamos o +
//para resolver isso precisamos transformar o dado que o prompt nos dar em Number como feito abaixo

/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero
console.log(soma)*/

//Obs. a conversão também pode ser feita na linha de soma mas o quantos antes resolver o problema melhor

//========Exercício de escrita de Código===========>
//1.

/*const idadeUsr = Number(prompt("Qual a sua idade?"))
const idadeAmg = Number(prompt("Qual idade de seu melhor amige?"))
console.log("Sua idade é maior que a do seu amigo?", idadeUsr > idadeAmg)
console.log(idadeUsr - idadeAmg)*/



//2. 

/*let par = Number(prompt("Insira um numero par"))
console.log(par % 2)*/

// O padrão é que não há resto(ou resto 0), pois todo número par é divisível por 2


// 3.

/*let idade = 21 //Number(prompt("Qual a sua idade?"))
console.log("Sua idade em meses é", idade=idade*12, "meses.")
console.log("Sua idade em dias é aproximadamente", idade=idade*365, "dias.")
console.log("Sua idade em horas é?", idade=idade*24, "horas.")*/

//4.

/*const numero1 = Number(prompt("Insira o primeiro número")) #caso seja escolha do usr
const numero2 = Number(prompt("Insira o segundo número"))  #caso seja escolha do usr
const numero1 = 25
const numero2 = 5
console.log("O primeiro número é maior que o segundo?", numero1>numero2)
console.log("O primeiro número é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 === 0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero1 === 0)
*/

//=============DESAFIO===================>
/*
let f = 77
let c = 80
let conversaoFK = (f-32)*(5/9)+273.15
let conversaoCF = (c)*(9/5)+32

console.log("O valor de 77°F em K é", conversaoFK)
console.log("O valor de 80° Celcius em F", conversaoCF)
c = Number(prompt("insira o valor de celcius para conversão em F e K"))
let conversao1 = (c)*(9/5)+32
let conversao2 = (conversao1-32)*(5/9)+273.15

console.log("O valor de 30°C em °F e K respectivamente", conversao1,",", conversao2 )
*/
//============DESAFIO 2==================>
/*
const precoKWH = 0.05
let kwh = Number(prompt("Quantos KwH você consumiu esse mês?"))
console.log("Sua conta de luz é de:", kwh*precoKWH, "Reais")
console.log("Parabéns você ganho 15% de desconto! Agora você pagará", (kwh*precoKWH)-15/100*(kwh*precoKWH))
*/
//============Desafio 3==================>
//A)

/*
let conversao = Number(prompt("Quantas Libras?"))
console.log("Você converteu", conversao, "lb para KG igual a", conversao=conversao/2.205)
*/

//B)
/*
let conversao = Number(prompt("Quantas Onças(oz)"))
console.log("Você converteu", conversao, "Oz para KG", conversao/35.274, "KG")
*/
//C)
/*
let conversao = Number(prompt("Quantos Milhas(mi)?"))
console.log("Você converteu", conversao, "Milhas para Metros igual a", conversao*1609)
*/
//D)
/*
let conversao = Number(prompt("Quantos feets?"))
console.log("Você converteu", conversao, "Feets para", conversao/3.281, "metros")
*/
//E)
/*let conversao = Number(prompt("Quantos gal's?"))
console.log("Você converteu", conversao, "gal em", conversao*3.785, "Litros")*/
//F)
/*
let conversao = Number(prompt("Quantas Xicaras de café senhor girafales?"))
console.log("Você converteu", conversao, "xícara(s) em", conversao/6, "Litro(s)")
*/
//G) Todas as anteriores estão nesse formato de question!