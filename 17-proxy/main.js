'use strict';

let target = [];

let proxy = new Proxy(target, {
  get(target, key) {
    console.log('someone is reading me.');
    if (!(key in target)) {
      throw new Error(`I do not have this property! My properties are: ${Object.keys(target)}`);
    }
    return target[key];
  },

  set(target, key, value) {
    console.log('someone is updating me.');
    if (typeof value !== 'number') {
      throw new Error('Sorry, I accept only number.');
    }
    target[key] = value;

    // mandatory: return true for success.
    return true;
  }
});

try {
  console.log('target', target);
  console.log('target[0]', target[0]);
  console.log('proxy', proxy);
  console.log('proxy[0]', proxy[0]);
} catch (err) {
  console.log('err: ', err);
}

try {
  target.push('titi');
  console.log('proxy', proxy);
} catch (err) {
  console.log('err: ', err);
}

try {
  console.log('about to push in proxy');
  proxy.push(12);
  console.log('proxy', proxy);
} catch (err) {
  console.log('err: ', err);
}

try {
  console.log('about to push in proxy a string');
  proxy.push('tata');
  console.log('proxy', proxy);
} catch (err) {
  console.log('err: ', err);
}

try {
  console.log('proxy[4]', proxy[4]);
} catch (err) {
  console.log('err: ', err);
}


