console.log("person1:Entered theatre")
console.log("person2:Entered theatre")
const person3=async()=>{
    const Dadisontheway=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('person3:Got ticket')
        },2000)
    })
    let ticket=await Dadisontheway;
    const getPopcorn= new Promise((resolve,reject)=>resolve(`${ticket}, bought Popcorn`))
    let Popcorn=await getPopcorn;
    //console.log(Popcorn)
    const addButter=new Promise((resolve,reject)=>resolve(`${Popcorn}, added butter`))
    let butter=await addButter;  
    //console.log(butter)
    const getColdDrinks =new Promise((resolve,reject)=>resolve(`${butter}, got cold drinks and Entered theatre`))
    let colddrinks=await getColdDrinks;
    //console.log(colddrinks)
    return colddrinks   
}    
    
person3().then((t)=>{
    console.log(t)
})
console.log("person4:Entered theatre")
console.log("person5:Entered theatre")