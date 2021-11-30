
var arr=[4,-2]
var k=2



var maxSlidingWindow = function(nums, k) {
    
    var left=0
    var right=k-1
    var mat=[]
    var mat1=[]
    while(left<nums.length && right<nums.length){
        for(var i=left;i<=right;i++){
         mat.push(nums[i])
         }
         mat1.push(maximum(mat))
         mat=[]
     
        left++;
        right++
     }
     console.log(mat1)
     
     
     function maximum(arr){
         var max=arr[0]
         for(var i=0;i<arr.length;i++){
             if(max<arr[i]){
                 max=arr[i]
             }
         }return max
     }
};

maxSlidingWindow(arr,k)