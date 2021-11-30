function popup(n,array){
    var left=1;
    for(var i=0;i<n;i++){
        if(array[left-1]<=array[i]){
            array[left]=array[i]
            left++
        }
    }

    for(let i=0;i<left;i++){
        console.log(array[i])
    }
    
}


function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var num=Number(input[0])
    var array=input[0].trim().split(" ").map(Number)
    popup(num,array)

   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`10
    1 2 4 3 5 7 8 6 9 10`);
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