class Item{
    constructor(name,quantity){
        this.name = name
        this.quantity = quantity
        const data = itemDB[this.name]
        this.description = data.description
        this.type = data.type
        this.effect = data.effect
        this.returnVal
    }

    use(target){
        if(this.quantity>0){
            
            if(this.name === "Potion"||this.name === "Super Potion"
             ||this.name === "Hyper Potion"){
                if(target.currentHP !== target.stats.hp&&target.currentHP>0){
                let temp = target.stats.hp - target.currentHP
                if(temp > this.effect){
                    target.currentHP += this.effect
                    this.returnVal = `${target.name}'s HP was restored by ${this.effect} points.`
                }
                else{
                    target.currentHP = target.stats.hp
                    this.returnVal = `${target.name}'s HP was restored by ${temp} points.`
                }
                this.quantity--
                }
                else{
                    this.returnVal = `It won't have any effect!`
                }
                console.log(this.returnVal)
            }

            if(this.name === "Max Potion"){
                if(target.currentHP !== target.stats.hp&&target.currentHP>0){
                let temp = target.stats.hp - target.currentHP
                target.currentHP = target.stats.hp
                this.returnVal = `${target.name}'s HP was restored by ${temp} points.`
                this.quantity--
                }
                else{
                    this.returnVal = `It won't have any effect!`
                }
                console.log(this.returnVal)
            }

            if(this.name === "Revive"){
                if(target.currentHP<=0){
                target.currentHP = Math.floor(target.stats.hp/2)
                target.status = null
                this.returnVal = `${target.name}'s recoverd from fainting!`
                this.quantity--
                }
                else{
                    this.returnVal = `It won't have any effect!`
                }
                console.log(this.returnVal)
            }

            if(this.name === "Burn Heal"||this.name === "Freeze Heal"||
                this.name === "Awakening"||this.name === "Paralyze Heal"){
                if(target.status === this.effect){
                    let temp
                    if(this.name === "Burn Heal"){
                        temp = "burn"
                    }
                    if(this.name === "Freeze Heal"){
                        temp = "frostbite"
                    }
                    if(this.name === "Paralyze Heal"){
                        temp = "paralysis"
                    }
                    if(this.name === "Awakening"){
                        temp = "sleep"
                    }
                    this.returnVal = `${target.name} was cured of its ${temp}.`
                    target.status = null
                    this.quantity--
                }
                else{
                    this.returnVal = `It won't have any effect!`
                }
                 console.log(this.returnVal)
            }
            if(this.name === "Antidote"){
                let temp = this.effect.split("|")
                if(target.status === temp[0]||target.status === temp[1]){
                    target.status = null
                    target.toxicCounter = null
                    this.returnVal = `${target.name} was cured of its poison.`
                    this.quantity--
                }
                else{
                    this.returnVal = `It won't have any effect!`
                }
                 console.log(this.returnVal)
            }
            if(this.name === "Full heal"){
                if(target.status !== null){
                    target.status = null
                    this.returnVal = `${target.name} was cured of its status.`
                    this.quantity--
                }
                else{
                    this.returnVal = `It won't have any effect!`
                }
                 console.log(this.returnVal)
            }

            if(this.name === "Fire Stone"){
                if(itemDB["Fire Stone"].pokemon.includes(target.name)){
                    console.log("evo")
                }
                else{
                    console.log("false")
                }
            }

            
            if(this.type === "Items"){
                if(this.quantity<1){
                    let ind = -1
                    for(let i = 0;i<bag.items.length;i++){
                        if(bag.items[i].name === this.name){
                            ind = i
                        }
                    }
                    bag.items.splice(ind,1)
                }
            }
            if(this.type === "Medicine"){
                if(this.quantity<1){
                    let ind = -1
                    for(let i = 0;i<bag.medicine.length;i++){
                        if(bag.medicine[i].name === this.name){
                            ind = i
                        }
                    }
                    bag.medicine.splice(ind,1)
                }
            }
        }
    }
}