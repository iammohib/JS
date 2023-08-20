//=================Matches()=======================
// it checks about another css selector, if the same element have or not
const container = document.getElementById(`container`);
// console.log(container)
console.log(container.matches(".crousel"));
console.log(container.matches(".card"));

//================closest=======================
//================returns closest element=========
const card = document.querySelector(".card");
console.log(container.closest(".crousel"));
console.log(card.closest(".crousel"));
console.log(card.closest(".card"));
console.log(card.closest(".box1")); //null

//===============contains==================
//===============returns true or false===========
console.log(container.contains(card));
console.log(container.contains(container));
console.log(card.contains(container));
