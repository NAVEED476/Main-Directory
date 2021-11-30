var n=5
for(var i=1;i<=n;i++){
    var count=""
    for(var j=1;j<=n;j++){
        if(i%2==0){
            count=count+"*"
            //console.log(count)
        }else if(i%2!=0){
            count="_"
        }
    }console.log(count)
    
}


// var num=3
// for(var i=0;i<=num;i++){
//     var pat=""
//     if(i%2==0){
//         pat=pat+"*"
//     }else{
//         pat=pat+"_"
//     }
// }
// console.log(pat)

// second maximum
function secondMaximum(a, b, c) {
    // write code here
    var res = ""
  if((a>b)&&(a>c)){
    res = res + a
  }else if((b>c)&&(b>a)){
    res = res + b
  }else if((c>b)&&(c>a)){
    res = res + c
  }//console.log(res)
  
  var out = []
  if((res>a)&&(res>b)){
      out.push(a,b)
  }else if((res>b)&&(res>c)){
    out.push(b,c)
    }
      else{
      out.push(a,c)
        }
  
  //console.log(out)
  if(out[0]>out[1]){
    console.log(out[0])
  }else{
    console.log(out[1])
  }
  }   ///5 4 3 2 1 ----4


  function reverseTheValue(num) {
    // Write code here
  num = num + "";
  var out = num.split("").reverse().join("");
  console.log(out)
}

reverseTheValue(467)



