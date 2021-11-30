function unique(arr){
  var uni=[]
  for(var i=0;i<arr.length;i++){
    var c=0;
    for(var j=0;j<uni.length;j++){
      if(arr[i]==uni[j]){
        c++
      }
    }
    if(c==0){
      uni.push(arr[i])
    }
  }return uni
}

function max(n,arr){


      arr=arr.sort()

      var k=unique(arr)
      var mat1=[]
      var mat2=[]
      for(var i=0;i<k.length/2;i++){
        mat1.push(k[i])
      }
      for(var j=k.length/2;j<k.length;j++){
        mat2.push(k[j])
      }


      if(mat1.length%3!=0){
        console.log("Not Possible")
      }else{
        console.log(mat1.join(" ").trim())
      }

      if(mat2.length%3!=0){
        console.log("Not Possible")
      }else{
        console.log(mat2.join(" ").trim())
      }

      
}






function runProgram(input) {
    // Write code here\
    input=input.split("\n")
    var len=Number(input[0])

    var arr=input[1].trim().split(" ").map(Number)

    max(len, arr)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`8
    1 2 3 4 2 1 6 5`);
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