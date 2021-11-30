function runProgram(input) {
  input=input[0].split(" ").map(Number)
  input1=input[1].split(" ").map(Number)
  console.log(input1)
  console.log(input)
    

  }
  function int(arr,target){
    //var count=0
    var array=[]
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<=arr.length;j++){
            var count=0
            var sum=0
            
            for(var k=i;k<j;k++){
                count=count+arr[k]
                
                
            }
            array.push(count)
           
            
        }
       
        
    }
    //console.log(array)
    var found=0
    for(var n=0;n<array.length;n++) {
        if(array[n]==target){
            found++
        }        
    }console.log(found)

}
  
     

  
  
  
  
  if (process.env.USER === "naveed") {
    runProgram(`5 9
    3 0 6 2 7`);
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
      process.exit(0);
    });
  }
  
  
  
  
  
  
  
  var arr=[1,3,4,2,5]
  var count=0
  for(var i=0;i<arr.length;i++){
      if(arr[i]==2){
        count+=arr[i+1]
      }
  }