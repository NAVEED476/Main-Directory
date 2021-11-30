function unique(arr){
    
    var uni=[]
    for(var i=0;i<arr.length;i++){
        var count=0
        for(var j=0;j<uni.length;j++){
            if(arr[i]==uni[j]){
                count++
            }
        }
        if(count==0){
            uni.push(arr[i])
        }
    }
    
    return(uni.join(""))
}
var a="nnnaaa"
unique(a)




function stringcheck(a,b,c,d){
    var str1=unique(b)
    var str2=unique(d)
    var left=0
    var right=0
    while(left<a-1 && right<c-1){
        if(str1[left]!=str2[right]){
            return "No"
        }
    }
    return "Yes"
    
}





function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var a=+input[0]
    var b=input[1].trim()
    var c=+input[2]
    var d=input[3].trim()
    console.log(a,b,c,d)
    console.log(stringcheck(a,b,c,d))
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    aabbc
    4
    abcd`);
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