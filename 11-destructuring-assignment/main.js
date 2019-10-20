'use strict';

// array matching
const list = [1, 2, 3];
let [a, , b] = list;
console.log('a', a);
console.log('b', b);
[a, b] = [b, a];
console.log('a', a);
console.log('b', b);

function getRandomPoint() {
  return { x: Math.random(), y: Math.random() };
}

const { x, y } = getRandomPoint();
console.log('point', x, y);
