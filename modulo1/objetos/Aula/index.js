//Obs.:Algumas anotações estão diferentes da aula pq treinei meu Template String
const instrutora = {
    nome: "Rene",
    idade: 21,
    backender: true
    //chave: valor
}

//const nomeInstrutora = instrutora.nome
//instrutora.nome = "Tay"
//console.log(instrutora.nome)

//Exercicio 01
const filme = {
    diretor: "Lázaro Ramos",
    nome: "Medida Provisória",
    lancamento: 2021,
    elenco: ["Tais Araujo", "Seu Jorge", "Alfred Enoch"],
    visto: false,
}
console.log(`Você já viu o filme ${filme.nome}\n diretor ${filme["diretor"]}\n Elenco: ${filme["elenco"]}\n Viu? ${filme.visto}`)

//Exercicio 02

const pessoa = {

    nome: "Rene",
    idade: 21,
    fome: true
}
console.log(`${pessoa.nome} de ${pessoa.idade} anos, tem fome? ${pessoa.fome}`)

//Acessando Objetos dentro de ojetos

const paiDePet = {
    nome: "Rene",
    pet: {
        nome: "Julie",
        raca: "Poodle",
        idade: 12,
        cores: ["Preto", "Marrom"]
    }
}
//posso também armazena a informação dentro de uma variavel como na proxima linha
const pet = paiDePet.pet.nome
console.log(pet, paiDePet.pet.cores)

//Array de Objetos

const instrutoras = [
    {nome: "Lais", modulo: 1},
    {nome: "Amanda", modulo:2},
    {nome: "Chijo", modulo:3}
]

const nomeInstrutora= instrutoras[0].nome
console.log(nomeInstrutora)

//Adicionar Propriedades -> Mesma sintaxe para reatribuir valor
instrutoras[0].horario = "19h"
console.log(instrutoras[0].horario)

//Exercicio 3

filme.personagens = ['Capitu', 'Andre', 'Antônio']
console.log(`${filme.elenco[0]}: ${filme.personagens[0]} \n ${filme.elenco[1]}: ${filme.elenco[1]} \n ${filme.elenco[2]}: ${filme.personagens[2]}`)

filme.elenco[0] = 'Xuxa'
console.log(filme.elenco)
console.log(`O nome do filme é ${filme.nome} e os personagens são ${filme.personagens[0]}, ${filme.personagens[1]} e ${filme.personagens[2]}`)

//Spread Operator ou Espalhamento(Copiar e Manipular essa cópia de Objeto)"...nomeObjeto"

const usuario ={
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
}

const novoUsuario = {
    ...usuario,
    nome: "Rene",
    sobrenome: "Rocha"
}

//Spread Operator em Array

const listaDeNomes = ["Pedro", "Chijo", "Amanda"]
const copiaListaDeNomes = [...listaDeNomes, "Tayanne"]
console.log(listaDeNomes)
console.log(copiaListaDeNomes)

//Exercicio 4

const novaPessoa = {
    ...pessoa,
    listaComida: ["Pizza","Ovo Frito", "Lasanha"],
    melhorAmigo: {
        nome: "Paulo",
        idade: 22

    } 
}

console.log(`O nome dessa pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.listaComida[0]}, ${novaPessoa.listaComida[1]} e ${novaPessoa.listaComida[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos`)