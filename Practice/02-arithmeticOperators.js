function addition(num01, num02){
    return num01 + num02;
}

function subtraction(num01, num02){

}


function arithmeticFunctions(num01, num02, operator){
    let finalValue;
    switch (operator){
        case "+":
            finalValue = num01 + num02;
            break;
        case "-":
            finalValue = num01 - num02;
            break;
        case "*":
            finalValue = num01 * num02;
            break;
        case "/":
            finalValue = num01 / num02;
            break;
        case "%":
            finalValue = num01 % num02;
            break;
        default:
            return "Invalid Input";
    }

    console.log("Output after the arithmetic operation is ", finalValue)
}

arithmeticFunctions(12, 8, "+");
arithmeticFunctions(14, 6, "-");
arithmeticFunctions(9, 8, "*");
arithmeticFunctions(52, 8, "/");
arithmeticFunctions(99, 5, "%");

let num01 = 10;
num01++;

console.log(num01);

num01--;
let num02 = num01;

console.log(num02)