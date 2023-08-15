/*
JSON Object
JSON.stringify(jsonObj):- coverting json to string
jsonStr.replace(`m`, `n`):- updating JSON String
JSON.parse(jsonStr):- conveting JSON String to JSON-Object
*/

const jsonObj = {
  name: `mohib`,
  age: 21,
  profession: `developer`,
};
console.log(jsonObj, typeof jsonObj);

//---------coverting json to string------
let jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr, typeof jsonStr);

//---------updating JSON String--------
jsonStr = jsonStr.replace(`age`, `exp`);
console.log(jsonStr, typeof jsonStr);

//---------conveting JSON String to JSON-Object----------
convertJsonObj = JSON.parse(jsonStr);
console.log(convertJsonObj, typeof convertJsonObj);
