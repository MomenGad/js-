let inputTask = document.getElementById('inputTask');
let AddButton = document.getElementById('AddButton');
let allTasks  = document.getElementById('allTasks');
let noTasks   = document.getElementById('noTasks');
let count     = document.getElementById('count');

function show() {
        //remove notasks
        if (allTasks.childElementCount > 0) {
            noTasks.classList.add('none')
        }else {
            noTasks.classList.remove('none')
        }
          //calculate number of teasks 
        count.innerText = allTasks.childElementCount ;
    }
let addNewTask = ()=>{
    // get value
    let data = inputTask.value;
    // get value without space
    let newdata = data.trim();
    // validation over volue 
    if (data.length == 0) {
        window.alert('please Enter Your Task First!');
    }else if (newdata.length <=3) {
        window.alert('Task should be greater than 3 character')
    }else if (newdata.length >=50) {
        window.alert('Task should be less than 50 character')
    }
    else{
        //add new task 
        allTasks.innerHTML +=   `<div class="alert alert-info"> ${data}  <Boutton class ="delete btn btn-danger float-end ">Delete</Boutton> </div> `  
        // remove value from input 
        inputTask.value ='';

        show();
    
    
    }

} 

AddButton.addEventListener('click' , addNewTask );

document.addEventListener('click' , (e)=> {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
        show();
    }
})
