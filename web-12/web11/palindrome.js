// var string="naveed"
// var str=""
// for(var i=0;i<string.length;i++){
//     //console.log(string[i])
//     if(i%2!=0){
//         str+=string[i]
//     }
// }console.log(str)

// var reversed =str.split("").reverse().join("")
// console.log(reversed)
// if(reversed==str){
//     console.log("Yes")

// }else{
//     console.log("No")
// }

//=======================================================
//    odd palindrome




// function runProgram(input) {
//     //input=Number(input)
//     palindrome(input)
//   }
//   function palindrome(n,input){
//       var store=""
//       for(var i=0;i<n;i++){
//           if(i%2!=0){
//               store+=input[i]
//           }
//       }
//       var reversed=store.split("").reverse().join("")
//       console.log(reversed)
//       if(reversed==store){
//           console.log("Yes")
//       }
//       else{
//           console.log("No")
//       }
//   }
  
  
//   if (process.env.USER === "naveed") {
//     runProgram(`7
//     naveed`);
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
//       process.exit(0);
//     });
//   }

  //=================================================

// even palindrome


  // function runProgram(input) {
  //   evenpalindrome(input)

  // }
  // function evenpalindrome(n,input){
  //     var store=""
  //     for(var i=0;i<n;i++){
  //         if(i%2==0){
  //             store+=input[i]
  //         }
  //     }
  //     var rev=store.split("").reverse().join("")
  //     if(rev==store){
  //         console.log("yes")
  //     }else{
  //         console.log("no")
  //     }
  // }
  
  
  // if (process.env.USER === "naveed") {
  //   runProgram(`6
  //   abcdcfa`);
  // } else {
  //   process.stdin.resume();
  //   process.stdin.setEncoding("ascii");
  //   let read = "";
  //   process.stdin.on("data", function (input) {
  //     read += input;
  //   });
  //   process.stdin.on("end", function () {
  //     read = read.replace(/\n$/, "");
  //     read = read.replace(/\n$/, "");
  //     runProgram(read);
  //   });
  //   process.on("SIGINT", function () {
  //     read = read.replace(/\n$/, "");
  //     runProgram(read);
  //     process.exit(0);
  //   });
  // }
  
  
  //      half palindrome

  //=====
  function halfpalinfrome(input){
    var store=input.length/2
    console.log(input.length/2)
  }
  var i="naveed"
  halfpalinfrome(i)
  
  //===============================================================


  // var string="amman"
  // var i=0;
  // var j=string.length-1
  // while(i<j){
  //   if(string.charAt(i)!=string.charAt(j)){
  //     console.log("false") 
      
  //   }else{
  //     i++
  //     j--
  //   }
  //   console.log ("true")
  
    
   
  // }

  function palin(input){
    var i=0
    var j=input.length-1
    while(i<j){
      if(input.charAt(i)!=input.charAt(j)){
        return false
      }else{
        i++
        j--
        return true
      }
    }
  }
  console.log(palin("mynmae js"))
  
  
  