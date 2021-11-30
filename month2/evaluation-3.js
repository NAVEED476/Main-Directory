
function same(size,array1,array2){
  var count=0
 var left=0;
 var right=array2.length-1;
 while(left<right){
   if(array1[left]===array2[right]){
     
     count++
     
   }
   left++;
     right--
 }
 
 console.log(count)
  
 
}

function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    //console.log(input)
    var testcase=Number(input[0])
    var line=1;
    for(var i=0;i<testcase;i++){
        var in1=Number(input[line++])
        var in2=input[line++].trim().split(" ").map(Number)
        var in3=input[line++].trim().split(" ").map(Number)
        same(in1,in2,in3)
    }
    
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    8
    1 2 3 5 8 8 9 9
    8 8 6 5 3 2 1 1
    9
    2 3 3 3 7 7 9 9 9
    9 9 9 8 6 5 4 3 1
    2
    4 7
    4 2
    3
    3 7 7
    8 5 1
    4
    2 7 7 8
    9 7 6 3
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



// function runProgram(input) {
//   // Write code here
//   input = input.trim().split("\n");
//   let arr = input[0].trim().split(" ").map(Number);
//   let arr1 = input[1].trim().split(" ").map(Number);
//   let res = [];
//   let str = ""
//   for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr1.length; j++) {
//           if (arr[i] === arr1[j]) {
//               res.push(arr[i]);
//           }
//       }
//   }
//   console.log(res);
// }
// if (process.env.USERNAME === "naveed") {
//   runProgram(`5
//   8
//   1 2 3 5 8 8 9 9
//   8 8 6 5 3 2 1 1
//   9
//   2 3 3 3 7 7 9 9 9
//   9 9 9 8 6 5 4 3 1
//   2
//   4 7
//   4 2
//   3
//   3 7 7
//   8 5 1
//   4
//   2 7 7 8
//   9 7 6 3
//   `);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function(input) {
//       read += input;
//   });
//   process.stdin.on("end", function() {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//   });
//   process.on("SIGINT", function() {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0);
//   });
// }