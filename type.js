// dynamic type language
// primitive data type
const a = 1;;
const b = 'All praise to Allah'; 
const c = true;
// non-primitive data type
const ages = [5, 4, 6, 7, 8];
const student = {id: 11, class: 2};

console.log(typeof a, typeof b, typeof c, typeof ages, typeof student); 

let x = 1;
let y = x;
console.log(x, y);
y = 41;
console.log(x, y);

let p = {job: 'front-end-developer'};
let q = p;
console.log(p, q);
q.job =  {job: 'back-end-developer'};
console.log(p, q);


