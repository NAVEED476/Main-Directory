var n="naveed"

var small="abcdefghijklmnopqrstuvwxyz"
var count=0
for(var i=0;i<n.length;i++){
    for(var j=0;j<small.length;j++){
        if(n[i]==small[j]){
            count++;
            break
            i++
        }
    }
}
console.log(count)