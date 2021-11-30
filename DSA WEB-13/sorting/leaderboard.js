function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=+input[0]
    var line=1
    var mat=[]
    for(var i=0;i<len;i++){
        var one=mat.push(input[line++].trim().split(" "))

    }
    console.log(mat)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`6
    rancho 45
    chatur 32
    raju 30
    farhan 28
    virus 32
    joy 45`);
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