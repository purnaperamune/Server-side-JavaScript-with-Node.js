const products = [
    ['Apple', 400],
    ['Banana', 450],
    ['Strawberry', 300],
    ['Cherry', 500],
    ['Papaya', 50],
    ['Mango', 100],
    ['Pineapple', 250],
    ['Grapes', 250],
];


const nonPremiumProducts = products.filter(product => product[1]<=300)

const nonPremiumProductsInCapitals = nonPremiumProducts.map((product) => [product[0].toUpperCase(), product[1]])

console.log(nonPremiumProducts)
console.log(nonPremiumProductsInCapitals)