function scores(NzScore, NzSuperOver, NzFours,EngScore, EngSuperOver, EngFours) {
  if(NzScore>EngScore){
    console.log("New Zealand")
  }
  else if(NzScore<EngScore){
    console.log("England")
  }
  else if(NzSuperOver > EngSuperOver){
    console.log("New Zealand")
  }else if(NzSuperOver < EngSuperOver){
    console.log("England")
  }else if( NzFours > EngFours){
    console.log("New Zealand")
  }else if(EngFours > NzFours){
    console.log("England")
  }




 

  
}











function runProgram(input) {
  // Write code here

  input=input.trim().split("\n")
  //console.log(input)
  var [NzScore, NzSuperOver, NzFours]=input[0].split(" ").map(Number)
  //console.log(input1)
  var [EngScore, EngSuperOver, EngFours]=input[1].trim().split(" ").map(Number)
  //console.log(input2)
  scores(NzScore, NzSuperOver, NzFours,EngScore, EngSuperOver, EngFours)
 
}
if (process.env.USERNAME === "naveed") {
  runProgram(`230 16 29
  230 14 28`);
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