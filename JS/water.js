class Water{
    constructor(x,y,width,height,location){
        this.x = x
        this.y = y
        this.sprite = createSprite(x,y)
        this.sprite.visible = false
        this.sprite.width = width
        this.sprite.height = height
        this.location = location
        this.touch;
        this.encounterCoolDown = 0
        this.sprite.shapeColor = "lightblue"
    }

    checkEncounter(){
        if(player.overlap(this.sprite)&&playerLocation === this.location&&
        this.encounterCoolDown === 0&&(keyWentDown("up")||keyWentDown("down")||
            keyWentDown("left")||keyWentDown("right"))&&move === true&&currentBattle === null){
            let rand = Math.round(random(1,12))
            if(rand === 5){
                this.encounterCoolDown = 120
                this.encounter()
                wc = false
            }
        }
        while(this.encounterCoolDown>0){
            this.encounterCoolDown--

        }
    }

    encounter(){
        
        const encountersHere = waterEncounters[this.location]
        let chance = Math.round(random(1,100))
        let pokemon,lvl,wildPokemon;
        for(let i = 0;i<encountersHere.length;i++){
            if(chance>=encountersHere[i].minChance&&chance<=encountersHere[i].maxChance){
                pokemon = encountersHere[i].name
                lvl = Math.round(random(encountersHere[i].minLevel,
                    encountersHere[i].maxLevel))
                break;
            }
        }
        
        wildPokemon = new Pokemon(pokemon,lvl,pokedex,moveDB,[],null)
        currentBattle = new Battle(party,[wildPokemon],"","transition","","","wild")
        trainerImg = loadImage("/front/"+pokemon+".png")
        moving = false
        move = false
    }

    show(){
        drawSprite(this.sprite)
    }

}