```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
let salarioFixo = 2000
let comissao = qtdeCarrosVendidos*(100)+(5/100*valorTotalVendas)
let salarioFinal = salarioFixo+comissao
return salarioFinal
}

```


```javascript
function calculaPrecoTotal(quantidade) {
  let custoTotal
  if(quantidade>=12){
    custoTotal = quantidade*1 
  }else custoTotal = quantidade*(13/10)
  return custoTotal
}

```


```javascript
function calculaNota(ex, p1, p2) {
  var notaP1 = p1*2;
  var notaP2 = p2*3;
  var media = (ex+notaP1+notaP2)/6;
  var resposta
  switch(media != Number){
    case media >=9:
      resposta = "A";
      break;
    case media <9 && media >= 7.5:
      resposta = "B";
      break;
    case media < 7.5 && media >= 6:
      resposta = "C";
      break;
    case media<6:
      resposta = "D";
      
  }
  return resposta
}

```


```javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let repeat = 0;
  let resposta;
  
  for(let i = 0; i <= arrayDeNumeros.length; i++){
    
    if(numeroEscolhido === arrayDeNumeros[i]){
      repeat = repeat + 1;
      resposta = `O número ${numeroEscolhido} aparece ${repeat}x`;
    }else if(arrayDeNumeros.indexOf(numeroEscolhido) === -1){
      resposta = "Número não encontrado"
    }
    
  
  }

   return resposta;

  
}

```


```javascript
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

let novoArray = animais.map(function (animais) {
          return animais.nome;
      })
      return novoArray
    
}

```


```javascript

function filtraTarefas() {
  const tarefas = [
    { titulo: "Fazer Remember", status: "done", tempo: 30 },
    { titulo: "Fazer Challange", status: "todo", tempo: 30 },
    { titulo: "Assistir Aula", status: "done", tempo: 120 },
    { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
    { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
    { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
    { titulo: "Fazer desafio", status: "doing", tempo: 60 },
    { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
    { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
    { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
    { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
    { titulo: "Assistir Novela", status: "todo", tempo: 90 }
 ]

  let novoArray = tarefas.filter(function (tarefas) {
          return tarefas.status === "done";
      }).map(function (tarefas) {
          return tarefas.titulo;
      })
      return novoArray

}

```