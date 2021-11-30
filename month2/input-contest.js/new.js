function limit(dist,time){
    var speed=dist/time
    if(speed>40){
        console.log("Apply Brake")
    }else{
        console.log("Keep Going")
    }
}

function runProgram(input) {
    // Write code here
    input=input.split(" ").map(Number)
    var [dist,time]=input
    limit(dist,time)
  


   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`100 2`);
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