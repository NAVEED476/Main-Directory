function two(arr1,arr2){
    var left=0;
    var right=arr1.length-1;
    var count=0
    while(left<arr1.length && right>=0){
        if(arr1[left]<arr2[right]){
            left++;
        }else if(arr1[left]>arr2[right]){
            right--
        }else{
            left++;
            right--;
            count++
        }
    }
    return count
}










function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcase=+input[0]
    var line=1
    for(var i=0;i<testcase;i++){
        var size=input[line++]
        var arr1=input[line++].trim().split(" ").map(Number)
        var arr2=input[line++].trim().split(" ").map(Number)
        console.log(two(arr1,arr2))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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