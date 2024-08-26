// ES6
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  talk(sentence) {
    console.log(`${this.name} says: ${sentence}`);
  }
}

const bob = new Person2("Bob", 21);
console.log("bob: ", bob);
bob.talk("Hello!");
