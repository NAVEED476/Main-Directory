
function happy(value){
  while(true){
    let sum=0
    while(value>0){
      let a=(value%10)**2
      value=Math.floor(value/10)
      sum=sum+a
    }
    value=sum

    if(value==1){
      console.log('true')
      break
    }else if(value<=9){
      console.log('flase')
      break
    }
  }
}









function runProgram(input) {
    // Write code here
    input=input.split("\n")
    let testcases=+input[0]
    let line=1
    for( let i=0;i<testcases;i++){
      let value=+input[line++].trim()
      happy(value)
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3
    19
    2
    312082396
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