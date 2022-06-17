console.log('Hello World')

const instrutores: {  id: number,   name: string, age:number} [] = [{
    id:1,
    name:"a",
    age: 22
},
{
    id:2,
    name:"b",
    age: 29
}
]

const filtrar = (k:number)=>
{
let filtrado = [];
for(let i = 0; i<instrutores.length; i++)
    if(instrutores[i].id === k){
        filtrado.push(instrutores[i].name)
        filtrado.push(instrutores[i].age)
        
    }
return filtrado
}
