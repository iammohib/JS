/*
Math
constrants from Math Object
Math.round(variable)
Math.pow(v1,v2)
Math.sqrt(value)
Ceil and Floor
Math.abs
Math.trunc
trigonomatric function
Minimum Value & Maximum Value
Math.random
random number btw (a,b)=a+(b-a)*Math.random()
*/

let x = Math;
console.log(x);

//printing the constrants from Math Object
console.log("Value of Maths.E is-", Math.E);
console.log("Value of Maths.PI is-", Math.PI);
console.log("Value of Maths.LN2 is-", Math.LN2);
console.log("Value of Maths.LOG2E is-", Math.LOG2E);
console.log("Value of Maths.LOG2 is-", Math.LOG2);

//------------Math.round()--------
x = Math.round(3.141);
y = Math.round(2.78);

console.log(x);
console.log(y);

//-------------Math.pow(v1,v2)-----------
x = Math.pow(5, 5);
y = Math.pow(2, 2);

console.log(x);
console.log(y);

//-------------SquareRoot, Math.sqrt(value)-------
x = Math.sqrt(25);
y = Math.sqrt(625);

console.log(x);
console.log(y);

//-------------Ceil and Floor---------
x = Math.ceil(5.78);
y = Math.floor(5.78);

console.log(x);
console.log(y);

//------------abs------------
x = Math.abs(5.78);
y = Math.abs(-5.28);

console.log(x);
console.log(y);

//-------------trunc------------
x = Math.trunc(8.67);
y = Math.trunc(8.17);
console.log(x);
console.log(y);

//------------trigonomatric function------------
x = Math.sin(Math.PI / 2);
y = Math.cos(Math.PI / 2);

console.log(x);
console.log(y);

//-----------Minimum Value & Maximum Value---------
x = Math.min(5, 1, 9);
y = Math.max(5, 1, 9);

console.log(x);
console.log(y);

//----------Math.random-------------
x = Math.random() * 100;
console.log(x);

// y = setInterval(() => {
//   x = Math.round(Math.random() * 100);
//   console.log(x);
// }, 1000);

//random number btw (a,b)=a+(b-a)*Math.random()
let a2 = 20;
let b2 = 75;
let r50_60 = Math.round(a2 + (b2 - a2) * Math.random());
console.log("The random number btw 1-100 is", r50_60);

// setInterval(() => {
//     console.log(Math.round(a2 + (b2 - a2) * Math.random()))
// }, 500);
