/*3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .*/

let inteiros = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorValor(inteiros) {
  let comparador, index;
  comparador = inteiros[0];
  for (const numero of inteiros) {
    if (comparador > numero) {
      comparador = numero;
      index = inteiros.indexOf(comparador);
    }
  }
  return index;
}
console.log(`o indice com o menor valor é : ${indiceMenorValor(inteiros)} `);

inteiros.push(20, -9, -7);
console.log(`o indice com o menor valor é : ${indiceMenorValor(inteiros)} `);