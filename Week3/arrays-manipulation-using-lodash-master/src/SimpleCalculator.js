

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
function addNumbers(num01, num02){
  return num01 + num02;
}


//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
function subNumbers(num01, num02){
  return num01 - num02;
}

//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
function mulNumbers(num01, num02){
  return num01 * num02;
}

//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
function divNumbers(num01, num02){
  if(num02 == 0){
    return ("Please provide valid numbers..!")
  }
  return num01 / num02;
}

module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}