//-------Condicional If Else----------------


/* condicao1 = false

if(condicao1){
    console.log(`Cai nesse if pq é ${condicao1}`)
}

let condicao2 = true

if(condicao2){
    console.log(`Cai nesse if pq é ${condicao2}`)
}*/


//Exercicio 1 e 2

const check = (num1,num2) => {
    if(num1===num2){
        console.log("Numero 1 e Numero 2 são iguais")
    }else console.log("Eles são diferentes amigue")
}
//check(1,2)

const num1 = Number(prompt("Insira o primeiro numero"))
const num2 = Number(prompt("Insira o segundo numero"))
//check(num1,num2)

//Exercicio 3

const comparar = (num1,num2) => {
    if(num1>num2) console.log('Numero 1 maior que numero2')
    else if(num1<num2) console.log('numero 1 é menor que numero2')
    else console.log('Eles são iguais')
}
//comparar(num1,num2)

//Switch Case 
const switchCase = (pokemon) => {
    
    switch(pokemon){
        case "Bulbasauro":
        console.log('Tipo>Planta e veneno')
        break
        case "Charmender":
        console.log('Tipo FOGO')
        break
        case "Squirtle":
        console.log('Tipo água')
        break
        default:
           console.log("QUEM É ESSE POKEMON???")
    }
}

//const pokemon = prompt('Escolhe um pokemon mané')
//switchCase(pokemon)

//Exercicio 5 (???)

const facul = () => {
    const EM = prompt("Você concluiu o ensino medio? Sim ou Não").toLowerCase()
    const idade = prompt("Você tem mais de 18 anos? Sim ou Não").toLowerCase()
    const cursando = prompt("Você está cursando outra faculdade? Sim ou Não").toLowerCase()
    return console.log('Você pode cursar na nossa faculdade?', EM ==='sim'&&idade==='sim'&&cursando==='sim' )

}
//facul()
/*const EM = prompt("Você concluiu o ensino medio? Sim ou Não").toLowerCase()//Obs.: se eu escrever ==="Sim" eu transformo essa variavel em boolean assim nao ia precisar declarar === dentro do if, pq ja estaria em boolean
const idade = prompt("Você tem mais de 18 anos? Sim ou Não").toLowerCase()
const cursando = prompt("Você está cursando outra faculdade? Sim ou Não").toLowerCase()

const facul2 = (EM1,idade1,cursando1) => {
    if(EM1 ==='sim'&&idade1 ==='sim'&&cursando1==='sim'){
        console.log("Parabéns você pode estudar aqui!")
    }else console.log("Pode não, deu merda ai")
}
facul2(EM, idade, cursando)*/

//Exercicio 5 confirm()
const faculConfirm = () => {
    const EM = confirm("Você concluiu o ensino medio? Sim ou Não")
    const idade = confirm("Você tem mais de 18 anos? Sim ou Não")
    const cursando = confirm("Você está cursando outra faculdade? Sim ou Não")
    return console.log('Você pode cursar a faculdade?', EM ===idade===cursando)

}
//faculConfirm()

const switchCaseFacul = () => {
    const EM = confirm("Você concluiu o ensino medio? Sim ou Não")
    const idade = confirm("Você tem mais de 18 anos? Sim ou Não")
    const cursando = confirm("Você está cursando outra faculdade? Sim ou Não") 
    const verificar = EM&&idade&&cursando === true  
    switch(verificar){
        case true:
        console.log('Você pode entrar na faculdade')
        break
        default:
           console.log("Você não pode cursar")
    }
}
switchCaseFacul()