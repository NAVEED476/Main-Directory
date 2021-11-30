// function multiplication(one, two, three, four, five) {
//     var result=one+ two+ three+ four+ five
//     return result
    
// }
// function runProgram(input) {
//     // Write code here
//     input=input.trim().split(" ").map(Number)
//     var [one, two, three, four, five, six]=input
//     console.log(multiplication(one, two, three, four, five, six))
   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`1 2 3 4 5 `);
//   } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function (input) {
//       read += input;
//     });
//     process.stdin.on("end", function () {
//       read = read.replace(/\n$/, "");
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//     });
//     process.on("SIGINT", function () {
//       read = read.replace(/\n$/, "");
//       runProgram(read);
//       process.exit(0) ;
//     });
//   }



function evenele(arr,n) {
    var n=arr.length
    for(var i=0;i<n;i++){
        if(arr[i]%2==0){
            console.log(arr[i])
        }
    }
    
}
function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var in1=+input[0]
    //console.log(in1)
    var in2=input[1].trim().split(" ").map(Number)
    evenele(in2,in1)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`5
    1 2 3 4 5`);
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


function print(size,str){
    var size=str.length
    for(var i=0;i<size;i++){
        console.log(str[i])
    }
}

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var in1=+input[0]
    var in2=input[1].trim()
    print(in1,in2)
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`6
    ankush`);
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