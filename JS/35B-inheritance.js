class animalGeneralProp{
    constructor(name,type,color,hands,legs,tail){
        this.name = name,
        this.type = type,
        this.color=color,
        this.hands = hands,
        this.legs = legs,
        this.tail = tail
    };
}

class humanFeat extends animalGeneralProp{
    run (){
        console.log(`${this.name} is running`);
    }
    speak(){
        console.log(`${this.type} is speaking`);
    }
}
class monkeyFeat extends animalGeneralProp{
    jump (){
        console.log(`${this.name} is jumping`);
    }
    speak(){
        console.log(`${this.type} is shouting`);
    }
}
class dogFeat extends animalGeneralProp{
    run (){
        console.log(`${this.name} is runing`);
    }
    speak(){
        console.log(`${this.type} is bareking`);
    }
}

const mohib = new humanFeat(`mohib`,`human`,`brown`,`2`,`2`,`no`);
const champ = new monkeyFeat(`champ`,`monkey`,`brown`,`2`,`2`,`yes`);
const bruno = new dogFeat(`bruno`,`dog`,`black`,`2`,`no`,`yes`);

mohib.run();
champ.jump();
bruno.run();
mohib.speak();
champ.speak();
bruno.speak();