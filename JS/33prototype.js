const std1 = {
    name: "mohib",
    age: 21,
    gender: "Male"
}
const std2 = {
    // name: "Aman",
    age: 20,
    gender: "Male"
}

const generalDetails = {
    name: "N/A",
    occupation: "Student",
    college: "G.P.L.",
    iq: "High",
    smart: "Yes"
}

const moreDetails = {
    result: "Pass"
}
std1.__proto__ = generalDetails;
std2.__proto__ = generalDetails;

generalDetails.__proto__ = moreDetails;

console.log(std1);
console.log(std1.name);
console.log(std1.iq);

console.log(std2.name);
console.log(std2.result);
