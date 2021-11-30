function runProgram(input) {
    // Write code here\
    input=input.trim().split("\n")
    var test=+input[0].trim()
    var mat=[]
    for(var i=1;i<=test;i++){
        if(input[i].length>1){
            var [q,l]=input[i].trim().split(" ")
            console.log(q,l)
        }
        else{
            var lq=input[i].trim()
            console.log(lq)
        }
        
    }
    
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    1 2
    3 4
    4
    3
    2`);
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