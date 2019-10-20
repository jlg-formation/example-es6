'use strict';

console.log('typeof undefined', typeof undefined);
console.log('typeof 3', typeof 3);
console.log('typeof true', typeof true);
console.log('typeof "coucou"', typeof "coucou");
console.log('typeof function() {}', typeof function() {});
console.log('typeof {}', typeof {});
console.log('typeof Symbol()', typeof Symbol());

console.log('Symbol("toto") === Symbol("toto") is: ', Symbol("toto") === Symbol("toto"));

const titi = Symbol('titi');
console.log('titi', titi);
console.log('titi %O', titi);
console.log('titi.toString()', titi.toString());
console.log('titi.description', titi.description);

const a = {
  titi: 123,
  [Symbol('toto')]: 456
};

console.log('a: ', a);
console.log('keys : ', Object.keys(a));
console.log('values : ', Object.values(a));
console.log('entries : ', Object.entries(a));
console.log('symbol keys : ', Object.getOwnPropertySymbols(a));

console.log('%O', Symbol);
