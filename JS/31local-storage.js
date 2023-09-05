/*
localStorage.clear()
window.onstorage
localStorage.setItem
localStorage.removeItem
localStorage.getItem
*/
// clear localstorage
localStorage.clear();

//storage event
window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}

//custom-storage
const getuserid=prompt("Enter your name:");
localStorage.setItem('Userid:',getuserid)

//methods
const nameKey = "name";
const nameValue = "mohib";
const ageKey = "age";
const ageValue = "21";
const rKey = "rmKey";
const rValue = "rmValue";

localStorage.setItem(nameKey, nameValue);
localStorage.setItem(ageKey, ageValue);

localStorage.setItem(rKey, rValue);
localStorage.removeItem(rKey)

console.log(`${nameKey} : ${localStorage.getItem(nameKey)}`);

//working with arr
let arr=['aman','alok','anand']
localStorage.setItem('userid', JSON.stringify(arr))
let usernameArr=JSON.parse(localStorage.getItem('userid'));
console.log(usernameArr)

// const clear = confirm("Want to clear local Storage?")
// if (clear == 1) {
//     localStorage.clear()
// }
