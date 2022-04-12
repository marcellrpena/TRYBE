/*
7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false
*/
function verificaString (word, ending) {
 let indiceWord = word.length, parteWord = '', resultado;
 for (let index = 0; index < ending.length; index++) {
  indiceWord--;
  parteWord = word[indiceWord] + parteWord;
 }
 if (parteWord === ending) {
  resultado = true;
 }else{
  resultado = false;
 }
  return resultado;
}
console.log(verificaString('trybe', 'be'));

// OUTRA FORMA DE FAZER :

function verificaString (word, ending) {
 let indiceWord = [], indiceEnding = [], parteWord = '', resultado;
 for (let index = 0; index < word.length; index++) {
  indiceWord[index] = word[index];
  indiceEnding[index] = ending[index];
 }
 indiceWord.reverse();
 for (let index = 0; index < ending.length; index++) {
  parteWord = indiceWord[index]+ parteWord;
 }
 if (parteWord === ending) {
  resultado = true;
 }else{
  resultado = false;
 }
  return resultado;
}
console.log(verificaString('trybe', 'eb'));