//========Child-Nodes========
childNodes = document.body.childNodes;
console.log(childNodes);
// for (const iterator of childNodes) {
//     console.log(iterator)
// }

childNodes3 = document.body.childNodes[3];
console.log(childNodes3);

childNodes3 = document.body.childNodes[childNodes.length - 1];
console.log(`childNodes3`);
console.log(childNodes3);

fChild = document.body.firstChild;
console.log(fChild);

lChild = document.body.lastChild;
console.log(lChild);

//==========Operations on child-nodes===========
childArray = Array.from(childNodes);
console.log(childArray);

// for (const iterator of childArray) {
//     console.log(iterator)
// }

//=========Parent & sibling===========
console.log(document.body.parentElement);

console.log(fChild.parentNode);
console.log(fChild.parentElement);

console.log(fChild.parentElement.nextSibling); //null
console.log(fChild.parentElement.previousSibling);

console.log(`parentnode`);
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement); //nul

console.log(`\nElement Only Navigation`);
//=========Element Only Navigation==============
b = document.body;
console.log(b.firstElementChild);

//========Operation on element===========
const changeBg = () => {
  b.firstElementChild.style.color = "green";
  b.firstElementChild.style.background = "yellow";
};
changeBg();

console.log(`\nTable Navigation`);
//==========Table Navigation===========
let table =
  document.body.firstElementChild.nextElementSibling.firstElementChild;

console.log(table);
console.log(table.caption);
console.log(table.tHead);
console.log(table.tHead.firstElementChild);
console.log(table.rows);
console.log(table.tBodies);
console.log(table.tFoot);
console.log(table.rows[1]);
