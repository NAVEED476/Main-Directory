// function division(left,right,k)
// {
//     var count=0
//     for(var i=left;i<=right;i++){
//       if(i%k==0){
//         count++
//       }
//     }console.log(count)
   
// }

// function runProgram(input) {
//     // Write code here
//     input=input.split(" ").map(Number)
//     var [left,right,k]=input
//     division(left,right,k)
  
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`1 10 1`);
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





// function missing(arr){
//     var count=0
//     for(var i=1;i<=arr.length;i++){
//         count+=arr[i]
        
//     }
//     var sum=0
//     console.log(count)
//     for(var i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     var result=count-sum
//     console.log(result)
// }
// function runProgram(input) {
//     // Write code here
//     input=input.split(" ").map(Number)
//     console.log(input)
//     missing(input)

   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`4 5 1 3`);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = " ";
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


// function fact(N,arr){
    
//     for(var i=0;i<N;i++){
//         if(arr[N-1]==2){
//             console.log("-1")
//             break;
//         }else{
//             if(arr[i]==2){
//             console.log(arr[i+1])
//             }
//         }
//     }
// }

// function runProgram(input) {
//     // Write code here
//     input=input.split("\n");
//     var in1=+input[0]
//     var in2=input[1].trim().split(" ").map(Number)
//     // console.log(input)
//     // console.log(in1,in2)
//     fact(in1,in2)
   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`5
//     3 4 1 0 2`);
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



function rev(string){
    var out=" "
    for(var i=(Math.floor(string.length/2))-1;i>=0;i--){
        out+=string[i]
    
    }for(var i=string.length-1;i>=Math.floor(string.length/2)-1;i--){
        out+=string[i]
    }console.log(out.trim())
}
// var str="jsdfnsgnlewnl"
// console.log(str.length)
// rev(str)
//snfdsjglnweln
function runProgram(input) {
    // Write code here
    rev(input)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`jsdfnsgnlewnl`);
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