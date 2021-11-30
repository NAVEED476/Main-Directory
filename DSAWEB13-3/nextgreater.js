


// function nge(arr){
//   arr=arr.reverse()
//     var stack=[]
//     var ans=[]

//     for(var i=0;i<arr.length;i++){
//        while(stack.length!==0 && arr[i]>stack[stack.length-1]){
//          stack.pop()
//        }
//        if(stack.length==0){
//          ans.push(-1)
//        }
//        else{
//          ans.push(stack[stack.length-1])

//        }

//        stack.push(arr[i])  
        
//     }
//     return ans.reverse().join(" ")
// }







// function runProgram(input) {
//     // Write code here
//     input=input.split("\n")
//     var testcases=+input[0]
//     var line=1
//     for(var i=0;i<testcases;i++){
//         var length=+input[line++]
//         var arr=input[line++].trim().split(" ").map(Number)
//         console.log(nge(arr))
//     }
   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`1
//     4
//     1 3 2 4`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }



// //var arr=[1,20,3,4,5,32]a




function nge(len,arr){
  var stack=[]

  var ans=[]
  var n=len
  
  while(n--){
    while(stack.length!=0 && arr[n]>=stack[stack.length-1]){
      stack.pop()
    }
    if(stack.length==0){
      ans.push(-1)
    }
    else{
      ans.push(stack[stack.length-1])
    }
    stack.push(arr[n])
  }
 
  
  return ans.reverse().join(" ")
}





function runProgram(input) {
    // Write code here\

    input=input.split("\n")
    var testcases=+input[0]
    var line=1
    for(var i=0;i<testcases;i++){
      var len=+input[line++]
      var arr=input[line++].trim().split(" ").map(Number)

      console.log(nge(len,arr))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    4
    1 3 2 4`);
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