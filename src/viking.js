// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
    }
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return `${this.name} has died in act of combat` 
        }
        else {
            return `${this.name} has received ${damage} points of damage`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }

}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health <= 0) {
            return `A Saxon has died in combat` 
        }
        else {
            return `A Saxon has received ${damage} points of damage`
        }
    }
}

// War
class War {
    constructor ( ) {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(Viking) {
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon)
    }
    vikingAttack() {
            let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            let dmgedSaxon = randomSaxon.receiveDamage(randomViking.strength)
            if (dmgedSaxon === `A Saxon has died in combat`) {
                this.saxonArmy.splice(randomSaxon, 1)
            }
            return dmgedSaxon
    }
    saxonAttack() {
            let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            let dmgedViking = randomViking.receiveDamage(randomSaxon.strength)
            if (dmgedViking.includes("died")) {
                this.vikingArmy.splice(randomViking, 1)
            }
            return dmgedViking
    }
    showStatus() {}
}
