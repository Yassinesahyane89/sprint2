
/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

// console.log(tasks);
 

var ToDO = document.getElementById("to-do");
var Done = document.getElementById("done");
var InProgress = document.getElementById("in-progress");
let iconTOdo = "fa-regular fa-circle-question fa-2xl";
let iconInprogress = "fa fa-circle-notch fa-2xl";
let iconDone = "fa-regular fa-circle-check fa-2xl";
// var block = document.createElement("button");

// ToDO.appendChild(block);
               
function button(status,Nbr,count,icon,title,date,description,priority,type){
    let btn =
    `
    <div class="d-flex flex-column" id="to-do-tasks">
        <button class="d-flex align-items-center border-0 border-top">
            <div class="col-1 text-success">
                <i class="${icon}"></i> 
            </div>
            <div class="col-11 text-start">
                <div class="fw-800">${title}</div>
                    <div class="">
                        <div class="fw-100">#${count} created in ${date}</div>
                        <div class="title1" title="${description}">${description}</div>
                    </div>
                    <div class="">
                        <span class="btn btn-primary btn-sm">${priority}</span>
                        <span class="btn btn-secondary btn-sm">${type}</span>
                    </div>
            </div>
        </button>
    </div>`
    return btn;  
}

 function createTask() {
    // initialiser task form
    let count=1;
    let NomberDone=1;
    let NomberTodo=1;
    let NomberInprogress=1;
    for(let i=0; i<tasks.length;i++){
        if(tasks[i].status=='To Do'){
            ToDO.innerHTML +=button(count,iconTOdo,tasks[i].title,tasks[i].date,tasks[i].description,tasks[i].priority,tasks[i].type);
            count++;
            NomberDone++;
        }    
       if(tasks[i].status=='Done'){
        Done.innerHTML += button(tasks[i].status,NomberTodo,count,iconDone,tasks[i].title,tasks[i].date,tasks[i].description,tasks[i].priority,tasks[i].type);
        count++;
        NomberTodo++;
    }
    if (tasks[i].status=='In Progress'){
        InProgress.innerHTML += button(tasks[i].status,NomberInprogress,count,iconInprogress,tasks[i].title,tasks[i].date,tasks[i].description,tasks[i].priority,tasks[i].type);
        count++;
        NomberInprogress++;
    }
}
    // Afficher le boutton save

    // Ouvrir modal form
    
}

createTask();
function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}