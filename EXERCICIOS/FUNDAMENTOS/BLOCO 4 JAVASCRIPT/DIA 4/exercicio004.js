/*
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

let inteiros = [2, 3, 6, 7, 10, 1], comparador, index;
  

function indiceMaiorValor(inteiros) {
  let comparador, index;
  comparador = inteiros[0];
  for (const numero of inteiros) {
    if (comparador < numero) {
      comparador = numero;
      index = inteiros.indexOf(comparador);
    }
  }
  return index;
}
console.log(`o indice com o maior valor é : ${indiceMaiorValor(inteiros)} `);

inteiros.push(20, 30, 40);
console.log(`o indice com o maior valor é : ${indiceMaiorValor(inteiros)} `);