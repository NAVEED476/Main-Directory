


    // for(var i=0;i<arr.length;i++){
    //     //console.log(arr[i])
    //     for(var j=i+1;j<arr.length;j++){
    //         if(arr[i]+arr[j]<target)
    //         count++
    //     }
    // }
    // if (count==0){
    //     return -1
    // }else{
    //     return count
    // }
    function k(len,arr,target){
    
      var count=0

    var left=0
    var right=1;

    while(left<arr.length && right<arr.length){
        var sum=arr[left]+arr[right]
        if(sum<target){
            count++
            right++
            left--
        }

        
        left++
        
    }
    

    return count
    
}







function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test=+input[0]
    var line=1
    for(var i=0;i<test;i++){
        var len=+input[line++]
        var arr=input[line++].trim().split(" ").map(Number)
        var target=+input[line++]
        console.log(k(len,arr,target))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    5
    1 2 3 4 5
    7
    3
    30 10 20
    15
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