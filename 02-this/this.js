console.log('this: ', this);

function hello() {
    console.log('this: ', this);
}

function helloStrict() {
    'use strict';
    console.log('this: ', this);
}

hello();
helloStrict();

var a = {
    hello: function() {
        console.log('this: ', this);
    }
};

a.hello();

var helloCopy = a.hello;
helloCopy();

function Person() {
    this.name = 'Jean-Louis GUENEGO';
    console.log('this: ', this);
}

const jlg = new Person();

