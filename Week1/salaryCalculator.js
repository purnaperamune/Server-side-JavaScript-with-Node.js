var employeeName = process.argv[2]
var age = parseInt(process.argv[3])
var basicSalary = parseFloat(process.argv[4])

//Validations
if(!employeeName || !age || !basicSalary){
    return console.log("One of the required fields is missing!")
}
if((age <= 0) || (basicSalary <= 0)){
    return console.log("Age or basic salary cannot be zero or a negative value!")
}

// Assuming the final salary is consist of the basic salary, allowance of 30% from the basic salary and 12% of provident fund.
const allowance = ((basicSalary/100)*30);
const provident = ((basicSalary/100)*12);

const totalSalary = basicSalary + allowance + provident;

console.log(`The total salary of ${employeeName} is ${totalSalary}`);