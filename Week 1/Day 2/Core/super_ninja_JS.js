class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }


    sayName(){
        console.log(`Ninja Name is: ${this.name}`);
    }

    showStats(){
        console.log(`Name: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}`);
    }

    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor (name, health = 200, speed = 10, strength = 10, wisdome = 10){
        super(name, health, speed, strength);
        this.wisdome = wisdome;
    }

    speakWisdom(){
        this.drinkSake();
        console.log('work samart not hard')
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();


