function  pr(n,arr,k) {
  var left=0;
  var right=left+1;
  var mat=[]

  while(left<n-1 && right<n){
    var temp=arr[left]+arr[right]
    if(temp==k){
      left++
      
    }else if(temp>k){
      right++
    }else{
      mat.push(temp)
    }
    
  }
  
  console.log(mat)
}

var len=5
var array=[1,2,3,4,5]
var tar=7

pr(len,array,tar)