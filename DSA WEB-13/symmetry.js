function checkForSymmetry(n, matrix) {
    //write code here
    //console n,matrix and check the input response
    function Horizontal(n, matrix){
        var i = 0;
        var j = n - 1;
        while(i < j){
          for (var k = 0;k<matrix.length;k++){
            if (matrix[i][k] != matrix[j][k]) return false;
          }
          i++;
          j--;
        }
        return true;
    }
    function Vertical(n, matrix){
        var i = 0;
       var j = n-1;
       while(i < j){
         for (var k=0;k<matrix.length;k++){
           if (matrix[k][i] != matrix[k][j]) return false;
         }
         i++;
         j--;
       }
       return true;
   }
  var ver = Vertical(n, matrix);
   var hor = Horizontal(n, matrix);
   if (ver == true && hor == true) {
        console.log("BOTH");
    }
    else if (ver == false && hor == true) {
        console.log("HORIZONTAL");
    }
    else if (ver == true && hor == false) {
        console.log("VERTICAL");
    }
    else {
        console.log("NO");
}
}











function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    	var test = +input[0];
    	var line = 1;

   		 for (var i = 0; i < test; i++) {
            var size = Number(input[line++]);
            var arr = [];
        for (var j = 0; j < size; j++) {
            arr.push(input[line++].trim().split(""));
        }
        checkForSymmetry(size,arr)
     
    }

  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3
    4
    *.*.
    .*.*
    *.*.
    .*.*
    3
    .*.
    *.*
    .*.
    3
    ..*
    **.
    ..*`);
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