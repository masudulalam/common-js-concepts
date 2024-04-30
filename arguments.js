function sum(a, b, c){
    // argument is a array like object
    const args = [...arguments];
    console.log(args);

    const result = a + b + c;
    return result;
}

// console.log(arguments);
const total = sum(45, 89, 37, 25, 76, 90);
console.log(total); 