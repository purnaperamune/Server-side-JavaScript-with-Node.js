const productArray = [
    ['Apple', 200],
    ['Banana', 100],
    ['Strawberry', 450]
]

const calculateSellingPrice = (discountPercentage) => {
    for(let x= 0; x<productArray.length; x++){
        productArray[x][1] = productArray[x][1] - (productArray[x][1]*discountPercentage/100)
    }
}

// Filterization
const premiumProducts = productArray.filter(product => product[1] > 250);
console.log(premiumProducts)

calculateSellingPrice(10)
console.log(productArray)