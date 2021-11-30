
// function max(arr1){
//     var maximum=arr1[0]
//     for(var i=0;i<arr1.length;i++){
//         if(maximum<arr1[i]){
//             maximum=arr1[i]
//         }
//     }
//     return maximum
// }

const { count } = require("console");


// function slide(len,x,k,arr){
//     var left=0;
//     var right=x-1;
//     var mat=[]
//     var count=0
//     while(left<len && right<len){
//         for(var i=left;i<=right;i++){
//             mat.push(arr[i])
//         }
//         var m=max(mat)
//         //console.log(m)
//         if(m<=k){
//             count++
//         }
        
        
      

//         mat=[]
        
//         left++
//         right++
        
//     } 
//     console.log(count)
// }





 // This function checks if there is an element greater than K, in the given subarray
//  check(arr[],start,end,x){
//     for (i=start;i<=end;i++) if (arr[i] > x) return false;
//     return true;

//     function XSubarrays(array, K, X){
//         left = 0;
//         right = x - 1;
//         count = 0;
//         while(left < arr.length && right < arr.length){
//             if (check(arr,left,right,k)) count++;
//             left++;
//             right++;
//         }
//         return count;
//     }





function check(arr,start,end,x){
    for(i=start;i<=end;i++){
        if(arr[i]>x){
            return false
        }
    }
    return true
}

function XSubarrays(len,array,k,x){
    var left=0
    var right=x-1;
    var count=0
    while(left<len && right<len){
        if(check(array,left,right,k)){
            count++
        }
        left++;
        right++
    }
    return count
    
}













function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var test=+input[0]
    var line=1
    for(var i=0;i<test;i++){
        var [len,k,x]=input[line++].trim().split(" ").map(Number)
        var arr=input[line++].trim().split(" ").map(Number)
        // console.log(len, k,x)
        // console.log(arr)
        console.log(XSubarrays(len,arr,k,x))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`1
    5 3 2
    1 3 2 5 1`);
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