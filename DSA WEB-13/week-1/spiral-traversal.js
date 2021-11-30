
function spiral(n,m,arr){
    var top=0
    var bottom=m-1
    var left=0;
    var right=n-1;
    var count=0
    var str=""
    while(count<n*m){
        for(var i=top;i<=bottom;i++){
          str+=arr[left][i]+" "
        }
    }
    console.log(str)
}










function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var testcases=+input[0]
    var line=1;
    for(var i=0;i<testcases;i++){
        var [row,col]=input[line].trim().split(" ").map(Number)
        line++;
        var mat=[]
        for(var j=0;j<row;j++){
            mat.push(input[line++].trim().split(" ").map(Number))
        }
        spiral(row,col,mat)
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`
    2
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