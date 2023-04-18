// For Loop
for(let x=0;x<5;x++){
    console.log("*")
}


var result ="";
for(let x=0;x<5;x++){
    for(let y=0;y<x;y++){
        result = result +"*"
    }
    console.log(result)
}

const word = "Congratulations";
let index = 0;
for(;index<word.length;){
    console.log(word.charAt(index));
    index++;
}

// while Loop
let num = 0;
while(num<=5){
    console.log(num)
    num++;
}

// do-while
let check = 0;
do{
    console.log("Hello World!");
    check++;
}
while(check<=4)

// for - in Loop
const arr01 = [12,453,5,254,56];
for(x in arr01){
    console.log(arr01[x]);
}

// for - of loop

const string01 = "JavaScript";
for(let x of string01){
    console.log(x)
}