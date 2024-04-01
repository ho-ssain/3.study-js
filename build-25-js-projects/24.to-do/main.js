const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list-wrapper");
let currentEditedTask = null;

// adding/creating tasks

function storeTasksInLocalStorage(currentTask) {
  let taskList;
  if (localStorage.getItem("tasks") === null) {
    taskList = [];
  } else {
    taskList = JSON.parse(localStorage.getItem("tasks"));
  }
  taskList.push(currentTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function createNewTask(currentTask) {
  // Create new li element for each task
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = currentTask;
  li.appendChild(p);

  // edit button
  const editBtn = document.createElement("i");
  editBtn.classList.add("edit-btn", "fa-solid", "fa-pen-to-square");
  li.appendChild(editBtn);

  // delete button
  const delBtn = document.createElement("i");
  delBtn.classList.add("delete-btn", "fa-regular", "fa-trash-can");
  li.appendChild(delBtn);

  return li;
}

function handleEditCurrentTask(currentTask) {
  let taskList = JSON.parse(localStorage.getItem("tasks"));
  let index = taskList.indexOf(currentTask);
  taskList[index] = input.value;
  localStorage.setItem("tasks", JSON.stringify(taskList));
}

function addNewTask() {
  const value = input.value;
  if (value === "") return alert("Please enter a valid task!");
  else if (addBtn.innerText === "Edit") {
    handleEditCurrentTask(
      currentEditedTask.target.previousElementSibling.innerHTML
    );
    currentEditedTask.target.previousElementSibling.innerHTML = value;
    addBtn.innerText = "Add";
    input.value = "";
  } else {
    // creating new task
    const newTask = createNewTask(value);
    taskList.appendChild(newTask);
    input.value = "";
    // save to local storage
    storeTasksInLocalStorage(value);
  }
}

// edit and delete tasks

function removeTaskFromLocalStorage(currentTask) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  let currentTaskText = currentTask.children[0].innerHTML;
  let index = tasks.indexOf(currentTaskText);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function handleEditAndDelete(e) {
  if (e.target.classList[0] === "delete-btn") {
    taskList.removeChild(e.target.parentElement);
    removeTaskFromLocalStorage(e.target.parentElement);
  }

  if (e.target.classList[0] === "edit-btn") {
    input.value = e.target.previousElementSibling.innerText;
    input.focus();
    addBtn.innerText = "Edit";
    currentEditedTask = e;
  }
}

// fetching tasks

function fetchTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks == null) return;
  const tasks = JSON.parse(storedTasks);
  tasks.forEach((task) => {
    const li = createNewTask(task);
    taskList.appendChild(li);
  });
}

// eventlistener
addBtn.addEventListener("click", addNewTask);
document.addEventListener("DOMContentLoaded", fetchTasks);
taskList.addEventListener("click", handleEditAndDelete);
