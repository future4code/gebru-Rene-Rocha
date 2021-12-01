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
        novoArray= ["1","2","3","4","5","6","7","8","9","10"]
        for(let i = 0; i<novoArray.length; i++ ){
            console.log(`O elemento do index ${i} é ${novoArray[i]}`)            
        }


    }
    const letraE = () =>{
        let menorNumero = 100
        let maiorNumero = 0
        for(let numero1 of arrayOriginal){
            if(numero1<menorNumero){
                menorNumero=numero1
            }
        for(let numero2 of arrayOriginal){
            if(numero1>maiorNumero){
                maiorNumero=numero2
                }
            }
        }console.log(`Maior número ${maiorNumero}, Menor número ${menorNumero}`)
    }
    //executar aqui
}
const desafio1 = () =>{
    const number1 = Number(prompt('Olá pessoa1, digite um número'))
    let number2 = Number(prompt('Olá pessoa2, advinhe o número que a pessoa 1 escolheu'))
    let tentativa  = 0
    while(number1!==number2){
        if(number1>number2){
        tentativa = tentativa+1
        number2 = Number(prompt('ERROU, É MAIOR TENTE DNV, Insira um número'))
        }else{
        tentativa= tentativa+1
        number2 = Number(prompt('ERROU, É MENOR TENTE DNV, Insira um número'))
        }
    }alert('Acertou!!'); alert(`O número de tentativas foi: ${tentativa}`)
    let again = confirm('Quer jogar dnv?')
    if(again) desafio1()
    else alert('Valeu!')

}
const desafio2 = () =>{
    const number1 = Math.floor((Math.random()*100)+1)
    console.log(number1)
    let number2 = Number(prompt('Tente advinhar o número!'))
    let tentativa  = 0
    while(number1!==number2){
        if(number1>number2){
        tentativa = tentativa+1
        number2 = Number(prompt(`Você inseriu ${number2} e errou, o numero é maior que isso`))
        }else{
        tentativa= tentativa+1
        number2 = Number(prompt(`Você inseriu ${number2} e errou, o numero é menor que isso`))
        }
    }alert('Acertou!!'); alert(`O número de tentativas foi: ${tentativa}`)
    let again = confirm('Quer jogar dnv?')
    if(again) desafio2()
    else alert('Valeu!')
}
