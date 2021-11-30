function num(n,str){
    var count=0
    for(var i=0;i<n;i++){
        if(str[i]=="a" ||str[i]=="e" || str[i]=="i" ||str[i]=="o"||str[i]=="u"){
            count++
        }
    }
    if(count>0){
        console.log('true')
    }else{
        console.log('false')
    }
}



function runProgram(input) {
    // Write code here

    input=input.split("\n")
    var in1=Number(input[0])
    var str1=input[1]
    num(in1,str1)

  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`4
    stvre`);
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