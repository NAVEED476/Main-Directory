var num=12;
var count=0
for(var i=0;i<=num;i++){
    if(num%i==0){
        count++
    }
}
if(count==2){
    console.log("prime")
}else{
    console.log("not")
}


function prime(a,b){
    var count=0
    for(var i=0;i<=a && b;i++){
       
            if(a%i==0 && b%i==0){
                count++
                console.log(count)
           // }
        }
    }if(count==2){
        console.log("prime")
    }
    else{
        console.log("no")
    }
}

prime(11,13)



let n = 5; 
let string = "";
for (let i = 1; i <= n; i++) { 
  for (let j = 0; j < n; j++) {
    string += n;
  }
  string += "\n";
}
console.log(string);



var num=5
for(var i=1;i<=num;i++){
    if(i%2==0){
    
        console.log(num)
    }else{
        console.log("---")
    }
}


var num=4

for(var i=1;i<=num;i++){
    var output=""
    for(var j=1;j<=num;j++){
        if(i==num){
            output=output+"*"+" "
           // console.log(output)
        }else{
            if(j==1){
                output=output+"*"
            }
            else{
                output=output+" "
            }
        }
    }
    console.log(output)
}