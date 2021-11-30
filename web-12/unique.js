var items=["a","b","c","d","a","b","d"]
var details={}
for(var i=0;i<items.length;i++){
    details[items[i]]="s"
    console.log(details)
}console.log(Object.keys(details))