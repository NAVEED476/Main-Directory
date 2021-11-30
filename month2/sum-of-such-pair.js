function such_pair(n,k,array){
    var left=0;
    var right=left+1;
    var count=0
    array=array.sort((a,b)=>a-b)
    while(left< n-1 && right<n){
        var temp=array[left]+array[right]
        if(temp==k ){
            count++
            right++
        }
        left++
    }
    if(count>0){
        console.log(1)
    }else{
        console.log(-1)
    }

}

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcases=input[0]
    var line=1
    for(var i=0;i<testcases;i++){
        var [n,k]=input[line++].trim().split(" ").map(Number)
        var arr=input[line++].trim().split(" ").map(Number)
        such_pair(n,k,arr)
    }

   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`10
    3 -9
    -1 3 -1
    10 -13
    -7 -6 4 10 -5 0 -3 1 -6 5
    4 -9
    -2 2 0 -4
    2 3
    0 0
    8 2
    5 -6 7 6 0 3 -4 8
    1 -7
    0
    8 -6
    4 7 4 -1 5 4 -6 -8
    6 4
    6 -1 -5 -5 2 -5
    4 -4
    0 -1 3 -2
    1 3
    -1`);
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