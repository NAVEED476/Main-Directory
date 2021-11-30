// var bill=120
// var less=bill-80;
// //console.log(less)
// var units=0
// if(less>650){
//     units=units+150
//     less=less-650
//     console.log(less)
//     units=units+(less/10)
//     //console.log(units)
// }else if(less>150){
//     units=units+50;
//     less=less-150;
//     units=units+(less/5)
// }else{
    
//     units=units+(less/3)
// }

// console.log(units)

function consumed(a){
    var units=0
    var less=a-80
    if(less>650){
        units=units+150
        less=less-650
        units=units+(less/10)
    }else if(less>150){
        units=units+50
        less=less-150
        units=units+(less/5)
    }else{
        units=units+(less/3)
    }
    console.log(units)
}

consumed(930)



function finddd(size,arr){
    var count=0
    for(var i=0;i<size;i++){
        if(arr[i]==42){
            count++
        }
        
    }if(count==1){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

    var arr1=[1,2,3,4,4]
    finddd(5,arr1)


    function findmax(n,arr){
        var smallest=arr[0]
        var bigget=arr[0]
        for(var i=0;i<n;i++){
            if(arr[i]<smallest){
                smallest=arr[i]
            }else if(arr[i]>bigget){
                bigget=arr[i]
            }
        }console.log(smallest)
        console.log(bigget)
    }

    var m=[1,2,3,4,5]
    findmax(5,m)