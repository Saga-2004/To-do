let draggedCard = null;
function addTask(coluumnId) {
  const input = document.getElementById(`${coluumnId}-input`);
  // console.log(input);
  const taskText = input.value;
  // console.log(taskText);

  if (!taskText) {
    return;
  }

  const taskElement = createtaskElement(taskText);
  document.getElementById(`${coluumnId}-tasks`).appendChild(taskElement);
  input.value = "";
}

function createtaskElement(taskText) {
  const takeElement = document.createElement("li");
  takeElement.innerText = taskText;
  takeElement.classList.add("card");

  // takeElement.setAttribute("draggable",true) //OR
  takeElement.draggable = true;

  takeElement.addEventListener("dragstart", dragStart);
  takeElement.addEventListener("dragend", dragEnd);

  return takeElement;
}

function dragStart() {
  this.classList.add("dragging");
  draggedCard = this;
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
  this.appendChild(draggedCard);
}
