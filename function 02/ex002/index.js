// Equality Operator

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

// change this value to test
console.log(testEqual(10));


function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

// change this value to test
console.log(testStrict(7));

/*
3 == 3
3 === '3'
*/

function compareEquality(a,b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));