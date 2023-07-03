class ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }


    sayName(){
        console.log("Ninja Name is: ${this.name}");
    }

    showStats(){
        console.log("Name:${this.health}, Speed:${this.speed}, Strength:${this.strength, Health:${this.health}");
    }

    drinkSake(){
        this.health += 10
    }
}
