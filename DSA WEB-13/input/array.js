function runProgram(input) {
  input=input.trim().split("\n")
  var testcases=+input[0]
  var line=1
  for(var i=0;i<testcases;i++){
    var [row,col]=input[line].trim().split(" ").map(Number)
    line++;
    var mat=[]


    
    for(var j=0;j<row;j++){
      mat.push(input[line++].trim().split(" ").map(Number))
    }
    console.log(mat)
  }
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    3 3
    1 2 3
    3 4 3
    5 6 3
    3 2
    1 4 
    5 4 
    9 5`);
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