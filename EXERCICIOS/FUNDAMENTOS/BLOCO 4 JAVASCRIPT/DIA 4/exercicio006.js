/*4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .*/

let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome (nomes) {
 let maiorNome = 0, caracteres, maiorString;
 for (let index = 0; index < nomes.length; index++) {
  string = nomes[index];
  caracteres = string.length;
  if (maiorNome < caracteres) {
    maiorNome = caracteres;
    maiorString = nomes[index];
  }
 }
 return maiorString  
}
console.log(maiorNome(nomes));