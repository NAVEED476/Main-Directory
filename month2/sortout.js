function sortout(size,array){
    var arr=[]
    for(var i=0;i<size;i++){
        arr.push(i)
    }
    for(var i=0;i<size;i++){
        for(var j=0;j<size-i-1;j++){
            if(array[j]>array[j+1]){
                var temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp

                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    console.log(arr.join(" "))
}




function runProgram(input) {
    input=input.split("\n")
    var test=Number(input[0])
    var array=input[1].trim().split(" ").map(Number)
    // Write code here
    sortout(test,array)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    4 5 3 7 1`);
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