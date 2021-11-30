
// * function sum(int n)  //function to find the sum of first N natural numbers
// * return (n*n+1)/2
// * function Pyramid()
// * int n //No of stones available
// * int i = 1 //denotes the current level
// * while(n>0)
//     * int temp = sum(i);
//     * if (temp > n) break;
//     * n = n - temp;
//     * i++;
// * print i



function runProgram(input) {
    // Write code here
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(``);
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
      process.exit(0) ;
    });
  }