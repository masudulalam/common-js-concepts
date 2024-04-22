function add (a, b) {
    // console.log(a, b);
    const total = a + b;
    // console.log(total);
    if (a > 5) {
        const sum = 10 + a + b;
        console.log(sum);
    }
    // console.log(sum);
    else {
        const sum = 5 + a + b;
        // console.log(sum);
        var current = sum;
    }
    // console.log(sum);
    console.log(current);
    return total;
}

// console.log(a, b);
// console.log(total);
console.log(add(5, 3));
