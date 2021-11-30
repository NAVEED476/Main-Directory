function runProgram(input) {
    input=Number(input)
    division_task(input)
  }
  function division_task(input){
     var x=Math.floor(32/input)
     if(input==0){
         console.log("-1")
     }else if(x==0){
         console.log("Too Low")
     }else{
         console.log(x)
     }
  }

  
  
  
  if (process.env.USER === "naveed") {
    runProgram(`17`);
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
  
  
  
  
  
  
  
  