// Numbers
let length = 16;
let weight = 7.5;
 
console.log(`Length is ${length} and weight is ${weight}`);
console.log("Type of the variable length and weight is ",typeof(length), typeof(weight))

// Strings
let color = "Yellow";
let lastName = "Johnson";

console.log(`Color is ${color}`)
console.log("Type of the variable color is ",typeof(color))

// Booleans
let x = true;
let y = false;

console.log(x);
console.log(typeof(y));

// Object
const person = 
    {
        firstName:"John", 
        lastName:"Doe"
    };

console.log(`Type of the variable person is ${typeof(person)}`)

// Array object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars, "Type is: ",typeof(cars))

// Date object
const date = new Date("2022-03-25");
console.log(typeof(date))

/*

JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

A JavaScript variable can hold any type of data.

*/