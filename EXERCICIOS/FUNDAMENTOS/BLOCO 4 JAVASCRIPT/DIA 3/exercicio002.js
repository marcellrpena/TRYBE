//2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

//1 - forma de separar as letras
//2 - concatenar sempre a segunda letra antes da primeira letra  

let word = 'banana';
let tamnaho = word.length;
let palavraInvertida = "";

for (let letra of word) {
 palavraInvertida = letra + palavraInvertida;
}
console.log(palavraInvertida);