// 'use strict';

var x = 010;
console.log('x: ', x);

// 0x65 en hexa means "5" in ASCII table.
var y = "\065";
console.log('y: ', y);

var eval = 2.71;
console.log('eval: ', eval);

// need var
pi = 3.14;
console.log('pi: ', pi);

// duplicated parameters
function hello(a, a) {
    console.log('a: ', a);
}

hello(1, 2);

var a = 3;
// cannot delete a variable.
delete a;
console.log('a: ', a);

