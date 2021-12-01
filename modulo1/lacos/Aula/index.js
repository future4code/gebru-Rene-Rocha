//Exemplos While
const exemplo1 = () =>{
    let pesoBalanca=0 //Condição Inicial

    //Condição de Continuidade
    while (pesoBalanca <= 200){

        //Ação -> cortar uma fatia e adicionar na balança
        console.log(`Adicionando mais uma fatia. Peso Total: ${pesoBalanca}`)
        pesoBalanca += 20 // pesoBalanca = pesoBalanca + 20
        //Aumentar o pesoBalanca é o incremento
    }
}
//Exercicio 1(Outro jeito)
const exercicio1meu = () =>{
    let number1 = []
    let condição
    const somar  = (valorInicial, valorFinal) => valorInicial + valorFinal
    while(condição!== 0){
        const addNumber = Number(prompt('Digite um número:'))
        number1.push(addNumber)
        condição = addNumber
        

    }
    
    console.log(number1.reduce(somar));

}
//Exercicio 1
const exercicio1 = () =>{
    let numeroUsuario = Number(prompt('Insira um número:'))
    let resultadoSoma = 0
    while(numeroUsuario!==0){
        numeroUsuario = Number(prompt('Insira um número:'))
        resultadoSoma += numeroUsuario
    }
    console.log(resultadoSoma)
}

//Exemplo For
const exemploFor1 = () =>{
    let soma = 0
    for (let i = 0; i<10; i++){
        soma+=i
        console.log('i: ', i)
        console.log('Soma', soma)
    }
}

const exemploFor2 = () =>{
    const numeros = [14, 67, 89, 15, 23, 67, 100, 32]
    for(let i = 0; i<numeros.length; i++){
        const elemento = numeros[i]
        console.log(elemento)
    }
}
//Encontrar Maior Número
const exercicio2 = (array) =>{
        let maiorNumero = 0
        for(let i = 0; i<array.length; i++){
            const elemento = array[i]
            if(elemento > maiorNumero){
                maiorNumero = elemento
            }
        }
        return console.log(maiorNumero)
    }    

exercicio2([1,2,3,15,10,2939103])

//For...of...especifico para array(caminha cada elemento da array com mais praticidade) VALOR
//For... in ... percorre os index[0,1,2,3] sequencial CHAVE
const forOfExemplo = (array) =>{
    let maior = 0
    for (let numero of array){
        if(numero>maior){
            maior=numero
        }
        return console.log(maior)
    }
}
exercicio2([1,2,3,15,10,2939103])
//Formar frases com elementos do array
const exercicio3 = (array) =>{
        let frase = ""
        for(let palavra of array){
            frase += palavra +" "
        }return frase
    } 
    console.log(exercicio3(["Oi","sumido","tudo","bem?","Saudades!"]))



