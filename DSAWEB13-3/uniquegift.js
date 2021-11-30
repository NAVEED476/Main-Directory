function unique(arr){
    var stack=[]

    var rear=1;
    var ans=[]

    for(var i=0;i<arr.length;i++){
        stack.push(arr[i])
        
        
    }
    ans.push(stack.shift(rear++))
  
    
    
    return ans

    
}






function runProgram(input) {
    // Write code here

    input=input.trim().split("\n")
    var line=1
    var len=+input[0]

    for(var i=0;i<len;i++){
        var arr=input[line++].trim()

        console.log(unique(arr))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    abadbc
    abcabc`);
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