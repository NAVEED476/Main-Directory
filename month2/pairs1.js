

function summing(n,arr){
    var left=0;
    var right=arr.length
    var sum1=0;
    var sum2=0;
    var sum3=0
    while(left<right){
        sum1=arr[right-1]
        sum2=arr[right]
        sum3=sum1+sum2
        left++;
        right--;
    }
    console.log(sum3)
}

function runProgram(input) {
    // Write code here
   input=input.split("\n")
   var len=Number(input[0])
   var arr=input[1].trim().split(" ").map(Number)
    summing(len,arr)

  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    1 3 1 2`);
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