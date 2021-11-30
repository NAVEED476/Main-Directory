
function left(len,arr){
    var stack=[]
    var ans=[]
    var n=len
    while(n--){
        while(stack.length!=0 && arr[n]<=stack[stack.length-1]){
            stack.pop()
        }
        if(stack.length==0){
            ans.push(-1)
        }
        else{
            ans.push(stack[stack.length-1])
        }

        stack.push(arr[n])
    }
    return ans.length
}



















function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
    console.log(left(len,arr))
   
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