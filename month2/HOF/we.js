var number=[1,2,3,4,5]
function each(num){
    console.log(num**2)
}
var call=number.forEach(each)
console.log(call)

// function filt(num){
//     return num%2!=0
// }
// var result=number.filter(filt)
// console.log(result)

// function mapp(num){
//     return num**3
// }
// var result=number.map(mapp)
// console.log(result)

// function red(num , acc) {
//     return num+acc
// }
// var total=number.reduce(red)
// console.log(total)
