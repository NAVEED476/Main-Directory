function countZerosOnesTwos(N,arr){
    var count = 0
    var count1 = 0;
    var count2 = 0
    for (var i = 0; i < N; i++) {
        if (arr[i] == 0) {
            count++
        }
        else if (arr[i] == 1) {
            count1++
        }
        else {
            count2++
        }
    }
    console.log(count, count1, count2)
}













function runProgram(input) {
    // Write code here

    input = input.split("\n")

    let length = +input[0]

    let arr = input[1].trim().split(" ").map(Number)
    countZerosOnesTwos(length, arr)

}
if (process.env.USERNAME === "naveed") {
    runProgram(`10
    0 1 0 1 1 1 0 2 2 0 `);
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