// function neigh(len,arr){
//     var left=0
//     var right=left+1
//     var count=[]
//     while(left<right && right<=len){
//         if(arr[left]<arr[right]){
//             count.push(arr[right])
            
//         }
//         left++;
//         right++
//     }console.log(count)
// }



// // function neigh(len,arr){
// //     var count=[]
// //     for(var i=0;i<len;i++){
        
// //         for(var j=i+1;j<len;j++){
// //             if(arr[i]<arr[j]){
// //                 count.push(arr[j])
// //             }
// //         }
// //     }console.log(count)
// // }











function neigh(len,arr){
    let count=0;
    for(var i=0;i<=len;i++){
        if(i===0){
            if(arr[i]>arr[i+1]){
                count++
            }
        }else if(i==len-1){
            if(arr[i]<arr[i-1]){
                count++;
            }
        }else{
            if(arr[i]>arr[i-1] && arr[i-1]>arr[i+1]){
                count++;
            }
        }
    }
    console.log(count)
}

function runProgram(input) {
    // Write code here

    input=input.split("\n")

    var test=Number(input[0])

    line=1

    for(var i=0;i<test;i++){
        var len=Number(line++)
        var arr=input[line++].trim().split(" ").map(Number)

        neigh(len,arr)
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    2
    1 2
    10
    884 729 768 201 266 494 597 328 705 287`);
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