/*
get Attribute
has Attribute
set Attribute
remove Attribute
Attribute
dataset
*/

const id1 = document.getElementById("container");

//========get Attribute==============
const id1Attribute = id1.getAttribute("class");
console.log(id1Attribute);

//=======has Attribute===============
const id1AttributeClass = id1.hasAttribute("class");
console.log(id1AttributeClass);
const id1AttributeStyle = id1.hasAttribute("style");
console.log(id1AttributeStyle);

//=======set Attribute===============
const id1setAttribute = id1.setAttribute("style","background:red");
console.log(id1setAttribute);

//=======remove Attribute===============
const id1removeAttribute = id1.removeAttribute("style");
console.log(id1removeAttribute);

//========Attribute=================
const id1allAttribute = id1.attributes;
console.log(id1allAttribute);

//=========dataset============
const id1dataset = id1.dataset;
console.log(id1dataset);
console.log(id1dataset.author);
console.log(id1dataset.book);
