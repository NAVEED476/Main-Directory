function ACM_ICPC_India_Rank(N, countriesArr) {
    //write code here
    
    for(var i=0;i<N;i++){
        if(countriesArr[i]=="India"){
            return i+1
            
        }
            
        
    }
    return  "India not present"
  }
var arr=["japan","India","newyork"]
console.log(ACM_ICPC_India_Rank(3,arr))