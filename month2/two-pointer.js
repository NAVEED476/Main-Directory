var array=[1,2,3,4,5,6]
var target=7
var len=array.length
var mat=[]


// function sorting(array,n,tar){
//     left=0;
//     right=n-1;
//     array=array.sort((a,b)=>a-b);
//     while(left<right){
//         if(array[left]+array[right]==tar){
//             return 1
//         }else{
//             return -1
//         }
//     }
// }


// console.log(sorting(array,len,target))












function approach(arr,n,t) {
    var left=0;
    var right=n-1;
    var sum=0
    while(left<right){
        sum=arr[left]+arr[right]
        if(sum==t){
            mat.push(left);mat.push(right)
           console.log(mat.join(" "))
        }
        else if(sum>t){
            right--;
        }
        else{
            left++;
        }
    }console.log("-1","-1")
    
}
 console.log(approach(array,len,target))

    // function reversearray(array,left,right){
    //     while(left<right){
    //         var temp=array[left];
    //         array[left]=array[right];
    //         array[right]=temp;
    //         ++left;
    //         --right;
            
    //     }return array
        
    // }
    // function rev_arr(n,k,array){
    //   k=k%n
    //   array=reversearray(array,0,n)
    //   array=reversearray(array,0,k)
    //   array=reversearray(array,k,n)
    //   console.log(array.join(" "))
    // }
    
    // function runProgram(input) {
    //     input=input.trim().split("\n")
    //     var test_case=Number(input[0])
    //     var line=1;
    //     for(var i=0;i<test_case;i++){
    //         var [size,k1]=input[line++].trim().split(" ").map(Number)
    //         var matrix=input[line++].trim().split(" ").map(Number)
    //         rev_arr(size,k1,matrix)
    //     }
        
    
    // }
    // if (process.env.USERNAME === "naveed") {
    //     runProgram(`
    //     3
    // 2 1
    // 1 2
    // 2 2
    // 1 2
    // 3 1
    // 1 2 3`);
    // } else {
    //     process.stdin.resume();
    //     process.stdin.setEncoding("ascii");
    //     let read = "";
    //     process.stdin.on("data", function (input) {
    //     read += input;
    //     });
    //     process.stdin.on("end", function () {
    //     read = read.replace(/\n$/, "");
    //     read = read.replace(/\n$/, "");
    //     runProgram(read);
    //     });
    //     process.on("SIGINT", function () {
    //     read = read.replace(/\n$/, "");
    //     runProgram(read);
    //     process.exit(0) ;
    //     });
    // }