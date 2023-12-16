// Use the Conditional (Ternary) Operator

/*condition ? statement-if-true : statement-if-false;*/

function checkEqual(a, b) {
    return a === b ? true : false;

    // return a === b; is equal to the code above
}

console.log(checkEqual(1, 2));

// Multiple Conditional (Ternary) Operator

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(-1));