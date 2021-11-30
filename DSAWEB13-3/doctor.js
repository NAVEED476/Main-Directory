function doctor(arr1,arr2){
    var q=[]

    for(var i=0;i<arr1.length;i++){
        if(arr1[i]!=arr2[i]){
            arr1.shift(q.push)
        }
        q.push(arr1[i])
    }
    return q
}










function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var len=+input[0]
    var arr1=input[1].trim().split(" ").map(Number)
    var arr2=input[2].trim().split(" ").map(Number)

   console.log(doctor(arr1,arr2))

   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`4
    1 2 3 4
    4 2 3 1`);
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