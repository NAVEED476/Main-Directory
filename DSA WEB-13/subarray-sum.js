// function subarray(n,k,arr){


    
//     var left=0
//     var right=1
//     var sum=0
//     var count=0
    
// }

var subarraysDivByK = function(A, K) {
    let state = {0:1},count = 0, sum = 0;
    for(let i=0;i<A.length;i++){
        sum += A[i];
        let mod = sum % K < 0 ? (sum % K) + K : sum % K;
        if(state[mod]) count+= state[mod];
        state[mod] = ++state[mod] || 1;
    }
    return count;
};

var arr=[2,4,3,6]
var k=3
console.log(subarraysDivByK(arr,k))





function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var [len, k]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    //console.log(subarraysDivByK(arr,k))

   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`4 3
    2 3 4 6`);
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


// function sub_array(n,k,array){
//     var n=array.length
//     var left=-1;
//     var right=0
//     var sum=0
//     for(var i=0;i<n;i++){
//         if(array[i]%k!=0){
//             if(left==-1){
//                 left=i
                
//             }else{
//                 right=i
//             }
            
            
//         }sum+=array[i]
//     }
//     if(sum%k!=0){
//         console.log(1) 
//     }if(left==-1){
//        console.log(0) 
//     }
// }




// function runProgram(input) {
//     // Write code here
//     input=input.trim().split("\n")
//     //console.log(input)
//     var [size,k]=input[0].trim().split(" ").map(Number)
//     //console.log(size,k)
//     var matrix=input[1].trim().split(" ").map(Number)
//     //console.log(matrix)
//     sub_array(size,k,matrix)
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`
//     4 3
// 2 3 4 6`);
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