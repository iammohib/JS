const str1 = `I am Mohibuddin.`;
const str2 = str1.split("");
str2[5] = 'z';
console.log(str2,typeof(str2))

const str3 = str2.join('')
console.log(str3,typeof(str3))