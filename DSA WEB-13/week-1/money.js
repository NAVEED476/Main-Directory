function amount(n,arr,target){

    var sum=0
    for(var i=0;i<n;i++){
        sum+=arr[i]
    }//console.log(sum)

    if(sum==target){
        console.log("Neutral")
    }
    else if(sum>target){
        console.log("Debt")
    }else{
        console.log("Save")
    }
}








function runProgram(input) {
    // Write code here


    input=input.trim().split("\n")
    var l=Number(input[0])
    var arr=input[1].trim().split(" ").map(Number)
    var tar=Number(input[2])


    console.log(l,arr,tar)
    amount(l,arr,tar)

   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    1 2 3 4 5
    16`);
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