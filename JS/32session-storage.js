/*
setItem
getItem
removeItem
clear()

storage-event(window.onstorage)
 */
sessionStorage.setItem("name", "mohib");
sessionStorage.setItem("age", "21");
sessionStorage.setItem("gender", "male");
a = sessionStorage.getItem("name");
console.log("getting: ",a);
b = sessionStorage.removeItem("gender");
console.log("removed: ",b);

// sessionStorage.clear();
window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}
