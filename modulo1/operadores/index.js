
//Questão 1 
const exA = 3+4
console.log("Exercicio A: " +exA)  // 7

const exB = (3*5)/2
console.log("Exercicio B: " +exB) // 7,5

const exC = (4-5)*-1
console.log("Exercício C: " +exC) // 1

const exD = 234 % 5
console.log("D: " +exD )

console.log("------------------------------------")


//Questão 2

console.log(exC===exA)

console.log(exC===exC)

console.log(exC!==exC)

//Questão 3

console.log("------------------------------------")

const a = true
const b = false
const c = true

console.log(a && b)
console.log(a && c)
console.log(c && b)

console.log("------------------------------------")

console.log(a || b)
console.log(a || c)
console.log(c || b)

console.log("------------------------------------")
// ! => Operador NÃO sempre retorna o booleano oposto.,
console.log(a!==b)

//Exercício 5 do slide
console.log("------------------------------------")

const nome = "Rene"
//Cast => Transformar um dado em outro tipo de dado, nesse caso transformar as variaveis dos anos em Number pois o prompt sempre devolve string
const anoAtual = parseFloat(prompt("Quantos anos você terá em:"))
const anoNascimento = parseFloat(prompt("Em que ano você nasceu?"))
console.log(nome, ", tudo bem? Você terá", anoAtual-anoNascimento, "Anos de idade", " Você será de maior?", anoAtual-anoNascimento>=18)