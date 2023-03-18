const posts=[]
function createPost(user){
    return new Promise((resolve,reject)=>{
        posts.push(user)
    resolve()
    })
}
var c=0
function setTime(){
    return new Promise((resolve,reject)=>{
        posts[c].timing=new Date()
        resolve()
        c++
    })
}
const user=['username:Gagan']
const user2=['username:Gani']
Promise.all([createPost(user),setTime()])
Promise.all([createPost(user2),setTime()])
console.log(posts)