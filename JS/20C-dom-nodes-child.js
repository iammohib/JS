/*
childNodes*: shows everthing(text,comment etc)
(recommended)
children: show only main elemets(excluding text, comment etc)

// Node Type Node Name
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. document
// 10. docType

parentElement
parentNode
nextSibling
previousSibling
nextElementSibling
previousElementSibling
documentElement returns: HTML

firstElementChild
childElementCount
children
children[0]
lastElementChild

Table Navigation - Methods
Nodevalue/Data
*/

//Node Name/ Node Type
console.log(document.body.childNodes[0].nodeName);
console.log(document.body.childNodes[0].nodeType);

//========Children========
//gives all the children, in HTML collection
children = document.body.children;
console.log(children);
// for (const iterator of children) {
//   console.log(iterator)
// }

//========Child-Nodes========
//gives all the child nodes
childNodes = document.body.childNodes;
console.log(childNodes);

// for (const iterator of childNodes) {
//     console.log(iterator)
// }

childNodes3 = document.body.childNodes[3];
console.log(childNodes3);

childNodesLast = document.body.childNodes[childNodes.length - 1];
console.log(`childNodesLast`);
console.log(childNodesLast);

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

console.log(fChild.nextElementSibling);
console.log(fChild.previousElementSibling);

console.log(`\nparentnode`);
//documentElement: returns the Element that is the root element of the document
console.log(document.documentElement); //returns: HTML
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement); //null

console.log(`\nElement Only Navigation`);
//=========Element Only Navigation==============
//children:-
b = document.body;
console.log(b.firstElementChild);
console.log(b.childElementCount);
console.log(b.children);
console.log(b.children[0]);
console.log(b.lastElementChild);

//========Operation on element===========
const changeBg = () => {
  // b.firstElementChild.innerHTML = `dom`;
  // b.firstElementChild.innerText = `dom-text`;
  b.firstElementChild.style.color = "blue"; //not working on main element
  b.firstElementChild.style.background = "black";
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

//============Nodevalue/Data=========
console.log("\n\n");
const firstdata = document.body.childNodes[1];
console.log(firstdata.nodeValue);
console.log(firstdata.data);

console.log(document.body.textContent);
