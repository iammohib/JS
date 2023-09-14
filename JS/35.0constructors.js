//syntax
class addmissionForm{
    constructor(name,age){
        this.name = name,
        this.age = age;
    }
    submit(){
        console.log(this.name+`, your form is submitted`)
        console.log(`${this.name}, your age is ${this.age}`)
    }
}
const mohibForm = new addmissionForm(`mohib`,`21`);
mohibForm.submit();