// document.addEventListener("DOMContentLoaded", onLoad1);

async function onLoad() {
    // get all users
    // let users = {};
    // getAllUsers().then(
    //     result => {
    //         console.log(result);
    //         users = result; // doar aici avem users de pe server
    //     }
    // );

    let users = await getAllUsers();
    users[0];

    console.log(users);

    // return new Promise((resolve, reject) => {
    //     resolve(users);
    // });

    return users;
    
}

async function getAllUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
}

// async function onLoad1() {
    let response = fetch("https://jsonplaceholder.typicode.com/users").then(
        response => {
            response.json().then(
                users => {
                    console.log(users);
                }
            );
        }
    );
    
// }