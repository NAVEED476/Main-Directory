var arr=[1,2,3,4,5,6]
var target=7
var len=arr.length


function subarr(arr,len,tar){
   var arr=arr.sort((a,b)=>a-b)
    var left=0
    var right=1
    var count=0
    while(left<right){
        var sum=arr[left]+arr[right]

        if(sum==target){
            count++
            
        }
        left++
        right++
    }

    console.log(count)
}

subarr(arr,len,target)