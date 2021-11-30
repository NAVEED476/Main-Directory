
// function runProgram(input) {
//     // Write code here
//     console.log(palindromenum(input))
   
//   }
//   function palindromenum(num){
//     if(num.length==1){
//         return "Yes"
//     }else{
//         var left=0;
//         var right=num.length-1
//         while(left<right){
//             for(var i=left;i<=right-1;i++){
//                 if(num[left]!=num[right]){
//                     return "No"
//                 }else{
//                     left++;
//                     right--;
//                 }
//             }return "Yes"
            
//         }
//     }
// }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`1221`);
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



// function runProgram(input) {
//     // Write code here
//     input=input.split("\n")
//     var one=input[0].trim().split(" ").map(Number)
//     var two=input[1].trim().split(" ").map(Number)
//    console.log(one,two)
//    //subarray(one,two)
//   }

//   if (process.env.USERNAME === "naveed") {
//     runProgram(`4 
//     2 3 4 6`);
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






// Normal approach

// function finding_sum(n,k,arr){
//     var n=arr.length;
//     var count=0
//         for(var i=0;i<n;i++){
           
//             var sum=0
//             for(var j=0;j<n;j++){
//                 sum=arr[i]+arr[j+1]
//                 if(sum==k){
//                     count++
//                 }
//             }
            
//         }
//         if (count>0){
//             return 1
//         }else{
//             return -1
//         }

// }
// var array=[ 5, -6, 7, 6, 0, 3, -4 ,8]
// var N=array.length
// var target=2
// console.log(finding_sum(N,target,array))


// function finding_sum(n,k,array){
//     var left=0;
//     var right=n;
//     var sum=0
//     while(left<right){
        
//         sum=array[left]+array[right]
//         if(sum==k){
//             return 1
//         }else if(sum>k){
//             right--;
//         }else{
//             left++;
//         }
//     }return -1
// }


//   function runProgram(input) {
//       // Write code here
//       input=input.split("\n")
//       var input1=+input[0]
//       var line=1
//       for(var i=0;i<input1;i++){
//           var [N,K]=input[line++].trim().split(" ").map(Number)
//           var array=input[line++].trim().split(" ").map(Number)
//           console.log(finding_sum(N,K,array))
//       }
     
//     }
//     if (process.env.USERNAME === "naveed") {
//       runProgram(`10
//       3 -9
//       -1 3 -1
//       10 -13
//       -7 -6 4 10 -5 0 -3 1 -6 5
//       4 -9
//       -2 2 0 -4
//       2 3
//       0 0
//       8 2
//       5 -6 7 6 0 3 -4 8
//       1 -7
//       0
//       8 -6
//       4 7 4 -1 5 4 -6 -8
//       6 4
//       6 -1 -5 -5 2 -5
//       4 -4
//       0 -1 3 -2
//       1 3
//       -1`);
//     } else {
//       process.stdin.resume();
//       process.stdin.setEncoding("ascii");
//       let read = "";
//       process.stdin.on("data", function (input) {
//         read += input;
//       });
//       process.stdin.on("end", function () {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//       });
//       process.on("SIGINT", function () {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0) ;
//       });
//     }





//   sub array sum

function subarray(size,k,arr){
    var sum=0
    var left=-1;
    var right=0;
    for(var i=0;i<size;i++){
        if(arr[i]==k){
            return "Yes"
        }
        if(arr[i]%k==0){
            if(left==-1){
                left=i
                i=right
            }
        }sum+=arr[i]
        if(left==-1){
            return "No"
        }if(sum%k!=0){
            return "Yes"
        }
    }
}
var target=2

var array=[1, 2, 1]
var size=array.length
//console.log(subarray(size,array,target))

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcases=+input[0]
    var line=1
   for(var i=0;i<testcases;i++){
    var [size1,k1]=input[line++].trim().split(" ").map(Number)
    //console.log(testcases,size1,k1)
    var mat=input[line++].trim().split(" ").map(Number)
    //console.log(mat)
    console.log(subarray(size1,k1,mat))
   }
 
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`10
    7 14
    3 5 4 2 2 1 1
    8 14
    1 7 4 3 2 1 5 6
    2 1
    3 1
    7 1
    1 1 1 1 1 1 1
    2 1
    1 1
    10 2
    2 6 3 3 4 1 1 5 2 4
    3 6
    9 6 4
    7 6
    3 9 6 1 7 8 10
    1 6
    3
    1 1
    3
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