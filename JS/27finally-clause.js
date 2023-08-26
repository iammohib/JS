/*
finally clause runs in all scenario
*/
const funct1 = () =>{

try{
    console.log(func);
    console.log(`Code runing succesfully`);
    return "\nhey i am return"
} catch(error){
    console.log(error)
} finally{
    console.log(`End of process`)
}
}

const funcValue = funct1()
console.log(funcValue)
console.log(`bye bye`)