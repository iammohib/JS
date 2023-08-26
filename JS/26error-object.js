// // console.log(`Error-Object`)
// try{
//     // console.log(mohib);
//     // throw new Error(`I am an error`)
//     throw new ReferenceError(`this is an error`);
// } catch(error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

//==========throwing custom error===============
try{
    const userAge = prompt(`Enter your age`);
    const userAgeInt = parseInt(userAge);
    if(userAgeInt>150){
        throw new Error("Are you kidding me");
    } else{
        console.log(userAgeInt)
    }
} catch(error){
    console.log(error)
}