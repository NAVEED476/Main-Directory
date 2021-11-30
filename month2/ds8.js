
function tax(n,arr){
    
    var arr=arr.sort((a,b) => a-b);
    var left=0
    var right=arr.length-1
    var sum=0
    while(left<right){
        sum+=arr[right]
        left++;
        right--;
    }
    console.log(sum)
    
    
 
}
//tax(matrix)

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var n=Number(input[0])
    input=input[1].trim().split(" ").map(Number)
    tax(n,input)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`
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