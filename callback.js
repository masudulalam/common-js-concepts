function greeting(param, name){
   param(name);
}

const name = 'Abdullah';
const number = 1;
// greeting(name);
const numbers = [1, 43, 47, 57, 83, 88, 97];
const isMumin = true;
const student = {
    name: 'Abdullah',
    age: 5,
    id: 3
}
const laptop = {
    price: 40000,
    brand: 'Apple',
    ram: '16 gb'
}

function greetingHandler(name){
    console.log('As salamu alikum wa rahmatullah', name);
}
function greetWelcome(name){
    console.log('Ahlan sahlan marhaban mubarakan', name);
}



greeting(greetingHandler, 'Masud');
greeting(greetingHandler, 'Muhammad');
greeting(greetingHandler, 'Alam');
greeting(greetWelcome, 'Abdullah');
greeting(greetWelcome, 'Abdur Rahman');
