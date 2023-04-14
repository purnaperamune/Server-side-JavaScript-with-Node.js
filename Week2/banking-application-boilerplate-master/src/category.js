var category = function category(key) {
  key = key.toUpperCase();
  
  switch (key){
    case "PL":
      return "Personal Loan";
    case "VL":
      return "Vehicle Loan";
    case "EL":
      return "Education Loan";
    case "HL":
      return "Home Loan";
  }
};

module.exports = {
  category: category
};