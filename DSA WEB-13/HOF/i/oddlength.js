var arr= ["A", "Good", "Problem"]

var len=function(num){
    var k=num.length
    return k
}

var res=arr.map(len)
console.log(res)




var odd=function(num){
    return num%2==1
}
//var res=a.filter(odd)
//console.log(res)


var a=[1,2,3,4,5]

var r=function(num,e){
    return num+e
}

var res=arr.map(len).filter(odd).reduce(r)
console.log(res)