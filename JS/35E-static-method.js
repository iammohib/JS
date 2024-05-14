class greeting{
    constructor(name){
        this.name = greeting.capitalize(name);
    }
    greeStatement(){
        console.log(`Good Morning! ${this.name}`);
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase()+name.substr(1,name.length-1);
    }
}

const jon = new greeting(`jon`);
jon.greeStatement();