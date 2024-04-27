function kitchen () {
    let roast = 0;
    return function () {
        roast++;
        return roast; 
    }
}

const firstServer = kitchen();
// console.log(firstServer());
// console.log(firstServer());
 

function stopWatch () {
    let counter = 0;
    return function () {
      counter++;
      return counter;
    }
  }
  
  const watch1 = stopWatch();
//   console.log(watch1());
//   console.log(watch1());
//   console.log(watch1());

  const watch2 = stopWatch();
//   console.log(watch2());
//   console.log(watch1());
//   console.log(watch2());


// Step 1: is for understanding closure
// ---------------------------------
function add(){
    let counter = 0;
    counter += 1;
    return counter;
}
add();
add();
add();
// console.log(counter);
// counter++;
// console.log(counter);

// -------------------------------------------

// Step 2: for understanding closure
// ---------------------------------------------

var num1 = 2;
var num2 = 3;

var sum = function () {
  return num1 + num2;
};

console.log(sum());
console.dir(sum);



// --------------------------

// Step 3: for understanding closure
// ---------------------------

function bankAccount (initialBalance) {
  var balance = initialBalance;
  return function () {
    return balance;
  }
}

var account = bankAccount(100000);
// console.dir(account);
console.log(account());
// console.log(balance);







   
