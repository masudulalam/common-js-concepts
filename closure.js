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

// Step 2: is for understanding closure
// ---------------------------------------------
var num1 = 2;


var sum = function () {
  var num2 = 3;
  return function(){
    return num1 + num2;
  }
};

var myFunction = sum();
console.dir(myFunction);


   
