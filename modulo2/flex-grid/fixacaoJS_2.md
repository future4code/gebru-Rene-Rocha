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