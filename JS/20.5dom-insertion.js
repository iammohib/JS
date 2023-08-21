/*
insertion method
appendChild: parent element add new child, at last
append: parent element add new child, at last
prepend: parent element add new child, at first
before: parent element add new element as sibling, after itself
after: parent element add new element as sibling, before itself
replaceWith: replace the existing element itself
*/
let titleHead = document.getElementById("titleHead");
// titleHead.innerHTML += `<div>insertion method</div>`;

//=======create element and append child=========
let newDiv = document.createElement("div");
newDiv.innerHTML = `<div style="color:white">-Insertion Method</div>`;

titleHead.appendChild(newDiv)
// titleHead.append(newDiv)
// titleHead.prepend(newDiv)
// titleHead.before(newDiv)
// titleHead.after(newDiv)
// titleHead.replaceWith(newDiv)
