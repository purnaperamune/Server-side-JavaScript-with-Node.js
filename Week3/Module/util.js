const arrayManipulations = {
    toUpperCase : (array) => {
        let newArray = [];
        for(let data of array){
            newArray.push(data.toUpperCase());
        }
        return newArray;
    },

    toLowerCase : (array) => {
        let newArray = [];
        for(let data of array){
            newArray.push(data.toLowerCase());
        }

        return newArray;
    },

    findIndex : (array, element) => {
        let check = array.includes(element);
        if(!check){
            return 'Element does not contain in this array';
        }
        return array.indexOf(element)
    }
}

// console.log(arrayManipulations.toUpperCase(['Purna', "Sam", "SANGAkkara", "MAHELa", "xyz"]))
// console.log(arrayManipulations.toLowerCase(['Purna', "Sam", "SANGAkkara", "MAHELa", "xyz"]))
// console.log(arrayManipulations.findIndex(['Purna', "Sam", "SANGAkkara", "MAHELa", "xyz"],"SANGAkkara"))
// console.log(arrayManipulations.findIndex(['Purna', "Sam", "SANGAkkara", "MAHELa", "xyz"],"trhg"))

module.exports = {arrayManipulations};
