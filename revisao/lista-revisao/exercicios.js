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
  let altura = prompt(Number('Altura'))
  let largura = prompt(Number('Largura'))
  return console.log(altura*largura)


}

// EXERCÍCIO 02
function imprimeIdade() {
  let atual = prompt(Number('Ano Atual'))
  let nasc = prompt(Number('Ano Nascimento'))
  return console.log(atual-nasc)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso/(altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt('')
  let idade = prompt('')
  let email = prompt('')
  return console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt('Qual sua Cor favorita?')
  let cor2 = prompt('Qual sua Cor favorita?')
  let cor3 = prompt('Qual sua Cor favorita?')
  return console.log(`${cor1}, ${cor2}, ${cor3}`)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length===string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toUpperCase()===string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {

}