// function unique(array){
//     var obj={}
//     for(var i=0;i<array.length;i++){
//         obj[array[i]]="some"
//     }return Object.keys(obj)
// }
// // var arr=[1,1,2,2,3,3]
// // console.log(unique(arr.join(" ")))


function common_pairs(A,B,N,M){



  var mat=[]
    var left=0; 
    var right=0
    while(right<N && right<M){
        if(A[left]==B[right]){
            mat.push(A[left])
            right++;
            left++;
        }else if(A[left]>B[right]){
            right++;
        }else if(A[left]<B[right]){
            left++;
        }
        else{
            mat.push(-1)
        }
        
    } if (mat.length==0){
        return -1
    }
    return mat.join(" ")
       
    
}


    //optimized approach

    


function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcases=input[0]
    var line=1
    for(var i=0;i<testcases;i++){
        var row=Number(input[line++]);
        var array=input[line++].trim().split(" ").map(Number);
        var col=Number(input[line++]);
        var array1=input[line++].trim().split(" ").map(Number);
        console.log(common_pairs(array,array1,row,col))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`9
    2
    9 9
    8
    4 4 5 5 6 6 6 6
    1
    8
    2
    2 6
    6
    4 4 4 5 8 9
    1
    9
    9
    3 3 4 5 6 7 7 8 9
    2
    2 4
    4
    2 2 3 8
    9
    2 4 4 5 5 7 8 8 9
    9
    3 4 5 8 8 8 9 9 9
    4
    3 5 6 8
    6
    2 2 3 3 9 9
    8
    2 2 2 4 5 5 8 8
    6
    4 4 8 8 9 9
    3
    3 3 6
    6
    1 2 3 5 8 9
    1
    9`);
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