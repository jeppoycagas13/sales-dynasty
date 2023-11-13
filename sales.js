const productProfitArray = [
    {"Product A": -75},
    {"Product B": -70},
    {"Product C": 95},
    {"Product D": 5},
    {"Product E": 88},
    {"Product F": 29}
];

function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data"
    };
    let highestProfit = -Infinity;
    // console.log(highestProfit)

    let topProduct = "";

    for (let i = 0; i < productProfitArray.length; i++) {
        const product = productProfitArray[i];
        // console.log(product)
        const productName = Object.keys(product)[0];
        // console.log(productName)
        const profit = product[productName];
        // console.log(profit)

        if (profit > highestProfit) {
            highestProfit = profit;
            // console.log(highestProfit) // -75 -70 "95"
            topProduct = productName;
            // console.log(topProduct) // A B "C"
        }
    }

    return topProduct; // Product C
}

function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data"
    };
    let lowestProfit = Infinity;
    let bottomProduct = "";

    for (let i = 0; i < productProfitArray.length; i++) {
        const product = productProfitArray[i];
        const productName = Object.keys(product)[0];
        const profit = product[productName];
        
        if (profit < lowestProfit) {
            lowestProfit = profit;
            // console.log(lowestProfit) "-75"
            bottomProduct = productName;
            // console.log(bottomProduct) "A"
        }
    }

    return bottomProduct; // Product A
}

function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
        return "No Data"
    };
    let nearZeroProfit = Infinity;
    // console.log(nearZeroProfit)
    let zeroProduct = "";

    for (let i = 0; i < productProfitArray.length; i++) {
        const product = productProfitArray[i];
        const productName = Object.keys(product)[0];
        const profit = product[productName];

        if (Math.abs(profit) < Math.abs(nearZeroProfit) ||
            (Math.abs(profit) === Math.abs(nearZeroProfit) && profit > nearZeroProfit)) {
                // console.log(nearZeroProfit)
            nearZeroProfit = profit;
                // console.log(nearZeroProfit) // -75 -70 "5"

            zeroProduct = productName;
            // console.log(zeroProduct) // A B "D"
        }
    }

    return zeroProduct; //Product D
}

// Testing
console.log(topProduct(productProfitArray)); // Product C
console.log(bottomProduct(productProfitArray)); // Product A
console.log( zeroProfitProduct(productProfitArray)); // Product D