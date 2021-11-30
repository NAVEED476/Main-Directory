function string(str1,str2){
    var stack=[]
    var count=0
    for(var i=0;i<str1.length;i++){
        if(str1[i]=="#"){
            stack.push(str1[i])
            stack.push(str1[i-1])
        }

        
        
    }
    return stack
}













function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test=+input[0]
    var line=1
    for(var i=1;i<=test;i++){
        var str1=input[i].trim()
        i++
        var str2=input[i].trim()
        i++
        console.log(string(str1,str2))
    }

   

   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    ab#d
    a#bc`);
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