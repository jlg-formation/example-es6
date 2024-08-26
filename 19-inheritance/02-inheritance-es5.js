"use strict";

// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// the way to put the same method for all instances:
Person.prototype.talk = function (sentence) {
  console.log(this.name + " says: " + sentence);
};

function Employee(name, age, salary, company) {
  Person.bind(this)(name, age); // super(name, age)
  this.salary = salary;
  this.company = company;
}

// all methods of Person will be method of Employee
Object.setPrototypeOf(Employee.prototype, Person.prototype);

Employee.prototype.increase = function (amount) {
  this.salary += amount;
};

const charly = new Employee("Charly", 24, 1500, "Acme");
console.log("charly: ", charly);
console.log("charly.salary: ", charly.salary);
charly.talk("Hello!");
charly.increase(100);
console.log("charly: ", charly);
console.log("charly.salary: ", charly.salary);
