const a = {
  toto: "titi",
  tata: 123,
};
console.log("a: ", a);

// check the prototype of a
console.log("Object.getPrototypeOf(a): ", Object.getPrototypeOf(a));

// prototype of a is Object.prototype
console.log(
  "Object.getPrototypeOf(a) === Object.prototype: ",
  Object.getPrototypeOf(a) === Object.prototype
);

// set the a prototype:
console.log("set the a prototype to { tutu: 567 }");
Object.setPrototypeOf(a, { tutu: 567 });
console.log("Object.getPrototypeOf(a): ", Object.getPrototypeOf(a));

// remove a prototype from a:
console.log("remove a prototype from a");
Object.setPrototypeOf(a, null);
console.log("a: ", a);

// put back the prototype to Object.prototype
console.log("put back the prototype to Object.prototype");
Object.setPrototypeOf(a, Object.prototype);
console.log("a: ", a);
