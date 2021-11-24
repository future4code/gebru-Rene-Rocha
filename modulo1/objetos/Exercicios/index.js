//Exercício de Interpretação de Código
//1. Será impresso o primeiro e o segundo ator do elenco e Canal Globo 14h
//2. A) Será impresso Juca, Juba e Jubo todos com idade 3 e raça SRD
//2. B) A sintaxe dos três pontos resgata todas as propriedades do objeto cachorro dentro do novo objeto
//3. A)B) Será impresso False para backender e undefined para altura pq n foi definida

//Exercício de escrita código
//1. A
const pessoa = {
    nome: "Bob Esponja",
    apelidos: ["Esponjoso", "Bob", "Besponja"]

}

function apelidar (pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)

}
apelidar(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos: ["Ponja", "Bobê", "Esbonja"]
}
apelidar(pessoa2)

//2.A)
const pessoa3 = {
    nome: "Rene",
    idade: 21,
    profissao: "Estudante"
}
const pessoa4 = {
    ...pessoa3,
    nome: "Ener"
}
//2.B
function info(pessoa) {
    const array = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
    console.log(array)
}
info(pessoa3)

//3.
const carrinho = []
const fruta = {
    nome:"Romã",
    disponibilidade: true
}

const fruta2 = {
    ...fruta,
    nome:"Banana"
}
const fruta3 = {
    ...fruta,
    nome:"Pera"
}

function listaDeFrutas(item1, item2, item3){
    carrinho.push(fruta, fruta2, fruta3)
    return console.log(carrinho)
}
listaDeFrutas(fruta, fruta2, fruta3)

//Desafio
//1.
function eu(nome, idade, job){
    nome = prompt('Qual o seu nome?')
    idade = Number(prompt('Qual a sua idade'))
    job = prompt('Qual seu job?')
    const usuario = {
        nome,
        idade,
        job
    }
    return console.log(usuario)
}
//eu()

//2.
const filmes = () =>{
    const filme1 = {
        lancamento: 2010
    }
    const filme2 = {
        lancamento: 2010
    }
    return console.log(`O primeiro filme foi lançado antes do segundo?`,filme1.lancamento<filme2.lancamento, '\n O primeiro filme foi lançado no mesmo ano do segundo filme?', filme1.lancamento === filme2.lancamento )
} 
filmes()

//3. 
function controleFrutas(fruta){
    fruta.disponibilidade = !fruta.disponibilidade
    return console.log(`A disponibilidade da fruta ${fruta.nome} é ${fruta.disponibilidade}`)
}
controleFrutas(fruta2)