// function middle(size,arr){
//     for(var i=1;i<=size-1;i++){
//         if(left(i,arr)&&right(i,arr)){
//             console.log(arr[i])
//             return
//         }
//     }console.log(-1)
// }


// function left(i,arr){
//     var flag=false;
//     for(var j=0;j<i-1;j++){
//         if(arr[j]>arr[i]){
//             flag=false
//             break;
//         }else{
//             flag=true;
//         }
//     }return flag
// }
// function right(i,arr){
//     var flag=false;
//     for(var j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[i]){
//             flag=false;
//             break
//         }else{
//             flag=true
//         }
//     }return flag
// }



// function runProgram(input) {
//     // Write code here
//     input=input.split("\n")
//     var input1=+input[0]
//     var input2=input[1].trim().split(" ").map(Number)
//     console.log(input1,input2)
//     middle(input1,input2)
   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`5
//     4 3 6 7 8`);
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



function middle(size ,arr){
    for(var i=1;i<size-1;i++){
        
    }
}

function left(i,arr){
    var flag=false
    for(var j=0;j<i-1;i++){
        if(arr[j]>arr[i]){
            flag= false;
        }else{
            flag=true
        }
    }return flag
}