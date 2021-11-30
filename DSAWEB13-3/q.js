var q = []
var front = 0
var rear = 0
function enque(el) {
    q[rear] = el
    rear++
    return rear - front
}




function deque() {
    if (rear == front) {
        return -1
    }
    var dequed = q[front]
    front++
    return dequed

}

function qlength(){
    return rear-front
}

// enque(1)
// enque(2)
// enque(3)
// enque(4)


console.log(qlength(),"here")
console.log(deque())

console.log(qlength())