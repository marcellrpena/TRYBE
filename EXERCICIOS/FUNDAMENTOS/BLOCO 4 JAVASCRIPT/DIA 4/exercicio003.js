/*
1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/
function verificaPalindromo(palavra) {
	let palavraInvertida = '', resultado;
	for (const inversor of palavra) {
		palavraInvertida = inversor + palavraInvertida;
	}
	if (palavra === palavraInvertida) {
		resultado = true;
	}else{
		resultado = false;
	}
	return resultado;
}
console.log(verificaPalindromo('arara'));
console.log(verificaPalindromo('banana'));

