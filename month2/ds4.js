var ite=[1,2,2,3,4]
var l1=ite.length
var item=[1,2,3,4]
var l2=item.length

// 1 2 3 4
//1 2 3 4 5



function partyPlanning(N,PamID,M,JimID){
    //write code here
    function unique(items){
        var uni=[]
        for(var i=0;i<items.length;i++){
            var c=0
            for(var j=0;j<uni.length;j++){
                if(items[i]==uni[j]){
                    c++
                }
            }
            if(c==0){
                uni.push(items[i])
            }
        }
        return uni
    
    }
    var k=(unique(PamID))
    var l=(unique(JimID))
    // console.log(k.length)
    // console.log(l.length)
   
    if(k.length!=l.length){
        console.log("No")
    }
    else{
        var count=0
        for(var i=0;i<k.length;k++){
            if(k[i]!=l[i]){
                count++
            }
        }
        if(count==0){
            console.log("Yes")
        }else{
            console.log("No")
        }
    }
    
}



partyPlanning(l1,ite,l2,item)


// function for unique elements

// var k=(unique(ite))
// var m=(unique(item))
// console.log(k)
// console.log(m)

//function for comparing the elements in the arrays

// function compare(arr,arr1){
   
//     if(arr.length!=arr1.length){
//         console.log("No")
       
//     } else{
//         var count=0
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]!=arr1[i]){
//                 count++
//             }
//         }if(count==0){
//             console.log("yes")
//         }
//     }
    
// }
// compare(k,m)