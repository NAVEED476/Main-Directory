function sub_array(n,k,array){
    var n=array.length
    var left=-1;
    var right=0
    var sum=0
    for(var i=0;i<n;i++){
        if(array[i]%k!=0){
            if(left==-1){
                left=i
                
            }else{
                right=i
            }
            
            
        }sum+=array[i]
    }
    if(sum%k!=0){
        console.log(1) 
    }if(left==-1){
       console.log(0) 
    }
}
var arr=[2,3,4,6]
var s=arr.length
var k1=3
sub_array(s,k1,arr)




function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    console.log(input)
    var [size,k]=input[0].trim().split(" ").map(Number)
    console.log(size,k)
    var matrix=input[1].trim().split(" ").map(Number)
    console.log(matrix)
    sub_array(size,k,matrix)
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`
    4 3
2 3 4 6`);
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