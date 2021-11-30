function averageOfAll(n, arr){
    //write code here
    var sum=0
    for(var i=0;i<n;i++){
        sum=sum+arr[i]
        var k=arr.length
        console.log(k)
        var ceil=Math.ceil(sum)
    }return ceil
}



function averageOfAll(n, arr){
    //write code here
    var sum=0
    var k=arr.length
    for(var i=0;i<n;i++){
        sum=sum+arr[i]
        var avg=sum/k
        var ceil=Math.ceil(avg)
        

    }
    console.log(ceil)
}

var a=[1,2,3,4]
averageOfAll(4,a)




function battleOfOddAndEven(n, arr){
    //write code here
   var even=0
   var odd=0
    for(var i=0;i<n;i++){
        if(arr[i]%2==0){
            even=even+arr[i]
        }else{
            odd=odd+arr[i]
        }
    }

    console.log(even,odd)
    if(even>odd){
        console.log("Even")
    }else{
        console.log("Odd")
    }   
    
}


var arr1=[1,2,3,4]
battleOfOddAndEven(4,arr1)


function neighbour(n,arr){
    var sum=0
    for(var i=0;i<n;i++){
        if(arr[i]>arr[i+2])
        sum++
    }
    console.log(sum)
}

var a=[1,2,3,4,3,2,1]
neighbour(7,a)



function neighbour(n,arr){
    var sum=0
    for(var i=0;i<n;i++){
        if(arr[i]<arr[i+1]){
            sum++
        }else if(arr[i-1]<arr[i]>arr[i+1]){
            sum++
        }
        
    }console.log(sum)
}

var arr=[1,2,3,4,2,1,6,5]
neighbour(8,arr)


var arr2=[12,13,14,15]
for(var i=0;i<arr2.length;i++){
    console.log(arr2[i])
    
}



var number=12
if(number%2!=0){
    console.log("odd")
}else{
    console.log("even")
}




















