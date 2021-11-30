function masaiPalSubString(input){
    var store=[]
    var lengt=[]
    for(var i=0;i<input.length;i++){
        for(var j=i+1;j<=input.length;j++){
            var sub=""
            
            for(var k=i;k<j;k++){
                sub+=input[k]
            }//console.log(sub)
            var reverse=sub.split("").reverse().join("")
            if(sub==reverse){
                store.push(reverse)
            }
        }
    }console.log(store)
    for(var m=0;m<store.length;m++){
        //console.log(store[m].length+"-"+store)
        lengt.push(store[m].length)
    }
    //console.log(lengt.join(" "))
    var max=lengt[0]
    for(var len=0;len<lengt.length;len++){
        if(max<lengt[len]){
            return (lengt[len])
        }
    }
    
}

var str="thisracecarisgood"
console.log(masaiPalSubString(str))

//=========================================================

function applyBasicMaths(N,A){
    //write code here
    
    //console.log(arr)
    var arr=[]
    for(var i=0;i<N;i++){
        
        if(A[i]%7==0){
            arr.push(A[i])
        }
    }console.log(arr)
    var min=arr[0]
    for(var j=0;j<arr.length;j++){
        if(arr[j]<min){
            min=arr[j]
        }
    }console.log(min)
    
    

}



var b= [0,1,70,14,21]
var a=b.length
applyBasicMaths(a,b)



function applyBasicMaths(N,A){
    var sum=0
    var store=[]
    var sub=0
    for(var i=0;i<N;i++){
       sum+=A[i]
    }//console.log(sum)
    for(var j=0;j<N;j++){
        sub=sum-A[j]
        //console.log(sub)
        if(sub%7==0){
            store.push(A[j])
            //console.log(sub)
        }
    }console.log(store)
    if(store.length==0){
        console.log("-1")
    }else{
        var min=store[0]
        for(var k=0;k<store.length;k++){
            
            if(store[k]<min){
                min=store[k]
                
                
            }
        }console.log(k-1)

    }
    
    
    
}


var b= [18 ,794 ,259 ,404 ,945 ,483 ,884 ,155 ,214 ,279 ,965 ,830 ,941 ,249 ,491 ,353 ,459 ,40 ,293 ,749 ,783 ,21 ,619 ,68 ,650 ,321 ,939 ,230 ,767, 786, 78, 604, 776, 864, 740, 721, 615, 32, 4, 501, 6, 643, 150, 676, 152, 955 ,598, 582, 402, 967, 143 ,254, 675, 769, 340, 458 ,707, 867 ,666 ,206 ,565, 733, 175, 810, 925, 972 ,675, 449, 684, 854, 854, 901, 39, 853, 618, 527, 456 ,525, 685 ,850 ,47, 770, 133, 521, 263, 944, 264, 906, 669 ,858, 265, 724, 827, 432, 641, 654, 73 ,538, 687 ,324
]
var a=b.length
applyBasicMaths(a,b)



function division(input){
    for(var i=0;i<input.length;i++){
        if(input[i]%7==0){
           // console.log("yes"+"-"+i+"-"+input[i])
        }else{
            //console.log("no")
        }
    }
}

var arr=[186,309,318,324,322,
    305,
    315,
    256,
    313,
    315,
    304,
    319]

   // division(arr)


//=================================================================


function sumOfSpecialPairs(N,A){
    //write code here
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
    
    var sum=0
    for(var i=0;i<N;i++){
       
        for(var j=0;j<N;j++){
            //var sub=j-i
            //console.log(sub)
            if(isprime(j-i)){
                var c=A[j]-A[i]
                sum+=c
            }
        }
    }
    console.log(sum)

}

var a=[5 ,12 ,32 ,11 ,4 ,56 ,5 ,0]
var l=a.length
sumOfSpecialPairs(l,a)