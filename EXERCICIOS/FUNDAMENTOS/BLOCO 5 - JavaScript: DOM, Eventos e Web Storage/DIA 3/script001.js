function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/*Exercício 1:

O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 
Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

-Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

-Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

-Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysMonth = document.getElementById('days');

function holidays(fimSem, daysMonth) {
  const holiday = [24, 25, 31];
  const friday = [4, 11, 18, 25];
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const creatLi = document.createElement('li');
    creatLi.innerText = fimSem[index];
    creatLi.classList = 'day';
    daysMonth.appendChild(creatLi);
    for (const iterator of holiday) {
      if (iterator === fimSem[index]) {
        creatLi.classList.add('holiday');
      }
    }
    for (const iterator of friday) {
      if (iterator === fimSem[index]) {
        creatLi.classList.add('friday');
      }
    }
  }
}
holidays(dezDaysList, daysMonth);

/*
Exercício 2:

Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function folga(feriados, id, containerClass) {
  const botao = document.createElement('button');
  const containerBut = document.querySelector(containerClass);
  botao.innerText = feriados;
  botao.id = id;
  containerBut.appendChild(botao);
}
folga('Feriados', 'btn-holiday', '.buttons-container');

/* 
Exercício 3:

Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/
let contar = 0;
let feriado = document.querySelectorAll('.holiday');
const botao = document.querySelector('#btn-holiday');
botao.addEventListener('click', function () {
  contar += 1;
  if (contar === 1) {
    for (let index = 0; index < feriado.length; index += 1) {
      feriado[index].style.backgroundColor = 'orange';
    }
  } else {
    contar = 0;
    for (let index = 0; index < feriado.length; index += 1) {
      feriado[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
})
/*
Exercício 4:

Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/

folga('Sexta-feira', 'btn-friday', '.buttons-container');

/*
Exercício 5:

Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

let contar2 = 0;
let fridaySave = [];
let friday = document.querySelectorAll('.friday');
const botao2 = document.querySelector('#btn-friday');
botao2.addEventListener('click', function () {
  contar2 += 1;
  if (contar2 === 1) {
    for (let index = 0; index < friday.length; index += 1) {
      fridaySave[index] = friday[index].innerText;
      friday[index].innerText = 'sexta-feira';
    }
  } else {
    contar2 = 0;
    for (const iterator in fridaySave) {
      friday[iterator].innerText = fridaySave[iterator];
    }
  }
})
/*
Exercício 6:

Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
 */
const zoom = document.querySelector('ul#days');
zoom.addEventListener('mouseover', destacaZoom);
zoom.addEventListener('mouseout', normalZoom);

function destacaZoom(iniciar) {
  let classe = iniciar.target.tagName;
  if (classe === 'LI') {
    iniciar.target.classList.add('imagem3');
  }
}
function normalZoom(finalizar) {
  let classe = finalizar.target.tagName;
  if (classe === 'LI') {
    finalizar.target.classList.remove('imagem3');
  }
}
/*
Exercício 7:

Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/

function tarefaPerson(tarefa) {
  const span = document.createElement('span');
  span.innerText = tarefa;
  /*a forma correta de especificar classes em query selector segue o seguinte modelo:
  PRIMEIRO: 
  o elemento genérico colado e sem espaços ao seu especificador seja classe, id etc... ex: div.classe ou div#id
  SEGUNDA: como no CSS usando o '>' ex: div > p , ou seja selecione o primeiro elemento 'p' que tenha um pai de nome div.
  */
  document.querySelector('div.my-tasks').appendChild(span);
}
const add = document.querySelector('#btn-add');
const inputTexto = document.querySelector('#task-input');
add.addEventListener('click', adicionaTexto);

function adicionaTexto() {
  let stringTarefa = ' ' + inputTexto.value;
  if (stringTarefa === ' ') {
    alert('você não digitou nada, tente novamente');
  } else if (tarefacor === undefined) {
    alert('você não adicionou uma legenda de cor para sua tarefa');
  } else {
    legendColor(tarefacor);
    tarefaPerson(stringTarefa);
    textoInput.value = '';
  }
}
/*
Exercício 8:
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
const tasksContainer = document.querySelector('div.input-container');
const urgentBtn = document.createElement('button');
urgentBtn.id = 'btn-urgent';
urgentBtn.style.backgroundColor = 'red';
urgentBtn.innerText = 'Urgente';
tasksContainer.appendChild(urgentBtn);
const atentionBtn = document.createElement('button');
atentionBtn.id = 'btn-atention';
atentionBtn.style.backgroundColor = 'yellow';
atentionBtn.innerText = 'Atenção';
tasksContainer.appendChild(atentionBtn);
const easyBtn = document.createElement('button');
easyBtn.id = 'btn-atention';
easyBtn.style.backgroundColor = 'green';
easyBtn.innerText = 'Pode Esperar';
tasksContainer.appendChild(easyBtn);

function legendColor(cor) {
  const color = document.createElement('div');
  color.style.backgroundColor = cor;
  color.classList.add('cor');
  document.querySelector('div.my-tasks').appendChild(color);
  tarefacor = undefined;
}
let tarefacor;
urgentBtn.addEventListener('click', function () {
  tarefacor = 'red';
  adicionaTexto();
})
atentionBtn.addEventListener('click', function () {
  tarefacor = 'yellow';
  adicionaTexto();
})
easyBtn.addEventListener('click', function () {
  tarefacor = 'green';
  adicionaTexto();

})


/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
let cont3 = 0;
let anterior;
let selectDiv = document.querySelector('div.my-tasks');
selectDiv.addEventListener('click', selectTasks);
function selectTasks(selecao) {
  let div = selecao.target.tagName;
  let classe = selecao.target.className;
    if (div === 'DIV' && classe !== 'my-tasks') {
      if (cont3 === 0) {
        cont3 += 1;
        selecao.target.classList.add('task-selected');
        anterior = selecao.target;
      } else if (cont3 !== 0 && classe === 'cor task-selected'){
        cont3 = 0;
        selecao.target.classList.remove('task-selected');
      } else {
        selecao.target.classList.add('task-selected');
        anterior.classList.remove('task-selected');
        anterior = selecao.target;
      }
    }
}
/*
Exercício 10:
Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .*/

zoom.addEventListener('click', dayColor);
function dayColor (mudaCor) {
  let tag = mudaCor.target.tagName;
  if (tag === 'LI') {
    let corTask = document.querySelector('div.task-selected').style.backgroundColor;
    mudaCor.target.style.color = corTask;
    console.log(zoom.style.color);
  }
}

//BONUS

const textoInput = document.querySelector('input#task-input');
textoInput.addEventListener('keydown', entradaTextoEnter );

function entradaTextoEnter(texto) {
  let x = texto.key;
  console.log(x);
  if (x === 'Enter') {
    adicionaTexto();
  };
}