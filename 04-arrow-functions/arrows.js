'use strict';
const plus = function (a, b) {
    console.log('addition');
    return a + b;
}
const plusArrow = (a, b) => {
    console.log('addition');
    return a + b;
}
// when one instruction with return, no need block.
const plusArrowAgain = (a, b) => a + b;
const twice = function (x) {
    return 2 * x;
};

// when one arg, no need parenthesis.
const twiceArrow = x => 2 * x;

// arrow function don't have this concept.
const minus = function (a, b) {
    console.log('this', this);
    return a - b;
}
const minusArrow = (a, b) => {
    console.log('this', this);
    return a - b;
}

console.log('minus');
let result = minus(1, 2);
console.log('result: ', result);

console.log('minusArrow');
result = minusArrow(1, 2);
console.log('result: ', result);

