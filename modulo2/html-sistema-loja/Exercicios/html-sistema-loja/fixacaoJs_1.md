```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {

    let salarioFixo = 2000
    let comissao = qtdeCarrosVendidos*(100)+(5/100*valorTotalVendas)
    let salarioFinal = salarioFixo+comissao
    return salarioFinal
}
```