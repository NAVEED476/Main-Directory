function maximum(n,k,arr){
    // function for generating sub array sum
    var mat=[]
    for(var i=0;i<n;i++){
        for(var j=i+1;j<=i+k;j++){
          var sum=0
            for(var k=i;k<j;k++){
                sum+=arr[k]
            }mat.push(sum)
        }
    }console.log(mat)


    //logic for max value

    var big=mat[0]
    for(var i=0;i<mat.length;i++){
        if(mat[i]>big){
            big=mat[i]
        }
    }console.log(big)
}
var array=[-1, -1, -2, 1, -2, 4, 1, 9, 3, 9]
var N=array.length
var K=4
    maximum(N,K,array)

// function runProgram(input) {
//     // Write code here
//     input=input.split("\n")
//     var [R,M]=input[0].split(" ").map(Number)
//     var input2=input[1].split(" ").map(Number)

   
//   }
//   if (process.env.USERNAME === "naveed") {
//     runProgram(`10 3
//     -1 -1 -2 1 -2 4 1 9 3 9`);
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




function sum(N,target,arr){ 
    var mat=[]
    for(var i=0;i<N;i++){
        if(arr[i]+arr[i+1]==target){
            mat.push(i,i+1)
        }
    }if(mat.length!=0){
        console.log(mat.join(" "))
    }else{
        console.log(-1,-1)
    }
}
var a=[1,2,3,5,3]
var n=a.length;
var t=10;
sum(n,t,a)