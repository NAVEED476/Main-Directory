

function eeee(arr) {

    function push(el, arr) {
        arr.push(el)
    }

    function pop() {
        arr.pop()
    }

    function isEmpty(arr) {
        return arr.length === 0
    }

    function peek(arr) {
        return arr[arr.length - 1]
    }


}



function runProgram(input) {

    input = input.trim().split("\n")


    var queries = +input[0].trim()
    var arr = []


    for (var i = 1; i <= queries; i++) {


        input[i].trim()



        if (input[i].length > 1) {
            var [k, l] = input[i].trim().split(" ")
            console.log(k, l)
        }



        else {
            var s = input[i].trim()
            console.log(s)
        }
    } pushpop(arr)

}
if (process.env.USERNAME === "naveed") {
    runProgram(`6
    1 15
    1 20
    2
    3
    2
    3`);
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