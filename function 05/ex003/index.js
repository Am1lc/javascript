// Declare a Read-Only variable with the const Keyword

function printManyTimes(str) {
    "use strict";

    const SENTENCE = str + " is cool";

    for(let i = 0; i < str.length; i+=2) {
        console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

// Mutate an Array Declared with const

const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    // s = [2, 5, 7];
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s);