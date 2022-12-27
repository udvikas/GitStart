
class queue {
    constructor() {
        this.queue = [];
        this.minpos = 0;
        this.maxpos = 0;
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    Enqueue(element) {
        this.queue.push(element);
        console.log(`${element} is enqueued to queue`);
        this.maxpos++;
        console.log('maxpos is',this.maxpos);
    }
    Dequeue() {
        if(this.isEmpty()) {
            console.log('underflow')
        } else {
            console.log(`${this.queue.shift()} is dequeued to queue`);
            this.minpos++;
            console.log('maxpos is',this.minpos);
        } 
    }
    front() {
        if(this.isEmpty()) {
            console.log('queue is empty');
        } else {
            console.log(`front element is ${this.queue[0]}`);
        }
    }
    rear() {
        if(this.isEmpty()) {
            console.log('queue is empty');
        } else {
            console.log(`rear element is ${this.queue[this.queue.length - 1]}`);
        }
    }
    PrintQueue() {
        console.log(this.Enqueue(element));
        console.log(Dequeue());
    }
}
const Queue = new queue();
Queue.Enqueue(10);
Queue.Enqueue(20);
Queue.Enqueue(30);
Queue.Enqueue(40);
Queue.Dequeue();
Queue.Dequeue();
Queue.front();
Queue.rear();
