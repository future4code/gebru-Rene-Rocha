//Exercícios de interpretação de código
//1. A) Será impresso o item o index e por ultimo o array, cada item separadamente
//2. B) Será impresso uma nova array contendo apenas o nome da Array usuários(sendo que esse nomes agora estão contidos em novoArrayB)
//3. C) Será impresso uma nova array contendo apenas itens que não tem "Chijo" em apelido

//Exercicios de escrita de codigo
//1. 
const exercicio1 = () =>{
    const pets = [
        { nome: "Lupin", raca: "Salsicha"},
        { nome: "Polly", raca: "Lhasa Apso"},
        { nome: "Madame", raca: "Poodle"},
        { nome: "Quentinho", raca: "Salsicha"},
        { nome: "Fluffy", raca: "Poodle"},
        { nome: "Caramelo", raca: "Vira-lata"},
        ]

    const petsNome = pets.map((item, index, array)=>{
        return item.nome
    })
    const apenasRaca = pets.filter((item, index, array)=>{
        return item.raca === "Salsicha"
    })
    
    const mensagemPoddle = pets.filter((item) =>{
       const raca = item.raca === 'Poodle'
       if(raca)alert(`Você recebeu 10% de desconto para tosar o/a ${item.nome}`)
    })
    
}

//2. 
const exercicio2 = () =>{
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
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    const produtosNome = produtos.map((item)=>{
        return item.nome
    })
}