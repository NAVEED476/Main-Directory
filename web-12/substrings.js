var s="racecarisgood"
var n=s.length
//console.log(n)

for(var i=0;i<n;i++){
    for(var j=i+1;j<=n;j++){
        var substr=""
        var count=0
        for(var k=i;k<j;k++){
            substr=substr+s[k]
            count=count+k
        }console.log(substr)
        
        
    }//console.log("----------")
}console.log(count)

