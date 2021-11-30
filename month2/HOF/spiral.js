function spiral(N,M,arr){
    var top=0
    var bottom=M-1;
    var left=0;
    var right=N-1;
    var str=""
    var count=0
    while(count<N*M){
        for(var i=top;i<=bottom;i++){
            str+=arr[left][i]+" "
            count++
        }
        left++;

        for(var i=left;i<=right;i++){
            str+=arr[i][bottom]+" "
            count++
        }
        bottom--
    }
    console.log(str)
}




















function runProgram(input) {
    // Write code here

    input=input.trim().split("\n")
    var test=+input[0]
    var line=1
    for(var i=0;i<test;i++){
        
        var [N,M]=input[line].trim().split(" ").map(Number)
        line++
        var arr=[]
        for(var j=0;j<N;j++){
            arr.push(input[line].trim().split(" ").map(Number))
            line++
            
        }
        spiral(N,M,arr)
        
    }
    
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    3 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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