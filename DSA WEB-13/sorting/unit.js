// function twosum(length,target,arr){
//     var left=0
//     var right=arr.length-1
//     var flag="No"

//     while(left<right){
//         if(arr[left]+arr[right]<target){
//             left++
//         }
//         else if(arr[left]+arr[right]>target){
//             right--
//         }
//         else{
//             flag="Yes"
//             break;
//         }
//     }
//     return flag
// }













// function runProgram(input) {
//     // Write code here

//     input=input.split("\n")
//     var test=+input[0]
//     var line=1
//     for(var i=0;i<test;i++){
//         var [length,target]=input[line++].trim().split(" ").map(Number)
//         var arr=input[line++].trim().split(" ").map(Number)
//         console.log(twosum(length,target,arr))
//     }
   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`2
//     5 31
//     10 11 13 17 21
//     5 44
//     10 11 13 17 21`);
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




function check(length, str) {
    var mat=[]
  var details = {
      "p":0,
      "i":0,
      "n":0,
      "g":0
  }
  for (var i = 0;i< str.length; i++) {
    var char = str[i]
    //console.log(char)

    // if (details[char] === undefined) {
    //   details[char] = 1
    // }
    // else {
    //   details[char]++
    // }
    console.log(details[char])
    if(details[str[i]]){
        details[str[i]]++

        console.log("ji")
    }
  }

//   for (k in details) {
//     if(k=="p"||k=="i"||k=="n"||k=="g"){
//         mat.push(details[k])
//     }
//   }



  //console.log(mat)
  var min=details["p"]

  for(var k in details){
    if(details[k]<min){
        min=details[k]
    }


  }


  return min

// if(mat.length==4){

//   var small=mat[0]
//   for(var i=0;i<mat.length;i++){
//       if(small>mat[i]){
//           small=mat[i]
//       }
      
//   }console.log(small)
// }
// else{
//     return
// }
  
 }



// var str="ping"
// var len=str.length
// check(len,str)


function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=+input[0]
    var line=1
    for(var i=0;i<len;i++){
        var length=+input[line++]
        var str=input[line++]
        console.log(check(length,str))
    }
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    7
    ping
    8
    igpnngpi`);
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



// function sne(len,arr){
//     var left=0
//     var right=1;
//     var count=0
//     while(left<len-1 && right<len){
//         if(arr[left]>arr[right]){
//             count++
//         }left++;
//          right++
//     }
//     return count+1
// }







//   function runProgram(input) {
//       // Write code here
//       input=input.split("\n")
//       var len=+input[0]
//       var arr=input[1].trim().split(" ").map(Number)
//       console.log(sne(len,arr))
     
//     }
//     if (process.env.USERNAME === "naveed") {
//       runProgram(`8
//       39 27 11 4 24 32 32 1`);
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



// var arr= [39, 27, 11, 4, 24, 32, 32, 1]
// var stack=[]

// for(var i=0;i<arr.length;i++){
//     var k=arr[i]
// }
// stack.push(arr[k])
// for(var j=0;j<stack.length;j++){
//     if(stack[j]>k){
//         stack.push(k)
//     }
// }
// console.log(stack.length)