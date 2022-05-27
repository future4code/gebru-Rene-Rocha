console.log('Hello World')

const nome:string = "Rene"
let idade:number = 22
//idade = 15

let aprovado: boolean = true

console.log(nome,idade)

let newArray:number[] = [0,1,2,3,4,5,6,7,8,9]
newArray = []

let meuObjeto:{nome:string, idade:number} = {
    nome:"Rene",
    idade: 25
}
let newArray2: (number | string )[] = [1,'a']

//tipo any não é boa prática
let ano:any = 2022
ano = '2022'
ano = true
ano = 'Hahahueha'

const soma = (a:number , b:number) =>{
    return a + b
}
const pessoa = (nome:string, idade:number):void =>{
    console.log('Pessoa', nome, idade)


}

//const minhaFuncao = (nome:string, callback:()=> void):void

function buscarCarrosPorMarca(frota: {marca:string}[], marca?:string):{}[]{
    if(marca===undefined){
        return frota
    }
    return frota.filter((carro)=>{
        return carro.marca === marca
    })

}
//Exercício 1
function checaTriangulo(a:number, b:number, c:number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

//Exercício 2
const imprimeTresCoresFavoritas = (cor1: string, cor2: string, cor3: string): string[] => {
  const arrayDeCores = []
  arrayDeCores.push(cor1, cor2, cor3)
  return arrayDeCores
}
//Exercicio 3
const checaAnoBissexto = (ano:number):boolean => {
  const cond1 = ano % 400 === 0
  const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
  return cond1 || cond2
}
//Exercicio 4
function comparaDoisNumeros(num1:number, num2:number):number {
  let maiorNumero:number;
  let menorNumero:number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca 
}
//Exercício 5
const checaRenovacaoRG = (anoAtual:number, anoNascimento:number, anoEmissao:number ):string => {
  let idade:number = anoAtual - anoNascimento
  let tempoCarteira:number = anoAtual - anoEmissao
 
   if(idade <= 20 ) {
       return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
     
    }else if(idade >= 20 || idade <= 50) {
       return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
     
    }else if(idade > 50) {
       return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
     
     }else {
         return "error"
     }
 }
 //Exercício 6
 const desafio1 = (num1:number, num2:number) =>{
   let maior:number = 0
   if(num1>num2){
     maior = num1

   }else maior=num2
   return console.log(`A Soma desses números é ${num1+num2}, A Subtração desses números é ${num1-num2}, A Multiplicação desses números é ${num1*num2}, e o número ${maior} é maior`)



 }
  //Exercício 7

 const desafio2 = (dna:any) =>{

   
   const replaceAll = (x:string,y:string) =>{
     for(let i = 0; i = dna.length; i++){
       dna[i] = dna.replace(x,y)
       
       
      }return dna
      
    }
   let rna = dna
   rna = rna.replaceAll('A', 'U')
   rna = rna.replaceAll('T', 'A')
   rna = rna.replaceAll('C', '1')
   rna = rna.replaceAll('G', '2')
   rna = rna.replaceAll('1', 'G')
   rna = rna.replaceAll('2', 'C')

   console.log(rna)
 }

 const desafio3 = (frase:string) =>{
  return console.log(frase.split("").reverse().join(""))

 }
 desafio3('abc')
