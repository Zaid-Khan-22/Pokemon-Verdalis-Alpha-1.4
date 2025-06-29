const abilities = {
    Rowlet: ["Overgrow"],
    Dartrix: ["Overgrow"],
    Decidueye: ["Overgrow"],
    Chimchar: ["Blaze"],
    Monferno: ["Blaze"],
    Infernape: ["Blaze"],
    Mudkip: ["Torrent"],
    Marshtomp: ["Torrent"],
    Swampert: ["Torrent"],
    Meowth: ["Slick Paws"],
    Persian: ["Slick Paws"],
    Munchlax: ["Thick Fat"],
    Snorlax: ["Thick Fat"],
    Teddiursa: ["Hustle"],
    Ursaring: ["Guts"],
    Zigzagoon: ["Quick Feet", "Thick Fat"],
    Linoone: ["Quick Feet", "Thick Fat"],
    "Porygon-Z": ["Adaptability"],
    Lillipup: ["Vital Spirit"],
    Herdier: ["Intimidate"],
    Stoutland: ["Intimidate"],
    Zangoose: ["Immunity"],
    Growlithe: ["Intimidate"],
    Arcanine: ["Intimidate"],
    Flareon: ["Flash Fire"],
    Magby: ["Flame Body"],
    Magmar: ["Flame Body"],
    Magmortar: ["Flame Body"],
    Darumaka: ["Hustle"],
    Darmanitan: ["Sheer Force"],
    Larvesta: ["Flame Body"],
    Volcarona: ["Levitate"],
    Fletchling: ["Gale Wings"],
    Fletchinder: ["Gale Wings"],
    Talonflame: ["Gale Wings"],
    Machop: ["Guts","No Guard"],
    Machoke: ["Guts","No Guard"],
    Machamp: ["Guts","No Guard"],
    Mienfoo: ["Mold Breaker","Reckless"],
    Mienshao: ["Mold Breaker","Reckless"],
    Riolu: ["Adaptability"],
    Lucario: ["Adaptability"],
    Croagunk: ["Poison Touch"],
    Toxicroak: ["Poison Touch"],
    Vaporeon: ["Water Absorb"],
    Magikarp: ["Swift Swim"],
    Gyarados: ["Intimidate"],
    Corphish: ["Hyper Cutter"],
    Crawdaunt: ["Adaptability"],
    Binacle: ["Tough Claws"],
    Barbaracle: ["Tough Claws"],
    Spearow: ["Sniper"],
    Fearow: ["Sniper"],
    Rookidee: ["Gale Wings"],
    Corvisquire: ["Gale Wings"],
    Corviknight: ["Pressure"],
    Lileep: ["Petrify"],
    Cradily: ["Petrify"],
    Budew: ["Poison Point", "Chlorophyll"],
    Roselia: ["Poison Point", "Chlorophyll"],
    Roserade: ["Poison Point", "Chlorophyll"],
    Leafeon: ["Chlorophyll"],
    Ferroseed: ["Iron Barbs"],
    Ferrothorn: ["Iron Barbs"],
    Capsakid: ["Chlorophyll"],
    Scovillain: ["Scovillie Surge"],
    Lotad: ["Rain Dish"],
    Lombre: ["Rain Dish"],
    Ludicolo: ["Rain Dish"],
    Phantump: ["Overcoat"],
    Trevenant: ["Overcoat"],
    NidoranM: ["Poison Point"],
    Nidorino: ["Poison Point"],
    Nidoking: ["Sheer Force"],
    NidoranF: ["Poison Point"],
    Nidorina: ["Poison Point"],
    Nidoqueen: ["Sheer Force"],
    Zubat: ["Infiltrator"],
    Golbat: ["Infiltrator"],
    Crobat: ["Infiltrator"],
    Seviper: ["Venom Rush"],
    Skrelp: ["Toxic Tide"],
    Dragalge: ["Toxic Tide"],
    Magnemite: ["Sturdy", "Analytic"],
    Magneton: ["Sturdy", "Analytic"],
    Magnezone: ["Sturdy", "Analytic"],
    Jolteon: ["Volt Absorb"],
    Elekid: ["Static"],
    Electabuzz: ["Static"],
    Electivire: ["Static"],
    Chinchou: ["Volt Absorb"],
    Lanturn: ["Volt Absorb"],
    Electrike: ["Lightning Rod"],
    Manectric: ["Lightning Rod"],
    Toxel: ["Resonance"],
    Toxtricity: ["Resonance"],
    Wattrel: ["Static", "Volt Absorb"],
    Kilowattrel: ["Static", "Volt Absorb"],
    Diglett: ["Arena Trap", "First Strike"],
    Dugtrio: ["Arena Trap", "First Strike"],
    Shellos: ["Storm Drain"],
    Gastrodon: ["Storm Drain"],
    Sandile: ["Intimidate", "Moxie"],
    Krokorok: ["Intimidate", "Moxie"],
    Krookodile: ["Intimidate", "Moxie"],
    Drilbur: ["Sand Rush", "Tough Claws"],
    Excadrill: ["Sand Rush", "Tough Claws"],
    Gligar: ["Hyper Cutter"],
    Gliscor: ["Tough Claws", "Immunity"],
    Toedscool: ["Mycelium Might"],
    Toedscruel: ["Mycelium Might"],
    Ralts: ["Synchronize"],
    Kirlia: ["Synchronize"],
    Gardevoir: ["Synchronize"],
    Gallade: ["Sharpness"],
    Meditite: ["Pure Power"],
    Medicham: ["Pure Power"],
    Beldum: ["Clear Body"],
    Metang: ["Clear Body"],
    Metagross: ["Clear Body"],
    Sigilyph: ["Tinted Lens"],
    Girafarig: ["Sap Sipper"],
    Farigiraf: ["Sap Sipper"],
    Espeon: ["Synchronize"],
    Rhyhorn: ["Rock Head","Reckless"],
    Rhydon: ["Rock Head","Reckless"],
    Rhyperior: ["Solid Rock","Reckless"],
    Roggenrola: ["Sturdy"],
    Boldore: ["Sturdy"],
    Gigalith: ["Sturdy"],
    Rockruff: ["Strong Jaw"],
    Lycanroc: ["Strong Jaw"],
    Geodude: ["Sturdy"],
    Graveler: ["Sturdy"],
    Golem: ["Sturdy"],
    Glaceon: ["Slush Rush"],
    Lapras: ["Water Absorb"],
    Snorunt: ["Refrigerate"],
    Glalie: ["Refrigerate"],
    Froslass: ["Levitate"],
    Swinub: ["Thick Fat"],
    Piloswine: ["Thick Fat"],
    Mamoswine: ["Thick Fat"],
    Caterpie: ["Swarm"],
    Metapod: ["Swarm"],
    Butterfree: ["Compound Eyes"],
    Heracross: ["Guts"],
    Scyther: ["Technician"],
    Scizor: ["Technician"],
    Yanma: ["Speed Boost"],
    Yanmega: ["Speed Boost"],
    Sewaddle: ["Swarm", "Overcoat"],
    Swadloon: ["Swarm", "Overcoat"],
    Leavanny: ["Swarm", "Overcoat"],
    Venipede: ["Swarm", "Poison Point"],
    Whirlipede: ["Speed Boost", "Poison Point"],
    Scolipede: ["Speed Boost", "Poison Point"],
    Dwebble: ["Shell Armor", "Sturdy"],
    Crustle: ["Shell Armor", "Sturdy"],
    Grubbin: ["Swarm"],
    Charjabug: ["Swarm"],
    Vikavolt: ["Levitate"],
    Horsea: ["Sniper","Swift Swim"],
    Seadra: ["Sniper","Swift Swim"],
    Kingdra: ["Sniper","Swift Swim"],
    Trapinch: ["Arena Trap"],
    Vibrava: ["Levitate"],
    Flygon: ["Levitate"],
    Bagon: ["Rock Head", "Sheer Force"],
    Shelgon: ["Rock Head", "Sheer Force"],
    Salamence: ["Intimidate", "Moxie"],
    Druddigon: ["Rough Skin"],
    Deino: ["Hustle"],
    Zweilous: ["Hustle"],
    Hydreigon: ["Levitate"],
    Noibat: ["Resonance", "Infiltrator"],
    Noivern: ["Resonance", "Infiltrator"],
    Axew: ["Mold Breaker"],
    Fraxure: ["Mold Breaker"],
    Haxorus: ["Mold Breaker"],
    Gible: ["Rough Skin"],
    Gabite: ["Rough Skin"],
    Garchomp: ["Rough Skin"],
    Houndour: ["Flash Fire"],
    Houndoom: ["Flash Fire"],
    Murkrow: ["Super Luck", "Prankster"],
    Honchkrow: ["Super Luck", "Prankster"],
    Sneasel: ["Technician"],
    Weavile: ["Pressure"],
    Larvitar: ["Guts"],
    Pupitar: ["Sand Stream"],
    Tyranitar: ["Sand Stream"],
    Skorupi: ["Battle Armor"],
    Drapion: ["Battle Armor"],
    Absol: ["Super Luck"],
    Umbreon: ["Synchronize"],
    Gastly: ["Levitate"],
    Haunter: ["Levitate"],
    Gengar: ["Levitate"],
    Sableye: ["Prankster"],
    Litwick: ["Flame Body"],
    Lampent: ["Flame Body"],
    Chandelure: ["Flame Body"],
    Onix: ["Sturdy", "Rock Head"],
    Steelix: ["Sturdy", "Rock Head"],
    Aron: ["Rock Head", "Sturdy"],
    Lairon: ["Rock Head", "Sturdy"],
    Aggron: ["Rock Head", "Sturdy"],
    Mawile: ["Intimidate"],
    Flabébé: ["Pixelate"],
    Floette: ["Pixelate"],
    Florges: ["Serene Grass"],
    Sylveon: ["Pixilate"],
    Fomantis: ["Leaf Guard"],
    Lurantis: ["Leaf Guard"],
    Skiddo: ["Sap Sipper"],
    Gogoat: ["Sap Sipper"],
    Shroomish: ["Effect Spore"],
    Breloom: ["Technician"],
    Tropius: ["Thick Fat"],
    Dewpider: ["Water Bubble"],
    Araquanid: ["Water Bubble"],
    Ducklett: ["Hydration"],
    Swanna: ["Hydration"],
    Basculin: ["Reckless"],
    Alomomola: ["Hydration"],
    Mareep: ["Cotton Down"],
    Flaaffy: ["Cotton Down"],
    Ampharos: ["Cotton Down"],
    Phanpy: ["Sturdy"],
    Donphan: ["Sturdy"],
    Hippopotas: ["Sand Stream"],
    Hippowdon: ["Sand Stream"],
    Vanillite: ["Ice Body"],
    Vanillish: ["Ice Body"],
    Vanilluxe: ["Ice Body"],
    Cryogonal: ["Levitate"],
    Spheal: ["Thick Fat"],
    Sealeo: ["Thick Fat"],
    Walrein: ["Thick Fat"],
    Cubchoo: ["Slush Rush"],
    Beartic: ["Slush Rush"],
    Oranguru: ["Tinted Lens"],
    Mimikyu: ["Prankster"],
    Yamask: ["Prankster"],
    Cofagrigus: ["Prankster"],
    Drifloon: ["Flare Boost"],
    Drifblim: ["Flare Boost"],
    Sandygast: ["Water Compaction"],
    Palossand: ["Water Compaction"],
    Spiritomb: ["Pressure"],
    Blipbug: ["Swarm","Compound Eyes"],
    Dottler: ["Swarm","Compound Eyes"],
    Orbeetle: ["Swarm","Compound Eyes"],
    Tyrunt: ["Strong Jaw"],
    Tyrantrum: ["Strong Jaw"],
    Zorua: ["Prankster"],
    Zoroark: ["Prankster"],
    Inkay: ["Contrary"],
    Malamar: ["Contrary"],
    Bronzor: ["Levitate", "Heatproof"],
    Bronzong: ["Levitate", "Heatproof"],
    Pawniard: ["Sharpness"],
    Bisharp: ["Sharpness"],
    Kingambit: ["Sharpness"],
    Nosepass: ["Sturdy"],
    Probopass: ["Sturdy"],
    Cutiefly: ["Swarm"],
    Ribombee: ["Swarm"],
    Hoothoot: ["Insomnia"],
    Noctowl: ["Insomnia"],
    Togepi: ["Serene Grace"],
    Togetic: ["Serene Grace"],
    Togekiss: ["Serene Grace"],
    Audino: ["Thick Fat"],
    Aipom: ["Technician"],
    Ambipom: ["Technician"],
    Whismur: ["Resonance"],
    Loudred: ["Resonance"],
    Exploud: ["Resonance"],
    Buneary: ["Limber"],
    Lopunny: ["Limber"],
    Rufflet: ["Sheer Force"],
    Braviary: ["Sheer Force"],
    Doduo: ["Fleet Feet"],
    Dodrio: ["Fleet Feet"],
    Starly: ["Hustle"],
    Staravia: ["Intimidate"],
    Staraptor: ["Intimidate"],
    Spinda: ["Contrary"],
    Shinx: ["Intimidate"],
    Luxio: ["Intimidate"],
    Luxray: ["Intimidate"],
    Impidimp: ["Prankster"],
    Morgrem: ["Prankster"],
    Grimmsnarl: ["Prankster"],
    Staryu: ["Analytic"],
    Starmie: ["Analytic"],
    Feebas: ["Swift Swim"],
    Milotic: ["Marvel Scale"]
};

const strongJaw = [
  "Bite",  
  "Crunch",  
  "Fire Fang",  
  "Ice Fang",  
  "Poison Fang",  
  "Thunder Fang"  
];

const sharpness = [
  "Aerial Ace",  
  "Air Cutter",  
  "Fury Cutter",  
  "Leaf Blade",  
  "Night Slash",  
  "Psycho Cut",  
  "Razor Leaf",  
  "Razor Shell",  
  "Slash",  
  "X-Scissor"  
];

const resonance = [
  "Boomburst",
  "Bug Buzz",
  "Disarming Voice",
  "Hyper Voice",
  "Snarl"
];

const toughClawsMoves = [
  "Scratch", "Tackle", "Stomp", "Slash", "Quick Attack", "Headbutt", "Take Down", "Double-Edge", "Giga Impact",
  "Fire Fang", "Fire Punch", "Flame Wheel", "Flare Blitz", "Blaze Kick",
  "Aqua Jet", "Waterfall", "Aqua Tail", "Crabhammer", "Liquidation",
  "Leafage", "Razor Leaf", "Seed Bomb", "Leaf Blade", "Wood Hammer", "Horn Leech",
  "Nuzzle", "Thunder Fang", "Spark", "Thunder Punch", "Wild Charge", "Volt Tackle", "Zing Zap",
  "Ice Shard", "Ice Fang", "Icicle Crash", "Ice Punch", "Avalanche",
  "Sand Tomb", "Bulldoze", "Dig", "Earthquake", "High Horsepower",
  "Heart Stamp", "Zen Headbutt", "Psycho Cut",
  "Faint Attack", "Assurance", "Bite", "Crunch", "Knock Off", "Foul Play", "Night Slash", "Sucker Punch",
  "Dragon Claw", "Dragon Tail", "Outrage", "Dual Chop", "Breaking Swipe", "Dragon Rush",
  "Play Rough", "Spirit Break",
  "Rock Smash", "Mach Punch", "Rolling Kick", "Brick Break", "Hammer Arm", "Close Combat", "High Jump Kick", "Cross Chop",
  "Poison Sting", "Poison Fang", "Poison Jab", "Gunk Shot", "Poison Tail", "Cross Poison",
  "Peck", "Pluck", "Wing Attack", "Aerial Ace", "Sky Attack", "Brave Bird", "Drill Peck", "Bounce",
  "Rock Throw", "Rock Tomb", "Stone Edge", "Rock Slide", "Smack Down",
  "Astonish", "Lick", "Shadow Claw", "Shadow Sneak", "Phantom Force",
  "Metal Claw", "Iron Head", "Iron Tail", "Meteor Mash", "Bullet Punch", "Steel Wing",
  "Fury Cutter", "X-Scissor", "Megahorn", "Leech Life", "U-turn", "Steamroller"
];

const recklessMoves = [
  "Flare Blitz",
  "Wild Charge",
  "Volt Tackle",
  "Brave Bird",
  "Wood Hammer",
  "Double-Edge",
  "Take Down", 
  "High Jump Kick"
];