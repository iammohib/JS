//problem-1
// let confirmation = true;
// while (confirmation == true) {
//   const userAge = parseInt(prompt(`Enter your age`));
//   if (userAge<=0) {
//     alert(`Age can't be zero or negative`)
//   } else{
//     const conditionCheck = userAge >= 18 ? `You can Drive` : `You can't`;
//     alert(conditionCheck);
//   }
//   confirmation = confirm(`Do you eant to see the prompt again`);
// }

//problem-2
// const userValue = parseInt(prompt(`Enter the number 4 to goto google.com`))
// if (userValue == 4) {
//   location.assign("https://google.com/")
// }

//problem-3
const colorCode = parseInt(prompt(`Enter 1 for red or 2 for green or 3 for yellow`))
if (colorCode == 1) {
  document.body.style.backgroundColor = `red`;
} else if (colorCode == 2){
  document.body.style.backgroundColor = `green`
} else if (colorCode == 3){
  document.body.style.backgroundColor = `yellow`
} else{
  document.body.style.backgroundColor = `black`
}