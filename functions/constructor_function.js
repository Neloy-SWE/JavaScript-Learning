function Counter() {
    this.count = 0;

    this.increment = function() {
        this.count++;
        console.log(this.count);
    }
    this.decrement = function() {
        if (this.count > 0){
                    this.count--;
        console.log(this.count);
        }
        else {
            console.log("Count cannot be negative");
        }
    }
}

const myCounter = new Counter();
console.log(myCounter.count);
myCounter.increment();
myCounter.decrement();
console.log(myCounter.count);