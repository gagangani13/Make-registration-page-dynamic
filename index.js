var parentlist=document.querySelector('.addhere')
var btn=document.getElementById('btn');
btn.addEventListener('click',store);
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/5a0273e587ee41ca8c055e2b45d1f369/appointmentData')
        .then((response)=>{
            //console.log(response.data)
            
            for(i=0;i<response.data.length;i++){
                var li=document.createElement("li");
                var details=document.createTextNode(response.data[i].name+"->"+response.data[i].email+"->"+response.data[i].mobile+"->"+response.data[i].time)
                li.className=response.data[i]._id
                var addhere=document.querySelector('.addhere');
                li.appendChild(details)
                addhere.appendChild(li)
                deletion(li)
                edition(li)
            }
            
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong Boss!!</h4>"
            console.log(err);
        })

})

function store(e){
    
    e.preventDefault();//by adding this the result don't go away ex-dont flash
    //console.log('click')
    
    var names=document.getElementById('Name').value;
    var mobile=document.getElementById('phone').value;
    var email=document.getElementById('mail').value;
    var time=document.getElementById('call').value; 
    
    
    if(names&&mobile&&email&&time){
        document.getElementById('myform').style.backgroundColor='green';
        //arr.push(names,email,time)
        //localStorage.setItem(mobile,arr)
        var arr=({
            'name': names,
            'email': email,
            'time': time,
            'mobile': mobile
        })
        var arr1=mobile
        let sarr=JSON.stringify(arr)
        //let sarr1=JSON.stringify(arr1)
        //localStorage.setItem(arr1,sarr)
        
        axios.post('https://crudcrud.com/api/5a0273e587ee41ca8c055e2b45d1f369/appointmentData',arr)
            .then((response)=>{
                //console.log(response.data)
                var li=document.createElement("li");
                li.className=response.data._id;
                li.setAttribute('name',names)
                li.setAttribute('email',email)
                li.setAttribute('time',time)
                var details=document.createTextNode(names+"->"+email+"->"+mobile+"->"+time)
                var addhere=document.querySelector('.addhere');
                li.appendChild(details)
                addhere.appendChild(li)
                deletion(li)
                edition(li)
            })
            .catch((err)=>{
                document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong Boss!!</h4>"
                console.log(err);
            })    
    } else{
        alert('Please fill the form')
    }    
}
      
        
        
function deletion(li){
    var delbut=document.createElement("button");
    delbut.className='btn btn-danger'
    delbut.appendChild(document.createTextNode("DELETE"))
    li.appendChild(delbut)
    delbut.addEventListener('click',deleted);
    function deleted(e){
        var locate=e.target.parentElement;
        // localStorage.removeItem(locate.className)
        parentlist.removeChild(locate);
        axios.delete(`https://crudcrud.com/api/5a0273e587ee41ca8c055e2b45d1f369/appointmentData/${locate.className}`)
        //the above line works without then and catch. These are used to let us know what is happening. Or to perform certain operation under different cases.
            .then((response)=>{
                console.log('DELETED IN CLOUD')
            })
            .catch((err)=>{
                document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong Boss!!</h4>"
                console.log(err);
            })   

    }
}    
function edition(li){
    var editbut=document.createElement("button");
    editbut.className='btn btn-dark'
    editbut.appendChild(document.createTextNode("EDIT"))
    li.appendChild(editbut)
    editbut.addEventListener('click',edited);
    function edited(e){
        document.getElementById('myform').style.backgroundColor='rgb(207, 151, 31, 0.795)';
        var locate=e.target.parentElement;
        axios.get(`https://crudcrud.com/api/5a0273e587ee41ca8c055e2b45d1f369/appointmentData/${locate.className}`)
            .then((response)=>{
                document.getElementById('Name').value=response.data.name;
                document.getElementById('phone').value=response.data.mobile;
                document.getElementById('mail').value=response.data.email;
                //document.getElementById('call').value=response.data.call;
            })
        
        // localStorage.removeItem(locate.className)
        parentlist.removeChild(locate);    
        axios.delete(`https://crudcrud.com/api/5a0273e587ee41ca8c055e2b45d1f369/appointmentData/${locate.className}`)
        //the above line works without then and catch. These are used to let us know what is happening. Or to perform certain operation under different cases.
            .then((response)=>{
                console.log('DELETED IN CLOUD')
            })
            .catch((err)=>{
                document.body.innerHTML=document.body.innerHTML+"<h4>Something went wrong Boss!!</h4>"
                console.log(err);
            }) 
    }  
}
    

