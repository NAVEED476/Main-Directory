var arr=[1,2,3,4,5]
var p=function(num,el){
    return  num*el
}

var res=arr.reduce(p)
console.log(res)