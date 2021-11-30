function slide(len,target,arr){
    var sum=0
    var max=0
    for(var i=0;i<target;i++){
        sum+=arr[i]
    }

    if(max<sum){
        max=sum
    }

    for(var j=target;j<len;j++){
        sum+=arr[j]
        sum-=arr[j-target]
        if(max<sum){
            max=sum
        }
    }
    
    return sum
    
}








function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var [len,k]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    //onsole.log(len,k)
    //console.log(arr)
    console.log(slide(len,k,arr))
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`10 3
    -1 -1 -2 1 -2 4 1 9 3 9`);
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