class Stack {
    constructor() {
        this.items = [];
    }

    // Push element into stack
    push(element) {
        this.items.push(element);
    }

    // Check if element exists in stack
    contains(element) {
        return this.items.includes(element);
    }

    // Display stack
    display() {
        console.log(this.items);
    }
}


let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();

console.log("Is 20 present in stack?", stack.contains(20));
console.log("Is 40 present in stack?", stack.contains(40));