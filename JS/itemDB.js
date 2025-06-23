const itemDB = {

    "Potion":{
        "description": "Heals the Pokemon's HP by 20.",
        "type":"Medicine",
        "effect": 20


    },
    "Super Potion":{
        "description": "Heals the Pokemon's HP by 50.",
        "type":"Medicine",
        "effect": 50
    },
    "Hyper Potion":{
        "description": "Heals the Pokemon's HP by 200.",
        "type":"Medicine",
        "effect": 200
    },
    "Max Potion":{
        "description": "Fully restores a Pokemon's HP.",
        "type":"Medicine",
        "effect": 0
    },

    "Antidote":{
        "description": "Cures a Pokémon of poison.",
        "type":"Medicine",
        "effect": "PSN|TOX",
        "done":"poison"
        
    },
    "Paralyze Heal":{
        "description": "Cures a Pokémon of paralysis.",
        "type":"Medicine",
        "effect": "PAR",
        "done":"paralysis"
    },
    "Burn Heal":{
        "description": "Cures a Pokémon of a burn.",
        "type":"Medicine",
        "effect": "BRN",
        "done":"burn"
        
    },
    "Freeze Heal":{
        "description": "Defrosts a Pokemon.",
        "type":"Medicine",
        "effect": "FRZ",
        "done":"freeze"
        
    },
    "Awakening":{
        "description": "Cures a Pokémon of sleep.",
        "type":"Medicine",
        "effect": "SLP",
        "done":"sleep"
    },

    "Full Heal":{
        "description": "Cures any status condition of a Pokemon.",
        "type":"Medicine",
        "effect": "ALL",
        "done": "status"
    },

    "Revive":{
        "description": "Cures any status condition of a Pokemon.",
        "type":"Medicine",
        "effect": ""
    },

    "Fire Stone":{
        "description":"Evolves certain species of Pokemon.",
        "pokemon":["Growlithe"],
        "type":"Item"
    },
    
    "Water Stone":{
        "description":"Evolves certain species of Pokemon.",
        "pokemon":["Growlithe"],
        "type":"Item"
    },

    "Pokeball":{
        "description":"Evolves certain species of Pokemon.",
        "effect":1,
        "type":"Pokeball"
    },

    "Great Ball":{
        "description":"Evolves certain species of Pokemon.",
        "effect":1.5,
        "type":"Pokeball"
    },

    "Ultra Ball":{
        "description":"Evolves certain species of Pokemon.",
        "effect":2,
        "type":"Pokeball"
    },

    "Master Ball":{
        "description":"Evolves certain species of Pokemon.",
        "effect":2,
        "type":"Pokeball"
    },

    "Oran Berry":{
        "description":"If a Pokémon holds one, it can restore 10 HP during battle.",
        "effect":10,
        "type":"Berry"
    },

    "Sitrus Berry":{
        "description":"If a Pokémon holds one, it can restore its own HP a little.",
        "effect":10,
        "type":"Berry"
    },

    "Pecha Berry":{
        "description":"A Berry to be consumed by Pokémon. It cures poison.",
        "type":"Berry",
        "effect": "PSN|TOX",
        "done":"poison"
    },

    "Cheri Berry":{
        "description":"A Berry to be consumed by Pokémon. It cures paralysis.",
        "type":"Berry",
        "effect": "PAR",
        "done":"paralysis"
    },

    "Chesto Berry":{
        "description":"A Berry to be consumed by Pokémon. It can wake up a Pokémon from sleep.",
        "type":"Berry",
        "effect": "SLP",
        "done":"sleep"
    },

    "Rawst Berry":{
        "description":"A Berry to be consumed by Pokémon. It cures paralysis.",
        "type":"Berry",
        "effect": "BRN",
        "done":"burn"
    },

    "Aspear Berry":{
        "description":"A Berry to be consumed by Pokémon. It cures paralysis.",
        "type":"Berry",
        "effect": "FRZ",
        "done":"frostbite"
    },

    "Lum Berry":{
        "description":"A Berry to be consumed by Pokémon. It cures paralysis.",
        "type":"Berry",
        "effect": "ALL",
        "done":"poison"
    },

}