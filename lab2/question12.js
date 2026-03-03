function isRegExp(value) {
    return value instanceof RegExp;
}


let a = /hello/;
let b = "hello";

console.log(isRegExp(a)); // true
console.log(isRegExp(b)); // false