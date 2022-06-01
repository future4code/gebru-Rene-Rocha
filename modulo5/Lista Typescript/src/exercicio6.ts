type cliente = {name:string, saldoTotal:number, debitos:number[]}
const dados:cliente[] = 
[
	{ name: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ name: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ name: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ name: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ name: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ name: "Soter", saldoTotal: 1200, debitos: [] }
]
let soma:number
let initValue = 0

let emprestimo = {
	...dados
}
const isNegative = (i:cliente) => {
		return i.saldoTotal < 0
	}
	
for(let i = 0; i <= 5; i++ ){
		soma = dados[i].debitos.reduce((pV,cV)=> pV+cV, initValue)
		emprestimo[i].saldoTotal +=  -soma
		emprestimo[i].debitos = []
	
		
		
	}
console.log(dados.filter(isNegative))
