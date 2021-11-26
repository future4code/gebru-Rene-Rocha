// Exercícios de Interpretação de Código
//1.
//A)B)C) O Código nos dá se um número é divisível por 2(sem sobrar resto) e quando isso é verdade ele imprime "Passou no teste" quando não é ele imprime "Não passou no teste"

//2.
//A) O Codigo acima lê a fruta que o usuário escolheu e imprime o que é refente a ela
//B) Será impresso: "O preço da fruta Maçã é R$2.25"
//C) O código não parará de ser lido em Pêra e o preço será atribuido duas vezes, a primeira vez com 5.5 e a segundo, que será impressa no console, 5
//3.
//A) A primeira linha está recebendo um string que é convertida em Number para a váriável(CONSTANTE) número, este recebimento é feito através de um prompt
//B) A mensagem será esse número "PASSOU NO TESTE e ESSA MENSAGEM É SECRETA", caso fosse -10 não imprimiria nada pois não atendeu as exigencias do nosso ifElse
//C) Haverá um erro dizendo que a "mensagem" não está declarado pois ele só é declarado se o nosso "número" atender as exigências do ifElse(Válido ressaltar que isso só é verdade pq a variável está declada somente no escopo do ifElse e não no escopo global)


//Exercicio de Escrita de Código
//1. 
const exercicio1 = () =>{
    const idade = Number(prompt('Qual a sua idade?'))
    const maiorIdade = idade>=18
    if(maiorIdade){
        console.log('Você pode dirigir.')
    }else console.log('Você não pode dirigir.')             
}

//2.
const exercicio2 = () =>{
    const turno = prompt("Digite M para matutino, V para vespertino, N para noturno").toLowerCase()
    if(turno==='m'){
        console.log("Bom dia!")
    }else if(turno==='v'){
        console.log("Boa tarde!")
    }else if(turno==='n'){
        console.log("Boa noite")
    }else console.log('Tentando burlar o sistema né malandre?')
}
//3.
const exercicio2Switch = () =>{
    const turno = prompt("Digite M para matutino, V para vespertino, N para noturno").toLowerCase()
    switch(turno){
        case 'm' :
            console.log('Bom dia!')
            break;
        case 'v' :
            console.log('Boa tarde!')
            break;
        case 'n' :
            console.log('Boa noite')
            break;
        default:
            console.log('Burlando sistema né malandre')
            break;
    }
}
//4.
const exercicio3 = () =>{
    const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
    const precoIngresso = Number(prompt('Qual o preço do ingresso em R$?'))
    if(generoFilme ==='fantasia' && precoIngresso<15){
        console.log('Bom Filme')
    }else console.log('Escolhe outro filme :(')
}
//Desafios
//1.
const desafio1 = () =>{
    const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
    const precoIngresso = Number(prompt('Qual o preço do ingresso em R$?'))
    if(generoFilme ==='fantasia' && precoIngresso<15){
        const snack = prompt("Qual lanchinho você vai comer?").toLowerCase()
        console.log(`Bom filme, aproveite o seu ${snack}.`)
    }else console.log('Escolhe outro filme :(')   
}


//2.
const desafio2 = () =>{
    const nome = prompt("Qual o seu nome?")
    const tipoDeJogo = prompt("Qual o tipo de jogo? Internacional ou Domestico?").toUpperCase()
    const etapaDeJogo = prompt("Qual a etapa de jogo? SemiFinal, DecisaoTerceiro ou Final? ").toUpperCase()
    const categoria = Number(prompt('Qual a categoria? 1,2,3,4'))
    const ingressos = Number(prompt('Quantos ingressos?')) 
    let dolar = 4.10
    const compra = {
        nomeCompleto: nome,
        tipo: tipoDeJogo,
        etapa: etapaDeJogo,
        cat: categoria,
        nIngressos: ingressos,

    }
    if(compra.tipo==="INTERNACIONAL" && compra.etapa==="SemiFinal"){
        switch(compra.cat){
            case 1:
                compra.valorIngresso = 1320
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 2:
                compra.valorIngresso = 880
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 3:
                compra.valorIngresso = 550
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 4:
                compra.valorIngresso = 220
                compra.precoIngresso = (dolar*(220*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
    
    
        }   

    }else if(compra.tipo==="INTERNACIONAL" && compra.etapa==="DECISAOTERCEIRO"){
        switch(compra.cat){
            case 1:
                compra.valorIngresso = 660
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 2:
                compra.valorIngresso = 440
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 3:
                compra.valorIngresso = 330
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 4:
                compra.valorIngresso = 170
                compra.precoIngresso = (dolar*(220*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
    
    
        }   

    }else if(compra.tipo==='INTERNACIONAL' && compra.etapa==="FINAL"){
        switch(compra.cat){
            case 1:
                compra.valorIngresso = 1980
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 2:
                compra.valorIngresso = 1320
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 3:
                compra.valorIngresso = 880
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 4:
                compra.valorIngresso = 330
                compra.precoIngresso = (dolar*(220*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso*dolar} \n Valor total: R$ ${compra.precoIngresso}`)
                break;//marcacao
    
    
        }   

    }else if(compra.tipo==="DOMESTICO" && compra.etapa==="SemiFinal"){
        dolar = 1
        switch(compra.cat){
            case 1:
                compra.valorIngresso = 1320
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 2:
                compra.valorIngresso = 880
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 3:
                compra.valorIngresso = 550
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 4:
                compra.valorIngresso = 220
                compra.precoIngresso = (dolar*(220*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
    
    
        }   

    }else if(compra.tipo==="DOMESTICO" && compra.etapa==="DECISAOTERCEIRO"){
        dolar = 1
        switch(compra.cat){
            case 1:
                compra.valorIngresso = 660
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 2:
                compra.valorIngresso = 440
                compra.precoIngresso = (dolar*(compra.valorIngresso*compra.nIngressos)),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 3:
                compra.valorIngresso = 330
                compra.precoIngresso = dolar*(compra.valorIngresso*compra.nIngressos),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 4:
                compra.valorIngresso = 170
                compra.precoIngresso = dolar*(220*compra.nIngressos),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
    
    
        }   

    }else if(compra.tipo==='DOMESTICO' && compra.etapa==="FINAL"){
        dolar = 1
        switch(compra.cat){
            case 1:
                compra.valorIngresso = 1980
                compra.precoIngresso = dolar*(compra.valorIngresso*compra.nIngressos),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 2:
                compra.valorIngresso = 1320
                compra.precoIngresso = dolar*(compra.valorIngresso*compra.nIngressos),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 3:
                compra.valorIngresso = 880
                compra.precoIngresso = dolar*(compra.valorIngresso*compra.nIngressos),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
            case 4:
                compra.valorIngresso = 330
                compra.precoIngresso = dolar*(220*compra.nIngressos),
                console.log(`----Dados da Compra-----\n Nome${compra.nomeCompleto} \n Tipo de Jogo: ${compra.tipo} \n Etapa: ${compra.etapa} \n Categoria:${compra.cat} \n Numero de Ingressos: ${compra.nIngressos}`),
                console.log(`----Valores----\n Valor do ingresso: R$${compra.valorIngresso} \n Valor total: R$ ${compra.precoIngresso}`)
                break;
    
    
        }   

    }
}
//desafio2()