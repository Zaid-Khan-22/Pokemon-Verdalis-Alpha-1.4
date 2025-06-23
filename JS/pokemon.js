class Pokemon {
  constructor(name, level, pokedex, moveDB,moves,customMove) {
    const data = pokedex[name];
    if (!data) throw new Error(`Pokémon ${name} not found in Pokédex.`);

    this.name = name;
    this.level = level;
    this.hp;
    this.pp;

    this.types = data.types;
    this.baseStats = data.baseStats;
    this.expGrp = data.expGroup;
    this.evolves = data.evolves;
    this.evoMethod = data.evoMethod;
    this.evolvesInto = data.evolvesInto;
    this.moves = moves
    this.customMove = customMove

    this.stats = this.calculateStats();
    this.currentHP = this.stats.hp;
    this.currentAtt = this.stats.att;
    this.currentDef = this.stats.def;
    this.currentSpatt = this.stats.spatt;
    this.currentSpdef = this.stats.spdef;
    this.currentSpe = this.stats.speed;

    this.status = null;

    this.abilityActive = false

    this.confused = null;
    this.leeched = null;

    this.exp = 0
    this.baseExp = data.baseExp
    this.amount = 0
    this.lv = false
    this.gender = this.findGender()

    this.paralyzed = false
    this.hitsItself = false

    this.justStatused = false
    this.toxicCounter = null
    this.sleepCounter = null
    this.confusedCounter = null

    const abilityList = abilities[this.name];
    if (!abilityList) throw new Error(`Ability not found!`);
    this.ability = abilityList[Math.floor(Math.random() * abilityList.length)];


    this.item = null
    this.itemText = null
    this.itemUsed = false
    this.itemJustUsed = true

    // Learn all moves up to current level
    if (this.customMove && this.customMove.length > 0) {
      this.moves = this.customMove.slice(0, 4);
    }
    else{
    const learnedMoves = data.learnset
      .filter(entry => entry.level <= level)
      .map(entry => {
        const moveData = moveDB[entry.move];
        if (!moveData) throw new Error(`Move ${entry.move} not found in MoveDB.`);
        return { name: entry.move, ...moveData, currentPP: moveData.pp };
      });

    this.moves = learnedMoves.slice(-4); // Only keep last 4 moves
    }
    this.weaknesses = [];
    this.resistances = [];
    this.immunities = [];
    this.justConfused = false
    this.justLeeched = false
  }

  expToNextLevel() {
    if (this.expGrp === "slow") {
      return Math.floor(1.25 * (this.level ** 3));
    } else if (this.expGrp === "medium") {
      return this.level ** 3;
    } else if (this.expGrp === "fast") {
      return Math.floor(0.8 * (this.level ** 3));
    } else {
      throw new Error(`Unknown experience group: ${this.expGrp}`);
    }
  }

gainExp(amount, pokedex, moveDB) {
  let temp = this.exp
  this.exp += amount;
  this.amount = this.exp - temp
  while (this.exp >= this.expToNextLevel()) {
    this.exp -= this.expToNextLevel();
    this.level++;
    this.lv = true
    this.stats = this.calculateStats();
    const bs = this.baseStats
    const lvl = this.level
    let temp = Math.floor(((2 * bs.hp * lvl) / 100) + lvl + 10)
    let temp1 = Math.floor(((2 * bs.hp * (lvl-1)) / 100) + (lvl-1) + 10)
    this.currentHP = this.currentHP + temp - temp1
  
    this.levelUp(pokedex, moveDB);  // Learn new moves
  }
}

  levelUp(pokedex, moveDB) {
    const data = pokedex[this.name];
    const newMoveEntry = data.learnset.find(entry => entry.level === this.level);

    if (newMoveEntry) {
      const moveData = moveDB[newMoveEntry.move];
      if (moveData) {
        const newMove = { name: newMoveEntry.move, ...moveData, currentPP: moveData.pp };

        if (this.moves.length < 4) {
          this.moves.push(newMove);
        } else {
          // Placeholder for move replacement logic
          console.log(`${this.name} wants to learn ${newMove.name}, but already knows 4 moves.`);
          // You would trigger UI here to let user replace a move
        }
      }
    }
  }

  calculateStats() {
    const bs = this.baseStats;
    const lvl = this.level;

    return {
      hp: Math.floor(((2 * bs.hp * lvl) / 100) + lvl + 10),
      att: Math.floor(((2 * bs.att * lvl) / 100) + 5),
      def: Math.floor(((2 * bs.def * lvl) / 100) + 5),
      spatt: Math.floor(((2 * bs.spatt * lvl) / 100) + 5),
      spdef: Math.floor(((2 * bs.spdef * lvl) / 100) + 5),
      speed: Math.floor(((2 * bs.speed * lvl) / 100) + 5)
    };
  }

  findGender(){

  let ratio = genderRatios[this.name]
  if(ratio === null){
    return null
  }
  else if(ratio === 100){
    return 1
  }
  else if(ratio === 0){
    return 2
  }
  else{
    let num = Math.floor(random(1,101))
    if(num <= ratio){
      return 1
    }
    else{
      return 2
    }
  }

}

}


