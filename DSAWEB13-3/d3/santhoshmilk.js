function santhosh(val){
    if(val<0){
        return 0
    }

    if(val==0){
        return 1
    }


    return santhosh(val-4)+santhosh(val-8)
}










function runProgram(input) {
    // Write code here

    input=input.split("\n")
    let len=+input[0]
    var line=1
    for(var i=0;i<len;i++){
        let val=+input[line++]

        console.log(santhosh(val))
   
    }
    
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    12`);
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