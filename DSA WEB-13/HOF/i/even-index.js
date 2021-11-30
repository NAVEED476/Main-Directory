var arr=[2, 4, 5, 3, 6, 8]


var i=function(el,i){
    return el%2==0 && i%2==0
}
var res=arr.filter(i)
console.log(res)