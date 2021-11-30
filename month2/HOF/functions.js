

function change(str) {
    var lower="abcdefghijklmnopqrstuvwxyz"
    var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(var i=0;i<lower.length;i++){
        
            if(str==lower[i]){
                return upper[i]
            }
            else if(str==upper[i]){
                return lower[i]
            }
        
    }

}




function change1(input){
    var string=""
    for(var i=0;i<input.length;i++){
        string+=change(input[i])
    }
    return string

}

var arr=["MA", "SA", "I", "SCH", "OOL"]
var mat=[]
for(var i=0;i<arr.length;i++){
    mat.push(change1(arr[i]))
}
console.log(mat)