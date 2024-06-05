// Retrive data from localstorage
const getToDoData = () => {
  const jsondata = localStorage.getItem("todo");
  return JSON.parse(jsondata);
};

// Fetch and show data from localStorage
if (getToDoData()) {
  for (const i of getToDoData()) {
    taskList = document.getElementById("toDoList");
    let newTask = document.createElement("div");
    newTask.innerHTML = `<li>${i}</li>
    <button class="dltbtn">Delete</button>`;
    taskList.append(newTask);
  }
} else {
  let todo = [];
  localStorage.setItem("todo", JSON.stringify(todo));
}

// Get new task and update todo in localstorage
const addToDo = (e) => {
  const data = getToDoData();
  let taskElem = document.getElementById("task");
  taskValue = taskElem.value;
  data.push(taskValue);

  localStorage.setItem("todo", JSON.stringify(data));

  toDoList = document.getElementById("toDoList");
  let newTask = document.createElement("div");
  newTask.innerHTML = `<li>${taskValue}</li>
  <button class="dltbtn">Delete</button>`;
  toDoList.append(newTask);
  taskElem.value = "";
};

document.getElementById("btn").addEventListener("click", (e) => {
  addToDo(e);
});

// Delete todo task
const toDoList2 = document.getElementById("toDoList");
toDoList2.addEventListener("click", (event) => {
  if (event.target.classList.contains("dltbtn")) {
    dltTask = event.target.previousElementSibling.innerText;
    const data = getToDoData();
    newdata = data.filter((item) => item !== dltTask);
    localStorage.setItem("todo", JSON.stringify(newdata));

    event.target.parentElement.innerHTML = "";
  }
});
