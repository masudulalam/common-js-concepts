function sum(a, b, c){
    // console.log(arguments);
    const result = a + b + c;
    return result;
}

console.log(arguments);
const total = sum(45, 89, 37, 25, 76, 90);
console.log(total); 