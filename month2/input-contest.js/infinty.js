function infinity_stones(one,two,three,four,five,six){
    var result=(2*(two+five+six)+(3*(three+four))+one)
    console.log(result)
}
function runProgram(input) {
    // Write code here
    input=input.split(" ").map(Number)
    //console.log(input)
    var [one,two,three,four,five,six]=input;
    infinity_stones(one,two,three,four,five,six)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1 2 3 4 5 6`);
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