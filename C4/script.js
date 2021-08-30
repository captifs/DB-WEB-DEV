document.addEventListener("DOMContentLoaded", onLoad);

let changeColor = () => {
    var par1 = document.getElementById("p1");
    par1.style.color = "blue";
}

function onClickSubmitBtn() { // este suprascris de submitBtn.onclick
    console.log("Am dat click");
}

function onLoad() {
    changeColor();
    insertParInDom();
    submitBtnEvents();
    loginBtnEvents();



    // procesare input
    let form = document.forms["myForm"];
    let input = document.forms["myForm"]["myInput"];
    let valString = input.value;
    let valInt = +valString;
}

function insertParInDom() {
    // insert elements in DOM
    let container = document.getElementById("container");
    let newPar = document.createElement("p");
    newPar.innerHTML = "This is my new paragraph";
    newPar.setAttribute("id", "my-new-par");
    container.appendChild(newPar);

    // document.write("<p>New text</p>");
}

function submitBtnEvents() {
    let submitBtn = document.getElementById("btnSubmit");
    submitBtn.onclick = function() {
        console.log("Am dat click a 2a oara");
    }
}

function loginBtnEvents() {
    let btnLogin = document.getElementById("btnLogin");
    btnLogin.addEventListener("click", onClickLoginBtn);
    btnLogin.addEventListener("click", onClickLoginBtn2);

    btnLogin.removeEventListener("click", onClickLoginBtn);

    btnLogin.addEventListener("mouseenter", onMouseEnterLoginBtn);
    btnLogin.addEventListener("mouseleave", onMouseLeaveLoginBtn);
}


// event listener
function onClickLoginBtn() {
    console.log("click pe login btn");
}

function onClickLoginBtn2() {
    console.log("al doilea click pe login btn");
}


function onMouseEnterLoginBtn(event) {
    let btn = event.target;
    btn.style.color = "blue";
}

function onMouseLeaveLoginBtn(event) {
    let btn = event.target;
    console.log(event);
    console.log(btn);
    btn.style.color = "pink";
}