'use strict';


/**
 * Sum multiplied by a
 *
 * @param {*} a
 * @param {*} others
 * @returns a * (sum of others)
 */
function aTimesSum(a, ...others) {
    return a * others.reduce((acc, n) => acc + n);
}

// return 3*(1+4+6)=3*(11)=33
console.log('3*(1+4+6) =', aTimesSum(3, 1, 4, 6));

