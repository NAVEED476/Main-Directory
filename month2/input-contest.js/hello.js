function hello(str){
    var s="Hello"+str
}
function runProgram(input){
    hello(input)
 
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "prateek";
process.stdin.on("data", function (input) {
   read += input;
});
process.stdin.on("end", function () {
   read = read.replace(/\n$/,"")
  runProgram(read);
});

process.on("SIGINT", function () {
   read = read.replace(/\n$/,"")
   runProgram(read);
   process.exit(0);
});