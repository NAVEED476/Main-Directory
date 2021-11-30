function double(one , two, three, four,five){
    var result=(2*(one+two+three+four+five))
    console.log(result)
}
function runProgram(input) {
    // Write code here
    input=input.split(" ").map(Number)
    var [one,two,three,four,five]=input
    double(one , two, three, four,five)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1 2 3 4 5`);
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