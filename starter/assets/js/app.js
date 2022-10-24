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

function taskHtml(count, icon, i) {
  let btn = `
        <button class="d-flex align-items-center border-0 border-top" data-bs-toggle="modal" data-bs-target="#update" onclick="editTask(${i})">
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

function reloadTask() {
  let count = 1;
  let NomberDone = 1;
  let NomberTodo = 1;
  let NomberInprogress = 1;
  // initialiser task form
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status == "To Do") {
      NbrTodo.innerHTML = NomberTodo;
      ToDO.innerHTML += taskHtml(count, iconTOdo, i);
      count++;
      NomberTodo++;
    }
    if (tasks[i].status == "Done") {
      NbrDone.innerHTML = NomberDone;
      Done.innerHTML += taskHtml(count, iconDone, i);
      count++;
      NomberDone++;
    }
    if (tasks[i].status == "In Progress") {
      NbrInprogress.innerHTML = NomberInprogress;
      InProgress.innerHTML += taskHtml(count, iconInprogress, i);
      count++;
      NomberInprogress++;
    }
  }
  // Afficher le boutton save

  // Ouvrir modal form
}
reloadTask();

function saveTaskEventSetUp() {
  document.getElementById("BtnSave").addEventListener("click", saveTask);

  function saveTask() {
    reloadTasks();
    // Créez task object
    // Recuperer task attributes a partir les champs input
    let Newdata = {
      title: document.getElementById("recipient-name").value,
      type: document.querySelector('input[name="flexRadioDefault"]:checked')
        .value,
      priority: document.getElementById("Proiority").value,
      status: document.getElementById("status").value,
      date: document.getElementById("date-input").value,
      description: document.getElementById("message-text").value,
    };
    // Ajoutez object au Array
    tasks.push(Newdata);

    document.getElementById("recipient-name").value = "";
    document.querySelector('input[name="flexRadioDefault"]:checked').value = "";
    document.getElementById("Proiority").value = "";
    document.getElementById("status").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("message-text").value = "";

    // refresh tasks
    reloadTask();
  }
}
saveTaskEventSetUp();
let updatebtnsave = document.getElementById("UpdatBtnSave");
let indexA;
function editTask(index) {
  // Initialisez task form
  indexA = index;
  document.getElementById("Updat-recipient-name").value = tasks[index].title;
  document.querySelector('input[name="flexRadioDefault"]:checked').value =
    tasks[index].type;
  document.getElementById("UpdatProiority").value = tasks[index].priority;
  document.getElementById("Updatstatus").value = tasks[index].status;
  document.getElementById("Updat-date-input").value = tasks[index].date;
  document.getElementById("Updat-message-text").value =
    tasks[index].description;
  // Affichez updates
  
  // Delete Button
  // document
  //   .getElementById("UpdatBtnDelete")
  //   .addEventListener("click", deleteTasks);
  // function deleteTasks() {
  //   reloadTasks();
  //   tasks.splice(index, 1);
  //   reloadTask();
  // }
  // Définir l’index en entrée cachée pour l’utiliser en Update et Delete
  // Definir FORM INPUTS
  // Ouvrir Modal form
}
updatebtnsave.addEventListener("click", ()=>{
  // let index=document.getElementById("index").innerHTML-1;
  // console.log(index);
  reloadTasks();

    tasks[indexA].title = document.getElementById("Updat-recipient-name").value;
    tasks[indexA].type = document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    ).value;
    tasks[indexA].priority = document.getElementById("UpdatProiority").value;
    tasks[indexA].status = document.getElementById("Updatstatus").value;
    tasks[indexA].date = document.getElementById("Updat-date-input").value;
    tasks[indexA].description =
      document.getElementById("Updat-message-text").value;
  reloadTask();
});
  

  // function updateTasks() {
  //   reloadTasks();
  //   tasks[index].title = document.getElementById("Updat-recipient-name").value;
  //   tasks[index].type = document.querySelector(
  //     'input[name="flexRadioDefault"]:checked'
  //   ).value;
  //   tasks[index].priority = document.getElementById("UpdatProiority").value;
  //   tasks[index].status = document.getElementById("Updatstatus").value;
  //   tasks[index].date = document.getElementById("Updat-date-input").value;
  //   tasks[index].description =
  //     document.getElementById("Updat-message-text").value;
  //   reloadTask();
  // }
// function updateTask() {
//   // GET TASK ATTRIBUTES FROM INPUTS
//   reloadTasks();
//   // Créez task object
//   // Remplacer ancienne task par nouvelle task
//   // Fermer Modal form
//   // Refresh tasks
// }

// function deleteTask() {
//   // Get index of task in the array
//   // Remove task from array by index splice function
//   // close modal form
//   // refresh tasks
// }

// function initTaskForm() {
//   // Clear task form from data
//   // Hide all action buttons
// }

function reloadTasks() {
  // Remove tasks elements
  ToDO.innerHTML = "";
  Done.innerHTML = "";
  InProgress.innerHTML = "";
  // Set Task count
}
