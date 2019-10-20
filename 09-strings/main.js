'use strict';

const a = 'J\'ai envie de programmer';
const b = "You will say \"Hello\"";

// template string
const verb = 'programmer';
const c = `J'ai envie
de ${verb}`;

console.log(a);
console.log(b);
console.log(c);

// custom template
function pluralize(strings, ...expressionArray) {
  const array = [strings[0]];
  for (let i = 1; i < strings.length; i++) {
    const expr = expressionArray[i - 1];
    const string = strings[i];
    if (typeof expr !== 'number') {
      array.push(expr, string);
      break;
    }
    if (expressionArray >= 2) {
      // console.log('plural case');
      const str = string.replace('(s)', 's');
      array.push(expr, str);
      break;
    }
    // console.log('singular case');
    const str = string.replace('(s)', '');
    array.push(expr, str);
  }
  return array.join('');
}

console.log(pluralize`Je veux ${2} mouton(s)`);
console.log(pluralize`Je veux ${1} mouton(s)`);
