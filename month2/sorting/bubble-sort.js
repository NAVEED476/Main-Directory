function bubble(n,arr){
    var n=arr.length;
    for(var i=0;i<n-1;i++){
        var count=0
        for(var j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                count++
            }
        }
    }console.log(arr.join(" "))
}

//var array=[1,4,2,3,1]
//bubble(5,array)
function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcase=Number(input[0])
    var array=input[1].trim().split(" ").map(Number)
    bubble(testcase,array)
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    3 5 0 9 8`);
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