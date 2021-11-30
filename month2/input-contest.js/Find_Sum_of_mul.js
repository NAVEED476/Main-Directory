function multiples(x,k,y){
    var sum=0
    for(var i=1;i<=k;i++){
        var s=x*i
        
       // console.log(s)
        if(s%y==0){
            sum+=s
        }
    }
    console.log(sum)
}

function runProgram(input) {
    // Write code here
    input=input.split(" ").map(Number)
    var [x,k,y]=input
    multiples(x,k,y)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3 10 5`);
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
multiples(3,10,5)