function Engine(cylinders, size){
    this.cylinders = cylinders;
    this.size = size;
}

function Car(make, model, color, cylinders, size){
    this.make = make;
    this.model = model;
    this.color = color;
    this.engine = Engine(cylinders, size)
}

let myCar01 = new Car("BMW", "X1", "Black", 2.5, 5);
let myCar02 = new Car("Toyota", "Premio", "White", 2.5, 5);

console.log(myCar01)
console.log(myCar02)

const carArray = []
carArray.push(myCar01)
carArray.push(myCar02)
console.log(carArray)