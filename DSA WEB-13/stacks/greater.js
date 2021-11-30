function greater(len, arr) {

    // var mat=[]
    // for(var i=0;i<arr.length;i++){
    //     for(var j=i+1;j<arr.length;j++){
    //         if(arr[i]<arr[j]){
    //             mat.push(arr[j])
    //             break
    //         }
    //     }
    // }
    // mat.push(-1)
    // return (mat)


    // var mat = []

    // var left = 0
    // var right = left + 1
    // while (left < len && right < len) {
    //     if (arr[left] < arr[right]) {
    //         mat.push(arr[right])
    //     } else if(arr[left]>arr[right]) {
    //         right++
    //     }
    //     left++
    // }
    // mat.push(-1)

    // return mat

   


}







function runProgram(input) {
    // Write code here
    input = input.split("\n")

    var testcases = Number(input[0])
    var line = 1
    for (var i = 0; i < testcases; i++) {
        var len = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number)
        console.log(greater(len, arr))
    }


}
if (process.env.USERNAME === "naveed") {
    runProgram(`2
    4
    1 3 2 4
    5
    1 2 3 4 5`);
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