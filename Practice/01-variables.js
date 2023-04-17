var str01 = "RandomString"; 

function printInfo(){
    const name = "Purna";
    const age = 21;
    
    console.log(`My name is ${name} and I am ${age} years old.`);
    console.log("The value in str01 is ", str01);
}

function studentInfo(name, school, age){
    console.log("Student Info\nName: ",name,"\nSchool: ",school,"\nAge: ",age);
}

let date = Date();
function currentDate(){
    console.log("Today's date: ", date);
}

/*  
TypeError: Assignment to constant variable. We cannot reassign values to a constant variable. 
const pi = 3.15
pi = pi + 5;
console.log(pi) 
*/

let name, school, age; // With var and let, you can assign values later. 
console.log(name, school, age) // Values will be undefined until you assign a value.
name = "XYZ";
school = "DSSC";
age = 18;
console.log(name, school, age)

printInfo();
studentInfo("Kevin", "Royal College", 26);
currentDate();

str01 = "Hello World!";
console.log(str01);