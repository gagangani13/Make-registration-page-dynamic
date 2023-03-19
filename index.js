console.log("person1:Entered theatre")
console.log("person2:Entered theatre")
const Dadisontheway=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('person3:Got ticket')
    },2000)
})
const getPopcorn=Dadisontheway.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`${t}, bought Popcorn`)
    })
})
const addButter=getPopcorn.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`${t}, added butter`)
    })
})
const getColdDrinks =addButter.then((t)=>{
    return new Promise((resolve,reject)=>{
        resolve(`${t}, got cold drinks and Entered theatre`)
    })
})
getColdDrinks.then((t)=>{
    console.log(t)
})
console.log("person4:Entered theatre")
console.log("person5:Entered theatre")