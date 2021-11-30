function bigger(n,arr){
    var left=0;
    var right=left+1;
    var mat=[]
    while(left<n-1 && right<n){
        if(arr[left]<arr[right]){
            mat.push(arr[right])
            
            
        }else if(arr[left]>arr[right]){
            right++
        }
    
    }
    console.log(mat)
}


function runProgram(input) {
    // Write code here


    input=input.split("\n")
    var testcases=Number(input[0])
    var line=1
    for(var i=0;i<testcases;i++){
        var len=Number(input[line++])
        var arr=input[line++].trim().split(" ").map(Number)
        bigger(len,arr)
    }
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    4
    1 3 2 4`);
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