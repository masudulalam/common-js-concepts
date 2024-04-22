/*
Truthy:
1. true
2. Any number positive or negative will be truthy except 0.
3. Any string except empty string ('').
4. Empty array([]) is truthy
4. Empty object({}) is truthy
5. 

Falsy:
1. false
2. 0
3. empty string('')
4. undefined
5. null

*/

let x =  {};
console.log(x);
if(x) {
    console.log('Value of x is truthy');
}
else {
    console.log('Value of x is falsy ');
}

// optional
// check falsy
const y = '';
if (!y) {
    console.log('Value of y is falsy');
}

// check true

