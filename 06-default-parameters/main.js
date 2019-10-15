'use strict';
function increment(a, step = 1) {
    return a + step;
}

console.log('3 + 1 =', increment(3));
console.log('3 + 2 =', increment(3, 2));

const decrement = (a, step = 1) => a - step;

console.log('3 - 1 =', decrement(3));
console.log('3 - 2 =', decrement(3, 2));

