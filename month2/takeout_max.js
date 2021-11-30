function takeout_max(arr,s,k) {
    var s=arr.length
    var sum=0;
    var max=0;
    for(var i=0;i<k;i++){
        sum+=arr[i]
    }
    if(max<sum){
        max=sum
    }
    for(var i=k;i<s;i++){
        
        sum+=arr[i]
        sum-=arr[i-k]
        if(max<sum){
          max=sum
      }
    }
    return max
    
}

// var array=[-1 ,-1, -2, 1, -2, 4, 1, 9, 3, 9]
// var s1=array.length
// var k1=3
// console.log(takeout_max(array,s1,k1))
function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var [size,target]=input[0].trim().split(" ").map(Number)
    var array=input[1].trim().split(" ").map(Number)
    console.log(takeout_max(array,size,target))
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`100 5
    56 96 57 87 65 82 2 74 60 81 66 84 89 28 78 62 100 58 96 29 41 43 92 37 38 38 58 81 64 -8 9 13 16 16 54 37 32 5 84 -1 30 91 24 31 85 71 13 3 56 49 91 74 28 8 85 81 78 13 69 89 72 33 99 14 71 84 26 89 3 70 33 75 88 93 12 96 35 15 6 25 74 -4 11 68 73 59 41 16 26 42 84 81 34 50 8 -4 16 20 71 23`);
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