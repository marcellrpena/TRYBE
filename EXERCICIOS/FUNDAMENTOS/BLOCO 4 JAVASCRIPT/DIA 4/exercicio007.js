/*
5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/

let numeros = [2, 3, 2, 5, 8, 2, 3];

function numeroRepetido (repetido) {
 let repete = 0, comparado, superior = 0, resultado;
 for (let index = 0; index < numeros.length; index++) {
  comparado = numeros[index];
  for (let comparador of numeros) {
   if (comparado === comparador) {
    repete += 1;
   }
  }
  if(repete > superior){
   superior = repete;
   resultado = comparado;
  }
  repete = 0;
 } 
 return resultado;
}
console.log(numeroRepetido(repetido));

//OUTRA FORMA DE FAZER

let repetido = [], comparado, resultado, valor = 0;

function numeroRepetido2 (repetido) {
 
 for (let index = 0; index < numeros.length; index++) {
  comparado = numeros[index];
  for (let comparador of numeros) {
   if (comparado === comparador) {
    repetido.push(comparador); 
   }
  }
  if (repetido.length > valor) {
   valor = repetido.length;
   resultado = repetido[0];
  }
  repetido = [];
 } 
 return resultado;
}
console.log(numeroRepetido2(repetido));