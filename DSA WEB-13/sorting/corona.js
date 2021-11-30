// function func(length,target,arr){
//     var left=0
//     var right=length-1
//     var flag="impossible"
//     while(left<right){
//         if(arr[left]+arr[right]<target){
//             left++
//         }
//         else if(arr[left]+arr[right]>target){
//             right--
//         }
//         else{
//             flag="possible"
//             break
//         }   
//     }return flag
// }












// function runProgram(input) {
//     // Write code here
//     var input=input.split("\n")
//     var len=+input[0]
//     var line=1
//     for(var i=0;i,i<len;i++){
//        var  [length,target]=input[line++].trim().split(" ").map(Number)
//         var arr=input[line++].trim().split(" ").map(Number)
//         console.log(func(length,target,arr))


//     }

//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`2
//     5 7
//     1 2 3 4 5
//     5 13
//     1 2 3 4 5`);
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











// function max(length, arr) {

//   var count = 0
//   if (arr.length < 3) {
//     return -1
//   }
//    else {
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//         count++
//       }
//     }
//     return count
//   }




// }

// function runProgram(input) {
//   // Write code here
//   input = input.split("\n")
//   var len = +input[0]
//   var line = 1
//   for (var i = 0; i < len; i++) {
//     var length = +input[line++]
//     var arr = input[line++].trim().split(" ").map(Number)
//     console.log(max(length, arr))
//   }
// }
// if (process.env.USERNAME === "naveed") {
//   runProgram(`2
//     2
//     1 2
//     10
//     884 729 768 201 266 494 597 328 705 287`);
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










// function sne(len,arr){
//   var left=0
//   var right=1
//   var count=[]
//   count.push(0)
//   while(left<len-1 && right<len){



//     if(arr[left]>arr[right]){


//       count.push(arr[right])
//     }
//     left++;
//     right++;
//   }
//   return count.length
// }



// function runProgram(input) {
//     // Write code here
//     input=input.split("\n")
//     var len=+input[0]
//     var arr=input[1].trim().split(" ").map(Number)
//     console.log(sne(len,arr))
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`8
//     39 27 11 4 24 32 32 1`);
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



// function check(length, str) {
//   var details = {}
//   for (var i = 0;i< str.length; i++) {
//     var char = str[i]

//     if (details[char] === undefined) {
//       details[char] = 1
//     }
//     else {
//       var prev = details[char]
//       details[char]=prev+1
//     }
//   }

//   for (k in details) {
//     return (k + "---" + details[k])
//   }
// }

// function some(len,string){
//   for(var i=0;i<string.length;i++){
//     if(string[i]=="m" || string[i]=="o" || string[i]=="u" || string[i]=="s" || string[i]=="e"){
//       console.log(check(string))
//     }
//   }
// }


const findAnagrams = (s, p) => {
  // Build a map and count characters in p
  const map = {};
  for (let c of p) {
    map[c] = ~~map[c] + 1;
  }

  let counter = p.length;
  let result = [];

  // Try to find the window in s with two pointers i, j
  for (let i = 0, j = 0; j < s.length; j++) {
    // Step 1. count the character
    if (map[s[j]]-- > 0) {
      counter--; // Found a character in t
    }

    // Step 2. condition matched (the current window contains all the characters in p)
    while (counter === 0) {
      if (j - i + 1 === p.length) {
        result.push(i);
      }

      if (map[s[i++]]++ === 0) {
        counter++; // Make it invalid
      }
    }
  }

  return result;
};

console.log(findAnagrams("mouse","mouseem"))


// function runProgram(input) {
//   // Write code here

//   input = input.split("\n")
//   var cases = +input[0]
//   var line = 1
//   for (var i = 0; i < cases; i++) {
//     var length = +input[line++]
//     var str = input[line++].trim()
//     check(length, str)
//   }

// }
// if (process.env.USERNAME === "naveed") {
//   runProgram(`2
//     7
//     mousems
//     8
//     wimousee`);
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