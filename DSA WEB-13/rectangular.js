function spiralTraversal(N, M, arr){
    //write code here
    var top=0;
    var bottom=N-1;
    var left=0;

    var right=M-1;
    var count=0
    var str=""
    while(count<N*M){
        for(var i=top;i<=bottom && count<N*M;i++){
            str+=arr[i][left]+" "
            count++
        }left++

        for(var i=left;i<=right && count<N*M;i++){
            str+=arr[bottom][i]+" "
            count++
        }bottom--

        for(var i=bottom;i>=top && count<N*M;i--){
            str+=arr[i][right]+" "
            count++
        }right--


        for(var i=right;i>=left && count<N*M;i--){
            str+=arr[top][i]+" "
            count++
        }top++
    }
    console.log(str)
}

  

    












function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcases=+input[0]
    var line=1
    for(var i=0;i<testcases;i++){
        var [n,m]=input[line++].trim().split(" ").map(Number)

        var mat=[]
        for(var j=0;j<n;j++){
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        rectangular(n,m,mat)
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