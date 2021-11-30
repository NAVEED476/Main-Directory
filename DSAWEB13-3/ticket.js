function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var line = 1
    var len = +input[0]


    let s = 0
    let q = []



    for (var i = 0; i < len; i++) {
        var [query, item] = input[line++].trim().split(" ")



        if (query === "E") {
            q.unshift(item)
            s=s+1

           console.log(s)
           s=0
            
        }
        
        else if(query=="D"){
            if(q.length==0){
                console.log(-1)
            }
            else{
               return  q.shift()
                
            }
        }
        console.log(q[q.length-1],s)
       
    }



    // function enque(val) {
       
    //     s = s + 1
    //     q.push(val)
        
    //     console.log(q.length)

    // }
   
    // function dequeue() {
    //     if(s==0){
    //         console.log(-1)
    //     }
    // }


}
if (process.env.USERNAME === "naveed") {
    runProgram(`5
    E 2
    D
    D
    E 3
    D`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}