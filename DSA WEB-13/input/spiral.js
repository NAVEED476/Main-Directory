// function spiral(n,m,arr){
//     var top=0;
//     var bottom=n-1;
//     var left=0
//     var right=m-1;
//     var size=n*m
//     var mat=[]
//     var count=0
//     while(top<bottom && left<right){
//         for(var i=left;i<=right;i++){
//             mat.push(arr[top][i])
//             count++
//         }
//         top++

//         for(var j=top;j<=bottom;j++){
//             mat.push(arr[j][right])
//             count++
//         }
//         right--;

//         for(var k=right;k>=left;k--){
//             mat.push(arr[k][bottom])
//             count++
//         }
//         bottom--

//         for(var m=bottom;m>=top;m--){
//             mat.push(arr[left][m])
//             count++
//         }
//         left++

        


//     }
//     console.log(mat)
// }















// function runProgram(input) {
//     // Write code here
//     input=input.trim().split("\n")
//     var testcases=+input[0]
//     var line=1
//     for(var i=0;i<testcases;i++){
//         var [row,col]=input[line].trim().split(" ").map(Number)
//         line++;
//         var mat=[]
//         for(var j=0;j<row;j++){
//             mat.push(input[line++].trim().split(" ").map(Number))
//         }
//         spiral(row,col,mat)
//     }
   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`2
//     3 4
//     1 2 3 4
//     5 6 7 8
//     9 10 11 12
//     4 3
//     1 2 3
//     4 5 6
//     7 8 9
//     10 11 12
//     `);
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

function clockwisespiraltraversal(row, col, arr) {
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;
  let direction = 0;
  let str = "";
  while (left <= right || top <= bottom) {
      if (direction === 0) {
          for (i = bottom; i >= top; i--) {
              str += arr[i][left] + " ";
          }
          left++;
      } else if (direction === 1) {
          for (i = left; i <= right; i++) {
              str += arr[top][i] + " ";
          }
          top++;
      } else if (direction === 2) {
          for (let i = top; i <= bottom; i++) {
              str += arr[i][right] + " ";
          }
          right--;
      } else {
          for (let i = right; i >= top; i--) {
              str += arr[bottom][i] + " ";
          }
          bottom--;
      }
      direction = (direction + 1) % 4;
  }
  console.log(str);
}

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let test = +input[0];
  let line = 1;
  for (let i = 0; i < test; i++) {
      let arr = [];
      let [row, col] = input[line++].trim().split(" ").map(Number);
      for (let j = 0; j < row; j++) {
          arr.push(input[line++].trim().split(" ").map(Number));
      }
      //spiralTraversal(row, col, arr)
      clockwisespiraltraversal(row, col, arr)
  }

}
if (process.env.USERNAME === "naveed") {
  runProgram(`2
      3 4
      1 2 3 4
      5 6 7 8
      9 10 11 12
      4 3
      1 2 3
      4 5 6
      7 8 9
      10 11 12`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
      read += input;
  });
  process.stdin.on("end", function() {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
  });
  process.on("SIGINT", function() {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
  });
}