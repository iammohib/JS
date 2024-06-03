const add = () => {
    taskElem = document.getElementById("task");
    task = taskElem.value;
    // console.log(task);
    taskList = document.getElementById('toDoList')
    let newTask = document.createElement('div');
    newTask.innerText=task
    taskList.append(newTask)
    taskElem.value = ""
  };

  let toDoList = document.getElementById('toDoList');
  toDoList.addEventListener('click',(event)=>{
    console.log(event.target);
    event.target.setAttribute("style",'text-decoration: line-through')
  })