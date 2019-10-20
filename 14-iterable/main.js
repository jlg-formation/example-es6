'use strict';

const syracuseSuite = n => ({

  *[Symbol.iterator]() {
    let current = n;

    while (current !== 1) {
      yield current;
      if (current % 2 === 0) {
        current = current / 2;
        continue;
      }
      current = current * 3 + 1;
    }
    yield current;
  }
});

for (const u of syracuseSuite(127)) {
  console.log(u);
}
