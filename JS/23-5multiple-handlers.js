/*
Multiple handlers
*/

const prom1 = new Promise((resolve,reject) => {
    console.log("hiting new promise");
    setTimeout(() => {
        resolve(true);
        reject(new Error("ERROR Accured"));
    }, 2000);
})

//handler-0
prom1.then((value)=>{
    console.log("handler 0");
    return new Promise((resolve,reject)=>{
        resolve("hey i am resolved");
    })
}).then((value)=>{
    console.log("the resolved value of handler 0 is : ",value);
})

//handler-1
prom1.then((value)=>{
    console.log("the resolved value of prom1 is via handler 1 : ",value);
})
//handler-2
prom1.then((value)=>{
    console.log("the resolved value of prom1 is via handler 2 : ",value);
})