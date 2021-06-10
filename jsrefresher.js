//Let and Const

var myName = John;
console.log(myName);

let myName = Jake;
console.log(myName);

const myName = Jim;
console.log(myName);

//Arrow Functions

function printMyName() {
    console.log(name);
}

printMyName('John');

const printMyName = (name) => {
    console.log(name);
}

printMyName('Jake');

const printMyName = (name, age) => {
    console.log(name, age);
}

printMyName('Jake', 28);

const multiply = (number) => {
    return number * 2;
}

console.log(multiply(5));

const multiply = number => number * 2; //Can be shortened to this

console.log(multiply(5));

//imports and exports

export default movie;
import mv from './movies.js'; //Can use whatever name to import default

export const clean = () => {...};
export const data =123;

import {data, clean} from './utilities'; //Must use curly braces when bringing multiple imports

//classes

class Movie {
    title = 'Jaws' //Property
    watch = () => {...} //Method
}

myMovie = new Movie() //instantiating and using the new class
    myMovie.watch()


//spread and rest operators

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; //using spread operator to copy and add to array

console.log(newNumbers);

const filter = (...args) => { //using rest operator
    return args.filter(el => el === 1);
}

console.log(filter(1,2,3,));


//Array and object destructuring
const numbers = [1,2,3];
[num1, , num3] = numbers;
console.log(num1, num3);

//Array functions

const numbers = [1, 2 ,3];

const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(doubleNumArray);