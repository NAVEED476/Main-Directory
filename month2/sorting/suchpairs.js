function such(len,k,array) {
    for(var i=0;i<len-1;i++){
        for(var j=0;j<len;j++){
            if(i!=j){
                if(array[i]-array[j]==k || array[i]-array[j]==-k){
                    return "Yes"
                }
            }
        }
    }return "No"    
}


function such_pairs(n,k,array){
  n=array.length
  var left=0;
  var right=n-1;
  while(left<n && right<n){
    
    
      var diff=array[left]-array[right]
      if(diff==k || diff==-k){
        return "Yes"
      }
      else if(diff>k){
        right--;
      }
      else if(diff<k){
        left++
      }
    
   
    
  }
  return "No"
}







function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var testcases=Number(input[0])
    var line=1
    for(var i=0;i<testcases;i++){
        var [len,k]=input[line++].trim().split(" ").map(Number)
        var array=input[line++].trim().split(" ").map(Number)
        //console.log(such(len,k,array))
        console.log(such_pairs(len,k,array))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`9
    7 9
    -10 -7 -6 0 1 5 9
    6 7
    -9 -8 -3 1 5 8
    5 5
    -10 2 4 8 9
    6 1
    -9 -9 -4 -2 5 5
    4 8
    -9 1 3 7
    1 1
    -6
    5 2
    -10 -5 -3 -1 1
    6 2
    -10 -8 -5 -4 0 4
    9 5
    -10 -9 -6 -5 1 4 5 7 8
     `);
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