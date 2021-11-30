  // SUM of SUB Array

//const { count } = require("console");


//Description:-

// Given an array of integers of length n and a positive integer K, 
// the task is to find the count of 
// the longest possible subarrays with the sum of its elements not divisible by K.





// two pointers approach


// function subarray(n,k,arr){
    
//     var left=0
//     var right=1
//     var sum=0
//     var count=0
//     while(left<n-1 && right<n){
//         sum+=arr[left]+arr[right]
//         if(sum%3!=0){
//             count++
//             break
//             right++
//         }
//         left++
//     }
//     if(count>0){
//         console.log(1)
//     }else{
//         console.log(-1)
//     }
// }




//sliding Window

function longestSubarray(array[],k){
    left = -1
    right = 0
    sum = 0;
    for (i = 0;i<array.length;i++){
        if (array[i] % k != 0){
            if (left == -1)
            left = i
            right = i
        }
        sum += array[i]
    }
    if (sum % k != 0)
     return 1 
    if (left == -1) 
    return 0
    left = left + 1

    right = array.length - right
    
    max_window_size = array.length - min(left,right)
    return window_size