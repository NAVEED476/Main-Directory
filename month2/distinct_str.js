function test(n,target,array){
    n=array.length
    var left=0;
    var right=1;
   
    

    // while(left<right){
        
    //     sum+=array[left]+array[right]
    //     if(sum==target){
    //         return 1
    //     }
        
    // right++
        
    // }
    // left++
   // return -1
   for(var i=0;i<n;i++){

       for(var j=1;j<n-1;j++){
        if(array[i]+array[j]==target){
            return 1
        }
       }
   }return -1

     
}



function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test_case=Number(input[0])
    var line=1
    for(var i=0;i<test_case;i++){
        var [size,k]=input[line++].trim().split(" ").map(Number)
        var matrix=input[line++].trim().split(" ").map(Number)
        console.log(test(size,k,matrix))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`10
    6 16
    2 0 2 5 -3 0
    9 3
    6 -6 -7 8 -4 8 -6 1 4
    1 -1
    1
    3 -3
    -2 3 0
    5 -9
    4 5 0 -3 3
    7 4
    1 2 1 6 -2 7 0
    7 -10
    2 -5 6 -1 5 -1 6
    4 -12
    1 -2 -3 -4
    6 0
    5 -6 5 5 3 0
    2 3
    -2 -2
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