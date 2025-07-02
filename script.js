let rightClickedCard = null;
function addTask(columnId) {
  const input = document.getElementById(`${columnId}-input`);
  // console.log(input);
  const taskText = input.value;
  // console.log(taskText);

  if (!taskText) {
    return;
  }

  const taskElement = createTaskElement(taskText);
  document.getElementById(`${columnId}-tasks`).appendChild(taskElement);
  // saveTasksToLocalStorage(columnId, taskText);
  input.value = "";
}

function createTaskElement(taskText) {
  const element = document.createElement("li");
  element.innerHTML = taskText;
  element.classList.add("card");

  let date = document.createElement("p");
  date.className = "dateInsideTask";
  date.innerHTML = new Date().toLocaleString();
  element.appendChild(date);

  // element.setAttribute("draggable",true) //OR
  element.draggable = true;

  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragend", dragEnd);
  element.addEventListener("contextmenu", function (e) {
    element.classList.add("addContextMenu");
    e.preventDefault();
    rightClickedCard = this;
    showContextMeny(e.pageX, e.pageY);
  });

  return element;
}

function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

const columns = document.querySelectorAll(".column > ul.tasks");
columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
});

function dragOver(e) {
  e.preventDefault();
  const draggedCard = document.querySelector(".dragging");
  // this.append(draggedCard);  // OR
  this.append(draggedCard);
}

function showContextMeny(x, y) {
  let menu = document.querySelector(".contextMenu");
  menu.style.left = `${x}px`;
  menu.style.top = `${y}px`;
  menu.style.display = "block";
}

document.addEventListener("click", () => {
  let menu = document.querySelector(".contextMenu");
  menu.style.display = "none";
});

function editTheTask() {
  // console.log(rightClickedCard);
  let newTask = prompt("Edit task:", "Edit here");
  if (!newTask) {
    rightClickedCard.remove();
  } else {
    rightClickedCard.innerText = newTask;
  }
}
function deleteTheTask() {
  rightClickedCard.remove();
  // console.log("Delete done");
}

// function saveTasksToLocalStorage(columnId, taskText) {
//   const task = localStorage.getItem(columnId) || [];
//   task.push({ text: taskText });
//   localStorage.setItem(columnId, JSON.stringify(task));
// }
