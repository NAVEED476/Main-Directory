function present(a,b){
    var val=0
    for(var i=0;i<a;i++){
        if(b[i]==42){
            val=val+b[i]
            console.log(val)
        }
    }if(val==42){
        console.log("yes")
    }else{
        console.log("no")
    }
}

var arr=[1,2,3,4,2]
present(5,arr)

var watts=930
var cost=0
for(var i=0;i<=watts;i++){
    if(watts<=50){
        cost=watts*3
    }else if(watts>=51){
        cost=watts*5
    }else{
        cost=watts*10
    }

}
console.log(cost+80)
console.log(930/170)

