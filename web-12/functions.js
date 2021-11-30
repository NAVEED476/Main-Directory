
function joining(n,string){
    var out=""
    for(var i=0;i<string.length;i++){
    
      if(i==string.length-1){
        out=out+string[i]
      }
      
      else{
        out=out+string[i]+n
      }
  
    }
    console.log(out)
  }
  
  var arr=["a","b","c","d","e"]
  var k=""
  joining(k,arr)
  console.log(arr.join("-"))
  
  
  var arr1=[1,2,3,4,5]
  console.log(arr1[arr1.length-1])