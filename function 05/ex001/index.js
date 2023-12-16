// parseInt Function

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56"));

// Use the parseInt Fuction with a Radix

function convertToInteger01(str) {
    return parseInt(str, 2)
}

console.log(convertToInteger01("10011"))