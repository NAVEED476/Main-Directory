

var  arr=[1,0,0,0,1,1]
if(arr.length==0){
    return null
}

var obj={}
var element=arr[0]
var count=0
for(var i=0;i<arr.length;i++){
    var el=arr[i]
    if(obj[el]==null){
        obj[el]=1
    }else{
        obj[el]++
        if(obj[el]>count){
            element=el
            count=obj[el]
        }
    }
}console.log(element)