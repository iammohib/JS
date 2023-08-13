//Object in JavaScript
//The syntaxs of creating object are following
const user1 = new Object(); // "object constructor" syntax
const user2 = {}; // "object literal" syntax

const myObj={
    fName:'Mohd',
    mName:'Mohibuddin',
    lName:'Hussain',
    'my age':20,
    'happy':true
}
console.log(myObj);

//The syntax for accessing the property of an object is
//The dot notation (.)
console.log(myObj.mName)

//Array-like notation ( [])
console.log(myObj["mName"])
console.log(myObj["my age"])