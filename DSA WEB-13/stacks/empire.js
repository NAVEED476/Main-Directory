function empire(len,arr){
    var sum=0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    return(sum/len)
}






function runProgram(input) {
    // Write code here
    input = input.split("\n")
    var len = Number(input[0])
    var arr = input[1].trim().split(" ").map(Number)
    console.log(empire(len, arr))
}
if (process.env.USERNAME === "naveed") {
    runProgram(`2
    1 3 1 2`);
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