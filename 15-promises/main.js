'use strict';

const sleep = time => new Promise((resolve, reject) => {
  if (time <= 2000) {
    setTimeout(resolve, time);
    return;
  }
  reject(`Cannot sleep more than 2000ms. You asked ${time}.`);
});

console.log('Hello');
sleep(1000)
  .then(() => {
    console.log('World!');
    return sleep(3000);
  })
  .then(() => console.log('End'))
  .catch(err => console.error('error', err));
