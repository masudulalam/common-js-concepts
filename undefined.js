/*
8 ways to get undefine:



*/

// 1
let first;
// console.log(first); 

// 2
function second (a, b) {
    const total = a + b;
}
// const result = second(2, 3);

// 3
function third (a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
// third(2, 3);

// 4
function noNegative (a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const result = noNegative(1, 0);

// 5
const fifth = {name: 'Abdullah', id: 23, age: 42};
// console.log(fifth.name, fifth.age, fifth.salary);


// 6
const sixth = [1, 5, 7, 13, 19];
// console.log(sixth[0], sixth[1], sixth[4], sixth[5], sixth[45] );


// 7
const seventh = [1, 5, 7, 13, 19];
delete seventh[1];
// console.log(seventh[0], seventh[1], seventh[4], seventh[5], seventh[45] );
// console.log(seventh);

// 8
// It's should not be use
const eighth = undefined;
// use null
const eighth2 = null;
// console.log(eighth2);


// console.log(typeof undefined);
console.log(typeof null);
// console.log(result);


