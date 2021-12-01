//Exercicios de interpretação de código
//1. O código irá repetir cinco vezes a linha valor +=i(que atribui à variavel valor, ela mesmo + o valor do i)
//2. A) Será impresso no console todos os numeros maiores que 18
//B) Para acessar o indice se sua for in
//3. Será impresso *, **, ***, ****
//Exercicio de Escrita de Código
const exercicio1 = () => {
    let nomes = []
    let quantosBichinhos = Number(prompt('Quantos bichinhos você tem?'))
    if(quantosBichinhos<=0){ 
        console.log('Que pena! Você pode adotar um pet!')
    }else if(quantosBichinhos>0){
        nomes = prompt('Qual o nome deles?(Divida com virgula ",")').split(',')

    }console.log(nomes)
    
}

const exercicio1Laco = () =>{
    let nomes = []
    let quantosBichinhos = Number(prompt('Quantos bichinho você tem?'))
    if(quantosBichinhos<=0){
        console.log('Que pena! Você pode adotar um pet!')
    }else for(let i = 0; i<quantosBichinhos; i++){
        nomes.push(prompt(`Qual o nome dos seus ${quantosBichinhos} bichinhos digite um por um`))
    }console.log(nomes)
}
//2. 
const exercicio2 = () =>{
    let novoArray = []
    let arrayOriginal = [10,20,30,40, 11]
    const letraA = () =>{
        for(let numero of arrayOriginal){
            console.log(numero)
        }


    }
    const letraB = () => {
        for(let numero of arrayOriginal){
            console.log(numero/10)
        }
    }
    const letraC = () =>{
        for(let numero of arrayOriginal){
            if(numero%2 ===0 ){
                novoArray.push(numero)
            }
        }console.log(novoArray)
    }
    const letraD = () =>{

    }
    //executar aqui
    
    
}
exercicio2()