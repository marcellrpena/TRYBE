
//crie um algoritmo que retorne o fatorial de 10.
/*fatorial é: 4! -> 4 x 3 x 2 x 1
1- primeiro preciso decrementar o número 
2 - multiplicar o resultado do decremento 
*/




function fatorial(num) {

	let numeroAnterior;
	let resultado = num;
	for (let decremento = 1; decremento < num; decremento++) {
		numeroAnterior = num - decremento;
		resultado = resultado * numeroAnterior;
	}
	return resultado;
}
console.log(fatorial(10));