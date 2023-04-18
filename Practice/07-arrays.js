/*
3 ways of creating an array
    const arr = []; // Assiging values later
    const arr = ['xyz', 'abc', 'cde']; // Assigning values with the initialization
    const arr = new Array(40,50,60,70); // Using new key word. This is not much recommended.
*/

const marks = [];
marks[0] = 88;
marks[1] = 78;
marks[2] = 95;
marks[3] = 92;
marks[4] = 68;
marks[5] = 71;

console.log(marks);

let total = 0;
for(let x=0;x<marks.length;x++){
    total = total + marks[x];
}

const avg = total/marks.length;
console.log(`Average of marks is ${avg}`);

const cars = ["Toyota", "BMW", "Mercedes", "Honda", "Mini Cooper"];

console.log(`Cars: ${cars}`);
console.log(`Length of the array cars is ${cars.length}`);

if(cars.includes("BMW")){
    console.log("This array contains `BMW` as an element.");
}

const arr01 = [23,45,24];
console.log(arr01);
console.log(arr01[2]);
arr01.push(33);
arr01.push(99);
console.log(arr01);

console.log(Array.isArray(arr01));
console.log(Array.isArray(avg));


const arr02 = [];
function multiplyByTen(value){
    let m = value*10;
    console.log(m);
    arr02.push(m);
}

arr01.forEach(multiplyByTen);
console.log(arr02);