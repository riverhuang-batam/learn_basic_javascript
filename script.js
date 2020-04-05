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
let x = 10;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y)

// Increment (++);
increments = (increment) => {
    if (increment <= 10, increment++){
        return increment
    }
}
console.log(increments(4))

x += 5;
console.log(x)

console.log(x > 0);
console.log(x >= 15);
console.log(x !== 15)

//strict equality
console.log( 1 === '1')
//lose equality
console.log( 1 == '1')

let points = 89;

let type = points > 100 ? 'gold' : 'silver'
console.log(type)


//logical and (&&)
//returns True if bot operands are TRUE

console.log(true && false)

//logical OR (||)
//returns True if one of the arguments is true
console.log(true || false)

let hardworker = true;
let goodscore = true;
let goodboy = hardworker && goodscore;
console.log(goodboy)

//Falsy (false)
// undefined
// null
// 0
// false
// ''
// NaN
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor)

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission |readPermission| writePermission;
let message = (myPermission & readPermission)? 'yes' : 'no';
console.log(message)

let z = (2 + 3) * 4;
console.log(z)

let k = 'red';
let q = 'blue';

let j = k;
k = q;
q = j;

console.log(k)
console.log(q)