const person = {
    fName: "Purna",
    sName: "Peramune",
    school: "DSSC",
    career: "Software Engineer, BE",
    fullName : function() {
        return this.fName +" "+ this.sName;
    }
}

console.log(person);
console.log(person.fullName());

console.log(person.school);
console.log(person['career']);

person.school = "XYZ College Col.07";
console.log(person['school']);