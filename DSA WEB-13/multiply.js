
var arr=[1,2,3]




function multiply(len,arr1,arr2){
    var mul=1
    for(var i=0;i<arr1.length;i++){
        mul=mul*arr1[i]
    }
    //console.log(mul)
    var mul1=1
    for(var i=0;i<arr2.length;i++){
        mul1=mul1*arr2[i]
    }
    //console.log(mul1)

    var result=mul*mul1
    console.log(result)
}

















function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test=+input[0]
    var line=1
    //console.log(test)
    for(var i=0;i<test;i++){
        var len=+input[line]
        line++
       // console.log(len)
        var arr1=input[line++].trim().split(" ").map(Number)
        var arr2=input[line++].trim().split(" ").map(Number)
        multiply(len,arr1,arr2)
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    3
    1 2 3
    2 3 1
    `);
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