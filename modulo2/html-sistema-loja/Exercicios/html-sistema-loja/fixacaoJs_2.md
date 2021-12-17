```javascript

function calculaPrecoTotal(quantidade) {
  let custoTotal
  if(quantidade>=12){
    custoTotal = quantidade*1 
  }else custoTotal = quantidade*(13/10)
  return custoTotal
}
```