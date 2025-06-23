const moveDB = {

  "Phatom Quill": {"type": "Ghost", "category": "Physical", "power": 90, "accuracy": 100, "pp": 10,priority: 0,crit:1,eff: 0},
  "Blazing Vault": {"type": "Fire", "category": "Physical", "power": 100, "accuracy": 90, "pp": 10,priority: 1,crit:0,eff: 0},
  "Aqua Tremor": {"type": "Water", "category": "Physical", "power": 100, "accuracy": 95, "pp": 15, priority: -1,crit:0,eff: 0},

    //1Fire
    "Ember": {"type": "Fire", "category": "Special", "power": 40, "accuracy": 100, "pp": 25,priority: 0,crit:0,eff: 1},
    "Flame Burst": {"type": "Fire", "category": "Special", "power": 70, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 1},
    "Flamethrower": {"type": "Fire", "category": "Special", "power": 90, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 1},
    "Fire Blast": {"type": "Fire", "category": "Special", "power": 110, "accuracy": 85, "pp": 5,priority: 0,crit:0,eff: 0},
    "Overheat": {"type": "Fire", "category": "Special", "power": 130, "accuracy": 90, "pp": 5,priority: 0,crit:0,eff: 1},
    "Fire Fang": {"type": "Fire", "category": "Physical", "power": 65, "accuracy": 95, "pp": 15,priority: 0,crit:0,eff: 1},
    "Fire Punch": {"type": "Fire", "category": "Physical", "power": 75, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 1},
    "Flame Wheel": {"type": "Fire", "category": "Physical", "power": 60, "accuracy": 100, "pp": 25,priority: 0,crit:0,eff: 1},
    "Flare Blitz": {"type": "Fire", "category": "Physical", "power": 120, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 2},
    "Blaze Kick": {"type": "Fire", "category": "Physical", "power": 85, "accuracy": 90, "pp": 10,priority: 0,crit:1,eff: 1},

    //2Water
    "Razor Shell": {"type": "Water", "category": "Physical", "power": 75, "accuracy": 95, "pp": 10, "priority": 0, "crit": 0,eff: 1},
    "Water Gun": {"type": "Water", "category": "Special", "power": 40, "accuracy": 100, "pp": 25,priority: 0,crit:0,eff: 0},
    "Water Pulse": {"type": "Water", "category": "Special", "power": 60, "accuracy": 100, "pp": 20, "priority": 0, "crit": 0,eff: 1},
    "Bubble Beam": {"type": "Water", "category": "Special", "power": 65, "accuracy": 100, "pp": 20,priority: 0,crit:0,eff: 0},
    "Scald": {"type": "Water", "category": "Special", "power": 80, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 1,eff: 0},
    "Surf": {"type": "Water", "category": "Special", "power": 90, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 0},
    "Hydro Pump": {"type": "Water", "category": "Special", "power": 110, "accuracy": 80, "pp": 5,priority: 0,crit:0,eff: 0},
    "Aqua Jet": {"type": "Water", "category": "Physical", "power": 40, "accuracy": 100, "pp": 20,priority: 1,crit:0,eff: 0},
    "Waterfall": {"type": "Water", "category": "Physical", "power": 80, "accuracy": 100, "pp": 15,priority: 0,crit:0,eff: 0},
    "Aqua Tail": {"type": "Water", "category": "Physical", "power": 90, "accuracy": 90, "pp": 10,priority: 0,crit:0,eff: 0},
    "Crabhammer": {"type": "Water", "category": "Physical", "power": 100, "accuracy": 90, "pp": 10,priority: 0,crit:1,eff: 0},
    "Liquidation": {"type": "Water", "category": "Physical", "power": 85, "accuracy": 100, "pp": 10,priority: 0,crit:0,eff: 0},

    //3Grass
  "Absorb":        { type: "Grass", category: "Special", power: 30, accuracy: 100, pp: 25, priority: 0,crit:0,eff: 1 },
  "Mega Drain":    { type: "Grass", category: "Special", power: 50, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Giga Drain":    { type: "Grass", category: "Special", power: 50, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Magical Leaf": {"type": "Grass", "category": "Special", "power": 60, "accuracy": "100", "pp": 20, "priority": 0, "crit": 0,eff: 0},
  "Energy Ball":   { type: "Grass", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0,crit:0,eff: 1 },
  "Solar Beam":    { type: "Grass", category: "Special", power: 120, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Leaf Storm":    { type: "Grass", category: "Special", power: 130, accuracy: 90, pp: 5, priority: 0,crit:0,eff: 1},
  "Leafage":    { type: "Grass", category: "Physical", power: 40, accuracy: 100, pp: 25, priority: 0,crit:0 ,eff: 0},
  "Razor Leaf":    { type: "Grass", category: "Physical", power: 55, accuracy: 95, pp: 25, priority: 0,crit:1 ,eff: 0},
  "Seed Bomb":     { type: "Grass", category: "Physical", power: 80, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 0},
  "Leaf Blade":    { type: "Grass", category: "Physical", power: 90, accuracy: 100, pp: 15, priority: 0,crit:1 ,eff: 0},
  "Wood Hammer":   { type: "Grass", category: "Physical", power: 120, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 2},
  "Horn Leech": {"type": "Grass", "category": "Physical", "power": 75, "accuracy": 100, "pp": 10, "priority": 0, "crit": 0,eff: 1},

  //4Electric
  "Thunder Shock": { type: "Electric", category: "Special", power: 40, accuracy: 100, pp: 30, priority: 0,crit:0 ,eff: 1},
  "Electro Ball":  { type: "Electric", category: "Special", power: 60, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Discharge":     { type: "Electric", category: "Special", power: 80, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Thunderbolt":   { type: "Electric", category: "Special", power: 90, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Thunder":       { type: "Electric", category: "Special", power: 110, accuracy: 70, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Nuzzle": {"type": "Electric", "category": "Physical", "power": 20, "accuracy": 100, "pp": 20, "priority": 0, "crit": 0,eff: 1},
  "Thunder Fang":  { type: "Electric", category: "Physical", power: 65, accuracy: 95, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Spark":         { type: "Electric", category: "Physical", power: 65, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 1},
  "Thunder Punch": { type: "Electric", category: "Physical", power: 75, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Wild Charge":   { type: "Electric", category: "Physical", power: 90, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 2},
  "Volt Tackle":   { type: "Electric", category: "Physical", power: 120, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 2},
  "Zing Zap":      { type: "Electric", category: "Physical", power: 80, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 1},

  //5Ice
  "Powder Snow":   { type: "Ice", category: "Special", power: 40, accuracy: 100, pp: 25, priority: 0,crit:0 ,eff: 1},
  "Icy Wind":      { type: "Ice", category: "Special", power: 55, accuracy: 95, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Aurora Beam":      { type: "Ice", category: "Special", power: 65, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 1},
  "Ice Beam":      { type: "Ice", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Blizzard":      { type: "Ice", category: "Special", power: 110, accuracy: 70, pp: 5, priority: 0 ,crit:0,eff: 1},
  "Freeze-Dry":    { type: "Ice", category: "Special", power: 70, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 1},
  "Ice Shard":     { type: "Ice", category: "Physical", power: 40, accuracy: 100, pp: 30, priority: 1,crit:0 ,eff: 1},
  "Ice Fang":      { type: "Ice", category: "Physical", power: 65, accuracy: 95, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Icicle Crash":  { type: "Ice", category: "Physical", power: 85, accuracy: 90, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Ice Punch":     { type: "Ice", category: "Physical", power: 75, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Avalanche":     { type: "Ice", category: "Physical", power: 60, accuracy: 100, pp: 10, priority: -4,crit:0 ,eff: 1},

  //6Ground
  "Mud-Slap":      { type: "Ground", category: "Special", power: 25, accuracy: 85, pp: 10, priority: 0,crit:0 ,eff: 0},
  "Mud Shot":      { type: "Ground", category: "Special", power: 55, accuracy: 95, pp: 15, priority: 0,crit:0 ,eff: 0},
  "Earth Power":   { type: "Ground", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 0},
  "Sand Tomb": {"type": "Ground", "category": "Physical", "power": 35, "accuracy": 85, "pp": 15, "priority": 0, "crit": 0,eff: 0},
  "Bulldoze":      { type: "Ground", category: "Physical", power: 60, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 0},
  "Dig":           { type: "Ground", category: "Physical", power: 80, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Earthquake":    { type: "Ground", category: "Physical", power: 100, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},
  "High Horsepower":{ type: "Ground", category: "Physical", power: 95, accuracy: 95, pp: 10, priority: 0 ,crit:0,eff: 0},

  //7Psychic
  "Confusion":     { type: "Psychic", category: "Special", power: 50, accuracy: 100, pp: 25, priority: 0 ,crit:0,eff: 1},
  "Psybeam":       { type: "Psychic", category: "Special", power: 65, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 1},
  "Psychic":       { type: "Psychic", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Heart Stamp": {"type": "Psychic", "category": "Physical", "power": 60, "accuracy": 100, "pp": 25, "priority": 0, "crit": 0,eff: 0},
  "Zen Headbutt":  { type: "Psychic", category: "Physical", power: 80, accuracy: 90, pp: 15, priority: 0,crit:0 ,eff: 0},
  "Psycho Cut":    { type: "Psychic", category: "Physical", power: 70, accuracy: 100, pp: 20, priority: 0,crit:1 ,eff: 0},

  //8Dark
  "Snarl":         { type: "Dark", category: "Special", power: 55, accuracy: 95, pp: 15, priority: 0 ,crit:0,eff: 1},
  "Dark Pulse":    { type: "Dark", category: "Special", power: 80, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Faint Attack":       { type: "Dark", category: "Physical", power: 40, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Assurance":     { type: "Dark", category: "Physical", power: 60, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Bite":          { type: "Dark", category: "Physical", power: 60, accuracy: 100, pp: 25, priority: 0 ,crit:0,eff: 0},
  "Crunch":        { type: "Dark", category: "Physical", power: 80, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 1},
  "Knock Off":     { type: "Dark", category: "Physical", power: 85, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Foul Play":     { type: "Dark", category: "Physical", power: 95, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Night Slash":     { type: "Dark", category: "Physical", power: 70, accuracy: 100, pp: 15, priority: 0,crit:1 ,eff: 0},
  "Sucker Punch":  { type: "Dark", category: "Physical", power: 70, accuracy: 100, pp: 5, priority: 1 ,crit:0,eff: 0},

  //9Dragon
  "Twister":        { type: "Dragon", category: "Special", power: 40, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 0},
  "Dragon Breath":  { type: "Dragon", category: "Special", power: 60, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 0},
  "Dragon Pulse":   { type: "Dragon", category: "Special", power: 85, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 0},
  "Draco Meteor":   { type: "Dragon", category: "Special", power: 130, accuracy: 90, pp: 5, priority: 0 ,crit:0,eff: 1},
  "Dragon Claw":    { type: "Dragon", category: "Physical", power: 80, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Dragon Tail":    { type: "Dragon", category: "Physical", power: 60, accuracy: 90, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Outrage":        { type: "Dragon", category: "Physical", power: 120, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Dual Chop":      { type: "Dragon", category: "Physical", power: 80, accuracy: 90, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Breaking Swipe": { type: "Dragon", category: "Physical", power: 60, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Dragon Rush":    { type: "Dragon", category: "Physical", power: 100, accuracy: 75, pp: 15, priority: 0 ,crit:0,eff: 0},

  //10Fairy
  "Fairy Wind":     { type: "Fairy", category: "Special", power: 40, accuracy: 100, pp: 30, priority: 0,crit:0 ,eff: 0},
  "Draining Kiss":  { type: "Fairy", category: "Special", power: 50, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Disarming Voice":{ type: "Fairy", category: "Special", power: 40, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Dazzling Gleam": { type: "Fairy", category: "Special", power: 80, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Moonblast":      { type: "Fairy", category: "Special", power: 95, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Play Rough":     { type: "Fairy", category: "Physical", power: 90, accuracy: 90, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Spirit Break":   { type: "Fairy", category: "Physical", power: 75, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},

  //11Fighting
  "Vacuum Wave":    { type: "Fighting", category: "Special", power: 40, accuracy: 100, pp: 30, priority: 1 ,crit:0,eff: 0},
  "Aura Sphere":    { type: "Fighting", category: "Special", power: 80, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Focus Blast":    { type: "Fighting", category: "Special", power: 120, accuracy: 70, pp: 5, priority: 0 ,crit:0,eff: 0},
  "Rock Smash":     { type: "Fighting", category: "Physical", power: 40, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 1},
  "Mach Punch":   { type: "Fighting", category: "Physical", power: 40, accuracy: 100, pp: 30, priority: 1 ,crit:0,eff: 0},
  "Rolling Kick": {"type": "Fighting", "category": "Physical", "power": 60, "accuracy": 85, "pp": 15, "priority": 0, "crit": 0,eff: 0},
  "Brick Break":    { type: "Fighting", category: "Physical", power: 75, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Hammer Arm": {"type": "Fighting", "category": "Physical", "power": 100, "accuracy": 90, "pp": 10, "priority": 0, "crit": 0,eff: 1},
  "Close Combat":   { type: "Fighting", category: "Physical", power: 120, accuracy: 100, pp: 5, priority: 0 ,crit:0,eff: 1},
  "High Jump Kick": { type: "Fighting", category: "Physical", power: 130, accuracy: 90, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Cross Chop":     { type: "Fighting", category: "Physical", power: 100, accuracy: 80, pp: 5, priority: 0 ,crit:1,eff: 0},

   //12Poison
  "Acid":           { type: "Poison", category: "Special", power: 40, accuracy: 100, pp: 30, priority: 0 ,crit:0,eff: 1},
  "Sludge":         { type: "Poison", category: "Special", power: 75, accuracy: 100, pp: 20, priority: 0,crit:0,eff: 1 },
  "Sludge Bomb":    { type: "Poison", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Venoshock":      { type: "Poison", category: "Special", power: 65, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 1},
  "Poison Sting":   { type: "Poison", category: "Physical", power: 15, accuracy: 100, pp: 35, priority: 0,crit:0 ,eff: 1},
  "Poison Fang": {"type": "Poison", "category": "Physical", "power": 50, "accuracy": 100, "pp": 15, "priority": 0, "crit": 0,eff: 1},
  "Poison Jab":     { type: "Poison", category: "Physical", power: 80, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 1},
  "Gunk Shot":      { type: "Poison", category: "Physical", power: 120, accuracy: 80, pp: 5, priority: 0,crit:0 ,eff: 1},
  "Poison Tail":    { type: "Poison", category: "Physical", power: 50, accuracy: 100, pp: 25, priority: 0 ,crit:1,eff: 1},
  "Cross Poison":   { type: "Poison", category: "Physical", power: 70, accuracy: 100, pp: 20, priority: 0 ,crit:1,eff: 1},

  //13Flying
  "Gust":           { type: "Flying", category: "Special", power: 40, accuracy: 100, pp: 35, priority: 0 ,crit:0,eff: 0},
  "Air Cutter":     { type: "Flying", category: "Special", power: 60, accuracy: 95, pp: 25, priority: 0,crit:1 ,eff: 0},
  "Air Slash":      { type: "Flying", category: "Special", power: 75, accuracy: 95, pp: 15, priority: 0,crit:0 ,eff: 0},
  "Hurricane":      { type: "Flying", category: "Special", power: 110, accuracy: 70, pp: 10, priority: 0,crit:0 ,eff: 0},
  "Peck":           { type: "Flying", category: "Physical", power: 35, accuracy: 100, pp: 35, priority: 0 ,crit:0,eff: 0},
  "Pluck":           { type: "Flying", category: "Physical", power: 60, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 0},
  "Wing Attack":    { type: "Flying", category: "Physical", power: 60, accuracy: 100, pp: 35, priority: 0 ,crit:0,eff: 0},
  "Aerial Ace":     { type: "Flying", category: "Physical", power: 60, accuracy: 100, pp: 20, priority: 0,crit:0,eff: 0 },
  "Sky Attack":     { type: "Flying", category: "Physical", power: 70, accuracy: 90, pp: 20, priority: 0,crit:0,eff: 0 },
  "Brave Bird":     { type: "Flying", category: "Physical", power: 120, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 2},
  "Drill Peck":     { type: "Flying", category: "Physical", power: 80, accuracy: 100, pp: 20, priority: 0,crit:0 ,eff: 0},
  "Bounce": {"type": "Flying", "category": "Physical", "power": 85, "accuracy": 85, "pp": 5, "priority": 0, "crit": 0,eff: 1},

  //14Rock
  "Ancient Power":  { type: "Rock", category: "Special", power: 60, accuracy: 100, pp: 5, priority: 0,crit:0 ,eff: 0},
  "Power Gem":      { type: "Rock", category: "Special", power: 80, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Accelerock":   { type: "Rcok", category: "Physical", power: 40, accuracy: 100, pp: 30, priority: 1,crit:0 ,eff: 0},
  "Rock Throw":     { type: "Rock", category: "Physical", power: 50, accuracy: 90, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Rock Tomb":      { type: "Rock", category: "Physical", power: 60, accuracy: 95, pp: 15, priority: 0 ,crit:0,eff: 1},
  "Stone Edge":     { type: "Rock", category: "Physical", power: 100, accuracy: 80, pp: 5, priority: 0,crit:1 ,eff: 0},
  "Rock Slide":     { type: "Rock", category: "Physical", power: 75, accuracy: 90, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Smack Down":     { type: "Rock", category: "Physical", power: 50, accuracy: 100, pp: 15, priority: 0,crit:0 ,eff: 0},

  //15Ghost
  "Astonish":       { type: "Ghost", category: "Physical", power: 30, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Lick":       { type: "Ghost", category: "Physical", power: 30, accuracy: 100, pp: 30, priority: 0 ,crit:0,eff: 1},
  "Shadow Ball":    { type: "Ghost", category: "Special", power: 80, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 1},
  "Hex":            { type: "Ghost", category: "Special", power: 65, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Ominous Wind":    { type: "Ghost", category: "Special", power: 60, accuracy: 100, pp: 5, priority: 0 ,crit:0,eff: 1}, 
  "Shadow Claw":    { type: "Ghost", category: "Physical", power: 70, accuracy: 100, pp: 15, priority: 0,crit:1,eff: 0},
  "Shadow Sneak":   { type: "Ghost", category: "Physical", power: 40, accuracy: 100, pp: 30, priority: 1 ,crit:0,eff: 0},
  "Phantom Force":  { type: "Ghost", category: "Physical", power: 90, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},

  //16Steel
  "Mirror Shot":    { type: "Steel", category: "Special", power: 65, accuracy: 85, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Flash Cannon":   { type: "Steel", category: "Special", power: 80, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Steel Beam":     { type: "Steel", category: "Special", power: 140, accuracy: 95, pp: 5, priority: 0 ,crit:0,eff: 1},
  "Metal Claw":     { type: "Steel", category: "Physical", power: 50, accuracy: 95, pp: 35, priority: 0,crit:0 ,eff: 1},
  "Iron Head":      { type: "Steel", category: "Physical", power: 80, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Iron Tail":      { type: "Steel", category: "Physical", power: 100, accuracy: 75, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Meteor Mash":    { type: "Steel", category: "Physical", power: 90, accuracy: 90, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Bullet Punch":   { type: "Steel", category: "Physical", power: 40, accuracy: 100, pp: 30, priority: 1 ,crit:0,eff: 0},
  "Steel Wing":   { type: "Steel", category: "Physical", power: 70, accuracy: 90, pp: 25, priority: 0 ,crit:0,eff: 0},

  //17Bug
  "Infestation":   { type: "Bug", category: "Special", power: 20, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Struggle Bug":   { type: "Bug", category: "Special", power: 50, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 1},
  "Silver Wind":   { type: "Bug", category: "Special", power: 60, accuracy: 100, pp: 5, priority: 0 ,crit:0,eff: 1},
  "Signal Beam":    { type: "Bug", category: "Special", power: 75, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Bug Buzz":       { type: "Bug", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "Fury Cutter":    { type: "Bug", category: "Physical", power: 40, accuracy: 95, pp: 20, priority: 0 ,crit:0,eff: 0},
  "X-Scissor":      { type: "Bug", category: "Physical", power: 80, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Megahorn":       { type: "Bug", category: "Physical", power: 120, accuracy: 85, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Leech Life":     { type: "Bug", category: "Physical", power: 80, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 1},
  "U-turn":         { type: "Bug", category: "Physical", power: 70, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Steamroller":         { type: "Bug", category: "Physical", power: 65, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},

  //18Normal
  "Swift":          { type: "Normal", category: "Special", power: 60, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Tri Attack":     { type: "Normal", category: "Special", power: 80, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 1},
  "Hyper Beam":     { type: "Normal", category: "Special", power: 150, accuracy: 90, pp: 5, priority: 0 ,crit:0,eff: 1},
  "Boomburst":      { type: "Normal", category: "Special", power: 140, accuracy: 100, pp: 10, priority: 0 ,crit:0,eff: 0},
  "Hyper Voice":     { type: "Normal", category: "Special", power: 90, accuracy: 100, pp: 10, priority: 0,crit:0 ,eff: 0},
  "Scratch":         { type: "Normal", category: "Physical", power: 40, accuracy: 100, pp: 35, priority: 0 ,crit:0,eff: 0},
  "Tackle":         { type: "Normal", category: "Physical", power: 40, accuracy: 100, pp: 35, priority: 0 ,crit:0,eff: 0},
  "Stomp":         { type: "Normal", category: "Physical", power: 65, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Splash":         { type: "Normal", category: "Status", power: "-", accuracy: 100, pp: 35, priority: 0 ,crit:0,eff: 0},
  "Slash":         { type: "Normal", category: "Physical", power: 70, accuracy: 100, pp: 20, priority: 0 ,crit:1,eff: 0},
  "Quick Attack":   { type: "Normal", category: "Physical", power: 40, accuracy: 100, pp: 30, priority: 1 ,crit:0,eff: 0},
  "Headbutt":       { type: "Normal", category: "Physical", power: 70, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 0},
  "Take Down":       { type: "Normal", category: "Physical", power: 90, accuracy: 85, pp: 20, priority: 0 ,crit:0,eff: 2},
  "Double-Edge":    { type: "Normal", category: "Physical", power: 120, accuracy: 100, pp: 15, priority: 0 ,crit:0,eff: 2},
  "Return":         { type: "Normal", category: "Physical", power: 102, accuracy: 100, pp: 20, priority: 0 ,crit:0,eff: 0},
  "Giga Impact":    { type: "Normal", category: "Physical", power: 150, accuracy: 90, pp: 5, priority: 0 ,crit:0,eff: 1},

  "Howl": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 40, "priority": 0,eff: 1},
  "Defense Curl": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 40, "priority": 0,eff: 1},
  "Harden": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 40, "priority": 0,eff: 1},
  "Meditate": {"type": "Psychic", "category": "Status", "power": "-", "accuracy": 100, "pp": 40, "priority": 0,eff: 1},
  "Rock Polish": {"type": "Rock", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  
  "Growl": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 40, "priority": 0,eff: 1},
  "Leer": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 30, "priority": 0,eff: 1},
  "String Shot": {"type": "Bug", "category": "Status", "power": "-", "accuracy": 95, "pp": 40, "priority": 0,eff: 1},
  "Swords Dance": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  "Iron Defense": {"type": "Steel", "category": "Status", "power": "-", "accuracy": 100, "pp": 15, "priority": 0,eff: 1},
  "Nasty Plot": {"type": "Dark", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  "Amnesia": {"type": "Psychic", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  "Agility": {"type": "Psychic", "category": "Status", "power": "-", "accuracy": 100, "pp": 30, "priority": 0,eff: 1},
  "Bulk Up": {"type": "Fighting", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  "Calm Mind": {"type": "Psychic", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  "Dragon Dance": {"type": "Dragon", "category": "Status", "power": "-", "accuracy": 100, "pp": 20, "priority": 0,eff: 1},
  "Scary Face": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 100, "pp": 10, "priority": 0,eff: 1},
  "Screech": {"type": "Normal", "category": "Status", "power": "-", "accuracy": 85, "pp": 40, "priority": 0,eff: 1},

  "Will-O-Wisp": {type: "Fire",  category: "Status",  power: "-",  accuracy: 85,  pp: 15,  priority: 0,  crit: 0,eff: 1},  
"Thunder Wave": {  
  type: "Electric",  
  category: "Status",  
  power: "-",  
  accuracy: 90,  
  pp: 20,  
  priority: 0,  
  crit: 0  
  ,eff: 1
},  
"Toxic": {  
  type: "Poison",  
  category: "Status",  
  power: "-",  
  accuracy: 90,  
  pp: 10,  
  priority: 0,  
  crit: 0  ,eff: 1
},  
"Confuse Ray": {  
  type: "Ghost",  
  category: "Status",  
  power: "-",  
  accuracy: 100,  
  pp: 10,  
  priority: 0,  
  crit: 0  ,eff: 1
},  
"Hypnosis": {  
  type: "Psychic",  
  category: "Status",  
  power: "-",  
  accuracy: 60,  
  pp: 20,  
  priority: 0,  
  crit: 0  ,eff: 1
},  
"Leech Seed": {  
  type: "Grass",  
  category: "Status",  
  power: "-",  
  accuracy: 90,  
  pp: 10,  
  priority: 0,  
  crit: 0  ,eff: 1
},  
"Poison Gas": {  
  type: "Poison",  
  category: "Status",  
  power: "-",  
  accuracy: 80,  
  pp: 40,  
  priority: 0,  
  crit: 0  ,eff: 1
},

"Stun Spore":       { type: "Grass", category: "Status", power: "-", accuracy: 75, pp: 30, priority: 0, crit: 0, eff: 1 },
"Poison Powder":    { type: "Poison", category: "Status", power: "-", accuracy: 75, pp: 35, priority: 0, crit: 0, eff: 1 },
"Sleep Powder":     { type: "Grass", category: "Status", power: "-", accuracy: 75, pp: 15, priority: 0, crit: 0, eff: 1 },
"Roost":            { type: "Flying", category: "Status", power: "-", accuracy: 100, pp: 10, priority: 0, crit: 0, eff: 1 },
"Cotton Spore":     { type: "Grass", category: "Status", power: "-", accuracy: 100, pp: 40, priority: 0, crit: 0, eff: 1 },
"Spore":            { type: "Grass", category: "Status", power: "-", accuracy: 100, pp: 15, priority: 0, crit: 0, eff: 1 },
"Charge":           { type: "Electric", category: "Status", power: "-", accuracy: 100, pp: 20, priority: 0, crit: 0, eff: 1 },
"Synthesis":        { type: "Grass", category: "Status", power: "-", accuracy: 100, pp: 5, priority: 0, crit: 0, eff: 1 },
"Recover":          { type: "Normal", category: "Status", power: "-", accuracy: 100, pp: 10, priority: 0, crit: 0, eff: 1 },
"Rest":             { type: "Psychic", category: "Status", power: "-", accuracy: 100, pp: 10, priority: 0, crit: 0, eff: 1 },
"Growth":           { type: "Normal", category: "Status", power: "-", accuracy: 100, pp: 20, priority: 0, crit: 0, eff: 1 },
"Baby-Doll Eyes":   { type: "Fairy", category: "Status", power: "-", accuracy: 100, pp: 30, priority: 1, crit: 0, eff: 1 },
"High Jump Kick":   { type: "Fighting", category: "Physical", power: 130, accuracy: 90, pp: 10, priority: 0, crit: 0, eff: 1 },

"Giga Drain": {type: "Grass",category: "Special",power: 75,accuracy: 100,pp: 10,priority: 0,crit: 0,eff: 1},

"Body Press": {type: "Fighting",category: "Physical",power: 80,accuracy: 100,pp: 10,priority: 0,crit: 0,eff: 1},

"Heavy Slam": {type: "Steel",category: "Physical",power: 80,accuracy: 100,pp: 10,priority: 0, crit: 0,eff: 1},

"Gyro Ball": {
  type: "Steel",
  category: "Physical",
  power: "-",
  accuracy: 100,
  pp: 5,
  priority: 0,
  crit: 0,
  eff: 1
},

"Spore": {
  type: "Grass",
  category: "Status",
  power: "-",
  accuracy: 100,
  pp: 15,
  priority: 0,
  crit: 0,
  eff: 1
}



};
