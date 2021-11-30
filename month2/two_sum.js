function two_sum(arr,n,target){
    arr =  arr.sort((a,b) => a - b);
    var sum=0;
    var left=0;
    var right=n-1;
    while(left<right){
        sum+=arr[left]+arr[right]
        if(sum==target){
            return 1
 
        }else if(sum>target){
            right--;
        }
        else{
           left++
        }
    }
    return -1
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test_case=Number(input[0])
    var line=1
    for(var i=0;i<test_case;i++){
        var [size,target]=input[line++].trim().split(" ").map(Number)
        var array=input[line++].trim().split(" ").map(Number)
        console.log(two_sum( array,size,target))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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