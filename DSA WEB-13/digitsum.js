var str=12345
function digit(str){
    var sum=0
    var n=str.toString()
    for(var i=0;i<n.length;i++){
        sum+=Number(n[i])
    }return sum
}
//console.log(digit(str))



function digit_sum(n,arr) {
    var mat=[]
    var sum=0
    n=toString()
    for(var i=0;i<arr.length;i++){
        mat.push(digit(arr[i]))
    }
    for(var j=0;j<mat.length;j++){
        sum+=mat[j]
    }return sum
}


function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcase=Number(input[0])
    var line=1
    for(var i=0;i<testcase;i++){
        var len=Number(input[line++])
        var arr=input[line++].trim().split(" ").map(Number)
        console.log(digit_sum(len,arr))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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