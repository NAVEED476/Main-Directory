function runProgram(input) {
    // Write code here
input=input.split("\n")
var testcases=+input[0]
var line=1
for(var i=0;i<testcases;i++){
  var size=input[line++].trim().split(" ").map(Number)
  var arr=input[line++].trim().split(" ").map(Number)
  console.log(size,arr)
}
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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