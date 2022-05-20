//Exercicio de interpretação de código
//1. Será impresso no console, "Matheus Nachtergaele", "Virginia Cabendish" e Canal:"Globo"; Horario:"14h"
//2. A) Vai ser impresso as informações de nome idade e raca
//  vai ser impresso as mesmas informações de cachorro só alterando o nome para juba
//  vai ser impresso as mesmas informações de gato só que trocando todas as letras A do nome para O
//2. B) Atribui todas as informações do objeto seguinte do ... ao novo objeto
//3. A) Vai ser impresso FALSE e UNDEFINED
//3. B) Altura não é uma propriedade do objeto
//Exercício de escrita de código

const pessoas = {
    nome:"Kazama",
    apelido: ["Ze Alho", "Ze","Zero"]
}

const pessoas2 = {...pessoas, apelido:["ap","pa","pu"]
}

const objeto1 = {
    nome:"a",
    idade:1,
    job:"b"
}
const objeto2 = {
    nome:"a",
    idade:1,
    job:"b"
}

exercicio2b = (obj) =>{
    console.log(obj.nome,obj.idade,obj.job)
}

let carrinho = {}

const obj1 = {
    nome:"Banana",
    disp:true


}

const obj2 = {
    nome:"Morango",
    disp:true

    
}

const obj3 = {
    nome:"Abacate",
    disp:true

    
}

exercicio3c = (fruta) =>{
    carrinho.push(fruta) 
    return carrinho

}
exercicio3c(obj1)
