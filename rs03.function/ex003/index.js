// Default Parameters
const increment = (function() {
    return function increment(number, value = 1) {
        return number + value;
    };
}) ();

console.log(increment(5, 2));
console.log(increment(5));

// Use the Rest Operator with Function Parameters

/*const sum = (function() {
    return function sum(x, y, z) {
        const args = [x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
}) ();
console.log(sum(1, 2, 3))*/

/*the code below is a shortened version of the code above, Rest operator*/
const sum = (function() {
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
}) ();
console.log(sum(1, 2, 3, 4))