var arr=[1,2,3,4,5]

var isodd=function(num){
    return num%2==1
}
var res=arr.filter(isodd)
console.log(res)