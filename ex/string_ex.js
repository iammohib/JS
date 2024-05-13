// Print A-Z
// for(let i = 65; i<65+26;i++){
//     console.log(String.fromCharCode(i))
// }

// // Total  number of vowels used in
// const str = "I am Mohib. i am mohib";
// const num = str.match(/([a,e,i,o,u])/gi);
// console.log(num.length)

// Total  number of vowels used in
// const str2 = "I am Mohib. i am mohib";
// const vowels = 'aeiou'
// let vowelCheck = true;
// for (const iterator of vowels) {
//     vowelCheck = str2.includes(iterator)
//     if(!vowelCheck) break
// }
// if(vowelCheck){
//     console.log("Yes")
// }else{
//     console.log("No")
// }

// isPangram
const str3 = "abcdefghijklmnopqrstuvwxzy";
let isPangram = true;
for(let i = 65,j=97;i<65+26,j<97+26;i++,j++){
    isPangramCheck = str3.includes(String.fromCharCode(i))
    isPangramCheck2 = str3.includes(String.fromCharCode(j))
    if(!isPangramCheck && !isPangramCheck2) break
}
if(isPangramCheck || isPangramCheck2){
    console.log("Yes is Pangram")
}else{
    console.log("No is not Pangram")
}