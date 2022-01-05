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