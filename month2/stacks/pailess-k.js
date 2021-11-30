function pair(n,arr,k){
    var mat=[]
    var left=0;
    var right=left+1
    var temp=arr[left]+arr[right]

    while(left<n && right<n){
       
        if(temp<k){
            mat.push(temp)
        }
    }console.log(mat)
}


var n=5
var arr=[1,2,3,4,5]
var k=7

pair(n,arr,k)