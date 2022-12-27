
class Stack {
    constructor(){
        this.items = [];
    }
    push(element) {
        const add = this.items.push(element);
        return add;
    }
    pop(){
        if(this.items.length == 0) {
            return 'underflow';
        } else {
            return this.items.pop();
        }
    }
    peek(){
        if(this.items.length == 0) {
            return null;
        } else {
            return this.items[this.items.length - 1];
        }
        
    }
    isEmpty(){
        return this.items.length == 0;
    }
    printStack(){
        let str = '';
        for(let i=0; i<this.items.length; i++){
            str += this.items[i] + ' ';
        }
        return str;
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

// console.log(stack.isEmpty());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.printStack());
// console.log(stack.isEmpty());
console.log(stack.peek());
