function find(num,k){
    for(var i=1;i<=num;i++){
        if(i%k==0){
            console.log(i)
        }
    }
}

function runProgram(input) {
    // Write code here
    input=input.split(" ").map(Number)
    var [num,k]=input
    find(num,k)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`7 2`);
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