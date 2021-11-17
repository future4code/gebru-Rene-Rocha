// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

  const altura = Number(prompt("Qual a largura do Retangulo?"))
  const largura = Number(prompt("Qual a altura do Retangulo?"))
  console.log(largura*altura)
  
}

// EXERCÍCIO 02
function imprimeIdade() {

  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  console.log(anoAtual-anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {

  return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
 
  
  var nome = prompt("Qual o seu nome?")
  var idade = Number(prompt("Qual a sua idade?"))
  var email = prompt("Qual o seu email?")
  console.log("Meu nome é "+ nome +", tenho "+ idade + " anos, e o meu email é " + email + ".")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("")
  const cor2 = prompt('AUIEHJAO')
  const cor3 = prompt('AA EU TO DOIDO ERA MT FACIL')
  const cores = [cor1, cor2, cor3]
  
  console.log(cores)

}
// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length===string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let copovazio = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = copovazio
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Em que ano você está?"))
  const anoNascimento = Number(prompt("Qual o ano do seu nascimento"))
  const anoEmissao = Number(prompt("Em que ano seu RG foi emitido?"))
  let idade = anoAtual-anoNascimento
  let anoValidade = anoAtual-anoEmissao
  console.log(idade<=20 && anoValidade>=5||idade>20 && idade<=50 && anoValidade>=10||idade>50 && anoValidade>15)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  return ano%100 !== 0 && ano%4===0 || ano%100===0 && ano%400===0

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você é maior de 18 anos?')
  let em = prompt('Você possui ensino médio completo?')
  let horario = prompt('Você possui disponiblidade pra fazer o curso nesse horarios listados no teu zap?')
  console.log(idade==='sim' && em==='sim' && horario==='sim')
}

/*function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt('Você é maior de 18 anos?')
  let em = prompt('Você possui ensino médio completo?')
  let horario = prompt('Você possui disponiblidade pra fazer o curso nesse horarios listados no teu zap?')
  let validade = false
  if(idade==='sim' && em ==='sim' && horario ==='sim'){
    validade = true
    console.log(validade)
  }else console.log(validade)
}*/

/*function tarefa(){
  const pessoa1 = Number(prompt('Tempo tarefa x? em horas'))
  const pessoa2 = Number(prompt('Tempo tarefa x? em horas'))
  const tempo = (1/pessoa1)+(1/pessoa2)
  horas = Math.floor(tempo) 
  minutos = Math.round((tempo - horas)*60)
  console.log(horas, " hora ", minutos, " minutos" )
}
tarefa()*/