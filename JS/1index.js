//----------Printing basic code in the console----//
console.log(`Hello World`);

// ----------Template Literals-----//
const name = `Aman`;
const age = 21;

const description = `${name} is a very bright student. His age is ${age}.
Disclaimer: Template Literals takes white-spaces and enter seriously`;
console.log(description);

//----------Console Methods-------//
console.time(`Time Taken`);

console.table({
  name: `mohib`,
  age: `21`,
});

console.group(`Student Details`);
console.log(`mohib`);
console.log(`21`);
console.groupEnd("Student Details");

console.timeEnd(`Time Taken`);

/* Most common programming case types:
1. camelCase  
2. kebab-case
3. snake_case 
4. PascalCase
*/
