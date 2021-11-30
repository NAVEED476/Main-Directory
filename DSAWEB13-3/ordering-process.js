function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var line=1
    var test=+input[0]
    for(var i=0;i<test;i++){
        var arr1=input[line++].trim().split(" ").map(Number)
        var arr2=input[line++].trim().split(" ").map(Number)

        console.log(arr1,arr2)
    }
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3
    3 2 1
    1 3 2`);
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