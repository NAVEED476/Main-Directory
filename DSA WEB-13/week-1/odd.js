function odd(N,M,matrix){


    function mul(arr){
        var t=1
        var k=0
        for(var i=0;i<arr.length;i++){
          t*=arr[i]
        }
        return(t)
    }
    for(var i=0;i<=M-1;i++){
        var mat=[]
        for(var j=N-1;j>=0;j--){
            if(matrix[j][i]%2!=0){
                mat.push(matrix[j][i])
                
            }
        }var k=mul(mat)
        console.log(k)
    }
}



function runProgram(input) {
    // Write code here
    var input=input.trim().split("\n")
    var [row,col]=input[0].trim().split(" ").map(Number)
    var mat=[]
    var line=1
    for(var i=0;i<row;i++){
        mat.push(input[line++].trim().split(" ").map(Number))
    }
    odd(row,col,mat)
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`
    3 3
    1 2 3
    4 5 6
    7 8 9`);
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



