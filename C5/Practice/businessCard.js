document.addEventListener("DOMContentLoaded", onLoad);

async function onLoad() {
    let users = await getAllUsers();
    console.log(users);

}

async function getAllUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}