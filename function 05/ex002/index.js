// var vs let

let catName = "Quincy";
let quote;

catName = "Beau";

function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow";
    return quote
}
console.log(catTalk());

// Compare Scopes of the var and let Keywords

function checkScope() {
    "use strict";
    let i = "function scope"
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i)
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope()