/*
async returns promises value
*/

// //using async
// async function func1(){
//     return 5;
// }
// func1().then((value)=>{
//     console.log(value);
// })

//async usecase
const weatherFunct = async () => {
  const delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`34 degree`);
      reject(new Error(`Failed to fetch`));
    }, 1200);
  });
  const lucknowWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`32 degree`);
      reject(new Error(`Failed to fetch`));
    }, 2000);
  });

  // delhiWeather.then(alert)

  // delhiWeather.then((value)=>{
  //     console.log(value);
  // })
  // lucknowWeather.then((value)=>{
  //     console.log(value);
  // }).catch((error)=>{
  //     console.log(error)
  // })

  console.log(`fething delhi weather`);
  const delhiW = await delhiWeather;
  console.log(`Delhi Weather: `, delhiW);
  console.log(`fetching lucknow weather`);
  const lucknowW = await lucknowWeather;
  console.log(`Lucknow Weather: `, lucknowW);
  return [delhiW, lucknowW];
};

const greet = async () => {
  setTimeout(() => {
    console.log(`hi hello bye`);
  }, 1500);
};
// const weather = weatherFunct();
// weather.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })

const funct1 = async () => {
  console.log(`Weather report:-`);
  console.log(`greeting`);
  await greet();
  await weatherFunct();
};

funct1();
