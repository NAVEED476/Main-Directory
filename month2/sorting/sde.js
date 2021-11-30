function sde(len,arr){
  var left=0;
  var right=left+1
  var count=0

  while(left<arr.length && right<arr.length){
      if(arr[left]<arr[right]){
          count++
      
      }
      left++;
      right++
      
  }console.log(count)
}

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=Number(input[0])
    var arr=input[1].trim().split(" ").map(Number)
    sde(len,arr)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`8
    39 27 11 4 24 32 32 1`);
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