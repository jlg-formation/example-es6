'use strict';

function* hello() {
  yield 123;
  yield 'hello';
  yield { message: 'coucou' };
}

const gen = hello();
console.log('gen: ', gen);
let generatorObject = gen.next();
console.log('generatorObject: ', generatorObject);
generatorObject = gen.next();
console.log('generatorObject: ', generatorObject);
generatorObject = gen.next();
console.log('generatorObject: ', generatorObject);
generatorObject = gen.next();
console.log('generatorObject: ', generatorObject);

const gen2 = hello();
for (const value of gen2) {
  console.log('value: ', value);
}
