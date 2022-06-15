//exercicio 1
const ex1 = (str:string, age:string) =>{
  const dataArray:string[] = age.split('/')
  return console.log(`My name is ${str}, i was born ${dataArray[0]} of the month ${dataArray[1]} of the year of ${dataArray[2]}`)

}

ex1('Sampaio','24/04/1987')



