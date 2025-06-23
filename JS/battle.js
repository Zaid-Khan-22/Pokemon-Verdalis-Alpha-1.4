class Battle{
    constructor(playerTeam,enemyTeam,enemyName,state,trainerClass,
        enemyObj,type){
        this.playerTeam = playerTeam
        this.enemyTeam = enemyTeam
        this.enemyName = enemyName
        this.state = state
        this.trainerClass = trainerClass
        this.enemyObj = enemyObj
        this.type = type
        this.enemyPokemonLeft = this.enemyTeam.length;

        this.enemyNextIndex = 0
        
        this.menuCreated = false
        this.menuIndex = 0
        this.moveIndex = 0
        this.textState = 0
        this.sentState = 0
        this.enemyIndex = 0

        this.playerChosenMove = false
        this.enemyChosenMove = false

        this.turn;
        this.turnCompleted = false;
        this.turnStart = "";
        this.turnTextState = false

        this.pCurrentMove;
        this.eCurrentMove;

        this.menuState = false
        this.keyCoolDown = 15

        this.playerDamage = 0
        this.enemyDamage = 0

        this.playerPriority
        this.enemyPriority
        this.playerSpeed
        this.enemySpeed
        this.rand

        this.playerPrevious = ""

        this.level = 0
        this.att = 0
        this.def = 0
        this.movePower = 0
        this.currentMove = 0
        this.STAB = 1
        this.effectiveness = 1
        this.crit = 1
        this.critchance = 1
        this.variation = 1
        this.pTurn = false
        this.eTurn = false
        this.pAcc = 0
        this.eAcc = 0
        this.pHit = false
        this.eHit = false
        this.pEffect = ""
        this.eEffect = ""
        this.pMult = 1
        this.eMult = 1

        this.weather = null
        this.weatherTurns = null

        this.pokeBall = ""
        this.pokemonCaught = null

        this.pokemonOut = 0

    }


    update(){
        while(this.playerTeam[this.pokemonOut].currentHP<0){
                this.pokemonOut++
                }
        switch(this.state){
            case 'transition':
                this.playerCurrentPokemon = this.playerTeam[this.pokemonOut].name
                this.playerCurrentPokemonObject = this.playerTeam[this.pokemonOut]
                this.enemyCurrentPokemon = this.enemyTeam[0].name
                this.enemyCurrentPokemonObject = this.enemyTeam[0]
                
                
                if (!transitionFunctionBoolean) {
                    transitionFunctionBoolean = true;
                }
                if(this.type === "trainer"){
                    trainerImg = loadImage("sprites/"+this.trainerClass+".png")
                }
                else{
                    trainerImg = loadImage("front/"+this.enemyTeam[0].name+".png")
                }
                transitionFunction(this);
                move = false
                break;
            
            case 'intro':
                tempSprite.visible = false
                //drawBattleUI(this.state)
                if (!battleChat) {
                    battleChat = true;
                }
                move = false
                introDialouge(this);
                break;

            case 'send':
                //drawBattleUI(this.state)
                if (!enemyPokemon) {
                    enemyPokemon = true;
                }
                move = false
                trainerSprite.visible = false
                playerSprite.visible = false
                sendPokemon(this);
                break;

            case 'menu':
                move = false
                multiplier = 1
                break;
            
            case 'fight':
                move = false
                break;
            
            case 'enemyAI':
                enemyAI(this)
                move = false
                break;

             case 'turn':
                this.turnFinder();
                move = false
                break;    

            case 'bag':
                move = false
                break;

            case 'pokemon':
                move = false
                break;

            case 'run':
                break;

            case 'battling':
                break;

        }
    }

    turnFinder(){
        this.turn = ""
        this.turnCompleted = false
        this.playerChosenMove = false
        this.enemyChosenMove = false
    this.playerPriority = this.playerCurrentPokemonObject.moves[this.moveIndex].priority
    this.enemyPriority = this.enemyCurrentPokemonObject.moves[this.enemyIndex].priority

    if(this.playerCurrentPokemonObject.ability === "Mycelium Might"&&
       this.playerCurrentPokemonObject.moves[this.moveIndex].category === "Status"){
        this.playerPriority-=1
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.ability === "Mycelium Might"&&
       this.enemyCurrentPokemonObject.moves[this.enemyIndex].category === "Status"){
        this.enemyPriority-=1
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.playerCurrentPokemonObject.ability === "First Strike"){
        let a = Math.floor(random(1,4))
        if(a === 3){
            this.playerPriority+=1
            this.playerCurrentPokemonObject.abilityActive = true
        }
        
    }
    if(this.enemyCurrentPokemonObject.ability === "First Strike"){
        let a = Math.floor(random(1,4))
        if(a === 3){
            this.enemyPriority+=1
            this.enemyCurrentPokemonObject.abilityActive = true
        }
    }
    if(this.playerCurrentPokemonObject.ability === "Prankster"&&
        this.playerCurrentPokemonObject.moves[this.moveIndex].category === "Status"){
        this.playerPriority += 1
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.ability === "Prankster"&&
        this.enemyCurrentPokemonObject.moves[this.enemyIndex].category === "Status"){
        this.enemyPriority += 1
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.playerCurrentPokemonObject.moves[this.moveIndex].type === "Flying"&&
        this.playerCurrentPokemonObject.ability === "Gale Wings"){
        this.playerPriority += 1
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.moves[this.enemyIndex].type === "Flying"&&
        this.enemyCurrentPokemonObject.ability === "Gale Wings"){
        this.enemyPriority += 1
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.playerCurrentPokemonObject.status !== "PAR"){
        this.playerSpeed = this.playerCurrentPokemonObject.currentSpe
    }
    else{
        this.playerSpeed = Math.round(this.playerCurrentPokemonObject.currentSpe*0.5)
    }

    if(this.enemyCurrentPokemonObject.status !== "PAR"){
        this.enemySpeed = this.enemyCurrentPokemonObject.currentSpe
    }
    else{
        this.enemySpeed = Math.round(this.enemyCurrentPokemonObject.currentSpe*0.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Quick Feet"&&this.playerCurrentPokemonObject
        .status !== null){
        this.playerSpeed = Math.floor(this.playerSpeed*1.8)
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.ability === "Quick Feet"&&this.enemyCurrentPokemonObject
        .status !== null){
        this.enemySpeed = Math.floor(this.enemySpeed*1.8)
        this.enemyCurrentPokemonObject.abilityActive = true
    }

    if(this.weather === "sun"&&this.playerCurrentPokemonObject.ability === "Chlorophyll"){
        this.playerSpeed *= 2
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.weather === "sun"&&this.enemyCurrentPokemonObject.ability === "Chlorophyll"){
        this.enemySpeed *= 2
        this.enemyCurrentPokemonObject.abilityActive = true
    }

    if(this.weather === "rain"&&this.playerCurrentPokemonObject.ability === "Swift Swim"){
        this.playerSpeed *= 2
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.weather === "rain"&&this.enemyCurrentPokemonObject.ability === "Swift Swim"){
        this.enemySpeed *= 2
        this.enemyCurrentPokemonObject.abilityActive = true
    }

    if(this.weather === "hail"&&this.playerCurrentPokemonObject.ability === "Slush Rush"){
        this.playerSpeed *= 2
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.weather === "hail"&&this.enemyCurrentPokemonObject.ability === "Slush Rush"){
        this.enemySpeed *= 2
        this.enemyCurrentPokemonObject.abilityActive = true
    }

    if(this.weather === "sandstorm"&&this.playerCurrentPokemonObject.ability === "Sand Rush"){
        this.playerSpeed *= 2
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.weather === "sandstorm"&&this.enemyCurrentPokemonObject.ability === "Sand Rush"){
        this.enemySpeed *= 2
        this.enemyCurrentPokemonObject.abilityActive = true
    }

    if(this.playerPriority>this.enemyPriority){
        this.turnStart = "player"
        this.turn = "player"
        this.turnCompleted = false
        this.playerAttack()
    }
    else if(this.playerPriority<this.enemyPriority){
        this.turnStart = "enemy"
        this.turn = "enemy"
        this.turnCompleted = false
        this.enemyAttack()
    }
    else{
        if(this.playerSpeed>this.enemySpeed){
            this.turnStart = "player"
            this.turn = "player"
            this.turnCompleted = false
            this.playerAttack()
        }
        else if(this.playerSpeed<this.enemySpeed){
            this.turnStart = "enemy"
            this.turn = "enemy"
            this.turnCompleted = false
            this.enemyAttack()
        }
        else{
            this.rand = Math.round(random(1,2))
            if(this.rand === 1){
            this.turnStart = "player"
            this.turn = "player"
            this.turnCompleted = false
            this.playerAttack()
            }
            else{
            this.turnStart = "enemy"
            this.turn = "enemy"
            this.turnCompleted = false
            this.enemyAttack()               
            }
        }
    }
    }

  
  playerAttack(){
    if(this.playerCurrentPokemonObject.currentHP<=0){
        this.playerCurrentPokemonObject.currentHP = 0
    }
    if(this.enemyCurrentPokemonObject.currentHP<=0){
        this.enemyCurrentPokemonObject.currentHP = 0
    }    
    if(this.turn === "player"){
    this.currentMove = this.playerCurrentPokemonObject.moves[this.moveIndex]
    this.pCurrentMove = this.playerCurrentPokemonObject.moves[this.moveIndex].name
    let acc = this.currentMove.accuracy
    this.pAcc = 0
    this.pAcc = Math.floor(random(1,101))
    if(this.playerCurrentPokemonObject.ability === "No Guard"){
        this.pAcc = 1
        this.playerCurrentPokemonObject.abilityActive = true
    }
    if(this.playerCurrentPokemonObject.ability === "Compound Eyes"){
        this.playerCurrentPokemonObject.abilityActive = true
        if(acc <= 70){
            this.pAcc = 1
        }
        else{
            this.pAcc -= 30
        }
    }
    if(this.playerCurrentPokemonObject.ability === "Mycelium Might"&&
       this.currentMove.category === "Status"){
        this.pAcc = 1
    }

    if(this.currentMove.category === "Physical"&&this.playerCurrentPokemonObject.
       ability === "Hustle"){
        this.playerCurrentPokemonObject.abilityActive = true
        this.pAcc += 20
    }
    this.crit = 1
    if(this.pAcc<=acc){
        this.pHit = true
    if(this.currentMove.category !== "Status"){
    this.movePower = this.currentMove.power
    if(this.playerCurrentPokemonObject.ability === "Water Bubble"&&
       this.currentMove.type === "Water"){
        this.playerCurrentPokemonObject.abilityActive = true
        this.movePower *= 2
    }
    if(this.currentMove.type === "Normal"){
        if(this.playerCurrentPokemonObject.ability === "Refrigerate"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.currentMove.type = "Ice"
            this.movePower *= 1.2
        }
        else if(this.playerCurrentPokemonObject.ability === "Pixilate"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.currentMove.type = "Fairy"
            this.movePower *= 1.2
        }
    }
    if(this.playerCurrentPokemonObject.ability === "Scovillie Surge"&&(
       this.currentMove.type === "Fire"||this.currentMove.type === "Grass")){
        this.playerCurrentPokemonObject.abilityActive = true
        this.movePower = Math.floor(this.movePower*1.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Toxic Tide"&&
        ["Poison","Water","Dragon"].includes(this.currentMove.type)){
            this.playerCurrentPokemonObject.abilityActive = true
        this.movePower = Math.floor(this.movePower*1.5)
    }
    if(this.currentMove.name === "Gyro Ball"){
        this.movePower = Math.floor(25(this.enemyCurrentPokemonObject.currentSpe/
            this.playerCurrentPokemonObject.currentSpe))
    }
    if(this.playerCurrentPokemonObject.ability === "Technician"&&
            this.currentMove.power <= 60){
                this.playerCurrentPokemonObject.abilityActive = true
                this.movePower *= 1.5
    }
    if(this.playerCurrentPokemonObject.ability === "Slick Paws"
        &&this.currentMove.priority > 0){
            this.playerCurrentPokemonObject.abilityActive = true
            this.movePower *= 1.5
    }    
    if(this.turnStart === "enemy"&&this.playerCurrentPokemonObject.ability === "Analytic"){
        this.playerCurrentPokemonObject.abilityActive = true
        this.movePower *= 1.3
    }
    if(this.playerCurrentPokemonObject.currentHP <= Math.floor(this.playerCurrentPokemonObject.stats.hp/3)){
        if(this.playerCurrentPokemonObject.ability === "Overgrow"&&
            this.currentMove.type === "Grass"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.movePower *= 1.5
        }
        if(this.playerCurrentPokemonObject.ability === "Blaze"&&
            this.currentMove.type === "Fire"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.movePower *= 1.5
        }
        if(this.playerCurrentPokemonObject.ability === "Torrent"&&
            this.currentMove.type === "Water"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.movePower *= 1.5
        }
        if(this.playerCurrentPokemonObject.ability === "Swarm"&&
            this.currentMove.type === "Bug"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.movePower *= 1.5
        }
    }
    if(this.playerCurrentPokemonObject.ability === "Sharpness"&&
            sharpness.includes(this.currentMove.name)){
                this.playerCurrentPokemonObject.abilityActive = true
            this.movePower = Math.floor(this.movePower*1.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Strong Jaw"&&
            strongJaw.includes(this.currentMove.name)){
                this.playerCurrentPokemonObject.abilityActive = true
            this.movePower = Math.floor(this.movePower*1.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Resonance"&&
            resonance.includes(this.currentMove.name)){
                this.playerCurrentPokemonObject.abilityActive = true
            this.movePower = Math.floor(this.movePower*1.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Tough Claws"&&
            toughClawsMoves.includes(this.currentMove.name)){
                this.playerCurrentPokemonObject.abilityActive = true
            this.movePower = Math.floor(this.movePower*1.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Reckless"&&
            recklessMoves.includes(this.currentMove.name)){
                this.playerCurrentPokemonObject.abilityActive = true
            this.movePower = Math.floor(this.movePower*1.2)
    }
    this.level = this.playerCurrentPokemonObject.level
    if(this.currentMove.category === "Physical"){
        this.att = this.playerCurrentPokemonObject.currentAtt
            if(this.playerCurrentPokemonObject.ability === "Pure Power"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.att *=2
            }
        
        if(this.playerCurrentPokemonObject.ability === "Hustle"){
            this.att = Math.floor(this.att*1.5)
        }
        if(this.playerCurrentPokemonObject.status !== null&&this.playerCurrentPokemonObject
           .ability === "Guts"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.att = Math.floor(1.5*this.att)
        }
        if(this.currentMove.name === "Heavy Slam"||this.currentMove.name === "Body Press"){
            this.att = this.playerCurrentPokemonObject.currentDef
        }
        this.def = this.enemyCurrentPokemonObject.currentDef
        if(this.enemyCurrentPokemonObject.types.includes("Ice")&&
            this.weather === "hail"){
                this.def *= 1.5
        }
        if(this.enemyCurrentPokemonObject.status !== null&&this.enemyCurrentPokemonObject
           .ability === "Marvel Scale"){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.def += Math.floor(this.enemyCurrentPokemonObject.stats.def*0.5)
        }
        if(this.playerCurrentPokemonObject.status === "BRN"){
        this.att = Math.round(this.att/2)
        }
    }
    else if(this.currentMove.category === "Special"){
        this.att = this.playerCurrentPokemonObject.currentSpatt
        if(this.playerCurrentPokemonObject.ability === "Flare Boost"&&
           this.playerCurrentPokemonObject.status === "BRN"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.att = Math.floor(this.att*1.5)
        }
        this.def = this.enemyCurrentPokemonObject.currentSpdef
        if(this.enemyCurrentPokemonObject.types.includes("Rock")&&
            this.weather === "sandstorm"){
                this.def *= 1.5
        }
        if(this.playerCurrentPokemonObject.status === "FRZ"){
        this.att = Math.round(this.att/2)
        }
    }
    if(this.currentMove.type === this.playerCurrentPokemonObject.types[0]||
      this.currentMove.type === this.playerCurrentPokemonObject.types[1]){
        this.STAB = 1.5
        if(this.playerCurrentPokemonObject.ability === "Adaptability"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.STAB = 2
        }
    }
    else{
        this.STAB = 1
    }
    this.effectiveness = calculateTypeEffectiveness(this.enemyCurrentPokemonObject.types,
        this.currentMove.type)
    if(this.effectiveness>1&&this.enemyCurrentPokemonObject.ability === "Solid Rock"){
        this.enemyCurrentPokemonObject.abilityActive = true
        this.effectiveness *= 0.75
    }    
    this.pMult = this.effectiveness
    this.eMult  = 1
    let t = 24
    if(this.playerCurrentPokemonObject.ability === "Super Luck"&&this.
    currentMove.crit === 1){
        this.playerCurrentPokemonObject.abilityActive = true
        t = 3    
    }
    else if(this.playerCurrentPokemonObject.ability === "Super Luck"||this.
    currentMove.crit === 1){
        this.playerCurrentPokemonObject.abilityActive = true
        t = 8
    }
    else{
        t = 24
    }
    this.critchance = Math.floor(random(1,t+1))
        if(this.critchance === t){
            this.crit = 1.5
            if(this.playerCurrentPokemonObject.ability === "Sniper"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.crit = 2.25
            }
            if(this.playerCurrentPokemonObject.ability === "Fleet Feet"){
                this.playerCurrentPokemonObject.abilityActive = true
                this.playerCurrentPokemonObject.currentSpe +=
                Math.floor(this.playerCurrentPokemonObject.stats.speed*0.5)
            }
        }
        else{
            this.crit = 1
        }
    let ignoreAbility = this.playerCurrentPokemonObject.ability === "Mold Breaker";
if (ignoreAbility) {
    this.playerCurrentPokemonObject.abilityActive = true;
}    
    if (this.enemyCurrentPokemonObject.ability === "Shell Armor" || 
    this.enemyCurrentPokemonObject.ability === "Battle Armor") {

    this.enemyCurrentPokemonObject.abilityActive = true;

    if (this.playerCurrentPokemonObject.ability !== "Mold Breaker") {
        this.crit = 1; // Crit blocked only if no Mold Breaker
    }
}
 
    this.variation = (Math.floor(random(85,101))/100)
    this.playerDamage = Math.round((((((2*this.level/5)+2)*this.movePower*(this.att/this.def))/50)+2)
    *this.STAB*this.effectiveness*this.crit*this.variation,this.playerDamage)


// Absorb-type abilities
if (this.enemyCurrentPokemonObject.ability === "Volt Absorb" &&
    this.currentMove.type === "Electric" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.enemyCurrentPokemonObject.currentHP += Math.floor(this.enemyCurrentPokemonObject.stats.hp / 8);
    this.playerDamage = 0;
}

if (this.enemyCurrentPokemonObject.ability === "Water Absorb" &&
    this.currentMove.type === "Water" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.enemyCurrentPokemonObject.currentHP += Math.floor(this.enemyCurrentPokemonObject.stats.hp / 8);
    this.playerDamage = 0;
}

if (this.enemyCurrentPokemonObject.ability === "Flash Fire" &&
    this.currentMove.type === "Fire" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.enemyCurrentPokemonObject.currentHP += Math.floor(this.enemyCurrentPokemonObject.stats.hp / 8);
    this.playerDamage = 0;
}

if (this.enemyCurrentPokemonObject.ability === "Sap Sipper" &&
    this.currentMove.type === "Grass" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.enemyCurrentPokemonObject.currentHP += Math.floor(this.enemyCurrentPokemonObject.stats.hp / 8);
    this.playerDamage = 0;
}

// Sp. Atk boost abilities
if (this.enemyCurrentPokemonObject.ability === "Lightning Rod" &&
    this.currentMove.type === "Electric" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.enemyCurrentPokemonObject.currentSpatt += Math.floor(this.enemyCurrentPokemonObject.stats.spatt * 0.25);
    this.playerDamage = 0;
}

if (this.enemyCurrentPokemonObject.ability === "Storm Drain" &&
    this.currentMove.type === "Water" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.enemyCurrentPokemonObject.currentSpatt += Math.floor(this.enemyCurrentPokemonObject.stats.spatt * 0.25);
    this.playerDamage = 0;
}

// Thick Fat
if (this.enemyCurrentPokemonObject.ability === "Thick Fat" &&
    (this.currentMove.type === "Fire" || this.currentMove.type === "Ice") && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.playerDamage *= 0.5;
}

    if(this.playerCurrentPokemonObject.ability === "Sheer Force"
     &&this.currentMove.eff !== 0){
        this.playerCurrentPokemonObject.abilityActive = true
        this.playerDamage = Math.floor(this.playerDamage*1.5)
     }
    if(this.weather === "sun"){
        if(this.currentMove.type === "Fire"){
            this.playerDamage *= 1.5
        }
        if(this.currentMove.type === "Water"){
            this.playerDamage *= 0.5
        }
    }
    else if(this.weather === "rain"){
        if(this.currentMove.type === "Water"){
            this.playerDamage *= 1.5
        }
        if(this.currentMove.type === "Fire"){
            this.playerDamage *= 0.5
        }
    }
    if(this.playerCurrentPokemonObject.ability === "Tinted Lens"&&this.pMult<1){
        this.playerCurrentPokemonObject.abilityActive = true
        this.playerDamage *=2
        this.pMult *=2
    }
    if(this.enemyCurrentPokemonObject.ability === "Heatproof"&&this.currentMove.type
        === "Fire"){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.playerDamage = Math.floor(this.playerDamage*0.5)
    }
    if(this.enemyCurrentPokemonObject.ability === "Water Bubble"&&
       this.currentMove.type === "Fire"){
        this.enemyCurrentPokemonObject.abilityActive = true
        this.playerDamage = Math.floor(this.playerDamage*0.5)
    }
    this.playerDamage = Math.floor(this.playerDamage)

// Sturdy
if (this.playerDamage >= this.enemyCurrentPokemonObject.stats.hp &&
    this.enemyCurrentPokemonObject.currentHP === this.enemyCurrentPokemonObject.stats.hp &&
    this.enemyCurrentPokemonObject.ability === "Sturdy" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.playerDamage = this.enemyCurrentPokemonObject.stats.hp - 1;
}

// Levitate
if (this.enemyCurrentPokemonObject.ability === "Levitate" &&
    this.currentMove.type === "Ground" && !ignoreAbility) {
    
    this.enemyCurrentPokemonObject.abilityActive = true;
    this.playerDamage = 0;
    this.crit = 0;
    this.pMult = 0;
}

    if(this.enemyCurrentPokemonObject.ability === "Cotton Down"&&this.currentMove.
        category !== "Status"&&this.playerDamage>0){
            this.enemyCurrentPokemonObject.abilityActive = true
        this.playerCurrentPokemonObject.currentSpe -=
        Math.floor(this.playerCurrentPokemonObject.currentSpe*(2/6))
    }
    if(this.enemyCurrentPokemonObject.ability === "Water Compaction"
       &&this.currentMove.type === "Water"){
        this.enemyCurrentPokemonObject.abilityActive = true
        this.enemyCurrentPokemonObject.currentDef +=
         Math.floor(this.enemyCurrentPokemonObject.stats.def*0.25)
    }
    if(this.currentMove.eff !== 0){
        if(this.playerCurrentPokemonObject.ability === "Sheer Force"){
        if(this.currentMove.eff === 2){    
        this.pEffect = this.secondaryEffects(this.pCurrentMove,this.playerCurrentPokemonObject,
            this.enemyCurrentPokemonObject,this.playerDamage)
        }
        }
        else{
            this.pEffect = this.secondaryEffects(this.pCurrentMove,this.playerCurrentPokemonObject,
            this.enemyCurrentPokemonObject,this.playerDamage)
        }    
    }

    if(this.playerCurrentPokemonObject.ability === "Poison Touch"&&
       !this.enemyCurrentPokemonObject.types.includes("Poison")&&
       !this.enemyCurrentPokemonObject.types.includes("Steel")&&
       this.enemyCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)&&
        this.enemyCurrentPokemonObject.ability !== "Immunity"){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.playerCurrentPokemonObject.abilityActive = true
            this.enemyCurrentPokemonObject.status = "PSN"
            this.syncr(this.enemyCurrentPokemonObject,
                this.playerCurrentPokemonObject)
        }
    }

    if(this.enemyCurrentPokemonObject.ability === "Poison Point"&&
       !this.playerCurrentPokemonObject.types.includes("Poison")&&
       !this.playerCurrentPokemonObject.types.includes("Steel")&&
       this.playerCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)
    &&this.playerCurrentPokemonObject.ability !== "Immunity"){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.playerCurrentPokemonObject.status = "PSN"
            this.syncr(this.playerCurrentPokemonObject,
                this.enemyCurrentPokemonObject)
        }
    }

    if(this.enemyCurrentPokemonObject.ability === "Static"&&
       !this.playerCurrentPokemonObject.types.includes("Electric")&&
       !this.playerCurrentPokemonObject.types.includes("Ground")&&
       this.playerCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.playerCurrentPokemonObject.status = "PAR"
            this.syncr(this.playerCurrentPokemonObject,
                this.enemyCurrentPokemonObject)
        }
    }

    if(this.enemyCurrentPokemonObject.ability === "Flame Body"&&
       !this.playerCurrentPokemonObject.types.includes("Fire")&&
       this.playerCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.playerCurrentPokemonObject.status = "BRN"
            this.syncr(this.playerCurrentPokemonObject,
                this.enemyCurrentPokemonObject)
        }
    }

    if((this.enemyCurrentPokemonObject.ability === "Iron Barbs"||
        this.enemyCurrentPokemonObject.ability === "Rough Skin")&&
        toughClawsMoves.includes(this.currentMove.name)){
            this.enemyCurrentPokemonObject.abilityActive = true
        this.playerCurrentPokemonObject.currentHP -= 
        Math.round(this.playerCurrentPokemonObject.stats.hp/16)
    }

    if(this.enemyCurrentPokemonObject.ability === "Effect Spore"
       &&this.playerCurrentPokemonObject.status === null
       &&toughClawsMoves.includes(this.currentMove.name)){
        let q = Math.floor(random(3,11))
        if(q<=3){
            let s = Math.floor(random(1,4))
            if(!(this.playerCurrentPokemonObject.ability === "Leaf Guard"&&
                this.weather === "sun")){
            if(s === 1){
                if(!this.playerCurrentPokemonObject.types.includes("Electric")){
                    this.enemyCurrentPokemonObject.abilityActive = true
                    this.playerCurrentPokemonObject.status = "PAR"
                    this.syncr(this.playerCurrentPokemonObject,
                        this.enemyCurrentPokemonObject)
                }
            }
            else if(s === 2){
                if(!this.playerCurrentPokemonObject.types.includes("Poison")&&
                   !this.playerCurrentPokemonObject.types.includes("Steel")&&
                    this.playerCurrentPokemonObject.ability !== "Immunity"){
                    this.enemyCurrentPokemonObject.abilityActive = true
                    this.playerCurrentPokemonObject.status = "PSN"
                    this.syncr(this.playerCurrentPokemonObject,
                        this.enemyCurrentPokemonObject)
                }
            }
            else{
                if(this.playerCurrentPokemonObject.ability !== "Insomnia"&&
                   this.playerCurrentPokemonObject.ability !== "Vital Spirit"){
                    this.enemyCurrentPokemonObject.abilityActive = true
                    this.playerCurrentPokemonObject.status = "SLP"
                    this.syncr(this.playerCurrentPokemonObject,
                        this.enemyCurrentPokemonObject)
                }
            }
        }
        }
    }

    
    
    }
    else{
    this.playerDamage = 0
    this.pEffect = this.statusMoves(this.pCurrentMove,this.playerCurrentPokemonObject,
        this.enemyCurrentPokemonObject)
    }
    }
    else{
        this.playerDamage = 0
        this.crit = 1
        this.pMult = 1
    }

    }
  }  

  enemyAttack(){
    
    if(this.turn === "enemy"){
        if(this.type === "trainer"){
        this.currentMove = moveDB[this.enemyCurrentPokemonObject.moves[this.enemyIndex]]
        this.eCurrentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex]
        }
        else{
        this.currentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex]
        this.eCurrentMove = this.enemyCurrentPokemonObject.moves[this.enemyIndex].name
        }
    
    let acc = this.currentMove.accuracy
    this.eAcc = Math.floor(random(1,101))
    if(this.enemyCurrentPokemonObject.ability === "No Guard"){
        this.eAcc = 1
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.ability === "Compound Eyes"){
        this.enemyCurrentPokemonObject.abilityActive = true
        if(acc <= 70){
            this.pAcc = 1
        }
        else{
            this.eAcc -= 30
        }
    }
    if(this.enemyCurrentPokemonObject.ability === "Mycelium Might"&&
       this.currentMove.category === "Status"){
        this.eAcc = 1
    }
    if(this.enemyCurrentPokemonObject.ability === "Hustle"&&this.currentMove.category
        === "Physical"){
            this.enemyCurrentPokemonObject.abilityActive = true
        this.eAcc += 20
    }
    this.crit = 1
    if(this.eAcc<=acc){
        this.eHit = true
        if(this.currentMove.category !== "Status"){
    this.movePower = this.currentMove.power
    if(this.enemyCurrentPokemonObject.ability === "Water Bubble"&&
       this.currentMove.type === "Water"){
        this.enemyCurrentPokemonObject.abilityActive = true
        this.movePower *= 2
    }
    if(this.currentMove.type === "Normal"){
        if(this.enemyCurrentPokemonObject.ability === "Refrigerate"){
            this.currentMove.type = "Ice"
            this.enemyCurrentPokemonObject.abilityActive = true
            this.movePower *= 1.2
        }
        else if(this.enemyCurrentPokemonObject.ability === "Pixilate"){
            this.currentMove.type = "Fairy"
            this.enemyCurrentPokemonObject.abilityActive = true
            this.movePower *= 1.2
        }
    }
    if(this.enemyCurrentPokemonObject.ability === "Scovillie Surge"&&(
       this.currentMove.type === "Fire"||this.currentMove.type === "Grass")){
        this.movePower = Math.floor(this.movePower*1.5)
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.ability === "Toxic Tide"&&
        ["Poison","Water","Dragon"].includes(this.currentMove.type)){
        this.movePower = Math.floor(this.movePower*1.5)
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.currentMove.name === "Gyro Ball"){
        this.movePower = Math.floor(25(this.playerCurrentPokemonObject.currentSpe/
            this.enemyCurrentPokemonObject.currentSpe))
    }
    if(this.enemyCurrentPokemonObject.ability === "Technician"&&
            this.currentMove.power <= 60){
                this.movePower *= 1.5
                this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.turnStart === "player"&&this.enemyCurrentPokemonObject.ability === "Analytic"){
        this.movePower *= 1.3
        this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.ability === "Slick Paws"
        &&this.currentMove.priority > 0){
            this.movePower *= 1.5
            this.enemyCurrentPokemonObject.abilityActive = true
    }
    if(this.enemyCurrentPokemonObject.currentHP <= Math.floor(this.enemyCurrentPokemonObject.stats.hp/3)){
        if(this.enemyCurrentPokemonObject.ability === "Overgrow"&&
            this.currentMove.type === "Grass"){
                this.movePower *= 1.5
                this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Blaze"&&
            this.currentMove.type === "Fire"){
                this.movePower *= 1.5
                this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Torrent"&&
            this.currentMove.type === "Water"){
                this.movePower *= 1.5
                this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Swarm"&&
            this.currentMove.type === "Bug"){
                this.movePower *= 1.5
                this.enemyCurrentPokemonObject.abilityActive = true
        }
    }
    if(this.enemyCurrentPokemonObject.ability === "Sharpness"&&
           sharpness.includes(this.currentMove.name)){
            this.movePower = Math.floor(this.movePower*1.5)
            this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Strong Jaw"&&
           strongJaw.includes(this.currentMove.name)){
            this.movePower = Math.floor(this.movePower*1.5)
            this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Tough Claws"&&
           toughClawsMoves.includes(this.currentMove.name)){
            this.movePower = Math.floor(this.movePower*1.5)
            this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Resonance"&&
           resonance.includes(this.currentMove.name)){
            this.movePower = Math.floor(this.movePower*1.5)
            this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Reckless"&&
           recklessMoves.includes(this.currentMove.name)){
            this.movePower = Math.floor(this.movePower*1.2)
            this.enemyCurrentPokemonObject.abilityActive = true
        }
        
    this.level = this.enemyCurrentPokemonObject.level
    if(this.currentMove.category === "Physical"){
        this.att = this.enemyCurrentPokemonObject.currentAtt
        if(this.enemyCurrentPokemonObject.ability === "Pure Power"){
                this.att *=2
                this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.enemyCurrentPokemonObject.ability === "Hustle"){
            this.att = Math.floor(this.att*1.5)
        }
        if(this.enemyCurrentPokemonObject.status !== null&&this.enemyCurrentPokemonObject
           .ability === "Guts"){
            this.att = Math.floor(1.5*this.att)
            this.enemyCurrentPokemonObject.abilityActive = true
        }
        if(this.currentMove.name === "Heavy Slam"||this.currentMove.name === "Body Press"){
            this.att = this.playerCurrentPokemonObject.currentDef
        }
        this.def = this.playerCurrentPokemonObject.currentDef
        if(this.playerCurrentPokemonObject.types.includes("Ice")&&
            this.weather === "hail"){
                this.def *= 1.5
        }
        if(this.playerCurrentPokemonObject.status !== null&&this.playerCurrentPokemonObject
           .ability === "Marvel Scale"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.def += Math.floor(this.playerCurrentPokemonObject.stats.def*0.5)
        }
        if(this.enemyCurrentPokemonObject.status === "BRN"){
        this.att = Math.round(this.att/2)
        }
    }
    if(this.currentMove.category === "Special"){
        this.att = this.enemyCurrentPokemonObject.currentSpatt
        if(this.enemyCurrentPokemonObject.ability === "Flare Boost"&&
           this.enemyCurrentPokemonObject.status === "BRN"){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.att = Math.floor(this.att*1.5)
        }
        this.def = this.playerCurrentPokemonObject.currentSpdef
        if(this.playerCurrentPokemonObject.types.includes("Rock")&&
            this.weather === "sandstorm"){
                this.def *= 1.5
        }
        if(this.enemyCurrentPokemonObject.status === "FRZ"){
        this.att = Math.round(this.att/2)
        }
    }
     
    if(this.currentMove.type === this.enemyCurrentPokemonObject.types[0]||
      this.currentMove.type === this.enemyCurrentPokemonObject.types[1]){
        this.STAB = 1.5
        if(this.enemyCurrentPokemonObject.ability === "Adaptability"){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.STAB = 2
        }
    }
    else{
       this.STAB = 1
    }
    this.effectiveness = calculateTypeEffectiveness(this.playerCurrentPokemonObject.types,
        this.currentMove.type)
    if(this.effectiveness>1&&this.playerCurrentPokemonObject.ability === "Solid Rock"){
        this.playerCurrentPokemonObject.abilityActive = true
        this.effectiveness *= 0.75
    }  
    this.eMult = this.effectiveness
    let t = 24
    if(this.enemyCurrentPokemonObject.ability === "Super Luck"&&this.
    currentMove.crit === 1){
        this.enemyCurrentPokemonObject.abilityActive = true
        t = 3    
    }
    else if(this.enemyCurrentPokemonObject.ability === "Super Luck"||this.
    currentMove.crit === 1){
        this.enemyCurrentPokemonObject.abilityActive = true
        t = 8
    }
    else{
        t = 24
    }
        this.critchance = Math.floor(random(1,t+1))
        if(this.critchance === t){
            this.crit = 1.5
            if(this.enemyCurrentPokemonObject.ability === "Sniper"){
                this.enemyCurrentPokemonObject.abilityActive = true
                this.crit = 2.25
            }
            if(this.enemyCurrentPokemonObject.ability === "Fleet Feet"){
                this.enemyCurrentPokemonObject.abilityActive = true
                this.enemyCurrentPokemonObject.currentSpe +=
                Math.floor(this.enemyCurrentPokemonObject.stats.speed*0.5)
            }
        }
        else{
            this.crit = 1
        }
        let ignoreAbility = this.enemyCurrentPokemonObject.ability === "Mold Breaker";
if (ignoreAbility) {
    this.enemyCurrentPokemonObject.abilityActive = true;
}

if (this.playerCurrentPokemonObject.ability === "Shell Armor" || 
    this.playerCurrentPokemonObject.ability === "Battle Armor") {

    this.playerCurrentPokemonObject.abilityActive = true;

    if (!ignoreAbility) {
        this.crit = 1; // Crit blocked only if opponent doesn't have Mold Breaker
    }
}

    this.variation = (Math.floor(random(85,101))/100)
    this.enemyDamage = Math.round((((((2*this.level/5)+2)*this.movePower*(this.att/this.def))/50)+2)
    *this.STAB*this.effectiveness*this.crit*this.variation)
    if (this.playerCurrentPokemonObject.ability === "Volt Absorb" &&
    this.currentMove.type === "Electric" &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.playerCurrentPokemonObject.currentHP += Math.floor(this.playerCurrentPokemonObject.stats.hp / 8);
    this.enemyDamage = 0;
}

if (this.playerCurrentPokemonObject.ability === "Water Absorb" &&
    this.currentMove.type === "Water" &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.playerCurrentPokemonObject.currentHP += Math.floor(this.playerCurrentPokemonObject.stats.hp / 8);
    this.enemyDamage = 0;
}

if (this.playerCurrentPokemonObject.ability === "Flash Fire" &&
    this.currentMove.type === "Fire" &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.playerCurrentPokemonObject.currentHP += Math.floor(this.playerCurrentPokemonObject.stats.hp / 8);
    this.enemyDamage = 0;
}

if (this.playerCurrentPokemonObject.ability === "Sap Sipper" &&
    this.currentMove.type === "Grass" &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.playerCurrentPokemonObject.currentHP += Math.floor(this.playerCurrentPokemonObject.stats.hp / 8);
    this.enemyDamage = 0;
}

if (this.playerCurrentPokemonObject.ability === "Lightning Rod" &&
    this.currentMove.type === "Electric" &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.playerCurrentPokemonObject.currentSpatt += Math.floor(this.playerCurrentPokemonObject.stats.spatt * 0.25);
    this.enemyDamage = 0;
}

if (this.playerCurrentPokemonObject.ability === "Storm Drain" &&
    this.currentMove.type === "Water" &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.playerCurrentPokemonObject.currentSpatt += Math.floor(this.playerCurrentPokemonObject.stats.spatt * 0.25);
    this.enemyDamage = 0;
}

if (this.playerCurrentPokemonObject.ability === "Thick Fat" &&
    (this.currentMove.type === "Fire" || this.currentMove.type === "Ice") &&
    this.enemyCurrentPokemonObject.ability !== "Mold Breaker") {

    this.playerCurrentPokemonObject.abilityActive = true;
    this.enemyDamage *= 0.5;
}

    if(this.enemyCurrentPokemonObject.ability === "Sheer Force"
     &&this.currentMove.eff !== 0){
        this.enemyCurrentPokemonObject.abilityActive = true
        this.enemyDamage = Math.floor(this.enemyDamage*1.5)
     }
    if(this.weather === "sun"){
        if(this.currentMove.type === "Fire"){
            this.enemyDamage *= 1.5
        }
        if(this.currentMove.type === "Water"){
            this.enemyDamage *= 0.5
        }
    }
    else if(this.weather === "rain"){
        if(this.currentMove.type === "Water"){
            this.enemyDamage *= 1.5
        }
        if(this.currentMove.type === "Fire"){
            this.enemyDamage *= 0.5
        }
    }
    if(this.enemyCurrentPokemonObject.ability === "Tinted Lens"&&this.eMult<1){
        this.enemyCurrentPokemonObject.abilityActive = true
        this.enemyDamage *=2
        this.eMult *=2
    }
    if(this.playerCurrentPokemonObject.ability === "Heatproof"&&this.currentMove.type
        === "Fire"){
            this.playerCurrentPokemonObject.abilityActive = true
            this.enemyDamage = Math.floor(this.enemyDamage*0.5)
    }
    if(this.playerCurrentPokemonObject.ability === "Cotton Down"&&this.currentMove.
        category !== "Status"&&this.enemyDamage>0){
            this.playerCurrentPokemonObject.abilityActive = true
        this.enemyCurrentPokemonObject.currentSpe =
        Math.floor(this.enemyCurrentPokemonObject.currentSpe*(2/6))
    }

    if(this.playerCurrentPokemonObject.ability === "Water Bubble"&&
       this.currentMove.type === "Fire"){
        this.playerCurrentPokemonObject.abilityActive = true
        this.enemyDamage = Math.floor(this.enemyDamage*0.5)
    }

    this.enemyDamage = Math.floor(this.enemyDamage)

if (this.enemyDamage >= this.playerCurrentPokemonObject.stats.hp &&
    this.playerCurrentPokemonObject.currentHP === this.playerCurrentPokemonObject.stats.hp &&
    this.playerCurrentPokemonObject.ability === "Sturdy") {

    this.playerCurrentPokemonObject.abilityActive = true;

    if (!ignoreAbility) {
        this.enemyDamage = this.playerCurrentPokemonObject.stats.hp - 1;
    }
}

        if(this.currentMove.eff !== 0){
        if(this.enemyCurrentPokemonObject.ability === "Sheer Force"){
        if(this.currentMove.eff === 2){    
        this.eEffect = this.secondaryEffects(this.eCurrentMove,this.enemyCurrentPokemonObject,
            this.playerCurrentPokemonObject,this.enemyDamage)
        }
        }
        else{
            this.eEffect = this.secondaryEffects(this.eCurrentMove,this.enemyCurrentPokemonObject,
            this.playerCurrentPokemonObject,this.enemyDamage)
        }    
    }

if (this.playerCurrentPokemonObject.ability === "Levitate" &&
    this.currentMove.type === "Ground") {

    this.playerCurrentPokemonObject.abilityActive = true;

    if (!ignoreAbility) {
        this.enemyDamage = 0;
    }
}


    if(this.enemyCurrentPokemonObject.ability === "Poison Touch"&&
       !this.playerCurrentPokemonObject.types.includes("Poison")&&
       !this.playerCurrentPokemonObject.types.includes("Steel")&&
       this.playerCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)
       &&this.playerCurrentPokemonObject.ability !== "Immunity"){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.enemyCurrentPokemonObject.abilityActive = true
            this.playerCurrentPokemonObject.status = "PSN"
            this.syncr(this.playerCurrentPokemonObject,
                this.enemyCurrentPokemonObject)
        }
    }

    if(this.playerCurrentPokemonObject.ability === "Poison Point"&&
       !this.enemyCurrentPokemonObject.types.includes("Poison")&&
       !this.enemyCurrentPokemonObject.types.includes("Steel")&&
       this.enemyCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)
      &&this.enemyCurrentPokemonObject.ability !== "Immunity"){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.playerCurrentPokemonObject.abilityActive = true
            this.enemyCurrentPokemonObject.status = "PSN"
            this.syncr(this.enemyCurrentPokemonObject,
                this.playerCurrentPokemonObject)
        }
    }

    if(this.playerCurrentPokemonObject.ability === "Static"&&
       !this.enemyCurrentPokemonObject.types.includes("Electric")&&
       !this.enemyCurrentPokemonObject.types.includes("Ground")&&
       this.enemyCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.playerCurrentPokemonObject.abilityActive = true
            this.enemyCurrentPokemonObject.status = "PAR"
            this.syncr(this.enemyCurrentPokemonObject,
                this.playerCurrentPokemonObject)
        }
    }

    if(this.playerCurrentPokemonObject.ability === "Flame Body"&&
       !this.enemyCurrentPokemonObject.types.includes("Fire")&&
       this.enemyCurrentPokemonObject.status === null&&
        toughClawsMoves.includes(this.currentMove.name)){
       
        let q = Math.floor(random(1,11))
        if(q<=3){
            this.playerCurrentPokemonObject.abilityActive = true
            this.enemyCurrentPokemonObject.status = "BRN"
            this.syncr(this.enemyCurrentPokemonObject,
                this.playerCurrentPokemonObject)
        }
    }

    if((this.playerCurrentPokemonObject.ability === "Iron Barbs"||
        this.playerCurrentPokemonObject.ability === "Rough Skin")&&
        toughClawsMoves.includes(this.currentMove.name)){
        this.enemyCurrentPokemonObject.currentHP -= 
        Math.round(this.enemyCurrentPokemonObject.stats.hp/16)
        this.playerCurrentPokemonObject.abilityActive = true
    }

    if(this.playerCurrentPokemonObject.ability === "Effect Spore"
       &&this.enemyCurrentPokemonObject.status === null
       &&toughClawsMoves.includes(this.currentMove.name)){
        let q = Math.floor(random(3,11))
        if(q<=3){
            let s = Math.floor(random(1,4))
            if(!(this.enemyCurrentPokemonObject.ability === "Leaf Guard"&&
                this.weather === "sun")){
            if(s === 1){
                if(!this.enemyCurrentPokemonObject.types.includes("Electric")){
                    this.playerCurrentPokemonObject.abilityActive = true
                    this.enemyCurrentPokemonObject.status = "PAR"
                    this.syncr(this.enemyCurrentPokemonObject,
                        this.playerCurrentPokemonObject)
                }
            }
            else if(s === 2){
                if(!this.enemyCurrentPokemonObject.types.includes("Poison")&&
                   !this.enemyCurrentPokemonObject.types.includes("Steel")
                    &&this.enemyCurrentPokemonObject.ability !== "Immunity"){
                    this.playerCurrentPokemonObject.abilityActive = true
                    this.enemyCurrentPokemonObject.status = "PSN"
                    this.syncr(this.enemyCurrentPokemonObject,
                        this.playerCurrentPokemonObject)
                }
            }
            else{
                if(this.enemyCurrentPokemonObject.ability !== "Insomnia"&&
                   this.enemyCurrentPokemonObject.ability !== "Vital Spirit"){
                    this.playerCurrentPokemonObject.abilityActive = true
                    this.enemyCurrentPokemonObject.status = "SLP"
                    this.syncr(this.enemyCurrentPokemonObject,
                        this.playerCurrentPokemonObject)
                }
            }
        }
        }
    }

    if(this.playerCurrentPokemonObject.ability === "Water Compaction"
       &&this.currentMove.type === "Water"){
        this.playerCurrentPokemonObject.abilityActive = true
        this.playerCurrentPokemonObject.currentDef +=
        Math.floor(this.playerCurrentPokemonObject.stats.def*0.25)
    }

}
else{
    this.enemyDamage = 0
    this.eEffect = this.statusMoves(this.eCurrentMove,this.enemyCurrentPokemonObject,
        this.playerCurrentPokemonObject)
}
  }
  else{
    this.enemyDamage = 0
    this.crit = 1
    this.eMult = 1
  }
}
  }
  faint(a){
    if(a<=0){
        return true
    }
  }

  nextPokemon(){
    for (let i = this.enemyNextIndex; i < this.enemyTeam.length; i++) {
    if (this.enemyTeam[i].currentHP > 0) {
      return i;
    }
  }
  return -1;
  }

  statusMoves(moveName,user,target){
    if(moveName === "Splash"){
        return `But nothing happened!`
    }
    if(moveName === "Howl"||moveName === "Meditate"){
        if(user.ability !== "Contrary"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att*0.25)
        return `${user.name}'s attack rose!`
        }
        else{
        user.abilityActive = true    
        user.currentAtt = user.currentAtt - Math.round(user.stats.att*(1/6))
        return `${user.name}'s attack fell!`   
        }
    }
    if(moveName === "Defense Curl"||moveName === "Harden"){
        if(user.ability !== "Contrary"){
        user.currentDef = user.currentDef + Math.round(user.stats.def*0.25)
        return user.name+"'s defense rose!"
        }
        else{
        user.abilityActive = true
        user.currentDef = user.currentDef - Math.round(user.stats.def*(1/6))
        return user.name+"'s defense fell!"   
        }
    }
    if(moveName === "Rock Polish"){
        if(user.ability !== "Contrary"){
        user.currentSpe += Math.round(user.stats.speed*0.5)
        return user.name+"'s speed rose sharply!"
        }
        else{
            user.abilityActive = true
         user.currentSpe -= Math.round(user.stats.speed*(1/6))
        return user.name+"'s speed fell harshly!"   
        }
    }
    if (moveName === "Growl") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;
    if (!ignoreAbility) {
        if (target.ability === "Clear Body" || target.ability === "Hyper Cutter") {
            target.abilityActive = true;
            abilityBlocked = true;
        }
    } else {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentAtt += Math.round(target.stats.att * (2 / 8));
            if (target.currentAtt <= 0) target.currentAtt = 1;
            return target.name + "'s attack rose!";
        } else {
            target.currentAtt -= Math.round(target.stats.att * (2 / 12));
            if (target.currentAtt <= 0) target.currentAtt = 1;
            return target.name + "'s attack fell!";
        }
    }
    }

   if (moveName === "Leer") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentDef += Math.round(target.stats.def * (2 / 8));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense rose!";
        } else {
            target.currentDef -= Math.round(target.stats.def * (2 / 12));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense fell!";
        }
    }
}

    if (moveName === "String Shot") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpe += Math.round(target.stats.speed * (2 / 6));
            if (target.currentSpe <= 0) target.currentSpe = 1;
            return target.name + "'s speed rose sharply!";
        } else {
            target.currentSpe -= Math.round(target.stats.speed * (2 / 6));
            if (target.currentSpe <= 0) target.currentSpe = 1;
            return target.name + "'s speed fell harshly!";
        }
    }
}

    if(moveName === "Swords Dance"){
        if(user.ability !== "Contrary"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att/2)
        return user.name+"'s attack rose sharply!"
        }
        else{
        user.currentAtt = user.currentAtt - Math.round(user.stats.att/4)
        return user.name+"'s attack fell harshly!"
        }

    }
    if(moveName === "Iron Defense"){
        if(user.ability !== "Contrary"){
        user.currentDef = user.currentDef + Math.round(user.stats.def/2)
        return user.name+"'s defense rose sharply!"
        }
        else{
        user.currentDef = user.currentDef - Math.round(user.stats.def/4)
        return user.name+"'s defense fell harshly!"
        }
    }
    if(moveName === "Nasty Plot"){
        if(user.ability !== "Contrary"){
        user.currentSpatt = user.currentSpatt + Math.round(user.stats.spatt/2)
        return user.name+"'s special attack rose sharply!"
        }
        else{
        user.currentSpatt = user.currentSpatt - Math.round(user.stats.spatt/4)
        return user.name+"'s special attack fell harshly!"
        }
    }
    if(moveName === "Amnesia"){
        if(user.ability !== "Contrary"){
        user.currentSpdef = user.currentSpdef + Math.round(user.stats.spdef/2)
        return user.name+"'s special defense rose sharply!"
        }
        else{
        user.currentSpdef = user.currentSpdef - Math.round(user.stats.spdef/4)
        return user.name+"'s special defense fell harshly!"    
        }
    }
    if(moveName === "Bulk Up"){
        if(user.ability !== "Contrary"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att/4)
        user.currentDef = user.currentDef + Math.round(user.stats.def/4)
        return user.name+"'s attack and defense rose!"
        }
        else{
        user.currentAtt = user.currentAtt - Math.round(user.stats.att/6)
        user.currentDef = user.currentDef - Math.round(user.stats.def/6)
        return user.name+"'s attack and defense fell!"   
        }
    }
    if(moveName === "Calm Mind"){
        if(user.ability !== "Contrary"){
        user.currentSpatt = user.currentSpatt + Math.round(user.stats.spatt/4)
        user.currentSpdef = user.currentSpdef + Math.round(user.stats.spdef/4)
        return user.name+"'s special attack and special defense rose!"
        }
        else{
        user.currentSpatt = user.currentSpatt - Math.round(user.stats.spatt/6)
        user.currentSpdef = user.currentSpdef - Math.round(user.stats.spdef/6)
        return user.name+"'s special attack and special defense fell!"
        }
    }
    if(moveName === "Dragon Dance"){
        if(user.ability !== "Contrary"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att/4)
        user.currentSpe = user.currentSpe + Math.round(user.stats.speed/4)
        return user.name+"'s attack and speed rose!"
        }
        else{
        user.currentAtt = user.currentAtt - Math.round(user.stats.att/6)
        user.currentSpe = user.currentSpe - Math.round(user.stats.speed/6)
        return user.name+"'s attack and speed fell!"
        }
    }
    if (moveName === "Screech") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentDef += Math.round(target.stats.def * (2 / 4));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense rose sharply!";
        } else {
            target.currentDef -= Math.round(target.stats.def * (2 / 6));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense fell harshly!";
        }
    }
}

    if (moveName === "Scary Face") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpe += Math.round(target.stats.speed * (2 / 4));
            if (target.currentSpe <= 0) target.currentSpe = 1;
            return target.name + "'s speed rose sharply!";
        } else {
            target.currentSpe -= Math.round(target.stats.speed * (2 / 6));
            if (target.currentSpe <= 0) target.currentSpe = 1;
            return target.name + "'s speed fell harshly!";
        }
    }
}

   
    if (moveName === "Will-O-Wisp") {
    if (
        target.status === null &&
        target.justStatused === false &&
        !target.types.includes("Fire") &&
        !(target.ability === "Leaf Guard" && this.weather === "sun" && user.ability !== "Mold Breaker")
    ) {
        target.status = "BRN";
        target.justStatused = true;
        this.syncr(target, user);
        return target.name + " was burned!";
    } else {
        return "But it failed!";
    }
}

   if (
    moveName === "Thunder Wave" &&
    (target.ability !== "Limber" || user.ability === "Mold Breaker")
) {
    if (
        target.status === null &&
        target.justStatused === false &&
        !target.types.includes("Electric") &&
        !target.types.includes("Ground") &&
        !(target.ability === "Leaf Guard" && this.weather === "sun" && user.ability !== "Mold Breaker")
    ) {
        target.status = "PAR";
        this.syncr(target, user);
        target.justStatused = true;
        return target.name + " was paralyzed!";
    } else {
        return "But it failed!";
    }
}

    if(moveName === "Toxic"){
         if(target.status === null&&target.justStatused === false
            &&!target.types.includes("Poison")
         ){
        target.status = "TOX"
        this.syncr(target,user)
        target.justStatused = true
        target.toxicCounter = 0
        return target.name+" was badly poisoned!"
         }
         else{
            return "But it failed!"
        }
    }
    if(moveName === "Poison Gas"||moveName === "Poison Powder"){
         if(target.status === null&&target.justStatused === false
            &&!target.types.includes("Poison")&&target.ability !== "Immunity"
         &&!(target.ability === "Leaf Guard" && this.weather === "sun"
             && user.ability !== "Mold Breaker")){
        target.status = "PSN"
        this.syncr(target,user)
        target.justStatused = true
        return target.name+" was poisoned!"
         }
         else{
            return "But it failed!"
        }
    }
    if (
    (target.ability !== "Insomnia" || user.ability === "Mold Breaker") &&
    (target.ability !== "Vital Spirit" || user.ability === "Mold Breaker")
) {
    if (
        moveName === "Hypnosis" || moveName === "Sleep Powder" || moveName === "Spore"
    ) {
        if (
            target.status === null &&
            target.justStatused === false &&
            !(target.ability === "Leaf Guard" && this.weather === "sun" && user.ability !== "Mold Breaker")
        ) {
            target.status = "SLP";
            target.justStatused = true;
            target.sleepCounter = 0;
            target.totalSleep = Math.floor(random(2, 6));
            return target.name + " fell asleep!";
        } else {
            return "But it failed!";
        }
    }
}


    if(moveName === "Roost"||moveName === "Recover"){
        user.currentHP = user.currentHP + Math.round(user.stats.hp/2)
        return user.name+" regained health!"
    }

    if (moveName === "Synthesis") {
        let healAmount = 0;

        if (this.weather === "sun") {
        healAmount = Math.round((2 * user.stats.hp) / 6);
        } 
        else if (this.weather === null) {
        healAmount = Math.round(user.stats.hp / 4);
        } 
        else {
        healAmount = Math.round(user.stats.hp / 8);
        }

        user.currentHP = Math.min(user.currentHP + healAmount, user.stats.hp);
        return user.name + " regained health!";
    }


    if(moveName === "Confuse Ray"){
        if(target.confused === null&&target.justConfused === false){
        target.confused = true
        target.justConfused = true
        target.confusedCounter = Math.floor(random(2,6))
        return target.name+" was confused!"
        }
        else{
        return "But it failed!"
        }
    }

    if(moveName === "Leech Seed"){
        if(target.leeched === null&&target.justLeeched === false){
        target.leeched = true
        target.justLeeched = true
        return target.name+" was leeched!"
        }
        else{
        return "But it failed!"
        }
    }

    


  }

  secondaryEffects(moveName,user,target,damage){
    let randChance = Math.floor(random(1,101))
    let SGBoost = 1
    if(user.ability === "Serene Grace"){
        SGBoost = 2
    }
    if(moveName === "Close Combat"){
        if(user.ability !== "Contrary"){
        user.currentDef = Math.round(user.stats.def*(2/12))
        user.currentSpdef = Math.round(user.stats.spdef*(2/12))
        return user.name+"'s defense and special defense fell"
        }
        else{
        user.currentDef = user.currentDef + Math.round(user.stats.def*(2/8))
        user.currentSpdef = user.currentSpdef + Math.round(user.stats.spdef*(2/8))
        return user.name+"'s defense and special defense rose"    
        }
    }
    if (moveName === "Nuzzle" && target.status === null) {
        let ignoresAbilities = user.ability === "Mold Breaker";
        let limberBlocked = target.ability === "Limber" && !ignoresAbilities;
        let leafGuardBlocked = target.ability === "Leaf Guard" && this.weather === "sun" && !ignoresAbilities;

        if (!limberBlocked && !leafGuardBlocked) {
            target.status = "PAR";
            this.syncr(target,user)
            return target.name + " was paralyzed!";
        } 
        else {
        return "But it failed!";
        }
    }

    if(user.ability !== "Rock Head"){
    if(moveName === "Flare Blitz"||moveName === "Wood Hammer"||moveName === "Brave Bird"
        ||moveName === "Double-Edge"||moveName === "Volt Tackle"){
        user.currentHP = user.currentHP - Math.round(damage/3)
        return user.name+" is damaged by recoil!"
    }
    if(moveName === "Take Down"||moveName === "Wild Charge"){
        user.currentHP = user.currentHP - Math.round(damage/4)
        return user.name+" is damaged by recoil!"
    }
    }
    if(moveName === "Absorb"||moveName === "Mega Drain"||moveName === "Horn Leech"||
        moveName === "Leech Life"||moveName === "Giga Drain"){
            let hplost = user.stats.hp - user.currentHP
            if(Math.round(damage/2)>hplost){
                user.currentHP = user.stats.hp
            }
            else{
            user.currentHP = user.currentHP + Math.round(damage/2)
            }
        if(user.hp === user.currentHP){
            return ""
        }
        else{
            return target.name+" had its energy drained!"
        }
    }
    if(moveName === "Overheat"||moveName === "Leaf Storm"){
        if(user.ability !== "Contrary"){
        user.currentSpatt -= Math.round(user.stats.spatt*(2/6))
        return user.name+"'s special attack harshly fell!"
        }
        else{
        user.currentSpatt += Math.round(user.stats.spatt*(2/4))
        return user.name+"'s special attack rose sharply!"
        }
    }
    if (moveName === "Struggle Bug") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpatt += Math.round(target.stats.spatt * (2 / 8));
            if (target.currentSpatt <= 0) target.currentSpatt = 1;
            return target.name + "'s special attack rose!";
        } else {
            target.currentSpatt -= Math.round(target.stats.spatt * (2 / 12));
            if (target.currentSpatt <= 0) target.currentSpatt = 1;
            return target.name + "'s special attack fell!";
        }
    }
}


    if (moveName === "Icy Wind" || moveName === "Mud Shot") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpe += Math.round(target.stats.speed * (2 / 8));
            if (target.currentSpe <= 0) target.currentSpe = 1;
            return target.name + "'s speed rose!";
        } else {
            target.currentSpe -= Math.round(target.stats.speed * (2 / 12));
            if (target.currentSpe <= 0) target.currentSpe = 1;
            return target.name + "'s speed fell!";
        }
    }
}


    if(moveName === "Hammer Arm"){
        if(user.ability !== "Contrary"){
        user.currentSpe = user.currentSpe - Math.round(user.stats.speed*(2/12))
        return user.name+"'s speed fell!"
        }
        else{
        user.currentSpe = user.currentSpe + Math.round(user.stats.speed*(2/8))
        return user.name+"'s speed rose!"   
        }
    }
    if (moveName === "Snarl") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpatt += Math.round(target.stats.spatt * (2 / 8));
            if (target.currentSpatt <= 0) target.currentSpatt = 1;
            return target.name + "'s special attack rose!";
        } else {
            target.currentSpatt -= Math.round(target.stats.spatt * (2 / 12));
            if (target.currentSpatt <= 0) target.currentSpatt = 1;
            return target.name + "'s special attack fell!";
        }
    }
}

    if (moveName === "Breaking Swipe") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && (target.ability === "Clear Body" || target.ability === "Hyper Cutter")) {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentAtt += Math.round(target.stats.att * (2 / 8));
            if (target.currentAtt <= 0) target.currentAtt = 1;
            return target.name + "'s attack rose!";
        } else {
            target.currentAtt -= Math.round(target.stats.att * (2 / 12));
            if (target.currentAtt <= 0) target.currentAtt = 1;
            return target.name + "'s attack fell!";
        }
    }
}

    if(moveName === "Steel Beam"){
        user.currentHP = user.currentHP - Math.round(user.hp/2)
        return user.name+" was damaged by recoil!"
    }
    if(randChance<= 10*SGBoost){
    let ignoresAbilities = user.ability === "Mold Breaker";
let blocksStatusFromLeafGuard = (
    target.ability === "Leaf Guard" &&
    this.weather === "sun" &&
    !ignoresAbilities
);
if (
    moveName === "Ember" || moveName === "Flame Burst" || moveName === "Flamethrower" ||
    moveName === "Fire Blast" || moveName === "Overheat" || moveName === "Fire Fang" ||
    moveName === "Fire Punch" || moveName === "Flame Wheel" || moveName === "Blaze Kick"
) {
    if (
        target.status === null &&
        !target.types.includes("Fire") &&
        !blocksStatusFromLeafGuard
    ) {
        target.status = "BRN";
        this.syncr(target, user);
        return target.name + " was burned!";
    }
}
else if (
    moveName === "Thunder Shock" || moveName === "Electro Ball" || moveName === "Discharge" ||
    moveName === "Thunderbolt" || moveName === "Thunder" || moveName === "Thunder Fang" ||
    moveName === "Spark" || moveName === "Thunder Punch" || moveName === "Zing Zap"
) {
    let limberBlocked = target.ability === "Limber" && !ignoresAbilities;

    if (
        target.status === null &&
        !target.types.includes("Electric") &&!target.types.includes("Ground") &&
        !limberBlocked &&
        !blocksStatusFromLeafGuard
    ) {
        target.status = "PAR";
        this.syncr(target, user);
        return target.name + " was paralyzed!";
    }
}

else if (
    moveName === "Powder Snow" || moveName === "Aurora Beam" || moveName === "Ice Beam" ||
    moveName === "Blizzard" || moveName === "Freeze-Dry" || moveName === "Ice Punch"
) {
    if (
        target.status === null &&
        !target.types.includes("Ice") &&
        !blocksStatusFromLeafGuard
    ) {
        target.status = "FRZ";
        this.syncr(target, user);
        return target.name + " was frozen!";
    }
}


    else if(moveName === "Confusion"||moveName === "Psybeam"||moveName === "Psychic"){
        if(target.confused === false){
            target.confused = true
            return target.name+" was confused!"
        }
    }
    else if (moveName === "Energy Ball" || moveName === "Flash Cannon") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpdef += Math.round(target.stats.spdef * (2 / 8));
            if (target.currentSpdef <= 0) target.currentSpdef = 1;
            return target.name + "'s special defense rose!";
        } else {
            target.currentSpdef -= Math.round(target.stats.spdef * (2 / 12));
            if (target.currentSpdef <= 0) target.currentSpdef = 1;
            return target.name + "'s special defense fell!";
        }
    }
}

    else if (moveName === "Play Rough") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && (target.ability === "Clear Body" || target.ability === "Hyper Cutter")) {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentAtt += Math.round(target.stats.att * (2 / 8));
            if (target.currentAtt <= 0) target.currentAtt = 1;
            return target.name + "'s attack rose!";
        } else {
            target.currentAtt -= Math.round(target.stats.att * (2 / 12));
            if (target.currentAtt <= 0) target.currentAtt = 1;
            return target.name + "'s attack fell!";
        }
    }
}

    else if(moveName === "Ancient Power"||moveName === "Ominous Wind"||moveName === "Silver Wind"){
        if(user.ability !== "Contrary"){
        user.currentAtt += Math.round(user.stats.att*(2/8))
        user.currentDef += Math.round(user.stats.def*(2/8))
        user.currentSpatt += Math.round(user.stats.spatt*(2/8))
        user.currentSpdef += Math.round(user.stats.spdef*(2/8))
        user.currentSpe += Math.round(user.stats.speed*(2/8))
        return user.name+"'s stats rose!"
        }
        else{
        user.currentAtt -= Math.round(user.stats.att*(2/12))
        user.currentDef -= Math.round(user.stats.def*(2/12))
        user.currentSpatt -= Math.round(user.stats.spatt*(2/12))
        user.currentSpdef -= Math.round(user.stats.spdef*(2/12))
        user.currentSpe -= Math.round(user.stats.speed*(2/12))
        return user.name+"'s stats fell!"    
        }
    }
    else if(moveName === "Metal Claw"){
        if(user.ability !== "Contrary"){
        user.currentAtt = user.currentAtt + Math.round(user.stats.att*(2/8))
        return user.name+"'s attack rose!"
        }
        else{
        user.currentAtt = user.currentAtt - Math.round(user.stats.att*(2/12))
        return user.name+"'s attack fell!"    
        }
    }
    else if(moveName === "Signal Beam"){
            if(target.confused === false){
            target.confused = true
            return target.name+" was confused!"
            }
    }
   else if (moveName === "Bug Buzz") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpdef += Math.round(target.stats.spdef * (2 / 8));
            if (target.currentSpdef <= 0) target.currentSpdef = 1;
            return target.name + "'s special defense rose!";
        } else {
            target.currentSpdef -= Math.round(target.stats.spdef * (2 / 12));
            if (target.currentSpdef <= 0) target.currentSpdef = 1;
            return target.name + "'s special defense fell!";
        }
    }
}

    else{
        return ""
    }
    }
    else if(randChance<= 20*SGBoost){
        if(moveName === "Water Pulse"){
            if(target.confused === false){
            target.confused = true
            return target.name+" was confused!"
            }
        }
        else if ((moveName === "Liquidation" || moveName === "Crunch")) {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentDef += Math.round(target.stats.def * (2 / 8));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense rose!";
        } else {
            target.currentDef -= Math.round(target.stats.def * (2 / 12));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense fell!";
        }
    }
}

else if (moveName === "Shadow Ball") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpdef += Math.round(target.stats.spdef * (2 / 8));
            if (target.currentSpdef <= 0) target.currentSpdef = 1;
            return target.name + "'s special defense rose!";
        } else {
            target.currentSpdef -= Math.round(target.stats.spdef * (2 / 12));
            if (target.currentSpdef <= 0) target.currentSpdef = 1;
            return target.name + "'s special defense fell!";
        }
    }
}
        else if(moveName === "Meteor Mash"){
        if(user.ability !== "Contrary"){    
        user.currentAtt = user.currentAtt + Math.round(user.stats.att*0.25)
        return user.name+"'s attack rose!"
        }
        else{
        user.currentAtt = user.currentAtt - Math.round(user.stats.att*(2/12))
        return user.name+"'s attack fell!"    
        }
        }
        else if(moveName === "Steel Wing"){
        if(user.ability !== "Contrary"){
        user.currentDef = user.currentDef + Math.round(user.stats.def*0.25)
        return user.name+"'s defense rose!"
        }
        else{
        user.currentDef = user.currentDef + Math.round(user.stats.def*(2/12))
        return user.name+"'s defense fell!"    
        }
        }
        else if (moveName === "Tri Attack") {
        if (target.status === null) {
        let s = Math.floor(random(1, 4));

        if (s === 1) {
            target.status = "BRN";
            this.syncr(target,user)
            return target.name + " was burned!";
        }

        if (s === 2) {
            let ignoresAbilities = user.ability === "Mold Breaker";
            let limberBlocked = target.ability === "Limber" && !ignoresAbilities;

            if (!limberBlocked) {
                target.status = "PAR";
                this.syncr(target,user)
                return target.name + " was paralyzed!";
            }
        }

            if (s === 3) {
            target.status = "FRZ";
            this.syncr(target,user)
            return target.name + " was frozen!";
            }
        }
        }

        else{
            return ""
        }
    }
    else if(randChance<= 30*SGBoost){

        if (["Acid","Sludge","Sludge Bomb","Venoshock","Poison Sting","Poison Jab","Gunk Shot",
        "Poison Tail","Cross Poison"].includes(moveName)) {
            if (target.status === null &&!target.types.includes("Poison")&&
                !target.types.includes("Steel")&&target.ability !== "Immunity"){
                if(user.ability !== "Venom Rush"){
                    target.status = "PSN";
                    this.syncr(target,user)
                    return target.name + " was poisoned!";
                }
                else{
                    target.status = "TOX";
                    this.syncr(target,user)
                    target.justStatused = true
                    target.toxicCounter = 0
                    return target.name + " was badly poisoned!";
                }
            }
        }


        if(moveName === "Scald"){
            if(target.status === null&&!target.types.includes("Fire")){
            target.status = "BRN"
            this.syncr(target,user)
            return target.name+" was burned!"
            }
        }
        else if (moveName === "Dragon Breath" || moveName === "Bounce" || moveName === "Lick") {
            if (target.status === null) {
            const ignoresAbilities = user.ability === "Mold Breaker";
            const limberBlocked = target.ability === "Limber" && !ignoresAbilities;

                if (!limberBlocked) {
                target.status = "PAR";
                this.syncr(target,user)
                return target.name + " was paralyzed!";
                }
        }
        }

        else if (moveName === "Moonblast") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentSpatt += Math.round(target.stats.spatt * (2 / 8));
            if (target.currentSpatt <= 0) target.currentSpatt = 1;
            return target.name + "'s special attack rose!";
        } else {
            target.currentSpatt -= Math.round(target.stats.spatt * (2 / 12));
            if (target.currentSpatt <= 0) target.currentSpatt = 1;
            return target.name + "'s special attack fell!";
        }
    }
}

else if (moveName === "Iron Tail") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentDef += Math.round(target.stats.def * (2 / 8));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense rose!";
        } else {
            target.currentDef -= Math.round(target.stats.def * (2 / 12));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense fell!";
        }
    }
}

        else{
            return ""
        }
    }
    else if(randChance<= 50*SGBoost){
        if (moveName === "Razor Shell" || moveName === "Rock Smash") {
    let ignoreAbility = user.ability === "Mold Breaker";
    let abilityBlocked = false;

    if (!ignoreAbility && target.ability === "Clear Body") {
        target.abilityActive = true;
        abilityBlocked = true;
    } else if (ignoreAbility) {
        user.abilityActive = true;
    }

    if (!abilityBlocked) {
        if (target.ability === "Contrary") {
            target.abilityActive = true;
            target.currentDef += Math.round(target.stats.def * (2 / 8));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense rose!";
        } else {
            target.currentDef -= Math.round(target.stats.def * (2 / 12));
            if (target.currentDef <= 0) target.currentDef = 1;
            return target.name + "'s defense fell!";
        }
    }
}

        else{
            return ""
        }
    }
    else{
        return ""
    }
  }

  calculateConfusionDamage(user) {
  const lvl = user.level;
  const atk = user.currentAtt;
  const def = user.currentDef;

  const damage = Math.floor(
    (((((2 * lvl) / 5 + 2) * 40 * atk / def) / 50) + 2)
  );

  return damage;
}

  itemUse(user){

    if(user.item === "Oran Berry"){
        if(user.currentHP <= Math.floor(user.stats.hp/2)&&!user.itemUsed){
            if(user.stats.hp - user.currentHP <= 10){
                user.currentHP = user.stats.hp
            }
        else{
            user.currentHP += 10
        }
        user.itemText = `${user.name} recovered some HP because of\nits berry!`
        user.itemUsed = true
        return true;
        }
    }

    else if(user.item === "Sitrus Berry"){
        if(user.currentHP <= Math.floor(user.stats.hp/2)){
        user.currentHP += Math.floor(user.stats.hp/4)
        user.itemText = `${user.name} recovered some hp!`
        user.item = null
        }
    }

    else if(user.item === "Cheri Berry"||user.item === "Chesto Berry"
          ||user.item === "Rawst Berry"||user.item === "Aspear Berry"){
        let item = itemDB[user.item]
        if(user.status === item.effect){
        user.status = null
        user.itemText = `${user.name}'s ${item.done} was cured by its berry!`
        user.item = null
        }
    }

    else if(user.item === "Pecha Berry"){
        if(user.status === "PSN"||user.status === "TOX"){
        user.status = null
        user.itemText = `${user.name}'s poison was cured by its berry!`
        user.item = null
        user.toxicCounter = null
        }
    }

    else if(user.item === "Lum Berry"){
        if(user.status !== null){
        user.status = null
        user.itemText = `${user.name}'s status was cured by its berry!`
        user.item = null
        }
    }

}

syncr(user,target){
    if(user.ability === "Synchronize"){
    if((user.status === "PSN"||user.status === "TOX")
    &&target.status === null&&!target.types.includes("Poison")&&
    !target.types.includes("Steel")
    &&target.ability !== "Immunity"){
        target.status = user.status
        user.abilityActive = true
    }
    if(user.status === "BRN"&&target.status === null
        &&!target.types.includes("Fire")){
        target.status = user.status
        user.abilityActive = true
    }
    if(user.status === "FRZ"&&target.status === null
        &&!target.types.includes("Fire")){
        target.status = user.status
        user.abilityActive = true
    }
    if(user.status === "PAR"&&target.status === null
        &&!target.types.includes("Electric")){
        target.status = user.status
        user.abilityActive = true
    }
}

}

}