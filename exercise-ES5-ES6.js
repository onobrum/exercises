//1- change everything below to the newer Javascript!

// let + const
var a = 'test';  
var b = true;   
var c = 789;   
a = 'test2';

//answers: 
//let a = 'test'; 
//const b = true;
//const c = 789;
//a = 'test2';


//2- Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

//answers:
//const person = {
    //firstName : "John",
    //lastName  : "Doe",
    //age       : 50,
    //eyeColor  : "blue"
//};

//const { firstName, lastName, age, eyeColor } = person;


//3- Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c
};

//answers:
//const a = 'test';
//const b = true;
//const c = 789;

//const okObj = {a, b, c};


//4- Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

//answer: const message = `Hello ${firstName} have I met you before? I think we met in ${city}. last summer no???`;


//5- default arguments
// default age to 10;
function isValidAge(age) {     //answer: const isValidAge = (age = 10) => age;
    return age
}



//6- Symbol
// Create a symbol: "This is my first Symbol"

//answer: const sym = Symbol('This is my first Symbol');

//7- Arrow functions
    function whereAmI(username, location) {
        if (username && location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//answer:
//const whereAmI = (username, location) => {
    //if (username && location) {
        //return "I am not lost";
    //} else {
        //return "I am totally lost!";
    //}
//}