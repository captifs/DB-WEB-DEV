// const list = [1,2,3,4,5];

// let result = list.every((currentValue) => {
//     return currentValue > 3;
// });

// console.log(result);


// let list2 = list.map( (currentValue) => {
//     return currentValue * 3;
// });


// console.log(list2);


// let val = list.reduce( (total, currentValue) => {
//     return total * currentValue;
// }, 1);

// console.log(val);


let text = document.getElementsByTagName("div")[0];
let colors = ["blue", "yellow", "red", "orange", "pink", "black", "green"];
let counter = 0;
setInterval(setColor, 200);


function setColor() {
    text.style.color = colors[counter % colors.length];
    counter ++;
}

let divBlue = document.getElementById("div-blue");
divBlue.addEventListener("click", onClickBlueDiv);


let divBlack = document.getElementById("div-black");
divBlack.addEventListener("click", onClickBlackDiv);
// divBlack.addEventListener("click", onClickBlackDiv2);

function onClickBlueDiv(event) {
    console.log(event);
}

function onClickBlackDiv(event) {
    console.log("click 1");
    // event.stopPropagation(); // bubbling
    // event.stopImmediatePropagation(); // propagare pe laterala spre onClickBlackDiv2
    console.log(event);
}

function onClickBlackDiv2(event) {
    console.log("click 2");
    console.log(event);
}

let table = document.getElementsByTagName("table")[0];

table.addEventListener("click", onClickTableElem);

function onClickTableElem(event) {
    let elem = event.target;

    if (elem.closest("td")) {
        console.log("found closest td");
    }

    console.log(event.target);
}