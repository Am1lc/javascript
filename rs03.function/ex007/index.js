// Use Destructuring Assignment to Assign variables from Arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6];
console.log(z, x, y);

let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [a, b]
}) ();
console.log(a);
console.log(b)

// Use Destructuring Assignment with the Rest Operator 

const source = [1,2,3,4,5,6,7,8,9,10]
function removeFirstTwo(list) {

    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);