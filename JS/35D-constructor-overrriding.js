//method overriding
class employee {
    constructor(name){
        this.name = name;
        console.log(`${name} is a employee`)
    }
    login() {
        console.log(`${this.name} loged in`);
    }
    logout() {
        console.log(`${this.name} loged out`);
    }
    leave(leaveDays) {
        console.log(`${this.name} requesting ${leaveDays} days of leave`);
    }
}
class programmer extends employee{
    constructor(name){
        super(name)
        console.log(`${name} is a programmer`)
    }
    reqCoffee(quan){
        console.log(`${this.name} requesting ${quan} coffee`)
    }
    //method overriding
    leave(leaveDays) {
        // console.log(`${this.name} requesting ${leaveDays+1} days of leave (one extra)`);
        super.leave(leaveDays+4)
        console.log(`4 extra leaves`)
    }
}
const mohib = new programmer(`mohib`);
mohib.login();
mohib.reqCoffee(2);
mohib.leave(3);
mohib.logout();