enum SETOR {
    MARKETING = 'marketing', 
    VENDAS = 'vendas',
    FINANCEIRO = 'financeiro'
}

type colaboradores = {nome:string, salario:number, setor:SETOR, presencial:boolean }


const array:colaboradores[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function findSetor(i:colaboradores){
    return i.setor === SETOR.MARKETING
}

let arr2:colaboradores[] = array.filter(findSetor)

arr2.map((i:colaboradores)=>{
    return i.presencial = true
})

console.log(arr2)