function equation(len,arr){
    var sum=0
    var sum1=0
    for(var i=0;i<len;i++){
        if(arr[i]%2==0){
            sum+=arr[i]
        }else{
            sum1+=arr[i]
        }
    }console.log(2*sum+3*sum1)
}








function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=Number(input[0])
    var arr=input[1].trim().split(" ").map(Number)
    equation(len,arr)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    1`);
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