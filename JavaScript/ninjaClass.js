function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.readSpeed = function(){
        return speed;
    }
    this.readStrength = function(){
        return strength;
    }
}
Ninja.prototype.sayName = function() {
    console.log(this.name);
}
Ninja.prototype.showStats = function() {
    console.log(`Name: ${this.name}`);
    console.log(`Health: ${this.health}`);
    console.log(`Speed: ${this.readSpeed()}`);
    console.log(`Strength: ${this.readStrength()}`);
}

Ninja.prototype.drinkSake = function(){
    this.health += 10;
}

Ninja.prototype.punch = function(Ninja){
    if(!(Ninja instanceof Object)){
        console.log("The ninja you entered is not a real ninja!")
    }
    else{
        Ninja.health -= 5;
        console.log(`${Ninja.name} was punched by ${this.name} and lost 5 health!`);
    }
}

Ninja.prototype.kick = function(Ninja){
    if(!(Ninja instanceof Object)){
        console.log("The ninja you entered is not a real ninja!")
    }
    else{
        var damage = 15 * this.readStrength();
        Ninja.health -= damage;
        console.log(`${Ninja.name} was kicked by ${this.name} and lost ${damage} health!`)
    }
}

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
var greenNinja;
redNinja.punch(greenNinja);
blueNinja.kick(redNinja);
redNinja.showStats();