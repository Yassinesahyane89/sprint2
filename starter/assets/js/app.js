/**
 * In this file app.js you will find all CRUD functions name.
 *
 */

// Variable
let ToDO = document.getElementById("to-do-tasks");
let Done = document.getElementById("done-tasks");
let InProgress = document.getElementById("in-progress-tasks");
let iconTOdo = "fa-regular fa-circle-question fa-2xl";
let iconInprogress = "fa fa-circle-notch fa-2xl";
let iconDone = "fa-regular fa-circle-check fa-2xl";
let NbrTodo = document.getElementById("to-do-tasks-count");
let NbrInprogress = document.getElementById("in-progress-tasks-count");
let NbrDone = document.getElementById("done-tasks-count");
let count = 1;
let NomberDone = 1;
let NomberTodo = 1;
let NomberInprogress = 1;

function button(count, icon, i) {
  let btn = `
        <button class="d-flex align-items-center border-0 border-top">
            <div class="col-1 text-success">
                <i class="${icon}"></i> 
            </div>
            <div class="col-11 text-start">
                <div class="fw-800">${tasks[i].title}</div>
                    <div class="">
                        <div class="fw-100">#${count} created in ${tasks[i].date}</div>
                        <div class="title1" title="${tasks[i].description}">${tasks[i].description}</div>
                    </div>
                    <div class="">
                        <span class="btn btn-primary btn-sm">${tasks[i].priority}</span>
                        <span class="btn btn-secondary btn-sm">${tasks[i].type}</span>
                    </div>
            </div>
        </button>
        `;
  return btn;
}

function add(i) {
  if (tasks[i].status == "To Do") {
    NbrTodo.innerHTML = NomberTodo;
    ToDO.innerHTML += button(count, iconTOdo, i);
    count++;
    NomberTodo++;
  }
  if (tasks[i].status == "Done") {
    NbrDone.innerHTML = NomberDone;
    Done.innerHTML += button(count, iconDone, i);
    count++;
    NomberDone++;
  }
  if (tasks[i].status == "In Progress") {
    NbrInprogress.innerHTML = NomberInprogress;
    InProgress.innerHTML += button(count, iconInprogress, i);
    count++;
    NomberInprogress++;
  }
}

function createTask() {
  // initialiser task form
  for (let i = 0; i < tasks.length; i++) {
    add(i);
  }
  // Afficher le boutton save

  // Ouvrir modal form
}

createTask();
function saveTask() {
  document.getElementById("BtnSave").addEventListener("click", displayDate);

  function displayDate() {
    let Newdata = {
      title: document.getElementById("recipient-name").value,
      type: document.querySelector('input[name="flexRadioDefault"]:checked')
        .value,
      priority: document.getElementById("Proiority").value,
      status: document.getElementById("status").value,
      date: document.getElementById("date-input").value,
      description: document.getElementById("message-text").value,
    };
    tasks.push(Newdata);
    add(tasks.length - 1);
  }
  // Recuperer task attributes a partir les champs input
  // Créez task object
  // Ajoutez object au Array
  // refresh tasks
}
saveTask();
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
