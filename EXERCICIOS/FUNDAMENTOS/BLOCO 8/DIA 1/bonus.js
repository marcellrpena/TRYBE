const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const dragonDamage = () => {
  const damage = Math.round(Math.random() * (dragon.strength - 15)) + 15;
  return damage;
};

/* 2 - Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */
//weponDmg = weponDmg*strength
const warriorDamage = () => {
  const weponDmg = warrior.weaponDmg * warrior.strength;
  const damage = Math.round(Math.random() * (weponDmg - warrior.strength)) + warrior.strength;
  return damage;
};

/* 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

A mana consumida por turno é 15. Além disto a função deve ter uma condicional, 

caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */
//intelligenceDmg = intelligence*2
const mageDamage = () => {
  const intelligenceDmg = mage.intelligence * 2;;
  if (mage.mana >= 15) {
    const damage = Math.round(Math.random() * (intelligenceDmg - mage.intelligence)) + mage.intelligence;
    return {
      damage: damage,
      mana: 15,
    };
  }
  return {
    damage: 'Não possui mana suficiente',
    mana: 0,
  };
};

/* Parte II

Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions.

O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função. 
*/

/* 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. 

Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. 

Além disto ela também deve atualizar o valor da chave damage do warrior.
 */
const gameActions = {
  warriorTurn: (warriorDamage) => {
    warrior.damage = warriorDamage();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageDamage) => {
    const dano = mageDamage();
    mage.damage = dano.damage;
    mage.mana -= dano.mana;
    dragon.healthPoints -= mage.damage;
  },
  dragonTurn: (dragonDamage) => {
    dragon.damage = dragonDamage();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  battleMembers: (battleMembers) => {
    console.log(battleMembers); 
  },

}

let loser;
do {
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);


const isZero = (teste) => {
  return teste.healthPoints <= 0;
};

loser = Object.values(battleMembers).find(isZero);
gameActions.battleMembers(battleMembers);
} while ( loser === undefined );




