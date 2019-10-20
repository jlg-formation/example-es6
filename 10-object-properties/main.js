'use strict';

const x = 2;
const y = 1;

const point = {x, y};
console.log('point: ', point);

const firstname = 'Jean-Louis';
const lastname = 'GUENEGO';
const persons = {
  DURAND: 'Philippe',
  [lastname]: firstname,
};
console.log('persons: ', persons);

const car = {
  color: 'red',
  start() {
    console.log(`Vroum ! Vroum ! I am a ${this.color} car`);
  }
}

car.start();
