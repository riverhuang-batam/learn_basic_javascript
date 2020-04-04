let name = 'River';
console.log(name);
console.log("hello world")

let firstName = 'River';
let lastName = "Huang";

const interestRate = 0.3;
console.log(interestRate);

let age = 30; //Number literal
let isApproved = true; //boolean literal
let firstName1 = undefined;
let selectedColor = null;

let person = {
    name: 'River',
    age: 19,
}
let selection = 'name';
console.log(person.name);

let selectedColors = ['red', 'blue']
selectedColors[2] = 'green'
console.log(selectedColors)


//performing a task
function greet(name){
    console.log('hello world' + name)
}
let greets = () =>{
    console.log('hello world')
}

//calculating a value
let square = (numbers) => {
    return numbers * numbers;
}


console.log(square(2));

greet('river');
greets()
