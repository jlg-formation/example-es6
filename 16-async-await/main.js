'use strict';

// ES8 = ES2017

const sleep = time => new Promise((resolve, reject) => {
  if (time <= 2000) {
    setTimeout(resolve, time);
    return;
  }
  reject(`Cannot sleep more than 2000ms. You asked ${time}.`);
});

(async () => {
  try {
    console.log('Hello');
    await sleep(1000);
    console.log('World!');
    await sleep(3000);
    console.log('End')
  } catch (err) {
    console.error('error', err)
  }
})();



