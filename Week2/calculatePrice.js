const product = {
    id: "XYZ",
    cost: 3000,
    discountPercentage: 10,
    sellingPrice: 0,
}

const calculateSellingPrice = (product) => {
    return product.sellingPrice = product.cost - (product.cost*product.discountPercentage/100)
    
}

calculateSellingPrice(product)
console.log(product)