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
