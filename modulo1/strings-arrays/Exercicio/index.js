//=========> Exercícios de interpretação de código

//1.
//A. Será impresso undefined
//B. Será impresso NULL
//C. Será impresso o número de elementos da array que é 11
//D. Será impresso o "0"
//E. O segundo elemento da array será alterado para 19
//F. Será impresso o elemento de 6ª posição da array

//2. Será impresso "Subi num onibus em Mirrocos" e ao lado "27" que é o número de caracteres da frase incluindo os espaços.

//=========> Exercícios de escrita de código

//1.

function exercicio1(){

    const emailDoUsuario = prompt('Digite seu e-mail')
    const semespaco = emailDoUsuario.trim()
    console.log(semespaco)
    
}

//2.

function exercicio2(){

    const comidasPreferidas = ["Comida1", "Comida2", "Comida3", "Comida4", "Comida5"]
    console.log('Minhas comidas favoritas são')
    console.log(comidasPreferidas[0])
    console.log(comidasPreferidas[1])
    console.log(comidasPreferidas[2])
    console.log(comidasPreferidas[3])
    console.log(comidasPreferidas[4])
    const trocarComida = prompt('Qual a sua comida favorita?')
    comidasPreferidas[1]=trocarComida
    console.log(comidasPreferidas[0])
    console.log(comidasPreferidas[1])
    console.log(comidasPreferidas[2])
    console.log(comidasPreferidas[3])
    console.log(comidasPreferidas[4])
    


}

//3.

function exercicio3(){

   // const listaDeTarefas = []
    const listaDeTarefas = prompt('Quais tarefas você precisa fazer hoje? as separe com ","').split(',')
    console.log(listaDeTarefas)
    const index = prompt('Quais tarefas você já concluiu, separe com ",", respectivamente tarefa 1, 2, 3 e assim por diante')
    remover = listaDeTarefas.splice(index-1, 1)
    console.log(listaDeTarefas)

}

//Desafio 1
function desafio1(){

    const frase = prompt('Escreva uma frase').split(" ")
    console.log(frase)
}

//Desafio 2
function desafio2(){
   const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"] 
   const frutaEscolhida = frutas.indexOf("Abacaxi")
   console.log(frutaEscolhida, frutas.length)


}
