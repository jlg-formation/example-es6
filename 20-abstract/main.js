class A {
  // cannot instantiate A
  constructor(something) {
    if (new.target === A) {
      throw new Error(
        `Cannot instantiate abstract class ${this.constructor.name}`
      );
    }
    this.something = something;
  }

  // abstract method
  doThis() {
    throw new Error("Abstract method");
  }

  doThat() {
    console.log("I do that");
  }
}

class B extends A {
  doThis() {
    console.log("I do this");
  }
}

try {
  const a = new A("Truc");
} catch (e) {
  console.log("e: ", e);
}

const b = new B("Truc");
console.log("b: ", b);
b.doThis();
b.doThat();
