function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}


console.log(isNumber(25));      // true
console.log(isNumber("hello")); // false
console.log(isNumber(3.14));    // true
console.log(isNumber("123"));   // false