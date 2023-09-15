/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

it never return variable value but returns its refrences
*/let name = "mohib";
const func=()=>{
    name = "mr.mohib";
    const funcName = ()=>{
        console.log(name);
    }
    name= "mr.hacker"
    return funcName;
}
const rtrfunc = func();
rtrfunc();