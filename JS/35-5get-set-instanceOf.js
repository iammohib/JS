class std{
    constructor(name){
        this._name = name;
    }
    greet(name){
        console.log(`Hey ${this.name}`)
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name=newName;
    }
}
class stdChild extends std{
    run(){
        console.log("hey hey")
    }
}

const mohib = new stdChild(`mohib`)
mohib.greet()

//getting name
console.log(mohib.name)

//setting name
mohib.name = `mohibuddin`;
console.log(mohib.name)

//instance of
const c = 5;
console.log(mohib instanceof std)
console.log(mohib instanceof stdChild)
console.log(c instanceof stdChild)
