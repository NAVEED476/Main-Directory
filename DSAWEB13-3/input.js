


function masai(arr){
    var q=[]
    var stack=[]
    for(let i=0;i<arr.length;i++){
      while(stack.length!=0 && arr[i]>stack[stack.length-1]){
        stack.pop()
      }
      if(stack.length==0){
        q.unshift(arr[i])
      }
      else{
        return 
      }
      stack.push(arr[i])
    }


   

    return q
}











function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var line=1
    var test=+input[0]
    for(var i=0;i<test;i++){
     var arr=input[line++].trim().split(" ").map(Number)
     console.log(masai(arr))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`7
    1 4
    2 3
    1 2
    3
    4
    5
    4`);
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