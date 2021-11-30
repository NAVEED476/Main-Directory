function solve(n,k,arr){
    //write code here
    var sum=0

    for(var i=0;i<n;i++){
        sum+=arr[i]
        console.log(sum)

        
    }
}

var arr=[1,2,3,4]
var n=arr.length
var k=2
solve(n,k,arr)