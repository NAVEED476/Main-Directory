

function selection(n,arr){
    n=arr.length
    //var mat=[]
    for(var i=0;i<n;i++){    //function for sort in selection 
        var min=i
        for(var j=i+1;j<n;j++){
            
             if(arr[min]  > arr[j]){
                min = j
               
             }
        }if(min!=i){
            var temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    console.log(arr.join(" "))
}

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var line1=Number(input[0])
    var line2=input[1].trim().split(" ").map(Number)
    selection(line1,line2)
   
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














//selection(arr)







// console.log(reversearray(arr,0,3))




// console.log(swap(12,1))