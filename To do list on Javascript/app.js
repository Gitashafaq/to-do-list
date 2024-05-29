let form=document.querySelector("form");
let input=document.querySelector("input");
let small=document.querySelector("small");
let tasks= JSON.parse(window.localStorage.getItem("tasks")) || [];


// submitting the form
form.addEventListener("submit",function(e){
    e.preventDefault();

   if(input.value ==""){
    small.innerText ='Please enter your task!';
   }else{
    small.innerText ='';

    tasks.push(input.value)
    input.value ='';
   }

//    convert data to json and set to local storage
   window.localStorage.setItem("tasks",JSON.stringify(tasks));



//    call the load data function
   loadData();
});



// load data to table

function loadData(){
    let tableData =document.querySelector("#table-data");
     let html ='';
    tasks.forEach(function(v){
     html += `
     <tr>
     <td> ${v} </td>

     <td style="width: 60px;">
       <button class="btn btn-success delete-btn btn-sm" data-content= '${v}'>Delete</button>
     </td>
     </tr>
     
     `;
    });
    tableData.innerHTML = html;

    removeItems()
}
    loadData();




// remove value

function removeItems(){
    let deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach(function(v){
        v.addEventListener("click",function(){
            let content = this.getAttribute("data-content");
       let newTasks = tasks.filter(function(task){
                return task != content;
            });

            window.localStorage.setItem("tasks",JSON.stringify(newTasks));
            window.location.reload();
        });
    });
}

removeItems();