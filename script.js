
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


let hour = 10
if(hour >= 6 && hour <=12){
    console.log('good morning');
}
else if(hour >=13 && hour <= 18){
    console.log('good afternoon')
}
else{
    console.log('good evenning')
}

let role = 'guest';
switch (role){
    case 'guest':
        console.log("Guest User");
        break;
    case 'admin':
        console.log('Admin User');
        break;
    default:
        console.log('Unknown User')
}

const myContacts = [
    {
        id: 1, 
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        location: 'batam',
        favorite: true,
        rating: 9,
        tags: ['popular', 'cool']
    }, {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        location: 'batam',
        email: 'betty@braverian.com',
    }, {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        location: 'batam',
        email: 'gamma@gacurio.dev'
    }
]

let newContact = {
    id: 4,
    name: 'howoh',
    phone: '+1 132432 14324',
}
console.log(myContacts.map((contact) => console.log(contact)))
console.log(myContacts.filter(contact => contact.location === 'batam'))
myContacts.push(newContact)
myContacts.pop()
myContacts.splice()
console.log(myContacts)

for(let i = 0; i <= 5; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
    console.log('hello world', i)
}

// let i = 0;
// while(i <=5 ){
//     if (i%2 !== 0){
//         console.log(i);
//         i++
//     }
// }


// let i = 9;
// do{
//     if(i%2 !== 0){
//         console.log(i)
//         i++
//     }
// }
// while (i <= 5)

// let s = 0;
// while(s < 5){
//     console.log(s)
// }


const persons = {
    name: 'Mosh',
    age: 30,
}

for(let key in person){
    console.log(key, person[key]);
}

const colors = ['red', 'green', 'blue']
    for(let color in colors){
        console.log(color, colors[color])
    }
    for(let color of colors){
        console.log(color)
    }

// let o = 0;
// while(o <= 10){
    
//     if(o === 5) break
//     if( o % 2 === 0)
//     console.log(o);
//     o++
// }


let max = (number1, number2)=> {
    return (number1 > number2) ? number1: number2;
}
let number = max(3,2);
console.log(number)

let isLandScape = (width, height) =>{
    return (width > height);
}
console.log(isLandScape(800, 600))

let fizzBuzz = (input) =>{
    if(typeof input !== 'number'){
        return NaN
    }
    else if(  input % 3 === 0 && input % 5 === 0) {
        return 'fizzbuzz'
    }
    else if(input % 3 === 0) {
        return 'fizz'
    }
    else if(input % 5 === 0) {
        return 'buzz'
    }
    return input;
}
const output = fizzBuzz(7);
console.log(output)

checkSpeed(71);
function checkSpeed(speed){
    const speedLimit = 70
    const kmPerPoint = 5
    if(speed <= speedLimit + kmPerPoint){
        console.log('ok');
        return
    }
    
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >=12){
            console.log('License Suspended')
        } else {
            console.log('Points', points)
        }
    
}

showNumbers(10);
function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
    if(i% 2 === 0){
        console.log(i,'even')
    }
    else if(i % 1    === 0){
        console.log(i, 'odd')
    }
    const message = (i%2 ===0) ? 'odd' : 'even'
    console.log(message)
}
}

let array = [1,2,3, undefined, '', 6]
console.log(countTruthy(array)) 
function countTruthy(array){
    let counts = 0;
    for(let value of array){
        if(value){
            counts++;
            
        }
    }
    return counts
}

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}
showProperties(movie);

function showProperties(obj){
    for (let key in obj)
    if(typeof obj[key] === 'string')
    console.log(key, obj[key])
}


console.log(sum(10))
function sum(limit){
    let sum =0;
    for (let i = 0; i <=limit; i++)
        if(i % 3 === 0 || i % 5 === 0)
        sum += i;

    return sum;
}

const marks = [80, 80, 50];
console.log(calculateGrade(marks));

function calculateGrade(marks){
    let sum = 0
    for(let total_value of marks){
        sum += total_value

    }
    let average = sum / marks.length;
    
    if (average < 60) return 'E';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'
}
let showStars = (rows) => {
    
    for(let i = 0; i <= rows; i++){
        let pattern = ''
        for(let k = 0; k <= i; k++){
            pattern += '*'
            
        }
        console.log(pattern)
    }
}
showStars(5)


let starLimit = 10;
for(let i = 0; i <= starLimit; i++){
    let pattern = '\n'
    for(let k = 0; k <= i; k++){
        pattern += "*"
    }
    console.log(pattern)
}
let stars = 5;
for (let i = 0; i <= stars; i++){
    let pattern = ''
    for (let k = 5; k >= i; k--){
        pattern += ' '
    }
    for(let j = 0; j <= i; j++){
        pattern += '*'
    }
    for(let q = 0; q < i; q++){
        pattern += '*'
    }
    console.log(pattern)
}


let showPrimes = (limits) =>{
    for(let number = 2; number <= limits; number++){
        if(isPrime(number))console.log(number);
    }
} 
let isPrime = (number) => {
    for(let factor = 2; factor<number; factor++){
        if(number % factor === 0){
            return false;
        }
    }
    return true;
}
showPrimes(20)

//Object-oriented Programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: () => {
        console.log('draw')
    }
}
circle.draw()
// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw: () =>{
            console.log('testing')
        }
    }   
}
const circle1 = createCircle(1);
console.log(circle1)

function Circle (radius) {
    this.radius = radius;
    this.draw = () =>{
        console.log('draw')
    }
}
const circle4 = new Circle(1);
console.log(circle4)

const circleOne = () =>{
    radius: 1
}

circleOne.color= 'red'
circleOne.draw = function(){}


console.log(circleOne())


const circle2 = {
    radius: 1,
    draw: () =>{
        console.log('draw');
    }
}

for (let key in circle2){
    console.log(key, circle[key])
}
for (let key of Object.keys(circle2)){
    console.log(key);
}
for (let entry of Object.entries(circle2)){
    console.log(entry);
}
if('draw' in circle2){
    console.log('yes')
}

// const another = {};
// for(let key in circle2){
//     another[key] = circle2[key]
// }

const another = Object.assign({}, circle);
const another2 = {...circle2}
console.log(another)
console.log(another2)

//string primitive
const messages = 'this is my \' message \n test';

//String object
const another3 = new String('hi')


const now = new Date();
const date1 = new Date('may 11 2018 09:00')
const date2 = new Date(2018, 4, 11 ,9, 15)

now.setFullYear(2018)
let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
}
function showAddress(address){
    for(let key in address){
        console.log(key, address[key])
    }
}

showAddress(address)
let addressone = new showAddressOne('a', 'b', 'c')
let addresstwo = new ShowAddressConstructor('a', 'b', 'c')
function showAddressOne(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    }
}

function ShowAddressConstructor(street, city, zipCode){
    this.street= street,
    this.city = city,
    this.zipCode = zipCode

}
console.log(addressone)
console.log(addresstwo)

address1 = new Address('a', 'b', 'c')
address2 = new Address('a', 'b', 'c')

console.log(areEqual(address1, address2))
console.log(areSame(address1, address1))
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode= zipCode
}
function areEqual(address1, address2){
    return address1.street === address2.street &&
    address1.city === address2.city && 
    address1.zipCode === address2.zipCode
}
function areSame(address1, address2){
    return address1 === address2
}

let post = {
    title: '1',
    body: '1',
    author: '2',
    views: 1,
    comments: [
        {author: 'a', body:'b'},
        {author: 'a', body:'b'},
    ],
    islive: true

}
console.log(post)

let post2 = new Post('a', 'b', 'c')
console.log(post2);
function Post(title, body, author){
    this.title= title,
    this.body= body,
    this.author= author,
    this.views= 0,
    this.comments= [],
    islive=false
}

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 11, maxPerPerson: 20},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 21, maxPerPerson: 30},
]
let restaurants = [
    {averagePerPerson: 5}
]

const numbers = [3, 4];
numbers.push(4, 6)
numbers.unshift(1,5)
numbers.splice(2, 0, 'a', 'b')
console.log(numbers.indexOf(3))
console.log(numbers.lastIndexOf(4))
console.log(numbers.includes(1))
console.log(numbers)


const courses = [
    {id:1, name:'a'},
    {id:2, name:'a'},
];
const course = courses.find(course => 
    course.name === 'a'
)
console.log(course)

let numberss = [1,2,3,4]
// const last = numberss.pop();
// const first = numberss.shift();
numberss.splice(2,2 )
console.log(numberss)


 numberss = [];
 console.log(numberss)

 const first = [1, 2, 3]
 const second = [4, 5, 6]

//  const combined = first.concat(second)
const combined = [...first,'a', ...second, 'b']

 console.log(combined)

const numbers1 = [1, 2, 3]
for(let number of numbers1){
    console.log(number)
}
numbers1.forEach((number) => {
    console.log(number)
})

const numbers2 = [1,2,3]
const joined = numbers2.join(',');
console.log(joined)

const message1 = 'this is my first message';
const parts = message1.split(' ')
const combined1 = parts.join('-')
console.log(parts)
console.log(combined1)


const numbers3 = [3,1,2]
numbers3.sort();
console.log(numbers3)
numbers3.reverse()
console.log(numbers3)


const courses1 = [
    {id: 2, name:'NOde.js'},
    {id: 1, name:'Javascript'},
]

courses1.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
})

console.log(courses1)

const numbers4 = [1, -1 ,2,3]

const atLeastOnePositive = numbers4.some((value) =>{
    return value >= 0
})
console.log(atLeastOnePositive);

// const filtering = numbers4.filter((value) =>{
//     return value >= 0
// })
// const itemsMap = filtering.map(n => ({ value: n}))
// console.log(filtering);
const itemsMap = numbers4
    .filter(n => n >= 0)
    .map(n => ({value: n}))
console.log(itemsMap)



const numbers6 = [1, -1, -2, 2, 3]

// let sum1 = 0;
// for (let n of numbers6){
//     sum1  += n
// }
// const sum1 = numbers6.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, 0)
const sum1 = numbers6.reduce(
    (accumulator, currentValue) => accumulator + currentValue
)

console.log(sum1)



