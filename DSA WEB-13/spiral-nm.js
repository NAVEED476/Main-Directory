function spiral(n,m,arr){
    var top=0;
    var bottom=n-1;
    var left=0;
    var right=m-1;
    var count=0
    var str=""
    while(count<n*m){
        for(var i=bottom;i>=top && count<n*m;i--){
            str+=arr[i][left]+" "
            count++
        }
        left++

        for(var i=left;i<=right && count<n*m;i++){
            str+=arr[top][i]+" "
            count++
        }
        top++

        for(var i=top;i<=bottom && count<n*m;i++){
            str+=arr[i][right]+" "
            count++
        }
        right--

        for(var i=right;i>=left && count<n*m;i--){
            str+=arr[bottom][i]+" "
            count++
        }
        bottom--
    }
    console.log(str)

}

function runProgram(input) {
    // Write code here
    var input=input.split("\n")
    var testcase=+input[0]
    var line=1
    for(var i=0;i<testcase;i++){
        var [row,col]=input[line++].trim().split(" ").map(Number)
        var mat=[]
        for(var j=0;j<row;j++){
            mat.push(input[line++].trim().split(" ").map(Number))
        }
       spiral(row,col,mat)
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    4 3
    4 5 6
    3 12 7
    2 11 8
    1 10 9`);
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