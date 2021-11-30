

var arr=[1,2,3,4,5]



var odd=function(num){
    return num%2==1
}




var sum=function(n,e){
    return n+e
}

var res=arr.filter(odd).reduce(sum)
console.log(res)
