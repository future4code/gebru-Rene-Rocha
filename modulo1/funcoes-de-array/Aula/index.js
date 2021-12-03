//Callback -> Colocar como parametro de uma função outra função

const verificaParEDivide = (numero, numero2,imprimir) =>{
    if(numero%2===0){
        const resultado = numero/2
        const resultado2 = numero2/2
        imprimir(resultado, resultado2)

    }
}

const imprimirResultado = (valor, valor2) =>{

    console.log(`O resultado é ${valor} ${valor2}`)

}
//verificaParEDivide(10,15,imprimirResultado)

//Exercicio 1

const numeroImpar = (numero, imprimir) =>{
    const resultado = numero%2
    if(resultado!==0){
        imprimir()
    }
}
const imprimirResultado2 = () =>{
    console.log('Sim, é impar!')
}
//Funções de Array
//map() => Primeiro parametro: corresponder ao valor do elemento do array naquela etapa do loop(item); Segundo parametro: o valor do indice daquele elemento(index), terceiro: o array em si
//retorna obrigatoriamente um valor
//map() => percorre todo array em busca de uma caracteristica especifica
const pokemons = [
    { nome: "Bulbasauro", tipo: "grama"},
    { nome: "Bellsprout", tipo: "grama"},
    { nome: "Charmander", tipo: "fogo"},
]

const retornaNome = (pokemon, index, array) =>{
    return pokemon.nome
} 

const exibeNomePokemons = (pokemons) =>{
    const nomesPokemons = pokemons.map(retornaNome)
    return nomesPokemons
} 

//console.log(exibeNomePokemons(pokemons))

//Exercicio 1 ASSISTIR AUALA DNV



//filter()
//Exercicio 3 

const listaDeNumeros = [1,2,5,8,11,11,13,15,20]
const pegarNumerosMaioresQue10 = (numero) =>{
    return numero>10
}

const numerosMaioresQue10 = listaDeNumeros.filter(pegarNumerosMaioresQue10)

console.log(numerosMaioresQue10)

//Segunda maneira
const numerosPares = listaDeNumeros.filter((numero) =>{
    return numero% 2 ===0
})

console.log(numerosPares)


//Exercicio 4

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
 ]

 const pegarProdutosLimpeza = (produto) => {
     return produto.categoria ==="Limpeza"
 }
 const produtosDeLimpeza = produtos.filter(pegarProdutosLimpeza)
 console.log(produtosDeLimpeza)

 const nomesProdutosDeLimpeza = produtos.map(pegarProdutosLimpeza)
 console.log(nomesProdutosDeLimpeza)

 //ESTUDAR MAP CARA