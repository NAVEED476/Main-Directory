function niceArray(N, array, K){
    var count=0
    for(var i=0;i<N;i++){
        if(array[i]%2==0){
            count++
        }
    }if(count>K){
        console.log("Nice Array")
    }else{
        console.log("Bad Array")
    }
}

var arr=[1,2,3,4,5]
var n1=5
var k=1
niceArray(n1,arr,k)







