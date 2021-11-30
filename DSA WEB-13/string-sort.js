function stringsort(str){
    var arr=str.split("")

    var temp;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }return arr.join("")

}

var arr="naveed"
console.log(stringsort(arr))

// function sortString(str){
//     var arr = str.split('');
//     var tmp;
//     for(var i = 0; i < arr.length; i++){
//       for(var j = i + 1; j < arr.length; j++){
//         /* if ASCII code greater then swap the elements position*/
//         if(arr[i] > arr[j]){
//           tmp = arr[i];
//           arr[i] = arr[j];
//           arr[j] = tmp;
//         }
//       }
//     }
//     return arr.join('');
//   }

  //console.log(sortString(string))