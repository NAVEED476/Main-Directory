//Naveed--Naveed%^


var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower="abcdefghijklmnopqrstuvwxyz"
var special="!"||"@"||"#"||"$"||"%"||"^"||"&"||"*"


var str="nAVEED--nAVeED%^"

var ans=''

for(var i=0;i<str.length;i++){

    var signal=false
    


    for(var j=0;j<upper.length;j++){
        if(str[i]==upper[j]){
            ans+=lower[j]
            signal=true
        }
        else if(str[i]==lower[j]){
            ans+=upper[j]
            signal=true
        }

    }
    if(!signal){
        ans+=str[i]
    }
}

console.log(ans)

