let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], soma = 0, media, maiorValor, comp;

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

console.log("conteúdo",numbers);

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}
console.log(`Resultado da soma dos valores de numbers: ${soma}`);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

soma = 0 ;
for (let index = 0; index < numbers.length; index++) {
 soma = soma + numbers[index];
 
}
media = soma / numbers.length;
console.log(`Resultado da média dos valores de numbers: ${media}`);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

soma = 0 ;
for (let index = 0; index < numbers.length; index++) {
 soma = soma + numbers[index];
 
}
media = soma / numbers.length;
if (media > 20) {
 console.log("valor maior que 20");
}
else if (media <= 20){
  console.log("valor menor ou igual a 20");
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
  maiorValor = numbers[0];
  for (let comparador of numbers) {
    if (maiorValor < comparador) {
      maiorValor = comparador
    }
  }
  console.log("o maior valor do array é: ", maiorValor);

  // outra forma de fazer o código acima
  maiorValor = 0;
  for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] > maiorValor) {
    maiorValor = numbers[index];
   }
  }
  console.log("o maior valor do array é: ", maiorValor);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let valor=0;
for (let index = 0; index < numbers.length; index++) {
 impar = numbers[index] % 2;
 if (impar === 1) {
   valor++;
 }
}
console.log(`Existem: ${valor} números ímpares`);

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

 let menorValor = numbers[0];
  for (let comparador of numbers) {
    if (menorValor < comparador) {
      menorValor = comparador
    }
  }
  console.log("o menor valor do array é: ", menorValor);

  // outra forma de fazer o código acima
  menorValor = numbers[0];
  for (let index = 0; index < numbers.length; index++) {
   if (numbers[index] < menorValor) {
    menorValor = numbers[index];
   }
  }
  console.log("o menor valor do array é: ", menorValor);

  //Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
  let contagem =[];
  for (let index = 0; index < 25; index++) {
   contagem[index] = index + 1;
 }
 console.log(`O array contagem é: ${contagem}`);

 //Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

 contagem =[];
 for (let index = 0; index < 25; index++) {
  contagem[index] = (index + 1)/2;
}
console.log(`O array contagem dividido por 2 é: ${contagem}`);