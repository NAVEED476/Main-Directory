
// var arr=[1,4,4]
// var target=4
// var minSubArrayLen = function(target, nums) {
//     var left=0;
//     var right=1
//     var mat=[]
//     while(left<nums.length-1 && right<nums.length){
//         if(nums[left]==target){
//             mat.push(nums[left])
//         }
//         else{
//             if(nums[left]+nums[right]==target){
//                 mat.push(left,right)
//             }
//         }
//         left++
//         right++

const { copyFileSync } = require("fs")
const { umask } = require("process")

       
//     }
//     if(mat.length==0){
//         return 0
//     }
//     return mat.length
// };

// console.log(minSubArrayLen(target,arr))

var arr=[1,2,3,4,5]
var target=11


var left=0
var sum=0
var mat=[]
while(left<arr.length-1){
    for(var i=left;i<arr.length;i++){
        mat.push(arr[i])
    }
    //console.log(mat)
    for(var i=0;i<mat.length;i++){
        sum+=mat[i]
    }
    if(target==sum){
        console.log(mat.length)
    }
    console.log(sum)
    sum=0
    mat=[]
    left++
}

