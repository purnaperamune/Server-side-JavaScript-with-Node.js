function personalInfo(name, age, scl){
    console.log(`Hello ${name}, Welcome to this course!\nYou are ${age} years old.\nYour school is ${scl}.`);
}

function variables(){
    let fName = "Purna";
    let sName = "Peramune";
    let scl = "DSSC";
    
    const fullName = fName + " " + sName;

    console.log("Full Name: ", fullName);
    console.log("School: ", scl);
}

function conditions(){
    const ages = [23,45,18];
    for(let x=0;x<ages.length;x++){
        if(ages[x]>19){
            console.log("No longer a teenger!");
        }
        else{
            console.log("Still a teenager!")
        }
    }

    let num01, num02, num03;
    num01 = 10;
    num02 = 10;
    num03 = 20;

    if(num01 == num02){
        console.log("Num01 and num02 are equal!");
    }
}

function looping(){
    for(let x=0; x<5;x++){
        console.log("Congrats!!!");
    }

    for(let x=0;x<4;){
        console.log("Nice job!!!!!!!")
        x++;
    }

    let y=0;
    do{
        console.log("Doing something!!!");
        y++;
    }
    while(y<5);

    const arr01 = [23,54,77,354,75,23];
    for(x of arr01){
        console.log(x)
    }
}

function switchCase(){
    const choices = [5,3,2,1,0,-3];
    for(x of choices){
        switch(x){
            case 1:
                console.log("Here is your CocaCola!");
                break;
            case 2:
                console.log("Here is your Sprite!");
                break;
            case 3:
                console.log("Here is your Fanta!");
                break;
            case 4:
                console.log("Here is your bottle of Water!");
                break;
            case 5:
                console.log("Here is your Ginger!");
                break;
            default:
                console.log("Invalid Choice!")

        }
    }
}

const additionFunction = (num01, num02) => {
    return num01 + num02;
}

function arrayUsage(){
    const arr01 = [];
    console.log(arr01);
    console.log(typeof arr01)
    console.log(arr01.length);

    arr01[0] = 12;
    arr01[1] = 45;
    arr01[2] = 61;
    arr01[3] = 32;
    arr01[4] = 79;

    console.log(arr01);
    console.log(arr01.length);

    const arr02 = [11,22,33,44,55,66,77];
    console.log(arr02[3]);
    console.log(arr02.includes(33));
    console.log(arr02.includes(4444));

    console.log(Array.isArray(arr02));

    const arr03 = arr02.map((arr) => {
        return arr*2;
    })
    console.log(arr03);
}

function objectUsage(){
    const person = {
        fName: "Purna",
        sName: "Peramune",
        scl: "DSSC",
        age: 21,
        fullName: function fullName() {
            return this.fName + " " + this.sName;
        }
    }

    console.log(person);
    console.log(person.fullName());

}

function stringFunctions(){
    let name = "Purna Peramune";
    let scl = "    DS Senanayake College    ";

    console.log(name);
    console.log(name.length);

    console.log(scl);
    console.log(scl.length);

    const sclNew = scl.trim();
    console.log(sclNew.length);

    console.log(name.toUpperCase());
    console.log(name.charAt(4));
    console.log(name.includes('rna'));
}

function operators(){
    let num01, num02, num03;
    num01 = 12,
    num02 = 45,
    num03 = 3;

    // Arithmetic Operators
    console.log(num01 + num02);
    console.log(num02 - num01);
    console.log(num01 * num03);
    console.log(num02 / num03);
    console.log(num02 % num01);

    // Assignment Operators
    let num04 = 10;
    num04++;
    console.log(num04)

    num04 += 10;
    console.log(num04);

    num04 -= 11;
    num04 *= 10;
    console.log(num04);
    console.log(typeof num04);

    if(num02>num01 && num02>num03){
        console.log("Num02 is larger than num01 and num03!");
    }
}

conditions();
looping();
switchCase();
const value = additionFunction(23, 17);
console.log(value);
arrayUsage();
objectUsage();
stringFunctions();
operators();