/*
DOM-Event
addEventListener

onclick
click
dblclick
mouseover
mouseenter
mousedown
mousemove
etc.
*/

//==============e.preventDefault()=========
document.getElementById("myCheckbox").addEventListener("click", function(event){
    event.preventDefault()
  });

//===============adding DOM-Event===========
const clickme = document.getElementById("btn");
clickme.onclick = (e) => {
  //   alert("Thanks for hittin me");
  clickme.innerHTML = "clicked";

  console.log("Thanks for hittin me");
  console.log(e.target);
  console.log(e.target.className[0]);
  console.log(e.target.id);
  console.log(Array.from(e.target.classList));
  console.log(e.offsetX);
  console.log(e.offsetY);
  console.log(e.clientX);
  console.log(e.clientY);
};
clickme.onmouseover = () => {
  clickme.style.color = "yellow";
  clickme.style.background = "green";
};
clickme.onmouseleave = () => {
  clickme.style.color = "";
  clickme.style.background = "";
};

//============Add Event Listener===========
const btnCenter = document.getElementsByClassName("btnCenter")[0];
// btnCenter.onclick = () => {
//     alert("Thanks for hittin me");
//   };
const sayHello = (e) => {
  alert("Hello");
  console.log(e.type);
  console.log(e.clientX, e.clientY);
};
const sayBye = (e) => {
  alert("Bye");
  console.log(e.type);
  console.log(e.clientX, e.clientY);
};
btnCenter.addEventListener("click", sayHello);
btnCenter.addEventListener("click", sayBye);
// const userValue = parseInt(prompt("Enter 0 to say bye"));
const userValue = 1;
if (userValue === 0) {
  btnCenter.removeEventListener("click", sayHello);
} else {
  btnCenter.removeEventListener("click", sayBye);
}

//===============trick=====================
// let a = document.getElementById("colorBox")
a = document.body;
a.addEventListener('mousemove', function(params) {
    // alert("hi")
    // console.log(params.offsetX,params.offsetY);
    document.body.style.backgroundColor=`rgb(${params.offsetX},${params.offsetY},154)`
    document.body.style.color='white'
})