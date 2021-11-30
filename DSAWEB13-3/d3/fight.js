



// Approach is if i am taking left=0 and right=1 then i am usig 
// 2-pointers Approach to find the condition 

//        condition is if my left==right i am skipping 2 steps for 
//       left and right also 

//     i gave a condition like left=left+2, right=right+2

// if not satisfied then i simply append to the extra string varaible 
// but i am not getting any output






function fight(str) {
    let left = 0
    let right = 1

    var str1 = ""

    while (left < str.length - 1 && right < str.length) {
        if (str[left] == str[right]) {
            left = left + 2
            right = right + 2

        }
        else {
            str1 += str[left] + str[right]
        }
        
    }
    return str1
}






function runProgram(input) {
    // Write code here

    input = input.split("\n")

    let str = input[1].trim()
    console.log(fight(str))

}
if (process.env.USERNAME === "naveed") {
    runProgram(`5
    aabbc`);
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