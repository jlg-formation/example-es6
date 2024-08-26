"use strict";

// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

console.log("Person: ", Person);

// better for reading by opening the properties inside the object:
console.log("Person: %O", Person);
// alternative:
console.dir(Person);

// the way to put the same method for all instances:
Person.prototype.talk = function (sentence) {
  console.log(this.name + " says: " + sentence);
};

// when Person is instantiated, its prototype is Person.prototype
const alice = new Person("Alice", 14);
console.log("alice: ", alice);
alice.talk("Hello!");
