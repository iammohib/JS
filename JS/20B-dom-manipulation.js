/*
element selectors & manipulation:
1. Single element selector
2. Multiple element selector

dom manipulation by ID
dom manipulation by className
dom manipulation by query selector
dom manipulation by query selector all
child combinator selector
dom manipulation by Tag Name
get element by name
TECHNIQUE to learn: walking in dom
*/

//=====dom manipulation by ID==========
const container = document.getElementById("container");
// console.log(container)
// console.log(container.id)
// console.log(container.className)
container.style.background = "#f1d48f"; //manipulation in style

let heading = document.getElementById("heading");
// console.log(heading);
heading.innerHTML += `mohib`;

//=====dom manipulation by className==========
const content = document.getElementsByClassName("content")[2];
content.style.color = "green";

//=====dom manipulation by query selector==========
const img = document.querySelector("img");
img.src =
  "https://www.artinstitutes.edu/~/media/ai/main/images/publications/blog/onlinephotonov/photographyphoto.ashx?modified=20181123034155&la=en&hash=061F51B0825AEC249CED44DB5E32432D3FEA05C2";

//=====dom manipulation by query selector all==========
const images = document.querySelectorAll("img");
// console.log(images);

const h1 = document.querySelectorAll("h1");
// console.log(h1);
// h1[1].style.color = "blue";
// h1[2].style.color = "red";
// h1[3].style.color = "green";
for (let index = 1; index < h1.length; index++) {
  // h1[index].style.color = "red";
}
for (const iterator of h1) {
  // iterator.style.color = "blue";
}
Array.from(h1).forEach((element) => {
  element.style.color = "orange";
});

//=====child combinator selector==========
let select2 = document.querySelector("#container>.card");
console.log(select2);
let selectt = document.querySelectorAll("#container>.card");
console.log(selectt);

//=====dom manipulation by Tag Name==========
const p = document.getElementsByTagName("p");
// console.log(p.length);
// console.log(p);
// p[0].innerHTML += `<span>Let's Learn Photography</span> `;
let pArray = Array.from(p);
for (let index = 0; index < pArray.length; index++) {
  pArray[index].innerHTML += `<span>Let's Learn Photography</span> `;
}

const span = document.getElementsByTagName("span");
span[0].style.display = "block";

//===============get element by name===========
const search = document.getElementsByName("search");
// console.log(search);
search[0].setAttribute("placeholder", "SEARCH");

//============TECHNIQUE to learn==========
const flexContainer = document.querySelector("#container");
const fConCard = flexContainer.getElementsByClassName("card")[0];
fConCard.style.color = "red";

async function rmChild() {
  cardNo = parseInt(prompt("Enter Card No. which you want to delete: "));
  flexContainer.removeChild(
    flexContainer.getElementsByClassName("card")[cardNo]
  );
}
