/* 
1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. 

Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id.

A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. 
*/

const infoPessoais = (stringNomeCompleto) => {
/* expressão abaixo o primeiro normalize transforma a astring em codigo unicode reconhecivel pelo método replace que vasculha a string em busca de caracteres com acentuação e os substitui por sua versão comum, logo após o método tolowercase passa tudo para letras minúsculas e por fim o último replace substitui todos os espaços vazios por underline em codigo unicode o caractere com acentuação possui duas combinações de degitos ex: 'á' = \u0041\u0301 , portanto a sequencia do regex dentro do replace procura toda a faixa de combinação referente a caracteres especiais e os substitui por "nada" ou seja os remove. ex:

// String Á em UTF-18 tem 1 dígito
'Á'.length; // 1

// String Á em Unicode tem duas combinações de digitos: \u0041\u0301
'Á'.normalize('NFD').length; // 2 (foi transformado em unicode, como se tivesse separado o a do acento e os colocado um ao lado do outro)

// Se tentarmos representar Unicode, vamos obter o seguinte resultado
console.log('\u0041\u0301'); // Á


*/
  const email = stringNomeCompleto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, '_');
  return {
    nomeCompleto: stringNomeCompleto,
    email: `${email}@trybe.com`,
  }
}

const newEmployees = (personalInfoFunc) => {
  const employees = {
    id1: personalInfoFunc('Pedro Guêrra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: personalInfoFunc('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: personalInfoFunc('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(infoPessoais).id1);

module.exports = {
  infoPessoais,
  newEmployees,
}