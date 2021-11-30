

var arr=[1,2,3,4,6,9]

var m=function(a){
    return a%3==0
}
// var res=arr.filter(m)
// console.log(res)



var q=function(num){
    return num**3
}

// var res=arr.map(q)
// console.log(res)


var f=function(n,s){
    return n+s
}

var res=arr.filter(m).map(q).reduce(f)
console.log(res)