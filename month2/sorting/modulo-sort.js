// function modulo(n,k,array) {
//     var mat=[]
//     for(var i=0;i<n;i++){
//         mat.push(array[i]%k)

//     }
// }

var arr=[12,18,17,65,46]
var k=6



function sorting(n,k,arr) {
    for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length;j++){
            if((arr[j]%k)>(arr[j+1]%k)){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }return (arr.join(" "))
}
//console.log(sorting(5,6,arr))




function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var [len,k]=input[0].trim().split(" ").map(Number)
    var array=input[1].trim().split(" ").map(Number)
    console.log(sorting(len,k,array))
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5 6
    12 18 17 65 46`);
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