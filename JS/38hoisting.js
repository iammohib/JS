/*
hoisting only possible for var
not for let or const or "functions variable"
*/
console.log(a);
name()
function name(params) {
    let a=6;
    console.log(a);
}
var a=7;
console.log(a)