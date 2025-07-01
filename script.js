const { createElement } = require("react");

function addTask(coluumnId){
    const input = document.getElementById(`${coluumnId}-input`);
    // console.log(input);
    const  taskText = input.value;
    // console.log(taskText);

    if(!taskText){
        return;
    }

    const taskElement = createtaskElement(taskText);
    document.getElementById(`${coluumnId}-tasks`).appendChild(taskElement);
    input.value = ""
    
} 

function createtaskElement(taskText){
    const takeElement = document.createElement("li");
    takeElement.innerText = taskText;
    takeElement.classList.add("card")
    
    return takeElement
}