function runProgram(input) {
    // Write code here
    input=Number(input)
    var i=1;
    var sum=0;
    // if(input==1){
    //     console.log(1)
   // }
    while(input>=sum){
        sum+=Math.floor(i*i+1)/2;
        i++;
    }
   console.log(i-1)
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1`);
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