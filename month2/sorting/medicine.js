// function med(n,k,arr){
//     for(var i=0;i<n;i++){
//         for(var j=1;j<=n;j++){
//             if(arr[i]+arr[j]===k){
//                 return "Possible"
//             }
//         }
//     }return "Impossible"
// }




function med(arr,tar){
    var p1=0;
    var p2=1;
    var flag="impossible"
    while(p1<arr.length-1 && p2<arr.length){
        if(arr[p1]+arr[p2]==tar){
            flag="possible"
        }else if(arr[p1]+arr[p2]>tar){
            p2--;
        }else{
            
           p1--
        }
    }console.log(flag)
}












function runProgram(input) {
    // Write code here


    input=input.split("\n")

    var test=Number(input[0])

    line=1

    for(var i=0;i<test;i++){
        var [len,k]=input[line++].trim().split(" ").map(Number)
        var arr=input[line++].trim().split(" ").map(Number)

        console.log(med(len,k,arr))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`2
    5 7
    1 2 3 4 5
    5 12
    1 2 3 4 5`);
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