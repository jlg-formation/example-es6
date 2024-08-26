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

class Employee2 extends Person2 {
  constructor(name, age, salary, company) {
    super(name, age);
    this.salary = salary;
    this.company = company;
  }

  increase(amount) {
    this.salary += amount;
  }
}

const dany = new Employee2("Dany", 21);
console.log("dany: ", dany);
dany.talk("Hello!");
dany.increase(200);
