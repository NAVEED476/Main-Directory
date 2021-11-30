var arr=[1,3,-1,-3,5,3,6,7]


var k=3

var medianSlidingWindow = function(nums, k) {
    var left=0
    var right=k-1
    var mat=[]
    var mat1=[]
    while(left<nums.length && right<nums.length){
        for(var i=left;i<=right;i++){
            mat.push(nums[i])
        }
        left++
        right++
        //console.log(mat)
       
        mat=mat.sort((a,b)=>a-b)
        for(var i=0;i<mat.length;i++){
            if (nums.length %2 == 0) {
                // even-length array (two middle elements)
                var avg = (nums[(nums.length/2) - 1] + nums[nums.length/2]) /2;
            }
            mat1.push(mat[i+1])
            break
        }
        
        
      mat=[]
    }
    return (mat1)
    
};
console.log(medianSlidingWindow(arr,k))


