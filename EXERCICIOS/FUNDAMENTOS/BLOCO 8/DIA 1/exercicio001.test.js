const {
  infoPessoais,
  newEmployees,
} = require('./exercicio001.js');

describe('1- criar uma função que armazena em id único um objeto contendo o nome completo e email personalizado de cada pessoa contratada em seu respectivo id', () => {
  
  it('Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada.', () => {
    expect(typeof infoPessoais).toBe('function');

    expect(infoPessoais('teste')).toEqual({ nomeCompleto: expect.anything(), email: expect.anything(), });
  });

  it('A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. sem caracteres especiais', () => {

    expect(newEmployees(infoPessoais).id1).toEqual({ nomeCompleto: 'Pedro Guêrra', email: 'pedro_guerra@trybe.com', })

  });
  
});