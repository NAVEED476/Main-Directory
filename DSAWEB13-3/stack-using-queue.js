/*
Queue {
  push()
  front()
  pop()
  isEmpty()
}
*/
class Stack {
    constructor()
    {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
    	//write your code here..
    	
    	while(!this.Q1.isEmpty()){
    	    this.Q2.queue.push(this.Q1.queue.shift())
    	}

        if(this.Q1.isEmpty()){
            this.Q1.queue.push(value)
        }

        while(!this.Q2.isEmpty()){
            this.Q1.push(this.Q2.queue.shift())
        }
    }
    pop() {
    	//write your code here..

        this.Q1.queue.shift();
    }
    top() {
        //write your code here..

        return this.Q1.queue[0]
    }
    isEmpty() {
        return this.Q2.queue.length==0;
        return this.Q1.queue.length==0;
    	//write your code here..
    }
}
