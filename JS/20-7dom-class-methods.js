/*
className
classList
classList.remove
classList.add
classList.toggle
*/

const container = document.getElementById("container");
container.className = "bg color";
console.log(container.classList);

// container.classList.remove("color");
// container.classList.add("color2");

//toggle method
// container.classList.toggle("color")
console.log(container.classList.contains("color"))