const a = 10
const b = 5
const c = '5'

/*
  Operadores de comparação
  - igual a ==
  - identico a === 
  - diferente !=
  - realmente diferente !==
  - maior que
  - maior ou igual a
  - menor que
  - menor ou igual a
*/
// console.log('igual',b==c)
// console.log('identico',b===c)
// console.log('diferente',b!=c)
// console.log('realmente diferente',b!==c)
// console.log('maior ou igual ',a>=b)
// console.log('menor',a<b)
// console.log('menor ou igual ',a<=c)



/*
 Operadores Lógicos
 - e &&
 - ou || 
 - negação 
*/
console.log('maior -> ', a > b && b == c)
console.log('maior -> ', a > b || b == c)
console.log('maior -> ', !(a > b) && b == c)

/*
 - If
 - ternário
*/
if(4 > 2){
  console.log('é')
}else{
  console.log('nao é')
}
const maior = (4 > 2) ? 'é' : 'nao é'