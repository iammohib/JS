/*
Assignmment Operator:   =
Equality Operator:    ==
Strict Equality Operator:   ===
Not Equal to Operator:  !=
Strict Not Equal to Operator:   !==
Ternary Operator 
The strict equality ( === ) operator checks whether its two operands are equal, returning a Boolean result.

*/

//Boolean
let x = true;

if (x) {
  console.log(`The condition is true.`);
} else {
  console.log(`The condition is not true.`);
}

x = false;

if (x) {
  console.log(`The condition is false.`);
} else {
  console.log(`The condition is false.`);
}

//euality check
x = 77;

if (x == 77) {
  console.log(`The value of variable x is: ${x}`);
} else {
  console.log(`The value of variable x is not: ${x}`);
}

//strict equality
x = `77`;

if (x === 77) {
  console.log(`No, The variable is not Number`);
} else if (x === `77`) {
  console.log(`The variable is string: ${x}`);
} else {
  `Error`;
}

//Not Euality Check
x = `12`;

if (x != 12) {
  console.log(`x is not equal to 12`);
} else if (x === `12`) {
  console.log(`x is equal to '12'`);
} else {
  console.log(`error`);
}

//Strict Not Euality Check
x = false;

if (x !== true) {
  console.log(`x is false`);
} else {
  console.log(`error`);
}

//Check if variable exists or not
const vari = 99;
if (typeof vari !== "undefined") {
  console.log("Vari is defined");
} else {
  console.log("Vari is not defined");
}

//Second
let name;
if (typeof name === `undefined`) {
  console.log(`Value is undefined, ${name}`);
} else if (typeof name !== `undefined`) {
  console.log(`Value of name, ${name}`);
}

//and(&) + condition
let driverAge = 21;
let licence = false;

if (licence & (driverAge >= 18)) {
  console.log(`You can Drive`);
} else {
  console.log(`You can't Drive`);
}

//or(||) + condition
driverAge = 21;
licence = false;

if (licence || driverAge >= 18) {
  console.log(`You can Drive`);
} else {
  console.log(`You can't Drive`);
}

//Ternary Operator
age = 26;
beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

//Switch
let age = 21;

switch (age) {
  case 18:
    console.log("Your are 18");
    break;
  case 21:
    console.log("Your are 21");
    break;

  default:
    console.log(`Error`);
    break;
}

//2nd
let day = new Date().getDay();
switch (day) {
  case 1:
    console.log(`Its Monday`);
    break;
  case 2:
    console.log(`Its Teusday`);
    break;
  case 3:
    console.log(`Its Wednesday`);
    break;
  case 4:
    console.log(`Its Thursday`);
    break;
  case 5:
    console.log(`Its Friday`);
    break;
  case 6:
    console.log(`Its Saturday`);
    break;
  case 7:
    console.log(`Its Sunday`);
    break;

  default:
    console.log(`Error`);
    break;
}

//string variable
name = "aman";
switch (name) {
  case "Aman":
    console.log("Name is Aman");
    break;

  case "aman":
    console.log("Name is 'aman'");
    break;

  default:
    console.log("Error");
    break;
}
