// function binary(arr){
//     var mat=[]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]==1){
//             mat.push(0)
//         }else if(mat[i]==0){
//             mat.push(1)
//         }
//     }console.log(mat)
// }

// var mat=[
//     [1,0],
//     [0,1],
//     [1,1]
// ]

function binaryMatrix(N,M, matrix){
    for(var i=0;i<N;i++){
        var arr=[]
        for(var j=0;j<M;j++){
            if(matrix[i][j]==1){
                arr.push(0)
            }else{
                arr.push(1)
            }
        }console.log(arr.join(" "))
    }
    
}




function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var [row,col]=input[0].trim().split(" ").map(Number)
    var line=1
    var mat=[]
    for(var i=0;i<row;i++){
        mat.push(input[line++].trim().split(" ").map(Number))
    }
    binaryMatrix(row,col, mat)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3 2
    1 0
    0 1
    1 1`);
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