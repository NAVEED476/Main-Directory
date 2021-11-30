function solve(N,arr){
    var left=0
    var right=1
    
    while(left<N && right<N){
        var temp=0
        if(arr[left]>arr[right]){
            temp=arr[left]
            arr[left]=arr[right]
            arr[right]=temp
        }
        left++
        right++
    }
    return arr
}








function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=+input[0]
    var arr=input[1].trim().split(" ").map(Number)
    console.log(sorting(len,arr))
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    3 5 0 9 8`);
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