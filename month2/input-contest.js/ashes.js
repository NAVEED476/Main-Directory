function ashes(aus,eng){
    if(aus>eng){
        console.log("Australia")
    }else if(aus<eng){
        console.log("England")
    }else{
        console.log("Tie")
    }
}
function runProgram(input) {
    // Write code here
    input=input.split(" ").map(Number)
    var [aus,eng]=input
    ashes(aus,eng)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`45 67`);
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