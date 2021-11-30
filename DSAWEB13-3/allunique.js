function unique(input){
    // var left=0
    // var right=input.length-1
    // var flag="Unique"
    // while(left<right){
    //     if(input.length==1){
    //         flag="Unique"
    //     }
    //     else if(input[left]==input[right]){
    //         flag="No"
    //     }
    //     left++;
    //     right--
    // }return flag


    var str=input.trim()
    var countarr=new Array(256)
    for(var i=0;i<countarr.length;i++){
        countarr[i]=0;


    }
    for(var i=0;i<str.length;i++){
        countarr[str.charCodeAt(i)]++
    }
    let flag="Unique"
    for(var i=0;i<countarr.length;i++){
        if(countarr[i]>1){
            flag="No"
        }
    }
    return flag
}














function runProgram(input) {
    // Write code here
    console.log(unique(input))
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`masai`);
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