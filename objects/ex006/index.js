// Add New properties to an Object

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
// adding with dot notation
ourDog.bark = "bow-wow";

var myDog = {
    "name": "Happy coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};
// adding with bracket notation
myDog['bark'] = "woof"

console.log(ourDog);
console.log(myDog);