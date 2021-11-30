

function palindrome(input){
  if(input.length==1){
    return "Yes"
  }
   else{
    var left=0;
    var right=input.length-1
    while(left<right){
      
       
        if(input[left]!=input[right]){
          return "No"
        }
        else{
          left++;
          right--;
        }
      
        }
      return "Yes"
   }
   
    
}       







function runProgram(input) {
    // Write code here
    input=input
    console.log(palindrome(input))
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`12`);
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