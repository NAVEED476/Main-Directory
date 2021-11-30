function isprime(number){
    var count=0
    for(var i=1;i<=number;i++){
        if(number%i==0){
            count++
        }
    }if(count==2){
        return true
    }else{
        return false
    }
}

var arr=[10]
console.log(isprime(arr))


var limit=100
for(var i=0;i<=limit;i++){
    if(isprime(i)){
        //console.log(i)
    }
    
}
function uppercase(char){
    var lower="abcdefghijklmnopqrstuvwxyz"
    var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i=0;i<upper.length;i++){
        if(upper[i]==char){
            return lower[i]
        }
    }
}
var input="a"

console.log(uppercase(input))



var nam="naveed"
var str=""
for(var i=0;i<nam.length;i++){
    str+=uppercase(nam[i])
}
//console.log(str)