document.addEventListener("DOMContentLoaded", onLoad);

async function onLoad() {
    let users = await getAllUsers();
    console.log(users);
    let container = document.getElementById("container");

    for(let i=0; i < users.length; i++) {
       let card = document.createElement("div");
       card.classList.add("card");
       
       let pname = document.createElement("p");
       pname.classList.add("front");
       let pemail = document.createElement("p");
       pemail.classList.add("front");
       let pphone = document.createElement("p");
       pphone.classList.add("front");
       let pcompany = document.createElement("p");
       pcompany.classList.add("front");
       
       pname.innerHTML = users[i].name;
       pemail.innerHTML = users[i].email;
       pphone.innerHTML = users[i].phone;
       pcompany.innerHTML = users[i].company.name;
       
       let btn = document.createElement("button");
       btn.innerHTML="Reverse";
       btn.addEventListener("click", onClickReverseButton);
       
       card.setAttribute("data-face","front");
       card.setAttribute("data-userId",users[i].id);

       card.append(pname, pemail, pphone, pcompany, btn);
    
       container.append(card);     
       
    }
}

async function getAllUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();

}

async function onClickReverseButton(event){

    let card =event.target.closest(".card");
    let cardFace = card.getAttribute("data-face");
    let userId = card.getAttribute("data-userId");
    let user = await getUserById(userId);

    console.log(user)
    if (cardFace === "front"){
        let frontElements = card.getElementsByClassName("front");
        for( let i = 0; i<frontElements.length; i++){
            card.removeChild(frontElements[i]);

        }
        let street = document.createElement("p");
        street.classList.add("back");
        let city = document.createElement("p");
        city.classList.add("back");
        let zip = document.createElement("p");
        zip.classList.add("back");
        
        street.innerHTML = user.address.street;
        city.innerHTML = user.address.city;
        zip.innerHTML = user.address.zipcode;
        card.append(street,city,zip);
        card.setAttribute("data-face","back");

    } else if (cardFace === "back"){
        let backElements = card.getElementsByClassName("back");
        for( let i = 0; i<backElements.length; i++){
            card.removeChild(backElements[i]);
        }
       let pname = document.createElement("p");
       pname.classList.add("front");
       let pemail = document.createElement("p");
       pemail.classList.add("front");
       let pphone = document.createElement("p");
       pphone.classList.add("front");
       let pcompany = document.createElement("p");
       pcompany.classList.add("front");
       
       pname.innerHTML = user.name;
       pemail.innerHTML = user.email;
       pphone.innerHTML = user.phone;
       pcompany.innerHTML = user.company.name;
       card.append(pname,pemail,pphone,pcompany);
       card.setAttribute("data-face","front");
    }
}

async function getUserById(userId){
    let response = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
    return response.json();
}