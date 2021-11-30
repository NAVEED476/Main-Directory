
// var users=[
//     {name:"Nrupul",age: 32},
//     {name:"Prateek",age: 30},
//     {name:"Aman",age: 26},
//     {name:"Ankur",age: 34},
//     {name:"Albert",age: 28},
//     {name:"Yogesh",age: 44},
//     {name:"Sidharth",age: 22}
  
// ]
// var something=30
// //console.log(users[1].age)
// for(key in users){
//     for(var i=0;i<users[key].age;i++){
//         if(users[key].age>=something){
//             console.log(users[key].name)
//             break
//         }
//     }
// }


//==============second one=============

var details={
    data:[],
    addstudnt:function(n,m,s,e){
        var student={
            name:n,
            maths:m,
            science:s,
            english:e
        }
        this.data.push(student)
    },
    lowscore:function(){
        var lowstudent=null
        var lowtotal;null
        for(var i=0;i<this.data.length;i++){
            var currentstudent=this.data[i]
            var total=currentstudent.maths+currentstudent.science+currentstudent.english;
            if(lowtotal==null || total>lowtotal){
                lowstudent=currentstudent
                lowtotal=total
            }
        }return lowstudent
    }
}
details.addstudnt("nrupul",30,20,10);
details.addstudnt("amana",2,3,4)
details.addstudnt("naveed",2,3,44)
console.log(details.lowscore())
// details.addstudnt("nrupul",30,20,30)
// console.log(details.data)


