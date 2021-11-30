function swap(a,b){
    var temp=0;
    temp=a;      //function for swapping two elements
    a=b;
    b=temp
  return [a,b]
}

function small(arr){
    var smallest=arr[0]
    for(var i=0;i<arr.length;i++){
        if(arr[i]<smallest){
            smallest=arr[i]     //function for finding the smallest
        }
    }return smallest
}

var array=[1,2,3,0,4,5]
console.log(small(array))



function reversearray(array,left,right){
    while(left<right){
        var temp=array[left];
        array[left]=array[right];
        array[right]=temp;
        ++left;
        --right;
        
    }return array
}
