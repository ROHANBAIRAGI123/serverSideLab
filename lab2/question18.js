function changeCase(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch === ch.toUpperCase()) {
            result += ch.toLowerCase();
        } else {
            result += ch.toUpperCase();
        }
    }

    return result;
}
let text = "Hello World";
console.log(changeCase(text));