// function such(len,k,array) {
//     for(var i=0;i<len-1;i++){
//         for(var j=0;j<len;j++){
//             if(i!=j){
//                 if(array[i]-array[j]==k || array[i]-array[j]==-k){
//                     return "Yes"
//                 }
//             }
//         }
//     }return "No"    
// }


// function such_pairs(n,k,array){
//   n=array.length
//   var left=0;
//   var right=n-1;
//   while(left<right){
    
    
//       var sum=array[right]-array[left]
//       if(sum==k){
//         return "Yes"
//       }
//       else if(sum<k){
//         right--;
//       }
//       else if(sum>k){
//         left++
//       }
    
   
    
//   }
//   return "No"
// }



function such_pairs(n,k,array) {
    var n=array.length
    array=array.sort((a,b) => a-b)
    var left=0;
    var right=0;
    for(var i=0;i<n;i++) {
        var temp=array[right]-array[left]
        if(temp==k && left!=right){
            return "Yes"
        }else if(temp<k){
            right++;
        }else{
            left++;
        }
    }
    return "No"
}





function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var testcases=Number(input[0])
    var line=1
    for(var i=0;i<testcases;i++){
        var [len,k]=input[line++].trim().split(" ").map(Number)
        var array=input[line++].trim().split(" ").map(Number)
        //console.log(such(len,k,array))
        console.log(such_pairs(len,k,array))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    1 5
    3
    6 0
    -8 -7 5 6 6 9
    1 4
    -3
    2 6
    -2 1
    3 3
    -5 -3 0
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