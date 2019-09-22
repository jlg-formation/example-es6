'use strict';

var x = 010;

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

