const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

/* 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
Dica: Use a função map */

const formatedBookNames = (book) => book.map( (info) => `${info.name} - ${info.genre} - ${info.author.name}`);

console.log(formatedBookNames(books));

/* 2 - Construa um array de objetos a partir do array de livros. 

Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, 

e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. 

O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

Dica: use as funções map, sort */


const nameAndAge = (book) => book.map((info) => array = {
    autor: info.author.name,
    idade: info.releaseYear - info.author.birthYear,
}).sort((a, b) => a.idade - b.idade );

console.log(nameAndAge(books));

/* 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
Dica: use a função filter; */

const filtroGenre = (book) => book
.filter( (gen) => gen.genre === 'Fantasia' || gen.genre === 'Ficção Científica');

console.log(filtroGenre(books));

/* 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
Dica: use as funções filter e sort */

const bookAge = (book) => book
.filter( (oldBook) => (2022 - oldBook.releaseYear) > 60)
.sort( (a, b) => a.releaseYear - b.releaseYear, 0);

console.log(bookAge(books));

/* 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. */

const fantasyFictionAuthors = (filtro) => filtro
.map( (authors) => authors.author.name).sort();

console.log(fantasyFictionAuthors(filtroGenre(books)));

/* 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação. */

const oldBooks = (oldBook) => oldBook.map( (autorOld) => autorOld.name).sort();

console.log(oldBooks(bookAge(books)));

/* 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
Dica: cada inicial termina com um ponto. */

const authorWith3DotsOnName = (book) => book
/* separa as letras da string captada em name e as devolve na forma de array iterável*/
.filter( (nome) => nome.author.name.split('')
/* filtra o array em busca de pontos e retorna um array contendo os pontos encontrados verifica o tamanho do array, caso seja de 3 ele retorna o objeto verdadeiro para um array */
.filter( (test) => test === '.').length === 3);

console.log(authorWith3DotsOnName(books));