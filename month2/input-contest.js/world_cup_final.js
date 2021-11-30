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
    }else{
      console.log("England")
    }






    
}











function runProgram(input) {
    // Write code here
  
    input=input.trim().split("\n")
    //console.log(input)
    var input1=input[0].split(" ").map(Number)
    //console.log(input1)
    var input2=input[1].trim().split(" ").map(Number)
    //console.log(input2)
   for(var i=0;i<input.length;i++){
       var input1=input[i].split(" ").trim().map(Number)
       scores(input1)
   }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`241 15 21
    241 15 26
    23 22 111
    2 3 4 
    1111 333 344`);
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