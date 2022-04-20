/*
O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM. Por isso, você deve fazer os exercícios utilizando apenas código JavaScript , o qual deve ser inserido entre as tags <script> e </script> .
Para uma melhor organização, faça commits a cada tarefa concluída. Vamos aos exercícios:

1--> Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;*/

document.body.appendChild(document.createElement('h1')).innerText = 'Exercício 5.2 - JavaScript DOM';

/*
2--> Adicione a tag main com a classe main-content como filho da tag body ;*/

//Perceba que a sintaxe correta para criar a classe e injetar o seu nome é por meio de atribuição, não funciona se colado entre parenteses.

//OBS: ALGUMAS FUNÇÕES PARA SEREM TRABALHADAS NO JAVA EXIGEM A CRIAÇÃO DE UMA VARIAVEL, OU SEJA SE USAR APENAS O DOCUMENT, É COMO SE ELA EXISTISSE APENAS NO HTML E NÃO NO JAVASCRIPT.
  let main = document.querySelector('body').appendChild(document.createElement('main'));
  main.className = 'main-content';


  //document.body.appendChild(document.createElement('main')).className = 'main-contet';
  
  //Duas formas de criar ID:
  //main.setAttribute('id', 'content');  
  main.id = 'content'; //--> atributos dentro da tag podem ser declaradas diretamente referenciando a variável
/*
3--> Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;*/

main.appendChild(document.createElement('section'));
main.firstElementChild.className = 'center-content';

/*
4--> Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;*/

main.firstElementChild.appendChild(document.createElement('p')).innerText = 'Este paragrafo foi criado pelo javascript';

/*
5--> Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;*/

main.appendChild(document.createElement('section')).className = 'left-content';

/*
6--> Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;*/

main.appendChild(document.createElement('section')).className = 'right-content';

/*
7--> Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;*/

document.querySelector('.left-content').appendChild(document.createElement('img')).setAttribute('src', 'https://picsum.photos/200');
// outra forma de fazer o código acima document.querySelector('.left-content').appendChild(document.createElement('img')).src = 'https://picsum.photos/200';

/*
8--> Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;*/

let list = main.firstElementChild.nextElementSibling.nextElementSibling.appendChild(document.createElement('ul'));
let elementList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let index = 0; index < elementList.length; index++) {
   list.appendChild(document.createElement('li')).innerText = elementList[index];
}

/*
Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.*/



/*
Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
Adicione a classe title na tag h1 criada;
Adicione a classe description nas 3 tags h3 criadas;
Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
*/