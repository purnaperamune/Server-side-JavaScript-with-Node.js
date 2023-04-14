var arrayManipulations  = require('./util');

let arr = ['Purna', "Sam", "SANGAkkara", "MAHELa", "xyz"];

function toUppercase(array){
    return arrayManipulations.toUpperCase(array);
}

function toLowerCase(array){
    return arrayManipulations.toLowerCase(array);
}

function findIndex(array, element){
    return arrayManipulations.findIndex(array, element);

}

console.log(toUppercase(arr));
console.log(toLowerCase(arr));
console.log(findIndex(arr, "SANGAkkara"));
