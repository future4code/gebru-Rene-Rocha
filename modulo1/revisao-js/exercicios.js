// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const comparar = (a,b) =>{
        if(a>b) return 1;
        if(a<b) return -1;
        return 0
    }
    const ordem = array.sort(comparar)
    return ordem
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPar = array.filter((elemento =>{
        return elemento%2 === 0
    }))
    return arrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrayPar = array.filter((elemento =>{
        return elemento%2 === 0
    }))
    const sqr = arrayPar.map((elemento=>{
        return elemento*elemento
    }))
    return sqr
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = 0
    for(let i = 0; i<array.length; i++){
        if(array[i]>numeroMaior){
            numeroMaior = array[i] 
        }
    }return numeroMaior
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {}
    let checar = (maiorNumero, num2) =>{
        return maiorNumero%num2===0
    }
    if(num1>num2){
        objeto.maiorNumero = num1
        objeto.maiorDivisivelPorMenor = checar(objeto.maiorNumero, num2)
        objeto.diferenca = objeto.maiorNumero-num2
    }else if(num2>num1){
        objeto.maiorNumero = num2
        objeto.maiorDivisivelPorMenor = checar(objeto.maiorNumero, num1)
        objeto.diferenca = objeto.maiorNumero-num1

    }else{
        objeto.maiorNumero = num2
        objeto.maiorDivisivelPorMenor = checar(objeto.maiorNumero, num1)
        objeto.diferenca = objeto.maiorNumero-num1
        
    }
    let alvo = {...objeto}
    console.log(alvo)
    return alvo
    


}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let arrayAlvo = []
    for(let i = 0; arrayAlvo.length <n; i++){
        if(i% 2 === 0){
            arrayAlvo.push(i)
        }
      
 

    }
    return arrayAlvo

   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

  let resposta
  if(ladoA === ladoB && ladoB=== ladoC){
    resposta = "Equilátero"
  }else if(ladoA !== ladoB && ladoA!== ladoC && ladoC !== ladoB){
    resposta = "Escaleno"
  }else {return resposta = "Isósceles"
  }
  return resposta

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
const ordem = array.sort((a,b)=> a-b)
const segundoMaior = ordem[ordem.length-2]
const segundoMenor = ordem[1]
const resultado = [segundoMaior, segundoMenor]
    return resultado
    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   pessoaAnonima = {...pessoa,
    nome:"ANÔNIMO"
}
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}