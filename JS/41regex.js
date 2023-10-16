const var1 = "mohib is a good boy, newmohib, 1mohib, 1aman, 2baman, 3chaman, 4eram";
let var2  = var1.replace("mohib","mr.mohib")
var2  = var1.replace(/.mohib/g,"mr.mohib")
var2  = var1.replace(/mohib/g,"mr.mohib")
var2  = var1.replace(/\dmohib/g,"mr.mohib")
var2  = var1.replace(/\d[^a-c]./g,"mr.mohib")
var2  = var1.replace(/^(mohib){1}/g,"mr.mohib")
console.log(var2)