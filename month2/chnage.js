var low="abcdefghijklmnopqrstuvwxyz"
var up="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var char="C"
  var name1="naVeEd"

function lower(s){
    for(var i=0;i<low.length;i++){
        if(low[i]==s){
            
            return up[i]
        }
        else{
            return low[i]
        }
    }
}
console.log(lower(char))

// function string(k) {
//     var str=""
//     for(var i=0;i<k.length;i++){
//         if(k[i]==char){
//             str+=up[i]
//         }
//     }console.log(str)
// }
// string(name1)
//console.log(name1.toUpperCase())