const key = prompt("Enter the key:");
const value = prompt("Enter the value:");

document.cookie = "name2=aman";
document.cookie = "name1=mohib";
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log("cookies are:", document.cookie);

const dKey = decodeURIComponent(encodeURIComponent(key));
const dValue = decodeURIComponent(encodeURIComponent(value));
console.log(dKey,dValue)

