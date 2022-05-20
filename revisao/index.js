//Exercicio de Interpretação de Código
/*  1) A. undefined
     B. null
     C. 11
     D. 1
     E. vai trocar o segundo elemento por 19
     F. 9
    
     2) Todas as letras A serão trocadas por letras I e será impresso ao lado dessa frase trocada a quantidade de letras ex. Subi num onibus em mirrocos

*/
let prog1 = () =>{
    let nome = prompt('Qual seu nome?')
    console.log(`${nome}@labenu.com`)
}


let prog2 = () => {

    let array = ['Carne','Arroz','Feijão','Batata','Pão']
    console.log(`Essas são minhas comidas preferidas:`)
    for(let i=0; i < array.length; i++){
        console.log(`${i+1}.${array[i]}`)
    }
    let comida = prompt('Qual a sua comida favorita')
    array[1] = comida
    for(let i=0; i < array.length; i++){
        console.log(`${i+1}.${array[i]}`)
    }
}
let prog3 = () =>{
    let listaDeTarefas
    listaDeTarefas = prompt('3 tarefas separe com virgulas').split(',')
    console.log(listaDeTarefas)
    let index = Number(prompt('Qual tarefa você já realizou 0, 1, 2?'))
    if(index>-1){
        listaDeTarefas.splice(index,1)
    }
    console.log(listaDeTarefas)


}
//Desafio 
let desafio1 = (frase) =>{
    let array = frase.split(' ')
    console.log(array)
}
desafio1("Tenho falta de dinheiro me ajuda lula")

let desafio2 = () => {
    let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    for(let i = 0; i<=array.length; i++){
        if(array[i] === 'Abacaxi'){
            console.log(`${array[i]} index nº${i}`)

        }
    }

}
desafio2()
