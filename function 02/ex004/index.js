// Else statements

function testElse(val) {
    var result = "";

    if (val > 5) {
        return result = "Bigger than 5";
    } else {
        return result = "5 or Smaller";
    }

    //return result;
}

console.log(testElse(4));

// Else If statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10"
    }

}

console.log(testElseIf(7));


// Logical Order in If Else statements

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10"
    }
}

console.log(orderMyLogic(3));


// Chaining If Else statements

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if(num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "large";
    } else {
        return "Huge";
    }
}

console.log(testSize(67));