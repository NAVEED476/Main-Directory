
// var arr=[10,4,6,7,3]

// var left=1;
// var right=arr.length-1
// var mul=1
// while(left<arr.length && right<arr.length){
//     for(var i=left;i<=right;i++){
//         mul*=arr[i]
//     }
//     console.log(mul)

//     left++
//     mul=1

// }


// var arr=[5,3,6,10,9,11]
// function small(arr){
//     var left=0
//     var right=arr.length-1
//     while(left<right  ){
//        if(arr[left]>arr[right]){
//            return -1
//        }
//        else{
//             left++
//             right--
//        }


//     }
//     return arr[left]


// }

// console.log(small(arr))


function solve(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return nums[i]
            }
        }
    } return nums
};


function uni(arr) {
    var unique = []
    for (var i = 0; i < arr.length; i++) {
        var count = 0
        for (var j = 0; j < unique.length; j++) {
            if (arr[i] == arr[j]) {
                count++
            }
        }
        if (count == 0) {
            unique.push(arr[i])
        }
    }

    return unique
}

function sum(arr, n) {
    var k = uni(arr)
    var sum1 = 0
    var sum = 0
    for (var i = 0; i < k.length; i++) {
        sum += k[i]
    }


    for (var j = 0; j <= n; j++) {
        sum1 += j
    }


    var sum3 = sum1 - sum

    return sum3
}


var arr = [4, 3, 1, 2, 3]
var n = arr.length
var x = uni(arr)
var y = findDuplicate(arr)

var z = sum(x, n)
console.log(y, z)
