try {
    const a = 45;
    console.log('a: ', a);
} catch (e) {
    console.log('e: ', e.message);
}

const b = 3;
try {
    b = 4;
} catch(e) {
    console.log('e: ', e.message);
}

try {
    c = 4;
    const c = 5;
} catch (e) {
    console.log('e: ', e);
}

try {
    const d = {
        toto: 'titi'
    };
    d.toto = 45;
    console.log('d: ', d);
} catch (e) {
    console.log('e: ', e.message);    
}

let e = 3;
e = 4;
console.log('e: ', e);


// try this just to see...
const a = 456;