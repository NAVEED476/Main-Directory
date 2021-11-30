

  function equal(n,arr){

      for(var i=0;i<n;i++){
          var sum1=0
          var sum2=0
          for(var j=0;j<i;j++){
              sum1+=arr[j]
          //console.log(sum1)
          }

          for(var k=i+1;k<n;k++){
              sum2+=arr[k]
          
          }

          
          if(sum1==sum2){
              return i+1
          }
          



        
      }
      return -1
      
      
  }

  function runProgram(input) {
      // Write code here
      input=input.split("\n")
      var len=Number(input[0])

      var arr=input[1].trim( ).split(" ").map(Number)

      console.log(equal(len,arr))
    }
    if (process.env.USERNAME === "naveed") {
      runProgram(`5
      3 3 5 1 1`);
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