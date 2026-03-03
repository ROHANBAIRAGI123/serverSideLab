function findAllIndexes(str, word) {
    let indexes = [];
    let startIndex = 0;
    while(true) {
        let index = str.indexOf(word, startIndex);
        if(index === -1){
            break;
        }
        indexes.push(index);
        startIndex = index + 1;
    }
    return indexes;
}

let text =  "My name is Rohan Bairagi";
let word = "Rohan";
console.log(findAllIndexes(text, word));

