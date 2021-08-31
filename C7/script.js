document.addEventListener("DOMContentLoaded", onLoad);
let counter = 0;

async function onLoad() {
    let users = await getUsers();
    console.log(users);
    let select = document.getElementById("assignee");
    for (let i = 0; i <users.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", users[i].name);
        option.innerHTML =users[i].name;

        select.append(option);
    }
    let btn = document.getElementById("submit");
    btn.addEventListener("click", onClickAddTaskBtn);

    let columns = ["not_started", "progress", "blocked", "finished"];
    for( let column of columns) {
        let container = document.getElementById(column);
        container.addEventListener("drop", onDrop);
        container.addEventListener("dragover", onDragOver)
    }
}

// not_starded -> progress, blocked
// progress -> blocked, finished, not_started
// finished -> X
// blocked -> progress, not_started
let transitions = {
    not_started: ["progress", "blocked"],
    progress: ["blocked", "finished", "not_started"],
    finished: [],
    blocked: ["progress", "not_started"]
}

function onDrop(event) {
    const id = event.dataTransfer.getData("id");
    const start_pile = event.dataTransfer.getData("start_pile");
    const end_pile = event.target.closest(".pile").getAttribute("id");
    if(transitions[start_pile].includes(end_pile)) {
        let elem = document.getElementById(id);
        event.target.closest(".pile").appendChild(elem);
    }
}

function onDragOver(event) {
    event.preventDefault();
}

function onClickAddTaskBtn() {

    let title = document.getElementById("title");
    let titleValue = title.value;
    let description = document.getElementById("description");
    let descriptionValue = description.value;
    let select = document.getElementById("assignee");
    let selectedValue = select.value;

    addTask(titleValue,descriptionValue, selectedValue);

}

function addTask(title, description, assignee, status = "not_started") {
    let task = document.createElement("div");
    task.classList.add("border","border-1");
    task.setAttribute("draggable",true);
    task.setAttribute("id", counter);
    task.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("id", task.getAttribute("id"));
        event.dataTransfer.setData("start_pile", task.parentElement.getAttribute("id"));
    })
    let titleElement = document.createElement("p");
    titleElement.innerHTML = title;
    let descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = description;
    let assigneeElement = document.createElement("p");
    assigneeElement.innerHTML = assignee;
    task.append(titleElement,descriptionElement,assigneeElement);
    let container = document.getElementById(status);
    container.append(task);
    counter++;
}
async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}