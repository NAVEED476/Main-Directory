
// function twosum(len,target,arr){
//     arr=arr.sort((a,b)=>a-b)
//     var left=0;
//     var right=len-1
//     var sum=0
//     while(left<right){


//         sum+=arr[left]+arr[right]

        
//         if(sum==target){
//             return[left,right]
//         }
        
//         else if(sum>target){
//             right--;
//         }
        
//         else if(sum<target){
//             left++;
//         }
//     }
//     return[-1,-1].join(" ")
// }


// function twoSum(len,goal,array){
//     let indexes = [];
//     len=array.length
//     for(let i = 0; i < len; i++){
//        for(let j = i + 1; j < len; j++){
//           if (array[i] + array[j] === goal) {
//         indexes.push(i);
//         indexes.push(j);
//           }
//        }return indexes.join(" ").trim();
//     }
    
//     return [-1,-1].join(" ").trim();
// }
// var arr=[2,0,11,15]
// var goal=9
// var len=arr.length
// console.log(twoSum(len,goal,arr))

function two_sum(arr,target){
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length;j++){
      if(arr[i]+arr[j]==target && i!=j){
        return[i,j].join(" ")
      }
    }
  }return[-1,-1].join(" ")
}

function runProgram(input) {
    // Write code here
    input=input.split("\n")
    var testcases=+input[0]
    var line=1

    for(var i=0;i<testcases;i++){
        var [len,tar]=input[line].trim().split(" ").map(Number)
        line++;
        var arr=input[line++].trim().split(" ").map(Number)
        //console.log(len,tar,arr)
        console.log(two_sum(arr,tar))
    }
   
  }
  if (process.env.USERNAME === "naveed") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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