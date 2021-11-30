// var person1={
//     name:"naveed"
// }

// var person2={
//     name:"suhail"
// }

// function Enter(){
//     console.log(" ia m")
// }

// Enter.call(person1)
// Enter.call(person2)



// function enter(n,a,u){
//     this.name=n
//     this.price=p
//     this.img=u
// }

// var person1=enter("elon","musk")

// console.log(person1)


var person1={
    name:"rahul",
    myname:function(){
        console.log(this)
    }

   
}
myname()