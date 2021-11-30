

function modulo(len,k,arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<len-i-1;j++){
            if(arr[j]%k>arr[j+1]%k){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }console.log(arr.join(" "))
}









function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var [len,k]=input[0].trim().split(" ").map(Number)
    var arr=input[1].trim().split(" ").map(Number)
    modulo(len,k,arr)
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5 6
    12 18 17 65 46`);
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