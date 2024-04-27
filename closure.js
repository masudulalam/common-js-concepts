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
// function add(){
//     let counter = 0;
//     counter += 1;
//     return counter;
// }
// add();
// add();
// add();
// console.log(counter);
// counter++;
// console.log(counter);

// -------------------------------------------

// Step 2: for understanding closure
// ---------------------------------------------

let num1 = 2;
let num2 = 3;

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


// stop watch:
// function stopWatch (){
//   var startTime = Date.now();

//   function getDelay(){
//     console.log(Date.now() - startTime);
//   }

//   return getDelay;
// }


// variable lifetime
let a = 4;
function myFunction () {
  return a * a;
}
myFunction();

function myFunction2 () {
  return a + a;
}
myFunction2();

// A counter dilemma
let counter = 0;
// console.log(counter);

// Function to increment counter
function add () {
  counter += 1;
  // return counter;
}

// Call add 3 times
add();
// console.log(counter);
add();
// console.log(counter);
add();
console.log(counter);







   
