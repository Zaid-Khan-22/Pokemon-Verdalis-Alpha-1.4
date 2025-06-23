 
let t1,t2,t3,t4,t5,t6,t7,t8,i = 0
let temp = 0;
let npctalk = [false,false,false,false,false]
let noOfPokemonLeft = 0
let trainerImg

let pokemon1Img = null,pokemon2Img = null,pokemon3Img = null
,pokemon4Img = null,pokemon5Img = null,pokemon6Img = null
let g1,g2,g3,g4,g5,g6,g7
let w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11

let runningShoes = true
let menuOpen = true
let enemyPokemonFront, playerPokemonBack;

let playerLocation;
let enemyCreatedTeam = [];
let pokemonBackSprite

let selectedMoveIndex = null;
let enemySelectedMoveIndex = null;
let playerHasChosen = false;
let enemyHasChosen = false;
let battleOptions = "menu";

let catchState = " "

let npc1Talking = [false]
let tempPokemonSprite

const bag = {
  items: [new Item("Fire Stone",2),new Item("Water Stone",2)],
  medicine: [new Item("Freeze Heal",1),new Item("Super Potion",3),
    new Item("Hyper Potion",2),new Item("Max Potion",1),new Item("Revive",3)],
  pokeballs: [
     new Item("Pokeball",20),new Item("Great Ball",20),
      new Item("Ultra Ball",20),new Item("Master Ball",20)
  ],
  tms: []}

let multiplier = 1

function preload(){
    logo = loadImage("logo.jpg");

    upperroom1 = loadImage("map/upr1.png")
    lowerroom1 = loadImage("map/lwr1.png")
    auburntown1 = loadImage("map/auburntown1.png")
    auburntown2 = loadImage("map/auburntown2.png")
    auburntown3 = loadImage("map/auburntown3.png")
    auburntown4 = loadImage("map/auburntown4.png")
    auburntown5 = loadImage("map/auburntown5.png")
    auburntown6 = loadImage("map/auburntown6.png")
    lab = loadImage("map/lab.png")
    route1_1 = loadImage("map/route1-1.png")
    route1_2 = loadImage("map/route1-2.png")
    route1_3 = loadImage("map/route1-3.png")
    route1_4 = loadImage("map/route1-4.png")
    smallhouse = loadImage("map/r1.png")
    twinlakepath_1 = loadImage("map/twinlakepath1.png")
    twinlakepath_2 = loadImage("map/twinlakepath2.png")
    twinlakepath_3 = loadImage("map/twinlakepath3.png")
    twinlakepath_4 = loadImage("map/twinlakepath4.png")
    twinlakepath_5 = loadImage("map/twinlakepath5.png")
    twinlakepath_6 = loadImage("map/twinlakepath6.png")
    twinlakepath_7 = loadImage("map/twinlakepath7.png")
    twinlakepath_8 = loadImage("map/twinlakepath8.png")
    twinlakepath_9 = loadImage("map/twinlakepath9.png")
    twinlakepath_10 = loadImage("map/twinlakepath10.png")
    twinlakepath_11 = loadImage("map/twinlakepath11.png")
    twinlakepath_12 = loadImage("map/twinlakepath12.png")

    pokeballImg = loadImage("pokeball.png")
    pokedexlogo = loadImage("pokedexlogo.png")
  baglogo = loadImage("baglogo.png")
  trainerlogo = loadImage("trainerlogo.png")
  exitlogo = loadImage("exitlogo.png")
    itemslogo = loadImage("itemslogo.png")
  medicinelogo = loadImage("medicinelogo.png")
  pokeballlogo = loadImage("pokeballlogo.png")
  tmslogo = loadImage("tmslogo.png")
    battleTransitionBackround = loadImage("transition.png")
    battleBackround = loadImage("battle.png")

    thorneSprite = loadImage("sprites/thorne.png")
    playerSpriteFront = loadImage("sprites/player.png")

    playerupstand = loadAnimation("overworld/player/up1.png")
    playerdownstand = loadAnimation("overworld/player/down1.png")
    playerleftstand = loadAnimation("overworld/player/left1.png")
    playerrightstand = loadAnimation("overworld/player/right1.png")

    playerupwalk = loadAnimation("overworld/player/up1.png","overworld/player/up2.png",
    "overworld/player/up3.png","overworld/player/up4.png")
    playerdownwalk = loadAnimation("overworld/player/down1.png","overworld/player/down2.png",
    "overworld/player/down3.png","overworld/player/down4.png")
    playerleftwalk = loadAnimation("overworld/player/left1.png","overworld/player/left2.png",
    "overworld/player/left3.png","overworld/player/left4.png")
    playerrightwalk = loadAnimation("overworld/player/right1.png","overworld/player/right2.png",
    "overworld/player/right3.png","overworld/player/right4.png")

    momupstand = loadAnimation("overworld/mom/up1.png")
    momdownstand = loadAnimation("overworld/mom/down1.png")
    momleftstand = loadAnimation("overworld/mom/left1.png")
    momrightstand = loadAnimation("overworld/mom/right1.png")

    momupwalk = loadAnimation("overworld/mom/up1.png","overworld/mom/up2.png",
    "overworld/mom/up3.png","overworld/mom/up4.png")
    momdownwalk = loadAnimation("overworld/mom/down1.png","overworld/mom/down2.png",
    "overworld/mom/down3.png","overworld/mom/down4.png")
    momleftwalk = loadAnimation("overworld/mom/left1.png","overworld/mom/left2.png",
    "overworld/mom/left3.png","overworld/mom/left4.png")
    momrightwalk = loadAnimation("overworld/mom/right1.png","overworld/mom/right2.png",
    "overworld/mom/right3.png","overworld/mom/right4.png")

    thorneupstand = loadAnimation("overworld/thorne/up1.png")
    thornedownstand = loadAnimation("overworld/thorne/down1.png")
    thorneleftstand = loadAnimation("overworld/thorne/left1.png")
    thornerightstand = loadAnimation("overworld/thorne/right1.png")

    thorneupwalk = loadAnimation("overworld/thorne/up1.png","overworld/thorne/up2.png",
    "overworld/thorne/up3.png","overworld/thorne/up4.png")
    thornedownwalk = loadAnimation("overworld/thorne/down1.png","overworld/thorne/down2.png",
    "overworld/thorne/down3.png","overworld/thorne/down4.png")
    thorneleftwalk = loadAnimation("overworld/thorne/left1.png","overworld/thorne/left2.png",
      "overworld/thorne/left3.png","overworld/thorne/left4.png")
    thornerightwalk = loadAnimation("overworld/thorne/right1.png","overworld/thorne/right2.png",
    "overworld/thorne/right3.png","overworld/thorne/right4.png")

    officerupstand = loadAnimation("overworld/officer/up1.png")
    officerdownstand = loadAnimation("overworld/officer/down1.png")
    officerleftstand = loadAnimation("overworld/officer/left1.png")
    officerrightstand = loadAnimation("overworld/officer/right1.png")

    officerupwalk = loadAnimation("overworld/officer/up1.png","overworld/officer/up2.png",
    "overworld/officer/up3.png","overworld/officer/up4.png")
    officerdownwalk = loadAnimation("overworld/officer/down1.png","overworld/officer/down2.png",
    "overworld/officer/down3.png","overworld/officer/down4.png")  
    officerleftwalk = loadAnimation("overworld/officer/left1.png","overworld/officer/left2.png",
    "overworld/officer/left3.png","overworld/officer/left4.png")
    officerrightwalk = loadAnimation("overworld/officer/right1.png","overworld/officer/right2.png",
    "overworld/officer/right3.png","overworld/officer/right4.png")  

    kaiupstand = loadAnimation("overworld/kai/up1.png")
    kaidownstand = loadAnimation("overworld/kai/down1.png")
    kaileftstand = loadAnimation("overworld/kai/left1.png")
    kairightstand = loadAnimation("overworld/kai/right1.png")

    kaiupwalk = loadAnimation("overworld/kai/up1.png","overworld/kai/up2.png",
      "overworld/kai/up3.png","overworld/kai/up4.png")
    kaidownwalk = loadAnimation("overworld/kai/down1.png","overworld/kai/down2.png",
      "overworld/kai/down3.png","overworld/kai/down4.png")
    kaileftwalk = loadAnimation("overworld/kai/left1.png","overworld/kai/left2.png",
      "overworld/kai/left3.png","overworld/kai/left4.png")
    kairightwalk = loadAnimation("overworld/kai/right1.png","overworld/kai/right2.png",
      "overworld/kai/right3.png","overworld/kai/right4.png")

    aroma_ladyupstand = loadAnimation("overworld/aroma_lady/up1.png")
    aroma_ladydownstand = loadAnimation("overworld/aroma_lady/down1.png")
    aroma_ladyleftstand = loadAnimation("overworld/aroma_lady/left1.png")
    aroma_ladyrightstand = loadAnimation("overworld/aroma_lady/right1.png")

    aroma_ladyupwalk = loadAnimation("overworld/aroma_lady/up1.png","overworld/aroma_lady/up2.png",
      "overworld/aroma_lady/up3.png","overworld/aroma_lady/up4.png")
    aroma_ladydownwalk = loadAnimation("overworld/aroma_lady/down1.png","overworld/aroma_lady/down2.png",
      "overworld/aroma_lady/down3.png","overworld/aroma_lady/down4.png")
    aroma_ladyleftwalk = loadAnimation("overworld/aroma_lady/left1.png","overworld/aroma_lady/left2.png",
      "overworld/aroma_lady/left3.png","overworld/aroma_lady/left4.png")
    aroma_ladyrightwalk = loadAnimation("overworld/aroma_lady/right1.png","overworld/aroma_lady/right2.png",
      "overworld/aroma_lady/right3.png","overworld/aroma_lady/right4.png")  
    
    backpackerupstand = loadAnimation("overworld/backpacker/up1.png")
    backpackerdownstand = loadAnimation("overworld/backpacker/down1.png")
    backpackerleftstand = loadAnimation("overworld/backpacker/left1.png")
    backpackerrightstand = loadAnimation("overworld/backpacker/right1.png")

    backpackerupwalk = loadAnimation("overworld/backpacker/up1.png","overworld/backpacker/up2.png",
      "overworld/backpacker/up3.png","overworld/backpacker/up4.png")
    backpackerdownwalk = loadAnimation("overworld/backpacker/down1.png","overworld/backpacker/down2.png",
      "overworld/backpacker/down3.png","overworld/backpacker/down4.png")
    backpackerleftwalk = loadAnimation("overworld/backpacker/left1.png","overworld/backpacker/left2.png",
      "overworld/backpacker/left3.png","overworld/backpacker/left4.png")
    backpackerrightwalk = loadAnimation("overworld/backpacker/right1.png","overworld/backpacker/right2.png",
      "overworld/backpacker/right3.png","overworld/backpacker/right4.png")  
    
    camper_maleupstand = loadAnimation("overworld/camper_male/up1.png")
    camper_maledownstand = loadAnimation("overworld/camper_male/down1.png")
    camper_maleleftstand = loadAnimation("overworld/camper_male/left1.png")
    camper_malerightstand = loadAnimation("overworld/camper_male/right1.png")

    camper_maleupwalk = loadAnimation("overworld/camper_male/up1.png","overworld/camper_male/up2.png",
      "overworld/camper_male/up3.png","overworld/camper_male/up4.png")
    camper_maledownwalk = loadAnimation("overworld/camper_male/down1.png","overworld/camper_male/down2.png",
      "overworld/camper_male/down3.png","overworld/camper_male/down4.png")
    camper_maleleftwalk = loadAnimation("overworld/camper_male/left1.png","overworld/camper_male/left2.png",
      "overworld/camper_male/left3.png","overworld/camper_male/left4.png")
    camper_malerightwalk = loadAnimation("overworld/camper_male/right1.png","overworld/camper_male/right2.png",
      "overworld/camper_male/right3.png","overworld/camper_male/right4.png")  

    hikerupstand = loadAnimation("overworld/hiker/up1.png")
    hikerdownstand = loadAnimation("overworld/hiker/down1.png")
    hikerleftstand = loadAnimation("overworld/hiker/left1.png")
    hikerrightstand = loadAnimation("overworld/hiker/right1.png")

    hikerupwalk = loadAnimation("overworld/hiker/up1.png","overworld/hiker/up2.png",
      "overworld/hiker/up3.png","overworld/hiker/up4.png")
    hikerdownwalk = loadAnimation("overworld/hiker/down1.png","overworld/hiker/down2.png",
      "overworld/hiker/down3.png","overworld/hiker/down4.png")
    hikerleftwalk = loadAnimation("overworld/hiker/left1.png","overworld/hiker/left2.png",
      "overworld/hiker/left3.png","overworld/hiker/left4.png")
    hikerrightwalk = loadAnimation("overworld/hiker/right1.png","overworld/hiker/right2.png",
      "overworld/hiker/right3.png","overworld/hiker/right4.png")  

    ladyupstand = loadAnimation("overworld/lady/up1.png")
    ladydownstand = loadAnimation("overworld/lady/down1.png")
    ladyleftstand = loadAnimation("overworld/lady/left1.png")
    ladyrightstand = loadAnimation("overworld/lady/right1.png")

    ladyupwalk = loadAnimation("overworld/lady/up1.png","overworld/lady/up2.png",
      "overworld/lady/up3.png","overworld/lady/up4.png")
    ladydownwalk = loadAnimation("overworld/lady/down1.png","overworld/lady/down2.png",
      "overworld/lady/down3.png","overworld/lady/down4.png")
    ladyleftwalk = loadAnimation("overworld/lady/left1.png","overworld/lady/left2.png",
      "overworld/lady/left3.png","overworld/lady/left4.png")
    ladyrightwalk = loadAnimation("overworld/lady/right1.png","overworld/lady/right2.png",
      "overworld/lady/right3.png","overworld/lady/right4.png")  

    madameupstand = loadAnimation("overworld/madame/up1.png")
    madamedownstand = loadAnimation("overworld/madame/down1.png")
    madameleftstand = loadAnimation("overworld/madame/left1.png")
    madamerightstand = loadAnimation("overworld/madame/right1.png")

    madameupwalk = loadAnimation("overworld/madame/up1.png","overworld/madame/up2.png",
      "overworld/madame/up3.png","overworld/madame/up4.png")
    madamedownwalk = loadAnimation("overworld/madame/down1.png","overworld/madame/down2.png",
      "overworld/madame/down3.png","overworld/madame/down4.png")
    madameleftwalk = loadAnimation("overworld/madame/left1.png","overworld/madame/left2.png",
      "overworld/madame/left3.png","overworld/madame/left4.png")
    madamerightwalk = loadAnimation("overworld/madame/right1.png","overworld/madame/right2.png",
      "overworld/madame/right3.png","overworld/madame/right4.png")  

    bug_catcherupstand = loadAnimation("overworld/bug_catcher/up1.png")
    bug_catcherdownstand = loadAnimation("overworld/bug_catcher/down1.png")
    bug_catcherleftstand = loadAnimation("overworld/bug_catcher/left1.png")
    bug_catcherrightstand = loadAnimation("overworld/bug_catcher/right1.png")

    youngsterupstand = loadAnimation("overworld/youngster/up1.png")
    youngsterdownstand = loadAnimation("overworld/youngster/down1.png")
    youngsterleftstand = loadAnimation("overworld/youngster/left1.png")
    youngsterrightstand = loadAnimation("overworld/youngster/right1.png")

    swimmer_femaleupstand = loadAnimation("overworld/swimmer_female/up1.png")
    swimmer_femaledownstand = loadAnimation("overworld/swimmer_female/down1.png")
    swimmer_femaleleftstand = loadAnimation("overworld/swimmer_female/left1.png")
    swimmer_femalerightstand = loadAnimation("overworld/swimmer_female/right1.png")

    fisherupstand = loadAnimation("overworld/fisher/up1.png")
    fisherdownstand = loadAnimation("overworld/fisher/down1.png")
    fisherleftstand = loadAnimation("overworld/fisher/left1.png")
    fisherrightstand = loadAnimation("overworld/fisher/right1.png")

    rowletPokedex = loadImage("pokedex/rowlet.png")
    chimcharPokedex = loadImage("pokedex/chimchar.png")
    mudkipPokedex = loadImage("pokedex/mudkip.png")

    partybg = loadImage("partyBg.png")

    hughBackSprite = loadImage("hughBack.png")

    downImg = loadImage("downarrow.png")
    rightImg = loadImage("rightarrow.png")

    pokeballSprite = loadImage("pokeballs/pokeball.png")
    pokeballCaughtSprite = loadImage("pokeballs/pokeballcaught.png")

    tempPokemonImage = loadImage("front/Lillipup.png")
    

}
function setup() {
  let cnv = createCanvas(640, 480);
  cnv.parent(document.body);
  cnv.style('z-index', '-1');

  gameState = 0;
  bgState = 0;
  move = true;
  moving = false
  interact = false;
  chat = false;
  battlingChat = false
  starterPokemon = ""
  menuCreated = false
  menuIndex = 0
  subIndex = -10
  tempIndex = -10
  inBagIndex = -10
  pokemonIndex = 0
  menuPage = ""
  playerMoney = 0

  tempplayerSprite = createSprite(154,212)
  tempplayerSprite.visible = false
  tempPokemonSprite = createSprite(495, 130);
  tempPokemonSprite.visible = false

  options = false;
  opt = 1;
  transition = false
  playerDirection = "up"
  moveSpeed = 4
  tc = false;
  gc = false
  wc = false
  playerLocation = ""
  mult = 10

  pokeballImage = null

  battle = false
  currentBattle = null

  miniState = 0;
  textState = 0;
  
  shadeIndex = 0;

  battleChat = null
  trainerSprite = null
  playerSprite = null;

  officers = [false]

  transitionCharge = createSprite(0,0,10,10);
  transitionCounter = 0;
  transitionCharge.visible = false;

  textCharge = createSprite(0,0,10,10);
  textCounter = 0;
  textCharge.visible = false;

  obj1 = createSprite(320,180)
  obj1.addImage(thorneSprite)
  obj1.visible = false;

  text1 = ""
  text2 = ""
  text3 = ""

  option1 = ""
  option2 = ""
  option3 = ""

  playerName = "";
  inputCreated = false;

  party = []
  noOfPartyPokemon = 0
  noOfPokemon = 0
  pc = []
  

  player = createSprite(410,109)
  player.addAnimation("up_w",playerupwalk)
  player.addAnimation("down_w",playerdownwalk)
  player.addAnimation("left_w",playerleftwalk)
  player.addAnimation("right_w",playerrightwalk)
  player.addAnimation("up_s",playerupstand)
  player.addAnimation("down_s",playerdownstand)
  player.addAnimation("left_s",playerleftstand)
  player.addAnimation("right_s",playerrightstand)

  //characters npc
  mom = null
  thorne = null
  npc1 = null
  npc2 = null
  npc3 = null
  npc4 = null
  npc5 = null
  kai = null

  tempCharge = createSprite(0,0,10,10)
  tempCounter = 0
  tempCharge.visible = false
 
  ocharge = createSprite(0,0,10,10)
  ocharge.velocityY = 50
  ocharge.visible = false
  ocounter = 1

  npcArray = []

  tempSprite = createSprite(320, 240);
  tempSprite.addImage(battleTransitionBackround);
  tempSprite.visible = false  

  playerPokemon = createSprite(140, 240);
  playerPokemon.visible = false
  enemyPokemon = createSprite(495, 130);
  enemyPokemon.visible = false

  catchCharge = createSprite(0,0,10,10)
  catchCharge.visible = false

  talkCounter = 0
  talkCharge = createSprite(0,0,10,10)
  talkCharge.visible = false

  moveTypeArrays = []
  moveCategoryArrays = []
  pokemonTypeArrays = []
  pokemonStatusArrays = []
  playerStatusImage = ""
  pokemonSummaryImage = ""
  enemyStatusImage = ""

}

function bghandler(){
  if(battle === false){
  if(gameState === 0){
  background(logo); 
  }
  if(gameState === 1){

    transitionCharge.velocityY = 50;
   const shades = [
       "#000000", "#1A1A33", "#333366", "#4D4D99",
  "#6666CC", "#8080FF", "#99B3FF"];

    drawSprites();
    if (transitionCounter < shades.length - 1&&transition === false&&textState === 0) {
      transitionCharge.velocityY = 50;

      if (transitionCharge.position.y > height) {
        transitionCharge.position.y = 0;
        transitionCounter++;
      }
     
      background(shades[transitionCounter]);
    }
    
    else {
      background("#99B3FF");
      transitionCharge.velocityY = 0;
      obj1.visible = true
    }   
    
    if(transitionCounter === 6&&textState!==3){
      chat = true
    }
    else{
      chat = false
    }
    
  }
  if(playerLocation === "auburn_town"&&menuPage === ""){
    if(bgState === 0){
    const shades = ["black", "black", "black", "black", "black"];
  drawSprites();

  if (!transition && transitionCounter <= shades.length - 1) {
    transitionCharge.velocityY = 50;

    if (transitionCharge.position.y > 480) {
      transitionCharge.position.y = 0;
      transitionCounter++;
    }

    if (transitionCounter < shades.length) {
      background(shades[transitionCounter]);
    } else {
      transition = true;
      transitionCharge.velocityY = 0;
      transitionCharge.y = 0;
    }

  } else {
    background(upperroom1);
  }
}
    if(bgState === 1||bgState === 5.2||bgState === 6.33){
      background(lowerroom1)
    }
    if(bgState === 5.25||bgState === 6.4){
      background(upperroom1)
    }
    if(bgState === 2){
      background(auburntown1)
    }
    if(bgState === 3){
      background(auburntown2)
    }
    if(bgState === 4){
      background(auburntown3)
    }
    if(bgState === 5){
      background(auburntown5)
    }
    if(bgState === 6){
      background(auburntown6)
    }
    if(bgState === 7){
      background(auburntown4)
    }
    if(bgState === 7.25){
      background(lab)
    }

    if(bgState === 5.1||bgState === 2.1||bgState === 1.5||
      bgState === 3.1||bgState === 4.1||bgState === 6.66){
        background(smallhouse)
      }

  }

  if(playerLocation === "route_1"&&menuPage === ""){
    if(bgState === 1){
      background(route1_1)
    }
    if(bgState === 2){
      background(route1_2)
    }
    if(bgState === 3){
      background(route1_3)
    }
    if(bgState === 4){
      background(route1_4)
    }
  }

  if(playerLocation === "twin_lake_path"&&menuPage === ""){
    if(bgState === 0){
      background(twinlakepath_1)
    }
    if(bgState === 1){
      background(twinlakepath_2)
    }
    if(bgState === 2){
      background(twinlakepath_3)
    }
    if(bgState === 3){
      background(twinlakepath_4)
    }
    if(bgState === 4){
      background(twinlakepath_5)
    }
    if(bgState === 5){
      background(twinlakepath_6)
    }
    if(bgState === 6){
      background(twinlakepath_7)
    }
    if(bgState === 7){
      background(twinlakepath_8)
    }
    if(bgState === 8){
      background(twinlakepath_9)
    }
    if(bgState === 9){
      background(twinlakepath_10)
    }
    if(bgState === 10){
      background(twinlakepath_11)
    }
    if(bgState === 11){
      background(twinlakepath_12)
    }
  }

}
else if(battle){
  background(battleBackround)
  player.visible = false
}
else if(menuPage !== ""){
    if(menuPage === "party"||menuPage === "bag"){
      background(partybg)
    }
}

}

function draw() {

  if(currentBattle !== null){
    player.visible = false
  }


  if (battle === true) {
  if (currentBattle.state === "intro") {
    drawIntroUI(currentBattle);
  }
  drawSprites();
}



  //console.log(gameState,bgState,mouseX,mouseY,playerLocation,move,player.x,player.y)
  //console.log("sub",subIndex,"temp",tempIndex,"pokemon",pokemonIndex,inBagIndex)

  if(npc1&&npc1.isTouching(player)){
    npctalk[0] = true
  }
  else{
    npctalk[0] = false
  }

  if(currentBattle){
    currentBattle.update()
     if(currentBattle.playerCurrentPokemonObject.currentHP<=0){
        currentBattle.playerCurrentPokemonObject.currentHP = 0
    }
    if(currentBattle.enemyCurrentPokemonObject.currentHP<=0){
        currentBattle.enemyCurrentPokemonObject.currentHP = 0
    }
    if(currentBattle.playerCurrentPokemonObject.currentHP>
      currentBattle.playerCurrentPokemonObject.stats.hp){
        currentBattle.playerCurrentPokemonObject.currentHP = 
        currentBattle.playerCurrentPokemonObject.stats.hp
    }
    if(currentBattle.enemyCurrentPokemonObject.currentHP>
      currentBattle.enemyCurrentPokemonObject.stats.hp){
        currentBattle.enemyCurrentPokemonObject.currentHP = 
        currentBattle.enemyCurrentPokemonObject.stats.hp
    }
  }



  
  for(let npc of npcArray){
    player.collide(npc.sprite)
  }





  if(chat === true||options === true){
    move = false
  }
  if(chat === true){
    interact = false;
  }
  

  if(gameState<2){
  if(textCounter>3){
    textCharge.velocityY = 0
    textCharge.y = 0
    textCounter = 0
  }
  if(textCharge.y>1800){
    textCharge.y = 0;
    textCounter++;
  }
  }
  else{
    if(textCharge.y>800){
      textCharge.velocityY = 0
      textCharge.y = 0
    }
  }

  grassHandler();
  transitionHandler();
  spriteHandler();
  stateChanger();
  bghandler();
  textHandler();
  option();
  movement();
  NPCS();
  NPCRemover()

    if(t1){
    t1.show();
    t1.checkInteraction(player, (newBgState, newX, newY, Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;

    tempCharge.velocityY = 50
    tempCounter++
    
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      if(playerLocation === "auburn_town"){
        if((bgState === 1&&gameState === 2.5)){
          move = false
        }
        else if(bgState === 1&&gameState === 2){
          move = false
        }
        else{
          move = true
        }
      }
      if(playerLocation === "route_1"){
        if((bgState === 1&&gameState === 3.1)){
          move = false
        }
        else{
          move = true
        }
      }
      if(playerLocation === "twin_lake_path"){
          move = true
      }
    }

}

if(t2){
    t2.show();
    t2.checkInteraction(player, (newBgState, newX, newY, Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t3){
    t3.show();
    t3.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t4){
    t4.show();
    t4.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t5){
    t5.show();
    t5.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t6){
    t6.show();
    t6.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

    if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t7){
    t7.show();
    t7.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

  if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}

if(t8){
    t8.show();
    t8.checkInteraction(player, (newBgState, newX, newY,Location) => {
    
    bgState = newBgState;
    move = false;
    player.position.x = newX;
    player.position.y = newY;
    playerLocation = Location

    interact = false;
    moving = false;
    playerDirection = "left"

    tempCharge.velocityY = 50
    tempCounter++
  });

  if(tempCharge.y>400){
      tempCounter = 0;
      tempCharge.velocityY = 0
      tempCharge.y = 0
      move = true
    }

}


  if(g1){
    g1.checkEncounter()
    g1.show()
  }
  if(g2){
    g2.checkEncounter()
    g2.show()
  }
  if(g3){
    g3.checkEncounter()
    g3.show()
  }
  if(g4){
    g4.checkEncounter()
    g4.show()
  }
  if(g5){
    g5.checkEncounter()
    g5.show()
  }
  if(g6){
    g6.checkEncounter()
    g6.show()
  }
  if(g7){
    g7.checkEncounter()
    g7.show()
  }
  if(w1){
    w1.checkEncounter()
    w1.show()
  }
  if(w2){
    w2.checkEncounter()
    w2.show()
  }
  if(w3){
    w3.checkEncounter()
    w3.show()
  }
  if(w4){
    w4.checkEncounter()
    w4.show()
  }
  if(w5){
    w5.checkEncounter()
    w5.show()
  }
  if(w6){
    w6.checkEncounter()
    w6.show()
  }
  if(w7){
    w7.checkEncounter()
    w7.show()
  }
  if(w8){
    w8.checkEncounter()
    w8.show()
  }
  if(w9){
    w9.checkEncounter()
    w9.show()
  }
  if(w10){
    w10.checkEncounter()
    w10.show()
  }
  if(w11){
    w11.checkEncounter()
    w11.show()
  }

drawSprites();


  if(chat === true){
    chatting();
  }
  if(battlingChat === true){
    battleChatting();
  }
    drawMenu()

  
}

function movement(){
  if(move === true){
    if(keyDown("f")&&runningShoes){
      moveSpeed = 8
    }
    else{
      moveSpeed = 4
    }
    if(keyDown("up")||player.velocityY < 0){
      moving = true;
      player.changeAnimation("up_w")
      playerDirection = "up"
      player.y-=moveSpeed
    }
    else if(keyDown("down")||player.velocityY > 0){
      moving = true;
      player.changeAnimation("down_w")
      playerDirection = "down"
      player.y+=moveSpeed
    }
   
     else if(keyDown("left")||player.velocityX < 0){
      moving = true;
      player.changeAnimation("left_w")
      playerDirection = "left"
      player.x-=moveSpeed
    }
    
     else if(keyDown("right")||player.velocityX > 0){
      moving = true;
      player.changeAnimation("right_w")
      playerDirection = "right"
      player.x+=moveSpeed
    }
    else{
      moving = false
    }
  }
  if(moving === false){
    if(playerDirection === "up"){
      player.changeAnimation("up_s")
    }
    if(playerDirection === "down"){
      player.changeAnimation("down_s")
    }
    if(playerDirection === "left"){
      player.changeAnimation("left_s")
    }
    if(playerDirection === "right"){
      player.changeAnimation("right_s")
    }
  }
}


function option(){
  if(options === true){
    if(gameState === 1){
      option1 = "YES"
      option2 = "NO"
      fill("white")
      rect(545,275,80,55)
      textFont("bold")
      fill("black")
      textSize(20)
      text(option1,570,300)
      text(option2,570,320)
      
      

      if(opt === 1){
        fill("red")
        text("˃",550,300)
      } 
      if(opt === 2){
        fill("red")
        text("˃",550,320)
      } 
    }
    if(gameState === 2&&options === true){

      

      if(ocharge.y>480){
        ocounter++
        ocharge.y = 0
      }
      if(ocounter>3){
        ocharge.y = 0
        ocharge.velocityY = 0
        ocounter = 0
      } 
      obj1.visible = true
      obj1.scale = 1.2
      obj1.x = 320
      obj1.y = 240
      obj1.addImage(rowletPokedex)

      option1 = "Rowlet"
      option2 = "Chimchar"
      option3 = "Mudkip"
      fill("white")
      rect(480,272,120,83)
      textFont("bold")
      fill("black")
      textSize(20)
      text(option1,510,300)
      text(option2,510,320)
      text(option3,510,340)

      let thornePostStarterDialogue = [
       `Professor Thorne: Excellent choice! That Pokémon will|
        something. And every battle builds a bond. You’ll face|
        help record your discoveries. Keep it updated often. Oh,|
        to test his skills. Don’t let him get too confident and|
       Now go on—your adventure begins. The Verdantia Region.`,

       `make a great partner. Treat it with care. Remember—this|
        challenges ahead. But I believe in your potential. You’ve|
        and before I forget... Kai mentioned heading to Route 1.|
         before you leave don't forget to say goodbye to your mom.|
       awaits you. You've got this ${playerName}.`,

       `this journey is yours now. Every step teaches you |
        got what it takes. Take this, too—your Pokédex. It’ll|
         He’s probably waiting for you there. Might be looking |
        |`
      ]

      if(opt === 1){
        fill("red")
        text("˃",490,300)
        obj1.addImage(rowletPokedex)
        if(keyDown("space")&&noOfPartyPokemon === 0&&ocounter === 0){
          party.push(new Pokemon("Rowlet",5,pokedex,moveDB,[],null,0))
          starterPokemon = "Rowlet"
          noOfPartyPokemon++;
          noOfPokemon++;
          noOfPokemonLeft++
          options = false
          obj1.visible = false
          thorne.dialogue = thornePostStarterDialogue;
          if(gameState === 2){
          thorne.startTalking();
          move = false
          if (chat) {
          thorne.talk();
          }
        }
        }
      } 
      if(opt === 2){
        fill("red")
        text("˃",490,320)
        obj1.addImage(chimcharPokedex)
        if(keyDown("space")&&noOfPartyPokemon === 0&&ocounter === 0){
          party.push(new Pokemon("Chimchar",5,pokedex,moveDB,[],null,0))
          starterPokemon = "Chimchar"
          noOfPartyPokemon++;
          noOfPokemon++;
          noOfPokemonLeft++;
          options = false
          obj1.visible = false
          thorne.dialogue = thornePostStarterDialogue;
          if(gameState === 2){
          thorne.startTalking();
          move = false
          if (chat) {
          thorne.talk();
          }
        }
        }
      } 
      if(opt === 3){
        fill("red")
        text("˃",490,340)
        obj1.addImage(mudkipPokedex)
        if(keyDown("space")&&noOfPartyPokemon === 0&&ocounter === 0){
          party.push(new Pokemon("Mudkip",5,pokedex,moveDB,[],null,0))
          starterPokemon = "Mudkip"
          noOfPokemonLeft++
          noOfPartyPokemon++;
          noOfPokemon++;
          options = false
          obj1.visible = false
          thorne.dialogue = thornePostStarterDialogue;
          if(gameState === 2){
          thorne.startTalking();
          move = false
          if (chat) {
          thorne.talk();
          }
        }
      } 
      } 
    }
  }
}

function stateChanger(){

  if (bgState !== 1 && mom&&playerLocation === "auburn_town"&&mom) {
    mom.sprite.remove();
    mom = null;
  }
  if (bgState !== 7.25 &&playerLocation === "auburn_town"&&thorne) {
    thorne.sprite.remove();
    thorne = null;
  }
  if (bgState !== 5 &&playerLocation !== "auburn_town"&&npc1&&currentBattle === null) {
    npc1.sprite.remove();
    npc1 = null;
  }

  if(battle){
    if(npc1){
      npc1.sprite.remove();
      npc1 = null;
    }
  }

  if(textState === 6&&keyWentDown("space")&&gameState === 1){
        gameState = 2;
        textState = 0;
        chat = false
        playerLocation = "auburn_town"
        move = true
        text1 = ""
        text2 = ""
        text2 = ""
        transition = false
        player.visible = true
      }

  if(gameState === 0&&keyWentDown("space")){
    gameState = 1;
  }
  if(gameState === 1&&keyWentDown("space")&&transitionCounter===6&&textState !== 4
&&textState !== 3){  
    textState+=1;
  }
  if(textState === 4&&keyWentDown("space")){
    if(opt === 2){
    textState = 3;
    playerName = ""
    opt = 1;
    }
    else{
      textState+=1;
      textState = 5
    }
    
  }

  if(gameState === 1&&textState === 4){
        if (keyWentDown("up") && textState === 4) {
        opt = opt === 1 ? 2 : 1;
        }
        if (keyWentDown("down") && textState === 4) {
        opt = opt === 1 ? 2 : 1;
        }
  }
  if(gameState === 2&&options === true){
        if (keyWentDown("up")) {
        opt--
        if(opt<1){
          opt = 3
        } 
        }
        if (keyWentDown("down")) {
        opt++
        if(opt>3){
          opt = 1
        } 
      }
  }

}

function chatting(){
   fill('#70C1B3');
  noStroke();
  rect(15, 335, 610, 130);
  fill('white');
  noStroke();
  rect(25, 345, 590, 110);

  textSize(17);
  textFont('Courier New');
  fill("black");
  text(text1.trim(),30,367)
  text(text2.trim(),30,395)
  text(text3.trim(),30,423)
  textFont('Bold')
  text("Press Space To Continue",230,450)
  fill("red")


  textFont("arial")
  text("V",598,423)

}

function battleChatting(){
  console.log(currentBattle.state,
    currentBattle.playerCurrentPokemonObject
  )
  if(keyWentDown("space")){
    if(playerStatusImage === ""&&currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(enemyStatusImage === ""&&currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
  }
  if(currentBattle.state === "intro"){
    playerBack = loadImage("playerBack.png")
    playerSprite.addImage(playerBack)
    
  if(battleChat === true&&!trainerSprite&&!playerSprite){
  if(currentBattle.type === "trainer"){
    trainerImg = loadImage("sprites/"+currentBattle.trainerClass+".png")
  trainerSprite = createSprite(485,104)
  trainerSprite.addImage(trainerImg)
      trainerSprite.scale = 1.2
    }
    else{
    enemyPokemonFront = loadImage("front/" + currentBattle.enemyCurrentPokemon.toLowerCase() + ".png");
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;
    trainerSprite.visible = false
    }
  playerSprite = createSprite(154,208)
  playerSprite.scale = 1.55
  battle = true 
  }

  if(currentBattle.type === "trainer"){
    trainerImg = loadImage("sprites/"+currentBattle.trainerClass+".png")   
  trainerSprite.addImage(trainerImg)
      trainerSprite.scale = 1.2
    }
    else{
    enemyPokemonFront = loadImage("front/" + currentBattle.enemyCurrentPokemon.toLowerCase() + ".png");
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;
    trainerSprite.visible = false
    }

  if(currentBattle.type === "trainer"){
  trainerSprite.visible = true
  }
  playerSprite.visible = true
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  fill("red")
  fill("black")
  rect(405,270,230,5)
   rect(405,254,5,20) 
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)
  
  if(currentBattle.type === "trainer"){
  rect(5,66,230,5)
  rect(230,50,5,20)
  if(currentBattle.enemyPokemonLeft === 6){
    image(pokeballImg,25,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 5){

    image(pokeballImg,60,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 4){
    image(pokeballImg,95,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 3){

    image(pokeballImg,130,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 2){

    image(pokeballImg,165,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 1){
    image(pokeballImg,200,48,20,20)

  }
}
  if(noOfPokemonLeft === 6){
    image(pokeballImg,595,253,20,20)
  }
  if(noOfPokemonLeft >= 5){
    image(pokeballImg,560,253,20,20)
  }
  if(noOfPokemonLeft >= 4){
    image(pokeballImg,525,253,20,20)
  }
  if(noOfPokemonLeft >= 3){
    image(pokeballImg,490,253,20,20)
  }
  if(noOfPokemonLeft >= 2){
    image(pokeballImg,455,253,20,20)
  }
  if(noOfPokemonLeft >= 1){
    image(pokeballImg,420,253,20,20)
  }

  fill("red")
  textFont("arial")
  text("V",598,423)
  }

  if (currentBattle.keyCooldown > 0) {
  currentBattle.keyCooldown--;
  }


  if(currentBattle.state === "send"){
     fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
rect(405,270,230,5)
   rect(405,254,5,20) 
  
  
   if(currentBattle.type === "trainer"){
    rect(5,66,230,5)
  rect(230,50,5,20)
  if(currentBattle.enemyPokemonLeft === 6){
    image(pokeballImg,25,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 5){

    image(pokeballImg,60,48,20,20)
  }
  if(currentBattle.enemyPokemonLeft >= 4){
    image(pokeballImg,95,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 3){

    image(pokeballImg,130,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 2){

    image(pokeballImg,165,48,20,20)

  }
  if(currentBattle.enemyPokemonLeft >= 1){
    image(pokeballImg,200,48,20,20)

  }
}
  
  if(noOfPokemonLeft === 6){
    image(pokeballImg,595,253,20,20)
  }
  if(noOfPokemonLeft >= 5){
    image(pokeballImg,560,253,20,20)
  }
  if(noOfPokemonLeft >= 4){
    image(pokeballImg,525,253,20,20)
  }
  if(noOfPokemonLeft >= 3){
    image(pokeballImg,490,253,20,20)
  }
  if(noOfPokemonLeft >= 2){
    image(pokeballImg,455,253,20,20)
  }
  if(noOfPokemonLeft >= 1){
    image(pokeballImg,420,253,20,20)
  }

  if(currentBattle.type === "trainer"){
  battleText1 = `${currentBattle.enemyName} sent out ${currentBattle.enemyTeam[0].name}!`
  battleText2 = `Go ${currentBattle.playerCurrentPokemon}!`
  }
  else{
    battleText1 = `Go ${currentBattle.playerCurrentPokemon}!`
    battleText2 = ``
  }
  
  battleText3 = ``
  
    enemyPokemonFront = loadImage("front/" + currentBattle.enemyCurrentPokemon.toLowerCase() + ".png");
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;
    playerPokemonBack = loadImage("back/" + currentBattle.playerCurrentPokemon.toLowerCase() + ".png");
    pokemonSent = true;

    playerPokemon.addImage(playerPokemonBack);
    playerPokemon.visible = true;
    

    trainerSprite.visible = false
    playerSprite.visible = false



  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)
  fill("red")

  if(keyWentDown("space")){
    currentBattle.state = "menu"
    currentBattle.keyCooldown = 15
    currentBattle.menuIndex = 0
    if(currentBattle.playerCurrentPokemonObject.ability === "Sand Stream"){
      currentBattle.weather = "sandstorm"
      currentBattle.weatherTurns = 5
      currentBattle.playerCurrentPokemonObject.abilityActive = true
    }
    if(currentBattle.enemyCurrentPokemonObject.ability === "Sand Stream"){
      currentBattle.weather = "sandstorm"
      currentBattle.weatherTurns = 5
      currentBattle.enemyCurrentPokemonObject.abilityActive = true
    }
    if(currentBattle.playerCurrentPokemonObject.ability === "Intimidate"){
        currentBattle.playerCurrentPokemonObject.abilityActive = true
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Hyper Cutter"
       &&currentBattle.enemyCurrentPokemonObject.ability !== "Clear Body"){
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Contrary"){    
      currentBattle.enemyCurrentPokemonObject.currentAtt -=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.att*0.67)
      }
      else{    
      currentBattle.enemyCurrentPokemonObject.abilityActive = true  
      currentBattle.enemyCurrentPokemonObject.currentAtt +=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.att*(0.5))
      }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
      }
    }
    if(currentBattle.enemyCurrentPokemonObject.ability === "Intimidate"){
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Hyper Cutter"&&
        currentBattle.enemyCurrentPokemonObject.ability !== "Clear Body"){  
      if(currentBattle.enemyCurrentPokemonObject.ability === "Contrary"){  
      currentBattle.playerCurrentPokemonObject.abilityActive = true    
      currentBattle.playerCurrentPokemonObject.currentAtt +=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
      }
      else{
      currentBattle.playerCurrentPokemonObject.currentAtt -=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.att*0.67)
      }
      }
      else{
      currentBattle.playerCurrentPokemonObject.abilityActive = true  
      }
    }

    if(currentBattle.playerCurrentPokemonObject.ability === "Petrify"){
      currentBattle.playerCurrentPokemonObject.abilityActive = true
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Clear Body"){  
       if(currentBattle.enemyCurrentPokemonObject.ability !== "Contrary"){ 
      currentBattle.enemyCurrentPokemonObject.currentSpe -=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.speed*0.67)
       }
       else{
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
        currentBattle.enemyCurrentPokemonObject.currentSpe +=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.speed*(0.5))
       }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
      }
    }
    if(currentBattle.enemyCurrentPokemonObject.ability === "Petrify"){
      currentBattle.enemyCurrentPokemonObject.abilityActive = true
      if(currentBattle.playerCurrentPokemonObject.ability !== "Clear Body"){  
      if(currentBattle.playerCurrentPokemonObject.ability !== "Contrary"){  
      currentBattle.playerCurrentPokemonObject.currentSpe -=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.speed*(2/3))
      }
      else{
        currentBattle.playerCurrentPokemonObject.abilityActive = true
      currentBattle.playerCurrentPokemonObject.currentSpe +=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.speed*0.5)  
      }
      }
      else{
        currentBattle.playerCurrentPokemonObject.abilityActive = true
      }
      
    }
  }

  


  textFont("arial")
  text("V",598,423)
  }

  if(currentBattle.state === "menu"){

  currentBattle.pHit = false
  currentBattle.pEffect = ""
  currentBattle.pMult = 1
  currentBattle.playerCurrentPokemonObject.paralysed = false
  currentBattle.eHit = false
  currentBattle.eEffect = ""
  currentBattle.eMult = 1
  currentBattle.enemyCurrentPokemonObject.paralysed = false
  currentBattle.playerDamage = 0
  currentBattle.enemyDamage = 0
  currentBattle.playerCurrentPokemonObject.hitsItself = false
  currentBattle.enemyCurrentPokemonObject.hitsItself = false
  currentBattle.playerCurrentPokemonObject.paralysed = false
  currentBattle.playerCurrentPokemonObject.paralysed = false

 

  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('lightgrey');
  strokeWeight(1);
  stroke(51);
  rect(330, 335, 280, 110);

  textSize(25);
  textFont('Courier New');
  fill("black");

  battleText1 = `What will`
  battleText2 = `${currentBattle.playerCurrentPokemonObject.name} do?`
  battleText3 = ``

  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  textFont('Bold')

  textSize(20)
  fill("black")
  textFont('Bold')
  text("Press Space To Continue",30,450)
  
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
 
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  if(currentBattle.menuIndex === 0){
    fill("yellow")
    noStroke()
    rect(335, 340, 135, 50);
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
    battleOptions = "fight"
    currentBattle.state = "fight"
    currentBattle.menuIndex = 0
    }
  }
  if(currentBattle.menuIndex === 1&&currentBattle.keyCooldown === 0){
    fill("yellow")
    noStroke()
    rect(470,340, 135, 50);
    if(keyWentDown("space")){
    currentBattle.keyCooldown = 15
    battleOptions = "bag"
    currentBattle.state = "bag"
    menuPage = "bag"
    subIndex = 0
    pokemonIndex = 0
    currentBattle.keyCooldown = 15
    currentBattle.menuIndex = 1
    }
  }
  if(currentBattle.menuIndex === 2&&currentBattle.keyCooldown === 0){
    fill("yellow")
    noStroke()
    rect(335, 390, 135, 50);
    if(keyWentDown("space")){
    currentBattle.keyCooldown = 15
    currentBattle.state = "pokemon"
    battleOptions = "pokemon"
    tempIndex = -10
    pokemonIndex = 0
    if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
    currentBattle.menuIndex = 2
    }
  }
  if(currentBattle.menuIndex === 3&&currentBattle.keyCooldown === 0){
    fill("yellow")
    noStroke()
    rect(470,390, 135, 50);
    if(keyWentDown("space")){
    currentBattle.keyCooldown = 15
    battleOptions = "run"
    currentBattle.menuIndex = 3
    currentBattle.state = "run"
    }
  }
  
  fill('pink');
  strokeWeight(2);
  stroke(51);
  rect(340, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Fight",360,372.5)
  
  fill('orange');
  strokeWeight(2);
  stroke(51);
  rect(475, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Bag",510,372.5)
  
  fill('rgb(0,177,0)');
  strokeWeight(2);
  stroke(51);
  rect(340, 395, 125, 40);
  textSize(22);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Pokemon",355,422.5)
  
  fill('rgb(3,3,216)');
  strokeWeight(2);
  stroke(51);
  rect(475, 395, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Run",510,422.5)


  textSize(20);
  textFont('Courier New');
  fill("black");
  noStroke()
  battleText1 = "What will"
  battleText2 = currentBattle.playerCurrentPokemonObject.name+" do?"
  battleText3 = ""

  if(currentBattle.menuIndex === 0){
    if(keyWentDown("right")){
      currentBattle.menuIndex = 1
    }
    if(keyWentDown("down")){
      currentBattle.menuIndex = 2
    }
  }
  if(currentBattle.menuIndex === 1){
    if(keyWentDown("left")){
      currentBattle.menuIndex = 0
    }
    if(keyWentDown("down")){
      currentBattle.menuIndex = 3
    }
  }
  
  if(currentBattle.menuIndex === 2){
    if(keyWentDown("right")){
      currentBattle.menuIndex = 3
    }
    if(keyWentDown("up")){
      currentBattle.menuIndex = 0
    }
  }
  
  if(currentBattle.menuIndex === 3){
    if(keyWentDown("left")){
      currentBattle.menuIndex = 2
    }
    if(keyWentDown("up")){
      currentBattle.menuIndex = 1
    }
  
  }
  }

  if(currentBattle.state === "fight"){

    if(noOfPokemonLeft === 0){
      currentBattle.state = "blackOut"
    }
    if(currentBattle.ememyPokemonLeft <= 0){
      currentBattle.state = "battleEnd"
    }

    if(keyWentDown("f")&&currentBattle.keyCooldown === 0){
      currentBattle.state = "menu"
      menuIndex = 0
      currentBattle.keyCooldown = 15
    }

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");

  battleText1 = ``
  battleText2 = ``
  battleText3 = ``
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
 
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)

  let mc = []
  movestype = currentBattle.playerCurrentPokemonObject.moves
  

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
      if(currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].currentPP>0
        &&!currentBattle.playerChosenMove
      ){
        if(playerStatusImage === ""&&currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(enemyStatusImage === ""&&currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
        currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].currentPP--
        if(currentBattle.enemyCurrentPokemonObject.ability === "Pressure"){
          currentBattle.playerCurrentPokemonObject.moves[currentBattle.moveIndex].currentPP--
        }
        currentBattle.playerChosenMove = true
        currentBattle.state = "enemyAI"
        currentBattle.keyCooldown = 15
      }
      else{
        alert("no pp")
      }
    }
  if(currentBattle.moveIndex === 0){
    fill("yellow")
    rect(15, 320, 305, 60);
    if(keyWentDown("right")&&movestype.length>=2){
      currentBattle.moveIndex = 1
    }
    if(keyWentDown("down")&&movestype.length>=3){
      currentBattle.moveIndex = 2
    }
  }
  if(currentBattle.moveIndex === 1){
    fill("yellow")
    rect(320, 320, 305, 60);
    if(keyWentDown("left")&&movestype.length>=2){
      currentBattle.moveIndex = 0
    }
    if(keyWentDown("down")&&movestype.length>=3){
      currentBattle.moveIndex = 3
    }
  }
  if(currentBattle.moveIndex === 2){
    fill("yellow")
    rect(15, 380, 305, 60);
    if(keyWentDown("right")&&movestype.length>=4){
      currentBattle.moveIndex = 3
    }
    if(keyWentDown("up")&&movestype.length>=3){
      currentBattle.moveIndex = 0
    }
  }
  if(currentBattle.moveIndex === 3){
    fill("yellow")
    rect(320, 380, 305, 60);
    if(keyWentDown("left")&&movestype.length>=4){
      currentBattle.moveIndex = 2
    }
    if(keyWentDown("up")&&movestype.length>=4){
      currentBattle.moveIndex = 1
    }
  }
  
  for(var i = 0;i<movestype.length;i++){
  if(movestype[i].type === "Normal"){
    mc[i] = "#C7C7C7"
  }
  if(movestype[i].type === "Fire"){
    mc[i] = "rgb(243,51,51)"
  }
  if(movestype[i].type === "Water"){
    mc[i] = "rgb(51,115,255)"
    
  }
  if(movestype[i].type === "Electric"){
    mc[i] = "#F8E64D"
  }
  if(movestype[i].type === "Grass"){
    mc[i] = "#49EF5E"
  }
    if(movestype[i].type === "Ice"){
    mc[i] = "#7DF3F0"
  }
     if(movestype[i].type === "Fighting"){
    mc[i] = "#A52905"
  }
     if(movestype[i].type === "Poison"){
    mc[i] = "#82049A"
  }
     if(movestype[i].type === "Ground"){
    mc[i] = "#D3A406"
  }
     if(movestype[i].type === "Flying"){
    mc[i] = "#9CD9F5"
  }
     if(movestype[i].type === "Psychic"){
    mc[i] = "#FF0099"
  }
     if(movestype[i].type === "Bug"){
    mc[i] = "#95C848"
  }
     if(movestype[i].type === "Rock"){
    mc[i] = "#927B2D"
  }
     if(movestype[i].type === "Ghost"){
    mc[i] = "#482178"
  }
     if(movestype[i].type === "Dragon"){
    mc[i] = "#5300B7"
  }
    if(movestype[i].type === "Dark"){
    mc[i] = "#2F1301"
      
  }
    if(movestype[i].type === "Steel"){
    mc[i] = "#9E9CA2"
  }
    if(movestype[i].type === "Fairy"){
    mc[i] = "#FF97E5"
  }
  }
  
  if(mc[0]){
    fill(mc[0])
  strokeWeight(2);
  stroke(51);
  rect(20, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[0].name}`,23,347)
  textSize(15);
  text(`Power: ${`${movestype[0].power}`} Accuracy: ${`${movestype[0].accuracy}`} PP: ${movestype[0].currentPP}`,25,367)
  }
  
  if(mc[1]){
    fill(mc[1])
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[1].name}`,328,347)
  textSize(15);
  text(`Power: ${`${movestype[1].power}`} Accuracy: ${`${movestype[1].accuracy}`} PP: ${movestype[1].currentPP}`,328,367)
  }
  
  if(mc[2]){
    fill(mc[2])
  strokeWeight(2);
  stroke(51);
  rect(20, 385, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[2].name}`,23,407)
  textSize(15);
  text(`Power: ${`${movestype[2].power}`} Accuracy: ${`${movestype[2].accuracy}`} PP: ${movestype[2].currentPP}`,25,427)
  }
  
  if(mc[3]){
    fill(mc[3])
  strokeWeight(2);
  stroke(51);
  rect(325, 385, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${movestype[3].name}`,328,407)
  textSize(15);
  text(`Power: ${`${movestype[3].power}`} Accuracy: ${`${movestype[3].accuracy}`} PP: ${movestype[3].currentPP}`,328,427)
  }

  }

  if(currentBattle.state === "run"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

   textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
 
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(currentBattle.type === "trainer"){
    battleText1 = `No! There's no running away from a`
    battleText2 = `trainer Pokemon battle!`
    battleText3 = ``
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      currentBattle.state = "menu"
    }
  }
  else{
    if(currentBattle.enemyCurrentPokemonObject.ability !== "Arena Trap"
      &&!currentBattle.playerCurrentPokemonObject.types.includes("Ghost")
      &&!currentBattle.playerCurrentPokemonObject.types.includes("Flying")
      &&currentBattle.ability !== "Levitate"
    ){
    battleText1 = `Got away safely!`
    battleText2 = ``
    battleText3 = ``
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      currentBattle.state = "endBattle"
      enemyPokemon.visible = false
    }
  }
  else{
    battleText1 = `Can't escape!`
    battleText2 = ``
    battleText3 = ``
    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      currentBattle.state = "menu"
    }
  }
  }

  
  
  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)
  }

  if(currentBattle.state === "battling"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.playerCurrentPokemonObject.confused){
        if(currentBattle.playerCurrentPokemonObject.confusedCounter >0){
          currentBattle.playerCurrentPokemonObject.confusedCounter--
        }
        else{
          currentBattle.playerCurrentPokemonObject.confusedCounter = null
          currentBattle.playerCurrentPokemonObject.confused = null
        }
      }
      if(currentBattle.pMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness"
      }
      else{
        if(currentBattle.pEffect !== ""&&currentBattle.pHit){
          currentBattle.state = "changes"
          if(currentBattle.playerCurrentPokemonObject.status !== null){
          playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
        }
        else{
          if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint"
            if(currentBattle.playerCurrentPokemonObject.ability === "Moxie"){
              currentBattle.playerCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
          }
          else{
            currentBattle.state = "battling1"
            currentBattle.turn = "enemy"
          currentBattle.enemyAttack()
          currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
          if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
            noOfPokemonLeft--
            currentBattle.playerCurrentPokemonObject.status = "FNT"
          }
          }
        }
      }
    }
    else{

      if(currentBattle.enemyCurrentPokemonObject.confused){
        if(currentBattle.enemyCurrentPokemonObject.confusedCounter >0){
          currentBattle.enemyCurrentPokemonObject.confusedCounter--
        }
        else{
          currentBattle.enemyCurrentPokemonObject.confusedCounter = null
          currentBattle.enemyCurrentPokemonObject.confused = null
        }
      }

      if(currentBattle.eMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness"
      }
      else{
        if(currentBattle.eEffect !== ""){
          currentBattle.state = "changes"
          if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint"
            if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
          else{
            if(currentBattle.playerCurrentPokemonObject.status === "PAR"||
      currentBattle.playerCurrentPokemonObject.status === "SLP"){
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.playerCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.playerCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.playerCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.playerCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.playerCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.playerCurrentPokemonObject.paralysed&&!currentBattle.playerCurrentPokemonObject.hitsItself){
    currentBattle.turn = "player"
    currentBattle.playerAttack()
    currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.playerDamage = 0
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.playerCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.playerCurrentPokemonObject)
        }
      }
    }

             if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.enemyCurrentPokemonObject.currentHP = 0
            currentBattle.enemyPokemonLeft--
          }
          }
        }
      }
    }
    currentBattle.keyCooldown = 15
  }
  
  if(currentBattle.type === "trainer"){
    if(currentBattle.turnStart === "player"){
      if(currentBattle.playerCurrentPokemonObject.confusedCounter !== 0){
      battleText1 = `${currentBattle.playerCurrentPokemon} used ${currentBattle.pCurrentMove}!`
      battleText2 = ``
      }
      else{
      battleText2 = `${currentBattle.playerCurrentPokemon} used ${currentBattle.pCurrentMove}!`
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} snapped out of confusion!`
      }
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      if(currentBattle.enemyCurrentPokemonObject.confusedCounter !== 0){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemon} used ${currentBattle.eCurrentMove}!`
      battleText2 = ``
      }
      else{
      battleText2 = `${currentBattle.enemyCurrentPokemon} used ${currentBattle.eCurrentMove}!`
      battleText1 = `${currentBattle.enemyCurrentPokemonObject.name} snapped out of confusion!`
      }
      battleText3 = ``
    }
  }
  else{
    if(currentBattle.turnStart === "player"){
      if(currentBattle.playerCurrentPokemonObject.confusedCounter !== 0){
      battleText1 = `${currentBattle.playerCurrentPokemon} used ${currentBattle.pCurrentMove}!`
      battleText2 = ``
      }
      else{
      battleText2 = `${currentBattle.playerCurrentPokemon} used ${currentBattle.pCurrentMove}!`
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} snapped out of confusion!`
      }
      battleText3 = ``
    }

    if(currentBattle.turnStart === "enemy"){
      if(currentBattle.enemyCurrentPokemonObject.confusedCounter !== 0){
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemon} used ${currentBattle.eCurrentMove}!`
      battleText2 = ``
      }
      else{
      battleText2 = `${currentBattle.enemyCurrentPokemon} used ${currentBattle.eCurrentMove}!`
      battleText1 = `${currentBattle.enemyCurrentPokemonObject.name} snapped out of confusion!`
      }
      battleText3 = ``
    }
  }
  if(currentBattle.turnStart === "player"&&!currentBattle.pHit
    &&currentBattle.playerCurrentPokemonObject.confusedCounter !== 0){
    battleText2 = `But it missed!`
  }
  if(currentBattle.turnStart === "player"&&!currentBattle.pHit
    &&currentBattle.playerCurrentPokemonObject.confusedCounter === 0){
    battleText3 = `But it missed!`
  }
  if(currentBattle.turnStart === "enemy"&&!currentBattle.eHit
    &&currentBattle.playerCurrentPokemonObject.confusedCounter !== 0){
    battleText2 = `But it missed!`
  }
  if(currentBattle.turnStart === "enemy"&&!currentBattle.eHit
    &&currentBattle.playerCurrentPokemonObject.confusedCounter === 0){
    battleText3 = `But it missed!`
  }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokemonConfused"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(currentBattle.turnStart === "player"){
  battleText1 = `${currentBattle.playerCurrentPokemon} is confused!`
  }
  else{
    if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemon} is confused!`
    }
    else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemon} is confused!`
    }
  }
  battleText2 = `It hurt itself in confusion!`
  battleText3 = ``
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.enemyCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        }
      }
    }  
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"||
      currentBattle.playerCurrentPokemonObject.status === "SLP"){
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.playerCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.playerCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.playerCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.playerCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.playerCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.playerCurrentPokemonObject.paralysed&&!currentBattle.playerCurrentPokemonObject.hitsItself){
    currentBattle.turn = "player"
    currentBattle.playerAttack()
    currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.playerDamage = 0
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.playerCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.playerCurrentPokemonObject)
        }
      }
    }  
    }
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokemonConfused1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(currentBattle.turnStart !== "player"){
  battleText1 = `${currentBattle.playerCurrentPokemon} is confused!`
  }
  else{
    if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemon} is confused!`
    }
    else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemon} is confused!`
    }
  }
  battleText2 = `It hurt itself in confusion!`
  battleText3 = ``
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.playerCurrentPokemonObject.status !== null||
       currentBattle.playerCurrentPokemonObject.leeched === true){
       currentBattle.state = "statusEffects"
       if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
    }
    else if(currentBattle.enemyCurrentPokemonObject.status !== null||
         currentBattle.enemyCurrentPokemonObject.leeched === true){
         currentBattle.state = "statusEffects1"
         if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }
      }
    else if(currentBattle.weather !== null){
        currentBattle.state = "weather"
        currentBattle.weatherTurns--
        if(currentBattle.weatherTurns>0){
        if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
        if(currentBattle.weather === "hail"){
          if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
      }
    else{
      if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
      }
      else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
      }
      else{
      currentBattle.state = "menu"
      if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
      }
    }
  
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "item"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  battleText1 = `${currentBattle.playerCurrentPokemonObject.itemText}`
  battleText2 = ``
  battleText3 = ``
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.enemyCurrentPokemonObject.item !== null&&
        currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
        currentBattle.state = "item1"
    }
    else{
      currentBattle.state = "menu"
      if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
    }
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
  fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "item1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  battleText1 = `${currentBattle.enemyCurrentPokemonObject.itemText}`
  battleText2 = ``
  battleText3 = ``
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.state = "menu"
    if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
  fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "itemUsed"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  battleText1 = `${playerName} used ${currentBattle.itemUsed}!`
  battleText2 = `${currentBattle.itemEffect}`
  battleText3 = ``
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.enemyCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        }
      }
    }  
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "endFaint"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  battleText1 = `${currentBattle.playerCurrentPokemon} fainted!`
  battleText2 = ``
  battleText3 = ``
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    currentBattle.state = "pokemon"
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "endFaint1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  battleText1 = `The foe ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
  battleText2 = ``
  battleText3 = ``

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    let t = currentBattle.nextPokemon();
      if (t !== -1) {
        let te = currentBattle.enemyTeam[t];
        currentBattle.enemyTeam[t] = currentBattle.enemyTeam[0];
        currentBattle.enemyTeam[0] = te;

        currentBattle.enemyCurrentPokemonObject = currentBattle.enemyTeam[0];
        currentBattle.enemyCurrentPokemon = currentBattle.enemyCurrentPokemonObject.name;

        enemyPokemonFront = loadImage(`front/${currentBattle.enemyCurrentPokemon}.png`);
        enemyPokemon.addImage(enemyPokemonFront);
        enemyPokemon.visible = true

        currentBattle.state = "switch";
        currentBattle.enemyNextIndex = t + 1;
      }
      else{
        currentBattle.state = "endTrainerDialouge"
      }
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "weather"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
      noOfPokemonLeft--
      currentBattle.state = "endFaint"
    }
    else if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
      currentBattle.enemyPokemonLeft--
      
      currentBattle.state = "endFaint1"
    }
    else if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
    }
    else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
    }
    else{
      currentBattle.state = "menu"
      if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
    }
  }

  if(currentBattle.weather === "sun"){
  battleText1 = `The sunlight is harsh!`
  if(currentBattle.weatherTurns <= 0){
    battleText1 = `The sunlight faded!`
  }
  battleText2 = ``
  battleText3 = ``
  }
  if(currentBattle.weather === "rain"){
  battleText1 = `Rain continues to fall!`
  if(currentBattle.weatherTurns <= 0){
    battleText1 = `The rain stopped!`
  }
  battleText2 = ``
  battleText3 = ``
  }
  if (currentBattle.weather === "hail") {
  if (currentBattle.weatherTurns <= 0) {
    battleText1 = `The hail stopped!`;
    battleText2 = ``;
    battleText3 = ``;
  } else {
    battleText1 = `Hail continues to fall!`;
    battleText2 = ``;
    battleText3 = ``;

    let p = currentBattle.playerCurrentPokemon;
    let e = currentBattle.enemyCurrentPokemon;
    let playerTakesDamage = !currentBattle.playerCurrentPokemonObject.types.includes("Ice");
    let enemyTakesDamage = !currentBattle.enemyCurrentPokemonObject.types.includes("Ice");

    if (playerTakesDamage) {
      battleText2 = `${p} is damaged by hail!`;
    }

    if (enemyTakesDamage) {
      if (currentBattle.type === "wild") {
        battleText3 = `${e} is damaged by hail!`;
      } else {
        battleText3 = `${e} is damaged by hail!`;
      }
    }
  }
}

  if (currentBattle.weather === "sandstorm") {
  if (currentBattle.weatherTurns <= 0) {
    battleText1 = `The sandstorm subsided!`;
    battleText2 = ``;
    battleText3 = ``;
  } else {
    battleText1 = `The sandstorm is raging!`;
    battleText2 = ``;
    battleText3 = ``;

    let p = currentBattle.playerCurrentPokemon;
    let e = currentBattle.enemyCurrentPokemon;
    let playerTakesDamage = !currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
    !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
    !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
    let enemyTakesDamage = !currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
    !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
    !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")

    if (playerTakesDamage) {
      battleText2 = `${p} is buffeted by the sandstorm!`;
    }

    if (enemyTakesDamage) {
      if (currentBattle.type === "wild") {
        battleText3 = `${e} is buffeted by the sandstorm!`;
      } else {
        battleText3 = `${e} is buffeted by the sandstorm!`;
      }
    }
  }
}

  
  

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "statusEffects"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)



  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  battleText1 = ``
  battleText2 = ``
  battleText3 = ``

  if(currentBattle.playerCurrentPokemonObject.status === "BRN"){
    battleText1 = `${currentBattle.playerCurrentPokemon} was damaged by the burned!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.playerCurrentPokemonObject.status === "FRZ"){
    battleText1 = `${currentBattle.playerCurrentPokemon} was damaged by the frostbite!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.playerCurrentPokemonObject.status === "PSN"){
    battleText1 = `${currentBattle.playerCurrentPokemon} was damaged by the poison!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
    battleText1 = `${currentBattle.playerCurrentPokemon} remains paralysed!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
    battleText1 = `${currentBattle.playerCurrentPokemon} was damaged by the poison!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.playerCurrentPokemonObject.status === "SLP"&&
    currentBattle.playerCurrentPokemonObject.sleepCounter <= 0){
    battleText1 = `${currentBattle.playerCurrentPokemon} woke up!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.playerCurrentPokemonObject.status === "SLP"&&
    currentBattle.playerCurrentPokemonObject.sleepCounter > 0){
    battleText1 = `${currentBattle.playerCurrentPokemon} shows no signs of waking!`
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }
  else{
    if(currentBattle.playerCurrentPokemonObject.leeched === true){
    battleText1 = `${currentBattle.playerCurrentPokemon}'s hp is sapped by leech seed!`
    battleText2 = `${currentBattle.enemyCurrentPokemonObject.name} regained hp!`
    }
  }

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.playerCurrentPokemonObject.status === "SLP"&&
      currentBattle.playerCurrentPokemonObject.sleepCounter <=0){
      currentBattle.playerCurrentPokemonObject.status = null
      currentBattle.playerCurrentPokemonObject.sleepCounter = null
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null||
       currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }
      currentBattle.state = "statusEffects1"
    }
    else{
      if(currentBattle.weather !== null){
        currentBattle.state = "weather"
        currentBattle.weatherTurns--
        if(currentBattle.weatherTurns>0){
        if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
        if(currentBattle.weather === "hail"){
          if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
        }
        else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
        }
        else{
        currentBattle.state = "menu"
        if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
        }
      }
    }
  }



  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "statusEffects1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)



  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  battleText1 = ``
  battleText2 = ``
  battleText3 = ``

  if(currentBattle.enemyCurrentPokemonObject.status === "BRN"){
    battleText1 = `${currentBattle.enemyCurrentPokemon} was damaged by the burned!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.enemyCurrentPokemonObject.status === "FRZ"){
    battleText1 = `${currentBattle.enemyCurrentPokemon} was damaged by the frostbite!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.enemyCurrentPokemonObject.status === "PSN"){
    battleText1 = `${currentBattle.enemyCurrentPokemon} was damaged by the poison!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
   else if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
    battleText1 = `${currentBattle.enemyCurrentPokemon} remains paralysed!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
    battleText1 = `${currentBattle.enemyCurrentPokemon} was damaged by the poison!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.enemyCurrentPokemonObject.status === "SLP"&&
    currentBattle.enemyCurrentPokemonObject.sleepCounter <= 0){
    battleText1 = `${currentBattle.enemyCurrentPokemon} woke up!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
  else if(currentBattle.enemyCurrentPokemonObject.status === "SLP"&&
    currentBattle.enemyCurrentPokemonObject.sleepCounter > 0){
    battleText1 = `${currentBattle.enemyCurrentPokemon} shows no signs of waking!`
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText2 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText3 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }
  else{
    if(currentBattle.enemyCurrentPokemonObject.leeched === true){
    battleText1 = `${currentBattle.enemyCurrentPokemon}'s hp is sapped by leech seed!`
    battleText2 = `${currentBattle.playerCurrentPokemonObject.name} regained hp!`
    }
  }

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.enemyCurrentPokemonObject.status === "SLP"&&
      currentBattle.enemyCurrentPokemonObject.sleepCounter <=0){
      currentBattle.enemyCurrentPokemonObject.status = null
      currentBattle.enemyCurrentPokemonObject.sleepCounter = null
    }

      if(currentBattle.weather !== null){
        currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
      }
      else{
        currentBattle.state = "menu"
        if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
      }
  }



  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokemonParalysed"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(currentBattle.turnStart === "player"){
  if(currentBattle.playerCurrentPokemonObject.status === "PAR"){  
  battleText1 = `${currentBattle.playerCurrentPokemon} is full paralysed!`
  }
  else{
    battleText1 = `${currentBattle.playerCurrentPokemon} is fast asleep!`
  }
  battleText2 = ``
  battleText3 = ``
  }
  if(currentBattle.turnStart === "enemy"){
  if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){  
  battleText1 = `${currentBattle.enemyCurrentPokemon} is full paralysed!`
  }
  else{
    battleText1 = `${currentBattle.enemyCurrentPokemon} is fast asleep!`
  }
  battleText2 = ``
  battleText3 = ``
  }
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.enemyCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        
        }
      }
    }
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"||
      currentBattle.playerCurrentPokemonObject.status === "SLP"){
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.playerCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.playerCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.playerCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.playerCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.playerCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.playerCurrentPokemonObject.paralysed&&!currentBattle.playerCurrentPokemonObject.hitsItself){
    currentBattle.turn = "player"
    currentBattle.playerAttack()
    currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.playerDamage = 0
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.playerCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.playerCurrentPokemonObject)
        }
      }
    }
    }
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

   if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokemonParalysed1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(currentBattle.turnStart === "enemy"){
  if(currentBattle.playerCurrentPokemonObject.status === "PAR"){  
  battleText1 = `${currentBattle.playerCurrentPokemon} is full paralysed!`
  }
  else{
    battleText1 = `${currentBattle.playerCurrentPokemon} is fast asleep!`
  }
  battleText2 = ``
  battleText3 = ``
  }
  if(currentBattle.turnStart === "player"){
  if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){  
  battleText1 = `${currentBattle.enemyCurrentPokemon} is full paralysed!`
  }
  else{
    battleText1 = `${currentBattle.enemyCurrentPokemon} is fast asleep!`
  }
  battleText2 = ``
  battleText3 = ``
  }
  
  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }
      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
          if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
           currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
    }
  }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokeballUsed"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  textFont('Bold')

  enemyPokemon.visible = false
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level

  battleText1 = `${playerName} used ${currentBattle.pokeBall}!`
  battleText2 = ``
  battleText3 = ``

  image(pokeballImage,485,165,30,30)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.pokemonCaught){
      currentBattle.state = "pokemonCaught"
      pokeballImage = loadImage(`pokeballs/${bag.pokeballs[pokemonIndex].name.toLowerCase()}caught.png`)
      if(party.length<6){
      party.push(currentBattle.enemyCurrentPokemonObject)
      noOfPokemonLeft++
      noOfPartyPokemon++
      noOfPokemon++
      }
      else{
        party.push(currentBattle.enemyCurrentPokemonObject)
        noOfPokemon++
      }
    }
    else{
      enemyPokemon.visible = true 
      currentBattle.state = "pokeballFail"
    }
  }
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }
  if(currentBattle.state === "pokeballFail"){
  enemyPokemon.visible = true 
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  textFont('Bold')

  enemyPokemon.visible = true
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level

  battleText1 = `Oh no! The wild ${currentBattle.enemyCurrentPokemonObject.name} broke free!!`
  battleText2 = ``
  battleText3 = ``

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    enemyPokemon.visible = true 
    if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        }
      }
    }
  }
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokemonCaught"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  textFont('Bold')

  enemyPokemon.visible = false

  image(pokeballImage,485,165,30,30)
  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level

  battleText1 = `Gotcha! ${currentBattle.enemyCurrentPokemonObject.name} was caught!`
  battleText2 = `${currentBattle.enemyCurrentPokemonObject.name}'s data was added to the`
  battleText3 = `pokedex!`

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    currentBattle.state = "endBattle"
  }
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "effectiveness"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.pEffect !== ""&&currentBattle.pHit){
        currentBattle.state = "changes"
        if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint"
          if(currentBattle.playerCurrentPokemonObject.ability === "Moxie"){
              currentBattle.playerCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
        }
        else{
          if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        }
      }
    }
           if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
            noOfPokemonLeft--
            currentBattle.playerCurrentPokemonObject.status = "FNT"
          }
        }
      }
    }
    else{
      if(currentBattle.eEffect !== ""){
        currentBattle.state = "changes"
        if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint"
          if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.status === "PAR"||
      currentBattle.playerCurrentPokemonObject.status === "SLP"){
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.playerCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.playerCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.playerCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.playerCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.playerCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.playerCurrentPokemonObject.paralysed&&!currentBattle.playerCurrentPokemonObject.hitsItself){
    currentBattle.turn = "player"
    currentBattle.playerAttack()
    currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.playerDamage = 0
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.playerCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.playerCurrentPokemonObject)
        }
      }
    }
           if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.enemyCurrentPokemonObject.currentHP = 0
            currentBattle.enemyPokemonLeft--
          }
        }
      }
    }
  }

  if(currentBattle.turnStart === "player"){
  if((currentBattle.pMult>1)&&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((currentBattle.pMult>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((currentBattle.pMult<1)&&(currentBattle.pMult>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if((currentBattle.pMult<1)
    &&(currentBattle.pMult>0)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }
  if((currentBattle.pMult === 0)){
      battleText1 = `It doesn't affect ${currentBattle.enemyCurrentPokemonObject.name}!`
      battleText2 = ``
  }
  if((currentBattle.pMult === 1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
else{
  if((currentBattle.eMult>1)
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((currentBattle.eMult>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((currentBattle.eMult<1)
    &&(currentBattle.eMult>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if(currentBattle.eMult<1&&currentBattle.eMult>0
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }

  if(currentBattle.eMult === 0){
      battleText1 = `It doesn't affect ${currentBattle.playerCurrentPokemonObject.name}!`
      battleText2 = ``
  }


  if(currentBattle.eMult === 1
     &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
 


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }
   if(currentBattle.state === "playerNext"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    currentBattle.playerPrevious = ""
    if(currentBattle.playerCurrentPokemonObject.ability === "Sand Stream"){
      currentBattle.weather = "sandstorm"
      currentBattle.weatherTurns = 5
      currentBattle.playerCurrentPokemonObject.abilityActive = true
    }
    if(currentBattle.playerCurrentPokemonObject.ability === "Intimidate"){
        currentBattle.playerCurrentPokemonObject.abilityActive = true
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Hyper Cutter"
       &&currentBattle.enemyCurrentPokemonObject.ability !== "Clear Body"){
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Contrary"){    
      currentBattle.enemyCurrentPokemonObject.currentAtt -=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.att*0.67)
      }
      else{    
      currentBattle.enemyCurrentPokemonObject.abilityActive = true  
      currentBattle.enemyCurrentPokemonObject.currentAtt +=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.att*(0.5))
      }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
      }
    }
    if(currentBattle.playerCurrentPokemonObject.ability === "Petrify"){
      currentBattle.playerCurrentPokemonObject.abilityActive = true
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Clear Body"){  
       if(currentBattle.enemyCurrentPokemonObject.ability !== "Contrary"){ 
      currentBattle.enemyCurrentPokemonObject.currentSpe -=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.speed*0.67)
       }
       else{
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
        currentBattle.enemyCurrentPokemonObject.currentSpe +=
      Math.round(currentBattle.enemyCurrentPokemonObject.stats.speed*(0.5))
       }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
      }
    }
    if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
      let t = currentBattle.nextPokemon();
      if (t !== -1) {
        let te = currentBattle.enemyTeam[t];
        currentBattle.enemyTeam[t] = currentBattle.enemyTeam[0];
        currentBattle.enemyTeam[0] = te;

        currentBattle.enemyCurrentPokemonObject = currentBattle.enemyTeam[0];
        currentBattle.enemyCurrentPokemon = currentBattle.enemyCurrentPokemonObject.name;

        enemyPokemonFront = loadImage(`front/${currentBattle.enemyCurrentPokemon}.png`);
        enemyPokemon.addImage(enemyPokemonFront);
        enemyPokemon.visible = true

        currentBattle.state = "switch";
        currentBattle.enemyNextIndex = t + 1;
      }
    }
    else{
    if(currentBattle.turn === "enemy"&&currentBattle.turnStart === "player"){
      let noOfMoves = currentBattle.enemyCurrentPokemonObject.moves.length;
      let movePoints = [0,0,0,0];

  for(let i = 0;i<noOfMoves;i++){
    let currentMove = currentBattle.enemyCurrentPokemonObject.moves[i];
    if(currentMove.type === currentBattle.enemyCurrentPokemonObject.types[0]||
      currentMove.type === currentBattle.enemyCurrentPokemonObject.types[1]){
        movePoints[i]++;
    }
    if(currentMove.category === "Status"){
      movePoints[i]-=2
    }
    let currentMoveMultiplier = calculateTypeEffectiveness(
      currentBattle.playerCurrentPokemonObject.types,
    currentBattle.enemyCurrentPokemonObject.moves[i].type)

    if(currentMoveMultiplier === 0.25){
      movePoints[i]-=4
    }
    if(currentMoveMultiplier === 0.5){
      movePoints[i]-=2
    }
    if(currentMoveMultiplier === 2){
      movePoints[i]+=2
    }
    if(currentMoveMultiplier === 4){
      movePoints[i]+=4
    }
    if(currentMoveMultiplier === 0){
      movePoints[i]-=10
    }
  }

  let enemyMoveIndex = 0
  for(let i = 0;i<noOfMoves;i++){
      if(movePoints[enemyMoveIndex]<movePoints[i]){
          enemyMoveIndex = i
      }
      if(movePoints[enemyMoveIndex] === movePoints[i]){
        if(currentBattle.enemyCurrentPokemonObject.moves[i].power>
        currentBattle.enemyCurrentPokemonObject.moves[enemyMoveIndex].power){
        enemyMoveIndex = i
      }
      else if(currentBattle.enemyCurrentPokemonObject.moves[i].power<
        currentBattle.enemyCurrentPokemonObject.moves[enemyMoveIndex].power){
          enemyMoveIndex = enemyMoveIndex
        }
      
      else{
        enemyMoveIndex = (currentBattle.enemyCurrentPokemonObject.moves[i].accuracy>
        currentBattle.enemyCurrentPokemonObject.moves[enemyMoveIndex].accuracy)?i:enemyMoveIndex
      }
    }
  }
  currentBattle.enemyIndex = enemyMoveIndex;
  if(currentBattle.type === "trainer"){
    currentBattle.currentMove = moveDB[
      currentBattle.enemyCurrentPokemonObject.moves[currentBattle.enemyIndex]]
  }
  else{
    currentBattle.currentMove = currentBattle.enemyCurrentPokemonObject.moves
    [currentBattle.enemyIndex]
  }
    currentBattle.eCurrentMove = currentBattle.currentMove.name

    if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        }
      }
    }
      
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
    }
  }
  }

  battleText1 = `${currentBattle.playerPrevious}, come back!`
  battleText2 = `Go ${currentBattle.playerCurrentPokemon}!`
  battleText3 = ``
 


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }



  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "switch"){
    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.state = "menu"
      if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
      if(currentBattle.enemyCurrentPokemonObject.ability === "Sand Stream"){
      currentBattle.weather = "sandstorm"
      currentBattle.weatherTurns = 5
      currentBattle.enemyCurrentPokemonObject.abilityActive = true
      }
    if(currentBattle.enemyCurrentPokemonObject.ability === "Intimidate"){
        currentBattle.enemyCurrentPokemonObject.abilityActive = true
      if(currentBattle.enemyCurrentPokemonObject.ability !== "Hyper Cutter"&&
        currentBattle.enemyCurrentPokemonObject.ability !== "Clear Body"){  
      if(currentBattle.enemyCurrentPokemonObject.ability === "Contrary"){  
      currentBattle.playerCurrentPokemonObject.abilityActive = true    
      currentBattle.playerCurrentPokemonObject.currentAtt +=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
      }
      else{
      currentBattle.playerCurrentPokemonObject.currentAtt -=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.att*0.67)
      }
      }
      else{
      currentBattle.playerCurrentPokemonObject.abilityActive = true  
      }
    }

    if(currentBattle.enemyCurrentPokemonObject.ability === "Petrify"){
      currentBattle.enemyCurrentPokemonObject.abilityActive = true
      if(currentBattle.playerCurrentPokemonObject.ability !== "Clear Body"){  
      if(currentBattle.playerCurrentPokemonObject.ability !== "Contrary"){  
      currentBattle.playerCurrentPokemonObject.currentSpe -=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.speed*(2/3))
      }
      else{
        currentBattle.playerCurrentPokemonObject.abilityActive = true
      currentBattle.playerCurrentPokemonObject.currentSpe +=
      Math.round(currentBattle.playerCurrentPokemonObject.stats.speed*0.5)  
      }
      }
      else{
        currentBattle.playerCurrentPokemonObject.abilityActive = true
      }
      
    }
    }

    battleText1 = `${currentBattle.enemyObj.name} sent out ${currentBattle.enemyCurrentPokemon}!`
    battleText2 = ``
    battleText3 = ``

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  



  noStroke()
  fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "changes"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      if(currentBattle.turnStart === "player"){
        if(currentBattle.enemyCurrentPokemonObject.justConfused === true){
        currentBattle.enemyCurrentPokemonObject.justConfused = false
        }
        if(currentBattle.enemyCurrentPokemonObject.justLeeched === true){
        currentBattle.enemyCurrentPokemonObject.justLeeched = false
        }
        if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
          currentBattle.state = "faint"
          if(currentBattle.playerCurrentPokemonObject.ability === "Moxie"){
              currentBattle.playerCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
        }
        else{
          if(currentBattle.enemyCurrentPokemonObject.status === "PAR"||
      currentBattle.enemyCurrentPokemonObject.status === "SLP"){
      if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.enemyCurrentPokemonObject.paralysed&&!currentBattle.enemyCurrentPokemonObject.hitsItself){
    currentBattle.turn = "enemy"
    currentBattle.enemyAttack()
    currentBattle.playerCurrentPokemonObject.currentHP -= currentBattle.enemyDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.enemyCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.enemyDamage = 0
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.enemyCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.enemyCurrentPokemonObject)
        }
      }
    }
           if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.playerCurrentPokemonObject.currentHP = 0
            noOfPokemonLeft--
            currentBattle.playerCurrentPokemonObject.status = "FNT"
          }
        }
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.justConfused === true){
        currentBattle.playerCurrentPokemonObject.justConfused = false
        }
        if(currentBattle.playerCurrentPokemonObject.justLeeched === true){
        currentBattle.playerCurrentPokemonObject.justLeeched = false
        }
        if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
          currentBattle.state = "faint"
          if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.status === "PAR"||
      currentBattle.playerCurrentPokemonObject.status === "SLP"){
      if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          currentBattle.playerCurrentPokemonObject.paralysed = true
        }
        else{
          currentBattle.playerCurrentPokemonObject.paralysed = false
        }
      }
      else{
        currentBattle.playerCurrentPokemonObject.paralysed = true
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.paralysed = false
    }
    if(currentBattle.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        currentBattle.playerCurrentPokemonObject.hitsItself = true
      }
      else{
        currentBattle.playerCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      currentBattle.playerCurrentPokemonObject.hitsItself = false
    }
    if(!currentBattle.playerCurrentPokemonObject.paralysed&&!currentBattle.playerCurrentPokemonObject.hitsItself){
    currentBattle.turn = "player"
    currentBattle.playerAttack()
    currentBattle.enemyCurrentPokemonObject.currentHP -= currentBattle.playerDamage
    currentBattle.state = "battling1"
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.paralysed){
        currentBattle.state = "pokemonParalysed1"
        currentBattle.playerDamage = 0
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.hitsItself){
          currentBattle.state = "pokemonConfused1"
          currentBattle.playerCurrentPokemonObject.currentHP -=
          currentBattle.calculateConfusionDamage(currentBattle.playerCurrentPokemonObject)
        }
      }
    }
           if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.enemyCurrentPokemonObject.currentHP = 0
            currentBattle.enemyPokemonLeft--
            
          }
        }
      }
    }
  
    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.pEffect}`
      battleText2 = ``
      battleText3 = ``
      if(currentBattle.enemyCurrentPokemonObject.justConfused === true){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was confused!`
      }
      if(currentBattle.enemyCurrentPokemonObject.justLeeched === true){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was leeched!`
      }
      if(currentBattle.enemyCurrentPokemonObject.justStatused === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was burned!`
        }
        if(currentBattle.enemyCurrentPokemonObject.status === "FRZ"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was frozen!`
        }
        if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} fell asleep!`
        }
        if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was paralysed!`
        }
      }
    }
    

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.eEffect}`
      if(currentBattle.playerCurrentPokemonObject.justConfused === true){
        battleText1 = `${currentBattle.playerCurrentPokemon} was confused!`
      }
      if(currentBattle.playerCurrentPokemonObject.justLeeched === true){
        battleText1 = `${currentBattle.playerCurrentPokemon} was leeched!`
      }
      if(currentBattle.playerCurrentPokemonObject.justStatused === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"){
        battleText1 = `${currentBattle.playerCurrentPokemon} was burned!`
        }
        if(currentBattle.playerCurrentPokemonObject.status === "FRZ"){
        battleText1 = `${currentBattle.playerCurrentPokemon} was frozen!`
        }
        if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        battleText1 = `${currentBattle.playerCurrentPokemon} fell asleep!`
        }
        if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        battleText1 = `${currentBattle.playerCurrentPokemon} was paralysed!`
        }
      }
      battleText2 = ``
      battleText3 = ``
    }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }
  
  if(currentBattle.state === "battling1"){
    enemyPokemon.visible = true 
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.enemyCurrentPokemonObject.confused){
        if(currentBattle.enemyCurrentPokemonObject.confusedCounter >0){
          currentBattle.enemyCurrentPokemonObject.confusedCounter--
        }
        else{
          currentBattle.enemyCurrentPokemonObject.confusedCounter = null
          currentBattle.enemyCurrentPokemonObject.confused = null
        }
      }
      if(currentBattle.eMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness1"
      }
      else{
        if(currentBattle.eEffect !== ""){
          currentBattle.state = "changes1"
          if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint1"
            if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
          else{
      if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){

          if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }  

          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
    
          }
        }
      }
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.confused){
        if(currentBattle.playerCurrentPokemonObject.confusedCounter >0){
          currentBattle.playerCurrentPokemonObject.confusedCounter--
        }
        else{
          currentBattle.playerCurrentPokemonObject.confusedCounter = null
          currentBattle.playerCurrentPokemonObject.confused = null
        }
      }
      if(currentBattle.pMult !== 1||currentBattle.crit !== 1){
        currentBattle.state = "effectiveness1"
      }
      else{
        if(currentBattle.pEffect !== ""&&currentBattle.pHit){
          currentBattle.state = "changes1"
          if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
        }
        else{
          if(currentBattle.enemyCurrentPokemonObject.currentHP <= 0){
            currentBattle.state = "faint1"
            if(currentBattle.playerCurrentPokemonObject.ability === "Moxie"){
              currentBattle.playerCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
          }
          else{
     if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
            
            if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }

          currentBattle.state = "menu"
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
          }
        }
      }
    }
    currentBattle.keyCooldown = 15
  }
  
    if(currentBattle.turnStart === "player"){
      if(currentBattle.type === "trainer"){
      if(currentBattle.enemyCurrentPokemonObject.confusedCounter !== 0){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} used ${currentBattle.eCurrentMove}!`
      battleText2 = ``
      }
      else{
      battleText2 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} used ${currentBattle.eCurrentMove}!`
      battleText1 = `${currentBattle.enemyCurrentPokemon} snapped out of confusion!`
      }
      }
      else{
      if(currentBattle.enemyCurrentPokemonObject.confusedCounter !== 0){
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} used ${currentBattle.eCurrentMove}!`
      battleText2 = ``
      }
      else{
      battleText2 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} used ${currentBattle.eCurrentMove}!`
      battleText1 = `${currentBattle.enemyCurrentPokemon} snapped out of confusion!`
      }
      }
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} used ${currentBattle.pCurrentMove}!`
      battleText2 = ``
      battleText3 = ``
    }

    if(currentBattle.turnStart === "player"&&!currentBattle.eHit){
    battleText2 = `But it missed!`
  }
  if(currentBattle.turnStart === "enemy"&&!currentBattle.pHit){
    battleText2 = `But it missed!`
  }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "effectiveness1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      if(currentBattle.eEffect !== ""){
        currentBattle.state = "changes1"
        if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
      }
      else{
        if(currentBattle.playerCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint1"
          if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
        }
        else{
          if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")&&
        currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")&&
            currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")&&
            currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
        }
      }
    }
    else{
      if(currentBattle.pEffect !== ""&&currentBattle.pHit){
        currentBattle.state = "changes1"
        if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
      }
      else{
        if(currentBattle.enemyCurrentPokemonObject.currentHP <=0){
          currentBattle.state = "faint1"
          if(currentBattle.playerCurrentPokemonObject.ability === "Moxie"){
              currentBattle.playerCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.att*0.5)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
        }
        else{
         if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
        }
      }
    }
  }

 if(currentBattle.turnStart === "enemy"){
  if(currentBattle.pMult>1
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((currentBattle.pMult>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((currentBattle.pMult<1)
  &&(currentBattle.pMult>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if((currentBattle.pMult<1)
    &&(currentBattle.pMult>0)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }
  if((currentBattle.pMult === 0)){
      battleText1 = `It doesn't affect ${currentBattle.enemyCurrentPokemonObject.name}!`
      battleText2 = ``
  }
  if((currentBattle.pMult === 0)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
else{
  if((currentBattle.eMult>1)
    &&currentBattle.crit === 1){
      battleText1 = `It's super effective!`
      battleText2 = ``
  }
  if((currentBattle.eMult>1)
    &&currentBattle.crit === 1.5){
      battleText1 = `It's super effective!`
      battleText2 = `It's a critical hit!`
  }


  if((currentBattle.eMult<1)
    &&(currentBattle.eMult>0)
    &&currentBattle.crit === 1){
      battleText1 = `It's not very effective!`
      battleText2 = ``
  }
  if(currentBattle.eMult<1&&currentBattle.eMult>0
    &&currentBattle.crit === 1.5){
      battleText1 = `It's not very effective!`
      battleText2 = `It's a critical hit!`
  }

  if(currentBattle.eMult === 0){
      battleText1 = `It doesn't affect ${currentBattle.playerCurrentPokemonObject.name}!`
      battleText2 = ``
  }


  if(currentBattle.eMult === 0
    &&currentBattle.crit === 1.5){
      battleText1 = `It's a critical hit!`
      battleText2 = ``
  }
}
 


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "changes1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    if(currentBattle.turnStart === "player"){
      if(currentBattle.playerCurrentPokemonObject.justConfused === true){
      currentBattle.playerCurrentPokemonObject.justConfused = false
      }
      if(currentBattle.playerCurrentPokemonObject.justLeeched === true){
      currentBattle.playerCurrentPokemonObject.justLeeched = false
      }
      if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
        currentBattle.state = "faint1"
        if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
      }
      else{
      if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
    
    
    }
  }
  else{
    if(currentBattle.playerCurrentPokemonObject.justConfused === true){
      currentBattle.playerCurrentPokemonObject.justConfused = false
      }
      if(currentBattle.playerCurrentPokemonObject.justLeeched === true){
      currentBattle.playerCurrentPokemonObject.justLeeched = false
      }
      if(currentBattle.playerCurrentPokemonObject.currentHP <= 0){
        currentBattle.state = "faint1"
        if(currentBattle.enemyCurrentPokemonObject.ability === "Moxie"){
              currentBattle.enemyCurrentPokemonObject.currentAtt +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.att*0.5)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
      }
      else{
      if(currentBattle.playerCurrentPokemonObject.status !== null||
        currentBattle.playerCurrentPokemonObject.leeched === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"
       ||currentBattle.playerCurrentPokemonObject.status === "FRZ"
       ||currentBattle.playerCurrentPokemonObject.status === "PSN"){
        
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.status === "TOX"){
        currentBattle.playerCurrentPokemonObject.toxicCounter++
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.toxicCounter*
          currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.playerCurrentPokemonObject.leeched === true){
        currentBattle.playerCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
        currentBattle.enemyCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
      }
      currentBattle.state = "statusEffects"
      if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        currentBattle.playerCurrentPokemonObject.sleepCounter--
       }
      }
      else if(currentBattle.enemyCurrentPokemonObject.status !== null||
        currentBattle.enemyCurrentPokemonObject.leeched === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"
       ||currentBattle.enemyCurrentPokemonObject.status === "FRZ"
       ||currentBattle.enemyCurrentPokemonObject.status === "PSN"){
        
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.status === "TOX"){
        currentBattle.enemyCurrentPokemonObject.toxicCounter++
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.toxicCounter*
          currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }
      if(currentBattle.enemyCurrentPokemonObject.leeched === true){
        currentBattle.enemyCurrentPokemonObject.currentHP -= 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
        currentBattle.playerCurrentPokemonObject.currentHP += 
        Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
      }

      if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        currentBattle.enemyCurrentPokemonObject.sleepCounter--
       }

      currentBattle.state = "statusEffects1"
      }
      else{
        if(currentBattle.weather === null){
        if(currentBattle.playerCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.playerCurrentPokemonObject)){
            currentBattle.state = "item"
          }
          else if(currentBattle.enemyCurrentPokemonObject.item !== null&&
            currentBattle.itemUse(currentBattle.enemyCurrentPokemonObject)){
            currentBattle.state = "item1"
          }
          else{
          currentBattle.state = "menu"
          if (currentBattle.playerCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.playerCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.playerCurrentPokemonObject.abilityActive = true
            }

            if (currentBattle.enemyCurrentPokemonObject.ability === "Speed Boost") {
            currentBattle.enemyCurrentPokemonObject.currentSpe += 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.speed * 0.5);
            currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          }
        }
        else{
          currentBattle.state = "weather"
          currentBattle.weatherTurns--
          if(currentBattle.weatherTurns>0){
             if(currentBattle.weather === "rain"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Rain Dish"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.playerCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.playerCurrentPokemonObject.status !== null){
                currentBattle.playerCurrentPokemonObject.status = null
                currentBattle.playerCurrentPokemonObject.toxicCounter = null
                currentBattle.playerCurrentPokemonObject.abilityActive = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Hydration"&&
              currentBattle.enemyCurrentPokemonObject.status !== null){
                currentBattle.enemyCurrentPokemonObject.status = null
                currentBattle.enemyCurrentPokemonObject.toxicCounter = null
                currentBattle.enemyCurrentPokemonObject.abilityActive = true
            }
          } 
          if(currentBattle.weather === "hail"){
            if(currentBattle.playerCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.playerCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
              currentBattle.playerCurrentPokemonObject.ability = true
            }
            if(currentBattle.enemyCurrentPokemonObject.ability === "Ice Body"){
              currentBattle.enemyCurrentPokemonObject.currentHP +=
              Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
              currentBattle.enemyCurrentPokemonObject.ability = true
            }
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Ice")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Ice")
          &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
        if(currentBattle.weather === "sandstorm"){
          if(!currentBattle.playerCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.playerCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.playerCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.playerCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.playerCurrentPokemonObject.stats.hp/8)
          }
          if(!currentBattle.enemyCurrentPokemonObject.types.includes("Rock")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Ground")&&
             !currentBattle.enemyCurrentPokemonObject.types.includes("Steel")
            &&currentBattle.enemyCurrentPokemonObject.ability !== "Overcoat"){
            currentBattle.enemyCurrentPokemonObject.currentHP -= 
            Math.floor(currentBattle.enemyCurrentPokemonObject.stats.hp/8)
          }
        }
      }
        }
      }
    }
  }
  }
  
    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.pEffect}`
      battleText2 = ``
      battleText3 = ``
      if(currentBattle.enemyCurrentPokemonObject.justConfused === true){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was confused!`
      }
      if(currentBattle.enemyCurrentPokemonObject.justLeeched === true){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was leeched!`
      }
      if(currentBattle.enemyCurrentPokemonObject.justStatused === true){
        if(currentBattle.enemyCurrentPokemonObject.status === "BRN"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was burned!`
        }
        if(currentBattle.enemyCurrentPokemonObject.status === "FRZ"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was frozen!`
        }
        if(currentBattle.enemyCurrentPokemonObject.status === "SLP"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} fell asleep!`
        }
        if(currentBattle.enemyCurrentPokemonObject.status === "PAR"){
        battleText1 = `${currentBattle.enemyCurrentPokemon} was paralysed!`
        }
      }
    }
    

    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.eEffect}`
      if(currentBattle.playerCurrentPokemonObject.justConfused === true){
        battleText1 = `${currentBattle.playerCurrentPokemon} was confused!`
      }
      if(currentBattle.playerCurrentPokemonObject.justLeeched === true){
        battleText1 = `${currentBattle.playerCurrentPokemon} was leeched!`
      }
      if(currentBattle.playerCurrentPokemonObject.justStatused === true){
        if(currentBattle.playerCurrentPokemonObject.status === "BRN"){
        battleText1 = `${currentBattle.playerCurrentPokemon} was burned!`
        }
        if(currentBattle.playerCurrentPokemonObject.status === "FRZ"){
        battleText1 = `${currentBattle.playerCurrentPokemon} was frozen!`
        }
        if(currentBattle.playerCurrentPokemonObject.status === "SLP"){
        battleText1 = `${currentBattle.playerCurrentPokemon} fell asleep!`
        }
        if(currentBattle.playerCurrentPokemonObject.status === "PAR"){
        battleText1 = `${currentBattle.playerCurrentPokemon} was paralysed!`
        }
      }
      battleText2 = ``
      battleText3 = ``
    }

  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "faint"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "player"){
      currentBattle.state = "expGain"
      currentBattle.playerCurrentPokemonObject.gainExp(currentBattle.enemyCurrentPokemonObject.baseExp+
      currentBattle.enemyCurrentPokemonObject.level*10,pokedex,moveDB);
    }
    else{
      if(noOfPokemonLeft > 0){
      currentBattle.state = "pokemon"
      pokemonIndex = 0
      currentBattle.turn = ""
      currentBattle.turnStart = ""
      if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
      }
      else{
        currentBattle.state = "blackOutMsg"
      }
    }
  }
  
    if(currentBattle.turnStart === "player"){
      if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "enemy"){
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} fainted!`
      battleText2 = ``
      battleText3 = ``
    }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  if(currentBattle.state === "pokemon"){
    if(menuPage === ""){
    menuPage = "party"
    subIndex = -10
    }
  }
  
  if(currentBattle.state === "faint1"){
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  rect(10, 312.5, 620, 155);

  textSize(25);
  textFont('Courier New');
  fill("black");
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(currentBattle.turnStart === "enemy"){
      currentBattle.state = "expGain"
      currentBattle.playerCurrentPokemonObject.gainExp(currentBattle.enemyCurrentPokemonObject.baseExp+
      currentBattle.enemyCurrentPokemonObject.level*10,pokedex,moveDB);
    }
    else{
      if(noOfPokemonLeft > 0){
      currentBattle.state = "pokemon"
      pokemonIndex = 0
      currentBattle.turn = ""
      currentBattle.turnStart = ""
      }
      else{
        currentBattle.state = "blackOutMsg"
      }
    }
  }
  
    if(currentBattle.turnStart === "enemy"){
      if(currentBattle.type === "trainer"){
      battleText1 = `Foe ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      else{
      battleText1 = `The wild ${currentBattle.enemyCurrentPokemonObject.name} fainted!`
      }
      battleText2 = ``
      battleText3 = ``

    }

    if(currentBattle.turnStart === "player"){
      battleText1 = `${currentBattle.playerCurrentPokemonObject.name} fainted!`
      battleText2 = ``
      battleText3 = ``
    }


  textFont('Bold')

  
  let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let enemyHP = currentBattle.enemyTeam[0].currentHP
  let enemymaxHP = currentBattle.enemyTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  let enemyPokemonName = currentBattle.enemyTeam[0].name
  let enemyPokemonlvl = currentBattle.enemyTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  if(currentBattle.playerCurrentPokemonObject.status !== null&&currentBattle.playerCurrentPokemonObject.currentHP>0){
    image(playerStatusImage,567,245,40,16)
  }

  if(currentBattle.enemyCurrentPokemonObject.status !== null&&currentBattle.enemyCurrentPokemonObject.currentHP>0){
    image(enemyStatusImage,177,30,40,16)
  }

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }
  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  if(expgained === 0){
    expRatio = 0
  }

    fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);


    textSize(25);
  textFont('Courier New');
 
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  stroke(51)
  strokeWeight(1)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${enemyPokemonName}`,15,25)
  textSize(15);
  text(`Lvl:${enemyPokemonlvl}`,178,25)

  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  fill(enemyColor)
  rect(15,50,enemyRatio*220,5)

  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

  }

  


  if(currentBattle.state === "endDialouge"){
    playerMoney += currentBattle.enemyObj.money
    let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  enemyPokemon.visible = false

   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  stroke(51)
  strokeWeight(1)
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)

 



  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }

  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  }
  if(currentBattle.state === "expGain"){
     fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);
    let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  enemyPokemon.visible = false

   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  stroke(51)
  strokeWeight(1)
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  
  
  battleText1 = `${playerPokemonName} gained ${currentBattle.playerCurrentPokemonObject.amount} EXP. points!`
  if(currentBattle.playerCurrentPokemonObject.lv){
  battleText2 = `${playerPokemonName} grew to level ${playerPokemonlvl}!`
  }
  else{
    battleText2 = ``
  }
  battleText3 = ``
  
  

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    if(currentBattle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${currentBattle.playerCurrentPokemonObject.status}.png`)
    }
    if(currentBattle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${currentBattle.enemyCurrentPokemonObject.status}.png`)
    }
    currentBattle.keyCooldown = 15
      let t = currentBattle.nextPokemon();
      if (t !== -1) {
        let te = currentBattle.enemyTeam[t];
        currentBattle.enemyTeam[t] = currentBattle.enemyTeam[0];
        currentBattle.enemyTeam[0] = te;

        currentBattle.enemyCurrentPokemonObject = currentBattle.enemyTeam[0];
        currentBattle.enemyCurrentPokemon = currentBattle.enemyCurrentPokemonObject.name;

        enemyPokemonFront = loadImage(`front/${currentBattle.enemyCurrentPokemon}.png`);
        enemyPokemon.addImage(enemyPokemonFront);
        enemyPokemon.visible = true

        currentBattle.state = "switch";
        currentBattle.enemyNextIndex = t + 1;
      }
       else {
        currentBattle.state = "endTrainerDialouge"
      if(currentBattle.type === "trainer"){
        trainerSprite.visible = true
      }
      else{
        trainerSprite.visible = false
      }
      }
  }

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }

  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
  }

  if(currentBattle.state === "endTrainerDialouge"){
  currentBattle.playerTeam[0].lv = false
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);
    let playerHP = currentBattle.playerTeam[0].currentHP
  let playermaxHP = currentBattle.playerTeam[0].stats.hp
  let playerRatio = playerHP/playermaxHP
  let expgained = party[0].exp
  let expMax = party[0].expToNextLevel()
  let expRatio = expgained/expMax
  let playerPokemonName = currentBattle.playerTeam[0].name
  let playerPokemonlvl = currentBattle.playerTeam[0].level
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
  enemyPokemon.visible = false

   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  stroke(51)
  strokeWeight(1)
  text(`${playerPokemonName}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:${playerPokemonlvl}`,568,240)

  noStroke()
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  trainerSprite.visible = true

  if(currentBattle.type === "trainer"){
  battleText1 = `You defeated ${currentBattle.enemyName}!`
  battleText2 = `You got $${currentBattle.enemyObj.money} for winning!`
  battleText3 = ``
  }
  else{
  battleText1 = `You defeated the wild ${currentBattle.enemyCurrentPokemon}!`
  battleText2 = ``
  battleText3 = ``
  }
  

  if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
    currentBattle.state = "endBattle"
    currentBattle.keyCooldown = 15
  }

  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }

  if(expgained === 0){
    expRatio = 0
  }
  stroke(51)
  strokeWeight(1)
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  noStroke()
  fill("white")
  rect(445,277.5,180,5)
  fill(60, 130, 250)
  if(expRatio >0){
  rect(445,277.5,expRatio*180,5)
  }
    if(currentBattle.type === "trainer"){
  trainerSprite.visible = true
  }
  else{
    trainerSprite.visible = false
  }
  }
  if(currentBattle.state === "endBattle"){
    currentBattle.playerCurrentPokemon = ""
    currentBattle.enemyCurrentPokemon = ""
    trainerImg = null
    battlingChat = false
    playerPokemon.visible = false
    battle = false 
    player.visible = true
    move = true
    trainerSprite.visible = false
    currentBattle.enemyState = true
    if(currentBattle.enemyName === "Officer Jenny"){
        officers[0] = true 
        npcDB.auburn_town["bgState-5"].npc1Fought = true
        move = false
    }
    if(currentBattle&&kai&&currentBattle.enemyName === "Kai"&&gameState === 3.1&&
      bgState === 1&&playerLocation === "route_1"){
        kai.startTalking()
        move = false
        kai.sprite.visible = true
        kai.battled = true
    }
    if(currentBattle.type === "trainer"){
    enemyCreatedTeam = []
    }
    currentBattle = null
    playerStatusImage = ""
    enemyStatusImage = ""
    
  }

  if(currentBattle !== null){
  

  if(currentBattle.state !== "transtion"&&
    currentBattle.state !== "send"&&currentBattle.state !== "intro"){
      if(currentBattle.state !== "transtion"&&
    currentBattle.state !== "send"&&currentBattle.state !== "intro"
  &&currentBattle.state !== "playerNext"){
      if(currentBattle.playerCurrentPokemonObject.gender === 1){
        textFont("bold")
        stroke("black")
        strokeWeight(1)
        fill("rgb(0, 102, 204)")
        textSize(20)
        text("♂",550,240)
      }
      if(currentBattle.playerCurrentPokemonObject.gender === 2){
        textFont("bold")
        stroke("black")
        strokeWeight(1)
        fill("crimson")
        textSize(20)
        text("♀",550,240)
      }
    }
    if(currentBattle.state !== "transtion"&&
    currentBattle.state !== "send"&&currentBattle.state !== "intro"&&
    currentBattle.state !== "switch"&&currentBattle.state !== "expGain"&&
    currentBattle.state !== "pokeballUsed"&&currentBattle.state !== "endTrainerDialouge"
    &&currentBattle.state !== "pokemonCaught"&&currentBattle.state !== "run"
  &&currentBattle.state !== "pokeballFail"){
      if(currentBattle.enemyCurrentPokemonObject.gender === 1){
        textFont("bold")
        stroke("black")
        strokeWeight(1)
        fill("rgb(0, 102, 204)")
        textSize(20)
        text("♂",160,25)
      }
      if(currentBattle.enemyCurrentPokemonObject.gender === 2){
        textFont("bold")
        stroke("black")
        strokeWeight(1)
        fill("crimson")
        textSize(20)
        text("♀",160,25)
      }
  }
}
}

  if(currentBattle&&currentBattle.state !== "endTrainerDialouge"&&currentBattle.state !== "endBattle"){
  if(currentBattle.playerCurrentPokemonObject.abilityActive === true){
    stroke("black")
    strokeWeight(2);
    fill("rgba(81,81,81,0.9)");
    rect(-1, 200, 200, 72, 10);
    noStroke();
    fill("rgba(255,255,255,0.9)");
    rect(-1.5, 236.5, 199.5, 34, 10);

    stroke("black")
    strokeWeight(2)
    textSize(20);
    textFont('Courier New');
    fill("white");
    text(`${currentBattle.playerCurrentPokemon}`, 8, 225);
    textSize(18);
    textFont('Courier New');
    noStroke()
    fill(51);
    text(`${currentBattle.playerCurrentPokemonObject.ability}`, 5.8, 256.8);
    fill("black");
    text(`${currentBattle.playerCurrentPokemonObject.ability}`, 5, 256);
    setTimeout(()=>{
      currentBattle.playerCurrentPokemonObject.abilityActive = false
    },1500)
  }
  if(currentBattle.enemyCurrentPokemonObject.abilityActive === true){
    strokeWeight(2);
    stroke("black")
    fill("rgba(81,81,81,0.9)");
    rect(440, 60, 200, 72, 10);
    noStroke();
    fill("rgba(255,255,255,0.9)");
    rect(441.5, 97.5, 199, 34, 10);
    stroke("black");
    strokeWeight(2);
    textSize(20);
    textFont('Courier New');
    fill("white");
    text(`${currentBattle.enemyCurrentPokemon}`, 448, 85);
    textSize(18);
    textFont('Courier New');
    noStroke();
    fill(51);
    text(`${currentBattle.enemyCurrentPokemonObject.ability}`, 445.8, 116.8);
    fill("black");
    text(`${currentBattle.enemyCurrentPokemonObject.ability}`, 445, 116);
    setTimeout(()=>{
      currentBattle.enemyCurrentPokemonObject.abilityActive = false
    },1500)
  }
  }


}



function checkName() {
  if (inp.value().trim() !== ""&&inp.value().length <11) {
    playerName = inp.value().trim();
    inp.remove();
    button.remove();
    textState = 4;
    chat = true;
    options = true
    inputCreated = false;
  }
}

function textHandler(){
    if(gameState === 0){
      textSize(30);
      textFont('Courier New');
      fill("white");
      text("Press Space To Continue",130,400)
    }
    if(gameState === 1){
      if(textState === 0){
        text1 = "Professor Thorne: Ah, welcome! You must be the new "
        text2 = "Trainer I've been expecting. I'm Professor Thorne,the"
        text3 = "Pokémon researcher of the Verdantia region. I study"
      }
      if(textState === 1){
        text1 = "how Pokémon and people grow together in this ever-"
        text2 = "changing world. Some treat Pokémon as friends,"
        text3 = "others challenge. This region is full of amazing"
      }
      if(textState === 2){
        text1 = "Pokémon and mysteries waiting to beuncovered. But "
        text2 = "before you begin your journey, I need to know — what"
        text3 = "is your name?"
      }
       if (textState === 3 && !inputCreated) {
        
      chat = false;
      text1 = "";
      text2 = "";
      text3 = "";
      inp = createInput();
      inp.position(185, 350);
      button = createButton('Submit Name');
      button.position(355, 350);
      button.mousePressed(checkName);
      inputCreated = true;
      options = false
    }
    if(textState === 4){
        options = true
        text1 = "So you're "+playerName+"?";
        text2 = ""
        text3 = ""
        chat = true
      }
      if(textState === 5){
        options = false
        text1 = "Alright "+playerName+" your journey ";
        text2 = "begins now. Explore, grow strong, and uncover what"
        text3 = "makes Pokémon and people truly connect."
      }
      if(textState === 6){
        text1 = "Let the Adventures Begin!";
        text2 = ""
        text3 = ""
      }
    }
}

function spriteHandler(){



  if(gameState === 2&&playerLocation === "auburn_town"&&bgState === 7.25){
    move = false
    interact = false
    if(player.y>=180){
      player.velocityY = -2*mult
      moving = true
      player.changeAnimation("up_w")
    }
    if(player.y<=180){
      player.velocityY = 0
      moving = false
      player.changeAnimation("up_s")
    }
  }

  if(gameState === 0){
    player.visible = false;
    interact = false
    move = false
    moving = false
  }

  if(gameState===1){
    player.visible = false
    interact = false
    move = false
    moving = false
    
    
    if(transitionCounter===6){
    obj1.visible = true;
    obj1.addImage(thorneSprite)
    if(textState === 3){
      obj1.addImage(playerSpriteFront)
    }
    else{
      obj1.addImage(thorneSprite)
      obj1.scale = 1
    }
  }
  }

  if(gameState === 2){
    obj1.visible = false;
    if(transition === true){
      player.visible = true
    }
  }

}

function NPCS() {

  if (gameState === 2 && bgState === 1 && playerLocation === "auburn_town") {
    if(temp === 0){
  if (temp === 0 && !mom) {
    mom = new friendlyNPC(200, 285, "Mom", [
      "Mom:Oh, you're finally awake! Professor Thorne stopped|as possible. It sounded serious, so don’t keep him",
      "by earlier—he said he has something. important for|waiting!",
      "you. He wants you to meet him at his lab as soon|"
    ], false, momleftstand);
    npcArray.push(mom);

    mom.sprite.addAnimation("up_w", momupwalk);
    mom.sprite.addAnimation("down_w", momdownwalk);
    mom.sprite.addAnimation("left_w", momleftwalk);
    mom.sprite.addAnimation("right_w", momrightwalk);
    mom.sprite.addAnimation("up_s", momupstand);
    mom.sprite.addAnimation("down_s", momdownstand);
    mom.sprite.addAnimation("left_s", momleftstand);
    mom.sprite.addAnimation("right_s", momrightstand);
  }
  if (temp === 0 && mom && !mom.func && !mom.isTalking) {
    mom.sprite.velocityY = 2 * mult;
    mom.sprite.changeAnimation("down_w");
    if(mom.sprite.y>=300){
      mom.sprite.changeAnimation("right_w")
      mom.sprite.velocityY = 0
      mom.sprite.velocityX = 2*mult
    }

    if (mom.sprite.x >= 500) {
      mom.sprite.velocityX = 0;
      mom.sprite.changeAnimation("right_s");

      if (!mom.isTalking) {
        mom.startTalking();
        chat = true;
        move = false;
      }
    }
  }

  if (mom && mom.isTalking) {
    mom.talk();

    if (keyWentDown("space")) {
      if(mom.justStartedDialogue){
        mom.justStartedDialogue = false
      }
      else{
      mom.nextLine();
      }
      if (!mom.isTalking) {
        mom.func = true;
        chat = false;
        
      }
    }
  }

  if (mom && mom.func && temp === 0 && !mom.isTalking) {
    mom.sprite.velocityX = -2 * mult;
    mom.sprite.changeAnimation("left_w");

    if (mom.sprite.x <= 200) {
      mom.sprite.velocityX = 0;
      mom.sprite.velocityY = -2*mult;
      mom.sprite.changeAnimation("up_w");         
    }
    if(mom.sprite.y<=284&&mom.sprite.x <= 200){
        mom.sprite.velocityY = 0
        mom.sprite.changeAnimation("left_s");
        temp = 1;
      move = true;
      }
  }
}


  

}



 


  if(gameState === 2.5&&bgState === 1&&playerLocation === "auburn_town"&&!mom){
    mom = new friendlyNPC(200,285,"Mom",[
        `Mom: Hey, ${playerName} back already? So you got your|
        before heading out. Make sure to take care of yourself|
        there.|
        Oh! Almost forgot—here, take these. Your very own|
        You’ve got this. Go have some fun and stay safe!`,

        `first Pokémon, huh? Professor Thorne said you'd be|
         By the way, press the Enter key to open your menu. You|
           |
         Running Shoes! Now you can dash around faster by pressing.|
         I’ll be here if you need a break—or laundry done.`,

        `starting your journey today. I figured you’d swing by|
        can check your Bag, Pokémon, Pokédex, and Trainer ID|
          |
        the F key. Also take this your Trainer ID.|
          
        `],false,momdownstand)
        move = false;
        npcArray.push(mom);

        mom.sprite.addAnimation("up_w", momupwalk);
        mom.sprite.addAnimation("down_w", momdownwalk);
        mom.sprite.addAnimation("left_w", momleftwalk);
        mom.sprite.addAnimation("right_w", momrightwalk);
        mom.sprite.addAnimation("up_s", momupstand);
        mom.sprite.addAnimation("down_s", momdownstand);
        mom.sprite.addAnimation("left_s", momleftstand);
        mom.sprite.addAnimation("right_s", momrightstand);
    }
    if(gameState === 2.5&&bgState === 1&&playerLocation === "auburn_town"&&mom){    
          mom.sprite.changeAnimation("left_s")
          move = false
          player.changeAnimation("up_w",playerupwalk)
          player.velocityY = -2*mult;
          if(player.y<=345){
            player.velocityY = 0
            player.changeAnimation("left_w",playerleftwalk)
            player.velocityX = -2*mult
          
        }
        if(player.x<=200){
              player.velocityX = 0
              player.changeAnimation("up_s",playerupstand)
              mom.sprite.changeAnimation("down_s")
              if(!mom.isTalking){
                mom.startTalking();
                chat = true
              }
            }
      if (mom && mom.isTalking) {
    mom.talk();

    if (keyWentDown("space")) {
      mom.nextLine();

      if (!mom.isTalking) {
        mom.func = true;
        chat = false;
        move = true;
        runningShoes = true
        menuOpen = true
        mom.sprite.changeAnimation("left_s")
        gameState = 3
      }
    }
  }
  }

  if(bgState === 1&&playerLocation === "auburn_town"&&!mom&&gameState>=3){
     mom = new friendlyNPC(200,285,"Mom",[
        `Mom: Oh hey, honey! You look like you've had a long|
        out there, okay?`,

        `day. Let me heal your Pokémon real quick. Just give|`,

        `me a moment... There you go! All better now. Stay safe|          
        `],false,momleftstand)
        npcArray.push(mom);

        mom.sprite.addAnimation("up_w", momupwalk);
        mom.sprite.addAnimation("down_w", momdownwalk);
        mom.sprite.addAnimation("left_w", momleftwalk);
        mom.sprite.addAnimation("right_w", momrightwalk);
        mom.sprite.addAnimation("up_s", momupstand);
        mom.sprite.addAnimation("down_s", momdownstand);
        mom.sprite.addAnimation("left_s", momleftstand);
        mom.sprite.addAnimation("right_s", momrightstand);    
  }

   if(bgState === 1&&playerLocation === "auburn_town"&&mom&&gameState>=3){
      if(keyWentDown("space")&&!mom.isTalking&&mom.isTouching(player)){
        mom.startTalking()
        mom.func = true
        mom.justStartedDialogue = true
        mom.facePlayer(playerDirection)
      }
      if(mom.isTalking){
        mom.talk()
        if(keyWentDown("space")){
          if(mom.justStartedDialogue){
            mom.justStartedDialogue = false
          }
          else{
          mom.nextLine()
          }
          if(!mom.isTalking&&mom.func){
          mom.func = true
          pokemonHeal()
          move = true
        }
        }
      }
      

   }


    if(bgState === 7.25&&gameState === 2&&playerLocation === "auburn_town"&&!thorne){
      thorne = new friendlyNPC(104,120,"Professor Thorne",[
        `Professor Thorne: There you are, ${playerName}. Right|
        —now you’re setting out on your own. But this isn’t just|
        changes. I need someone I trust with eyes and ears out|
        migration patterns, vanishing habitats, interference. It|
        With this Pokédex, you’ll help document Pokémon across|
        Take your time in choosing the one that feels right.|
        Your friend Kai was here earlier. He picked his and|
        So then... which Pokemon you will choose? `,

        `on time, as always. I've prepared for this day for a|
        any journey. The Verdantia League requested this. They|
        there. There've been unsettling reports. Pokémon behaving|
        may be nothing—but it may be something big.|
        Verdantia. Observations, battles, bonds—all count.|
        Each is strong and will teach you something. This|
        couldn’t stop talking about staying ahead— he’s fiery,|
        
        `,

        `while now. You’ve grown up around Pokémon all your life|
        tasked me with researching how Pokémon here adapt to|
        strangely, changes in evolution. Climate shifts, new|
        |
        I wouldn’t send you alone. Here I have three partners.|
        journey will be an important chapter of your life|
        that one. Friendly rivalry is good fuel.|
        `]
    ,false,thornedownstand);
      npcArray.push(thorne)
      thorne.sprite.scale = 1.3
      thorne.sprite.addAnimation("up_w", thorneupwalk);
      thorne.sprite.addAnimation("down_w", thornedownwalk);
      thorne.sprite.addAnimation("left_w", thorneleftwalk);
      thorne.sprite.addAnimation("right_w", thornerightwalk);
      thorne.sprite.addAnimation("up_s", thorneupstand);
      thorne.sprite.addAnimation("down_s", thornedownstand);
      thorne.sprite.addAnimation("left_s", thorneleftstand);
      thorne.sprite.addAnimation("right_s", thornerightstand);
    }
    if(bgState === 7.25&&gameState === 2.5&&playerLocation === "auburn_town"&&!thorne){
      thorne = new friendlyNPC(104,120,"Professor Thorne",
        [
          `Professor Thorne: Alright, you're all set to begin|
          you off — and she might have something for you, too.|
          Once you’re ready, the world is yours to explore!`,

          `your journey. But before you head out, why don’t you|
          |`,

          `stop by your home? I’m sure your mom would want to see |
          |
          `
        ],false,thornedownstand)
      thorne.sprite.scale = 1.3
      npcArray.push(thorne)
    }
    if (thorne&&gameState === 2.5&&playerLocation === "auburn_town"&&bgState === 7.25) {
        
        if(thorne.isTouching(player)&&keyWentDown("space")&&!thorne.isTalking){
          thorne.startTalking()
          thorne.justStartedDialogue = true
          thorne.func = true
        }

       if (thorne.isTalking) {
        thorne.talk();
    if (keyWentDown("space")) {
      if(thorne.justStartedDialogue){
        thorne.justStartedDialogue = false
      }
      else{
      thorne.nextLine();
      }
      
    }
  }
  if(!thorne.isTalking&&thorne.func){
    thorne.func = true
    move = true
  }
}

  if(bgState === 7.25&&gameState >=3&&playerLocation === "auburn_town"&&!thorne){
      thorne = new friendlyNPC(104,120,"Professor Thorne",
        [
          `Professor Thorne: Back so soon? It's good to see|
           you. Every encounter, every battle, every capture...|
           Let your Pokemon grow alongside you. Trust me — the`,

          `you're doing well. Remember, the Pokédex isn’t just|
          it all teaches you something new. But don’t stress over|
          path you take is just as important as the goal.`,

          `a checklist — it’s a way to understand the world around|
          completing it too fast. Enjoy the journey. Meet people.|`
        ],false,thornedownstand)
      thorne.sprite.scale = 1.3
      npcArray.push(thorne)
    }
    if (thorne&&gameState >= 3&&playerLocation === "auburn_town"&&bgState === 7.25) {
        
        if(thorne.isTouching(player)&&keyWentDown("space")&&!thorne.isTalking){
          thorne.startTalking()
          thorne.justStartedDialogue = true
          thorne.func = true
        }

       if (thorne.isTalking) {
        thorne.talk();
    if (keyWentDown("space")) {
      if(thorne.justStartedDialogue){
        thorne.justStartedDialogue = false
      }
      else{
      thorne.nextLine();
      }
      
    }
  }
    if(!thorne.isTalking&&thorne.func){
      thorne.func = true
      move = true
    }
  }

  if(bgState === 7.25&&gameState >= 3&&playerLocation === "auburn_town"&&!thorne){
      thorne = new friendlyNPC(104,120,"Professor Thorne",
        ["Professor Thorne: dcidsnckkxznc","sda","ada"],false,thornedownstand)
      thorne.sprite.scale = 1.3
      npcArray.push(thorne)
    }
      if (thorne && gameState === 2 && playerLocation === "auburn_town") {
  if (player.velocityY === 0 && !thorne.isTalking && !thorne.func) {
    chat = true;
    thorne.startTalking();
  }

  if (thorne.isTalking) {
    thorne.talk();
    if (keyWentDown("space")) {
      thorne.nextLine();
      if (!thorne.isTalking&&noOfPartyPokemon === 0&&bgState === 7.25) {
        chat = false;
        options = true;
        thorne.func = true;
        move = false
      }
      if (!thorne.isTalking&&noOfPartyPokemon === 1&&bgState === 7.25) {
        chat = false;
        options = false;
        thorne.func = true;
        move = true
        gameState = 2.5
      }
    }
  }
}

  if(gameState === 3&&bgState === 5&&!npc1&&playerLocation === "auburn_town"&&!battle){
    const enemyPokemon1Moves = ["Tackle"]
        const enemyPokemon1 = new Pokemon("Lillipup",2,pokedex,moveDB,[],enemyPokemon1Moves
          ,1
        )
      npc1 = new enemyNPC(455,50,"Officer Jenny",[
        `Officer Jenny: Well well, you’ve got your starter now.|
        invincible, how about a quick lesson?|
        Let’s battle. Nothing too serious —I just want to see|
        Here's how to battle: Select FIGHT when it's your turn,`,
        
        `And I hear you’ve spoken with your mom. That’s good.|
        |
        how you handle your new partner!|
        then choose a move. Remember - moves that match your`,

        `Before you go running into tall grass thinking you’re|
        |
        |
        Pokémon's type will do more damage!`
      ],false,officerdownstand,false,[enemyPokemon1],500)
      npc1.sprite.scale = 1.1
      npcArray.push(npc1)
      npc1.sprite.addAnimation("up_s",officerupstand)
      npc1.sprite.addAnimation("up_w",officerupwalk)
      npc1.sprite.addAnimation("down_s",officerdownstand)
      npc1.sprite.addAnimation("down_w",officerdownwalk)
      npc1.sprite.addAnimation("left_s",officerleftstand)
      npc1.sprite.addAnimation("left_w",officerleftwalk)
      npc1.sprite.addAnimation("right_s",officerrightstand)
      npc1.sprite.addAnimation("right_w",officerrightwalk)
  }

  if(gameState === 3&&bgState === 5&&npc1&&playerLocation === "auburn_town"){
      npc1.sprite.addAnimation("up_s",officerupstand)
      npc1.sprite.addAnimation("up_w",officerupwalk)
      npc1.sprite.addAnimation("down_s",officerdownstand)
      npc1.sprite.addAnimation("down_w",officerdownwalk)
      npc1.sprite.addAnimation("left_s",officerleftstand)
      npc1.sprite.addAnimation("left_w",officerleftwalk)
      npc1.sprite.addAnimation("right_s",officerrightstand)
      npc1.sprite.addAnimation("right_w",officerrightwalk)


      if (npc1.isTouching(player) && keyWentDown("space") &&!chat&&!battle
      &&currentBattle === null) {
  chat = true;
  npc1.facePlayer(playerDirection);
  npc1.startTalking();
  npc1.justStartedDialogue = true; 
}

if (npc1.isTalking) {
  npc1.talk();
  
  if (keyWentDown("space")) {
    if (npc1.justStartedDialogue) {
      npc1.justStartedDialogue = false;
    } else {
      npc1.nextLine();

      if (!npc1.isTalking && bgState === 5 && playerLocation === "auburn_town"
        &&!npc1.battled&&gameState === 3&&!npcDB.auburn_town["bgState-5"].npc1Fought
      ) {
        chat = false;
        move = false;
        npc1.justStartedDialogue = false
        currentBattle = new Battle(party,npc1.team,npc1.name,"transition",
          'officer',npc1,"trainer");
      }
    }
  }
}

if (
  bgState === 5 &&
  playerLocation === "auburn_town" &&
  officers[0] === true &&
  !npc1.isTalking &&
  !npc1.readyToMove &&
  !npc1.func
) {
  npc1.dialogue = [
    `Officer Jenny: Not bad at all! You've got some spark.|
    headache. But remember — confidence is great,`,

    `That partner of yours? You two might make a solid team.|
    overconfidence isn’t. Now go on. There’s a whole world`,

    `Keep this up and you’ll be giving gym leaders a real|
     waiting for you. Here I'll heal your Pokemon for now.`
  ];
      npc1.sprite.addAnimation("up_s",officerupstand)
      npc1.sprite.addAnimation("up_w",officerupwalk)
      npc1.sprite.addAnimation("down_s",officerdownstand)
      npc1.sprite.addAnimation("down_w",officerdownwalk)
      npc1.sprite.addAnimation("left_s",officerleftstand)
      npc1.sprite.addAnimation("left_w",officerleftwalk)
      npc1.sprite.addAnimation("right_s",officerrightstand)
      npc1.sprite.addAnimation("right_w",officerrightwalk)
  
  npc1.func = true;
  npc1.startTalking();
}

if (bgState === 5 &&playerLocation === "auburn_town" 
  &&officers[0] === true &&npc1.func === true) {
  if (npc1.isTalking) {
    npc1.talk();

    if (keyWentDown("space")) {
      if (npc1.justStartedDialogue) {
        npc1.justStartedDialogue = false;
      } else {
        npc1.nextLine();
      }
    }
  }

  if (!npc1.isTalking && !npc1.readyToMove) {
    npc1.readyToMove = true;
    gameState = 3.05
   
  }
}

  if (npc1.readyToMove) {
    pokemonHeal()   
    move = false
    npc1.sprite.velocityX -= 1;
    npc1.sprite.changeAnimation("left_w")
  }
  
  if(gameState === 3.05){
  move = false
    npc1.sprite.velocityX -= 1;
    npc1.sprite.changeAnimation("left_w")
  }

}
  if(npc1&&gameState === 3.05){
    if (npc1.sprite.x <= 378) {
    npc1.sprite.velocityX = 0
    npc1.sprite.changeAnimation("right_s")
      npc1.readyToMove = false;
      gameState = 3.1
      move = true
      t7 = new transitionObject(452,1,108,10,1,288,460,"up","up","purple","auburn_town","route_1")
    }
  }

  


  if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&!kai
    &&!currentBattle
  ){
    teamMaker()
    kai = new enemyNPC(288,188,"Kai",[
      `Kai: Hey! There you are ${playerName}. Professor Thorne|
       you, so I figured I’d help out while I’m ahead. Let’s|
       understanding it makes a big difference in battle. Of|
       others, and a few don’t even work at all. You’ve got|
       Trainer School—they cover all the core stuff. Alright,|
       Get ready! This one wasn't easy to catch... but I think`,

      `asked me to make sure you’re solid on the basics before|
       start simple—Fire beats Grass, Grass beats Water, and|
       course, there are way more types out there—Electric,|
       to use matchups to your advantage if you want to win|
       enough talk—let’s see how you’re doing in a real|
       it’s going to be worth it.`,

      `heading too far. I started my journey a little before |
      Water beats Fire. It’s called a type triangle, and |
      Flying, Ground, and so on. Some types barely scratch |
      consistently. If you're ever confused, check out the|
      battle! I'll battle you with a Pokemon I just caught|`
    ],false,
      kaidownstand,false,enemyCreatedTeam,1000)
      kai.sprite.scale = 1.1 
          npcArray.push(kai)
      kai.sprite.addAnimation("up_s",kaiupstand)
      kai.sprite.addAnimation("down_s",kaidownstand)
      kai.sprite.addAnimation("left_s",kaileftstand)
      kai.sprite.addAnimation("right_s",kairightstand)

      kai.sprite.addAnimation("up_w",kaiupwalk)
      kai.sprite.addAnimation("down_w",kaidownwalk)
      kai.sprite.addAnimation("left_w",kaileftwalk)
      kai.sprite.addAnimation("right_w",kairightwalk)
      
  }
  if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&kai
    &&!kai.isTalking&&!currentBattle
  ){
      kai.sprite.changeAnimation("up_s")
      if(player.y>245){
      player.velocityY = -2*mult
      }
      else{
        player.velocityY = 0
      }
      player.changeAnimation("up_w")
      if(player.y <= 245){
        player.velocityY = 0
        player.changeAnimation("up_s")
        kai.sprite.changeAnimation("down_s")
        kai.startTalking()
      }

    }      

    if(gameState === 3.2&&playerLocation === "route_1"&&bgState === 1&&kai
    &&!kai.isTalking
  ){
      
      if(kai.sprite.y<=113){
        kai.sprite.velocityY = 0
        player.velocityY = 0
        kai.sprite.changeAnimation("up_w")
        player.changeAnimation("up_w")
        if(catchState!== "end"){
        
        catchingTutorial()    
        }
        if(catchState === " "){
        catchState = "intro"
        }
      }
    }    
    
    if(gameState === 3.2&&playerLocation === "route_1"&&bgState === 1&&kai&&!kai.isTalking){
      kai.talk();
      let kaiNewDialouge = [
        `And that’s how you catch a Pokémon! Pretty smooth, huh?|
        Pokémon takes practice. You want to get their hp low|
        these. Five Poké Balls. Think of it as a little head|
        other again soon. Next time we meet, I’ll teach you`,

        `Though... I probably should’ve weakened it a bit more|
        —lower than I did—so it’s easier to snag them without|
        start from someone who's been at it a bit longer. I’ve|
        something new—so keep training, alright? You’ve got real`,
   
        `first. That was cutting it close. Anyway, catching|
        wasting Poké Balls. Speaking of which, here—take|
        got to get going, but we’ll definitely run into each|
        potential. Just don’t fall too far behind!`
      ]
      
      kai.dialogue = kaiNewDialouge
      if (keyWentDown("space")) {
            kai.nextLine();
      }

    }  

     if(gameState === 3.3&&playerLocation === "route_1"&&bgState === 1&&kai&&kai.isTalking){
        kai.talk();
      let kaiNewDialouge = [
        `And that’s how you catch a Pokémon! Pretty smooth, huh?|
        Pokémon takes practice. You want to get their hp low|
        these. Five Poké Balls. Think of it as a little head|
        other again soon. Next time we meet, I’ll teach you`,

        `Though... I probably should’ve weakened it a bit more|
        —lower than I did—so it’s easier to snag them without|
        start from someone who's been at it a bit longer. I’ve|
        something new—so keep training, alright? You’ve got real`,
   
        `first. That was cutting it close. Anyway, catching|
        wasting Poké Balls. Speaking of which, here—take|
        got to get going, but we’ll definitely run into each|
        potential. Just don’t fall too far behind!`
      ]
      kai.dialogue = kaiNewDialouge
      if (keyWentDown("space")) {
            kai.nextLine();
      }
            if(!kai.isTalking){
        kai.sprite.changeAnimation("up_w")
        kai.sprite.velocityY = -2
      }
    }  

    if(gameState === 3.3&&playerLocation === "route_1"&&bgState === 1&&kai
      &&kai.sprite.y<-20){
        kai.sprite.remove()
        kai = null
        move = true
        
      }
    
    if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&kai&&kai.isTalking){
        kai.talk();
        if (keyWentDown("space")) {
            kai.nextLine();
            if(kai&&!kai.isTalking&&gameState === 3.1&&playerLocation === "route_1"&&bgState === 1&&
      kai.battled === false&&player.y <= 245){
        currentBattle = new Battle(party,kai.team,"Kai","transition","kai",kai,"trainer")
        chat = false
        let kaiNewDialouge = [
      `Kai: Aww man… my Zorua fainted already. Though to be|
       got some tricks, but clearly you’ve got some too. You|
       in there. Catching them isn’t just about tossing|
       Alright, I’ll show you how it’s done.`,

      `fair… it’s new to the team. Still, you’ve got real|
       handled that well. Anyway, if you’re heading through|
       Pokéballs— you’ve got to know how to wear them down|`,

      `potential. Guess I better watch out next time. Zorua’s|
       tall grass, keep your eyes open—wild Pokémon love hiding|
       first.|
       `
    ]
    kai.dialogue = kaiNewDialouge
        if(battle||!tempSprite.visible){
          kai.sprite.visible = false
        }
        else{
          kai.sprite.visible = true;
        }
    }
    if(!kai.isTalking&&kai.battled){
      player.changeAnimation("up_w")
      kai.sprite.changeAnimation("up_w")
      moving = true
      playerDirection = "up"
      gameState = 3.2
      kai.sprite.velocityY = -2
      player.velocityY = -2
      
    }
        }
        
      }
    
    
   if(bgState === 6.66&&playerLocation === "auburn_town"&&!npc1){
    npc1 = new friendlyNPC(397,225,"hello",[
      `Sometimes I hang out by the path north of town. You can`,

      `feel the breeze shift when Pokémon are nearby.`,
      
      ``
    ],true,backpackerleftstand)
    npc1.sprite.scale = 1.2
    npcArray.push(npc1)

    npc1.sprite.addAnimation("up_s",backpackerupstand)
    npc1.sprite.addAnimation("left_s",backpackerleftstand)
    npc1.sprite.addAnimation("right_s",backpackerrightstand)
    npc1.sprite.addAnimation("down_s",backpackerdownstand)
   }   

   if(bgState === 6.66&&playerLocation === "auburn_town"&&npc1){
    if(npc1.isTouching(player)&&!npc1.isTalking&&keyWentDown("space")
    &&!menuCreated&&menuPage === ""){
      npc1.facePlayer(playerDirection)
      npc1.startTalking()
      npc1.justStartedDialogue = true
      npc1.func = false
    }
     if (npc1 && npc1.isTalking) {
        npc1.talk();

        if (keyWentDown("space")) {
          if(npc1.justStartedDialogue){
            npc1.justStartedDialogue = false
          }
          else{
          npc1.nextLine();
          }
        }
     }
     if(!npc1.isTalking&&npc1.func){
      npc1.func = true
      move = true
     }
  }   
  
  if(bgState === 6.33&&playerLocation === "auburn_town"&&!npc1){
    npc1 = new friendlyNPC(195,280,"hello",[
      `When I get strong enough, I’m gonna challenge every`,

      `trainer who passes through Auburn!`,
      
      ``
    ],true,camper_maleleftstand)
    npc1.sprite.scale = 1
    npcArray.push(npc1)

    npc1.sprite.addAnimation("up_s",camper_maleupstand)
    npc1.sprite.addAnimation("left_s",camper_maleleftstand)
    npc1.sprite.addAnimation("right_s",camper_malerightstand)
    npc1.sprite.addAnimation("down_s",camper_maledownstand)
   }   

   if(bgState === 6.33&&playerLocation === "auburn_town"&&npc1){
    if(npc1.isTouching(player)&&!npc1.isTalking&&keyWentDown("space")
    &&!menuCreated&&menuPage === ""){
      npc1.facePlayer(playerDirection)
      npc1.startTalking()
      npc1.justStartedDialogue = true
      npc1.func = false
    }
     if (npc1 && npc1.isTalking) {
        npc1.talk();

        if (keyWentDown("space")) {
          if(npc1.justStartedDialogue){
            npc1.justStartedDialogue = false
          }
          else{
          npc1.nextLine();
          }
        }
     }
     if(!npc1.isTalking&&npc1.func){
      npc1.func = true
      move = true
     }
  }   

  if(bgState === 5.2&&playerLocation === "auburn_town"&&!npc1){
    npc1 = new friendlyNPC(195,280,"hello",[
      `Kai was so excited when he left on his journey... I`,

      `just hope he remembers to eat!`,
      
      ``
    ],true,ladyleftstand)
    npc1.sprite.scale = 1
    npcArray.push(npc1)

    npc1.sprite.addAnimation("up_s",ladyupstand)
    npc1.sprite.addAnimation("left_s",ladyleftstand)
    npc1.sprite.addAnimation("right_s",ladyrightstand)
    npc1.sprite.addAnimation("down_s",ladydownstand)
   }   

   if(bgState === 5.2&&playerLocation === "auburn_town"&&npc1){
    if(npc1.isTouching(player)&&!npc1.isTalking&&keyWentDown("space")
    &&!menuCreated&&menuPage === ""){
      npc1.facePlayer(playerDirection)
      npc1.startTalking()
      npc1.justStartedDialogue = true
      npc1.func = false
    }
     if (npc1 && npc1.isTalking) {
        npc1.talk();

        if (keyWentDown("space")) {
          if(npc1.justStartedDialogue){
            npc1.justStartedDialogue = false
          }
          else{
          npc1.nextLine();
          }
        }
     }
     if(!npc1.isTalking&&npc1.func){
      npc1.func = true
      move = true
     }
  }   

 if(bgState === 3.1&&playerLocation === "auburn_town"&&!npc1){
    npc1 = new friendlyNPC(281,225,"hello",[
      `Plenty of wild Pokémon show up near the north exit —`,

      `you gotta stay ready..`,
      
      ``
    ],true,hikerrightstand)
    npc1.sprite.scale = 1.2
    npcArray.push(npc1)

    npc1.sprite.addAnimation("up_s",hikerupstand)
    npc1.sprite.addAnimation("left_s",hikerleftstand)
    npc1.sprite.addAnimation("right_s",hikerrightstand)
    npc1.sprite.addAnimation("down_s",hikerdownstand)
   }   

   if(bgState === 3.1&&playerLocation === "auburn_town"&&npc1){
    if(npc1.isTouching(player)&&!npc1.isTalking&&keyWentDown("space")
    &&!menuCreated&&menuPage === ""){
      npc1.facePlayer(playerDirection)
      npc1.startTalking()
      npc1.justStartedDialogue = true
      npc1.func = false
    }
     if (npc1 && npc1.isTalking) {
        npc1.talk();

        if (keyWentDown("space")) {
          if(npc1.justStartedDialogue){
            npc1.justStartedDialogue = false
          }
          else{
          npc1.nextLine();
          }
        }
     }
     if(!npc1.isTalking&&npc1.func){
      npc1.func = true
      move = true
     }
  }   

  if(bgState === 4.1&&playerLocation === "auburn_town"&&!npc1){
    npc1 = new friendlyNPC(281,253,"hello",[
      `Some Pokémon seem drawn to the flowers here — maybe`,

      `they like the calm as much as I do.`,
      
      ``
    ],true,aroma_ladyrightstand)
    npc1.sprite.scale = 1.1
    npcArray.push(npc1)

    npc1.sprite.addAnimation("up_s",aroma_ladyupstand)
    npc1.sprite.addAnimation("left_s",aroma_ladyleftstand)
    npc1.sprite.addAnimation("right_s",aroma_ladyrightstand)
    npc1.sprite.addAnimation("down_s",aroma_ladydownstand)
   }   

   if(bgState === 4.1&&playerLocation === "auburn_town"&&npc1){
    if(npc1.isTouching(player)&&!npc1.isTalking&&keyWentDown("space")
    &&!menuCreated&&menuPage === ""){
      npc1.facePlayer(playerDirection)
      npc1.startTalking()
      npc1.justStartedDialogue = true
      npc1.func = false
    }
     if (npc1 && npc1.isTalking) {
        npc1.talk();

        if (keyWentDown("space")) {
          if(npc1.justStartedDialogue){
            npc1.justStartedDialogue = false
          }
          else{
          npc1.nextLine();
          }
        }
     }
     if(!npc1.isTalking&&npc1.func){
      npc1.func = true
      move = true
     }
  }   

  if(bgState === 1.5&&playerLocation === "auburn_town"&&!npc1){
    npc1 = new friendlyNPC(397,253,"hello",[
      `These young trainers rushing north... it warms my heart`,

      `to see new journeys begin.`,
      
      ``
    ],true,madameleftstand)
    npc1.sprite.scale = 1.2
    npcArray.push(npc1)

    npc1.sprite.addAnimation("up_s",madameupstand)
    npc1.sprite.addAnimation("left_s",madameleftstand)
    npc1.sprite.addAnimation("right_s",madamerightstand)
    npc1.sprite.addAnimation("down_s",madamedownstand)
   }   

   if(bgState === 1.5&&playerLocation === "auburn_town"&&npc1){
    if(npc1.isTouching(player)&&!npc1.isTalking&&keyWentDown("space")
       &&!menuCreated&&menuPage === ""){
      npc1.facePlayer(playerDirection)
      npc1.startTalking()
      npc1.justStartedDialogue = true
      npc1.func = false
    }
     if (npc1 && npc1.isTalking) {
        npc1.talk();

        if (keyWentDown("space")) {
          if(npc1.justStartedDialogue){
            npc1.justStartedDialogue = false
          }
          else{
          npc1.nextLine();
          }
        }
     }
     if(!npc1.isTalking&&npc1.func){
      npc1.func = true
      move = true
     }
  }  

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 1&&!npc2){

      teamMaker()
      
      npc2 = new enemyNPC(226,165,"Camper Ben",[
        "Hey, wait up! I just caught some new Pokémon and I have",
        "to try them out! Let’s see who’s got the cooler team!",
        ""],false,camper_malerightstand,
      false,enemyCreatedTeam,250)
      npc2.sprite.addAnimation("up_s",camper_maleupstand)
      npc2.sprite.addAnimation("down_s",camper_maledownstand)
      npc2.sprite.addAnimation("left_s",camper_maleleftstand)
      npc2.sprite.addAnimation("right_s",camper_malerightstand)
      npc2.sprite.scale = 1.1
      npcArray.push(npc2)

      if(npcDB.twin_lake_path["bgState-1"].npc1Fought){
        npc2.dialogue = ["Whoa! Okay, your team is cooler… for now! Guess I’ve",
          "still got a lot to learn. Time to train even harder!",""
        ]
      }

  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 1){
    if(keyWentDown("space")&&npc2.isTouching(player)&&npc2.isTalking === false
       &&currentBattle === null&&!menuCreated&&menuPage === ""){
      npc2.justStartedDialogue = true
      npc2.startTalking()
      npc2.facePlayer(playerDirection)
      npc2.coolDown = 15
    }

    if(npc2.isTalking){
      npc2.talk()
      if(keyWentDown("space")){
        if(npc2.justStartedDialogue){
          npc2.justStartedDialogue = false
        }
        else{
          chat = false
          npc2.nextLine()
          if(npcDB.twin_lake_path['bgState-1'].npc1Fought === false){
          currentBattle = new Battle(party,npc2.team,npc2.name,"transition",
            "camper_male",npc2,"trainer")
          npcDB.twin_lake_path['bgState-1'].npc1Fought = true
          }
        }
      }
    }
  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 5&&!npc2){

      teamMaker()
      
      npc2 = new enemyNPC(256,155,"Bug Catcher Theo",[
        "You won’t believe how awesome Bug Pokémon are!",
        "Check this out!",
        ""],false,bug_catcherdownstand,
      false,enemyCreatedTeam,150)
      npc2.sprite.addAnimation("up_s",bug_catcherupstand)
      npc2.sprite.addAnimation("down_s",bug_catcherdownstand)
      npc2.sprite.addAnimation("left_s",bug_catcherleftstand)
      npc2.sprite.addAnimation("right_s",bug_catcherrightstand)
      npc2.sprite.scale = 0.6
      npcArray.push(npc2)

      if(npcDB.twin_lake_path["bgState-5"].npc1Fought){
        npc2.dialogue = ["Aw man… they still need to molt a bit more.",
          "Someday, they’ll evolve and win for sure!",""
        ]
      }

  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 5){

    if(keyWentDown("space")&&npc2.isTouching(player)&&npc2.isTalking === false
       &&currentBattle === null&&!menuCreated&&menuPage === ""){
      npc2.justStartedDialogue = true
      npc2.startTalking()
      npc2.facePlayer(playerDirection)
      npc2.coolDown = 15
    }

    if(npc2.isTalking){
      npc2.talk()
      if(keyWentDown("space")){
        if(npc2.justStartedDialogue){
          npc2.justStartedDialogue = false
        }
        else{
          chat = false
          npc2.nextLine()
          if(npcDB.twin_lake_path['bgState-5'].npc1Fought === false){
          currentBattle = new Battle(party,npc2.team,npc2.name,"transition",
            "bug_catcher",npc2,"trainer")
          npcDB.twin_lake_path['bgState-5'].npc1Fought = true
          }
        }
      }
    }
    
    
  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 9&&!npc3){

      teamMaker()
      
      npc3 = new enemyNPC(466,358,"Youngster Rayan",[
        "I’ve got the fastest, coolest Pokémon on Route 1! You ",
        "won’t stand a chance!",
        ""],false,youngsterdownstand,
      false,enemyCreatedTeam,150)
      npc3.sprite.addAnimation("up_s",youngsterupstand)
      npc3.sprite.addAnimation("down_s",youngsterdownstand)
      npc3.sprite.addAnimation("left_s",youngsterleftstand)
      npc3.sprite.addAnimation("right_s",youngsterrightstand)
      npc3.sprite.scale = 0.55
      npcArray.push(npc3)

      if(npcDB.twin_lake_path["bgState-9"].npc1Fought){
        npc3.dialogue = ["Wha—no way! Zigzagoon, we need more practice… but we’re",
          "still cool!",""
        ]
      }

  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 9){

    if(keyWentDown("space")&&npc3.isTouching(player)&&npc3.isTalking === false
       &&currentBattle === null&&!menuCreated&&menuPage === ""){
      npc3.justStartedDialogue = true
      npc3.startTalking()
      npc3.facePlayer(playerDirection)
    }

    if(npc3.isTalking){
      npc3.talk()
      if(keyWentDown("space")){
        if(npc3.justStartedDialogue){
          npc3.justStartedDialogue = false
        }
        else{
          chat = false
          npc3.nextLine()
          if(npcDB.twin_lake_path['bgState-9'].npc1Fought === false){
          currentBattle = new Battle(party,npc3.team,npc3.name,"transition",
            "youngster",npc3,"trainer")
          npcDB.twin_lake_path['bgState-9'].npc1Fought = true
          }
        }
      }
    }
    
    
  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 8&&!npc2){

      teamMaker()
      
      npc2 = new enemyNPC(254,254,"Swimmer Mira",[
        "I’ve been training my Shellos to be as graceful in",
        "battle as I am in water! Let’s see if you can keep up!",
        ""],false,swimmer_femaledownstand,
      false,enemyCreatedTeam,200)
      npc2.sprite.addAnimation("up_s",swimmer_femaleupstand)
      npc2.sprite.addAnimation("down_s",swimmer_femaledownstand)
      npc2.sprite.addAnimation("left_s",swimmer_femaleleftstand)
      npc2.sprite.addAnimation("right_s",swimmer_femalerightstand)
      npc2.sprite.scale = 1
      npcArray.push(npc2)

      if(npcDB.twin_lake_path["bgState-8"].npc1Fought){
        npc2.dialogue = ["Whew! I thought I had the current on my side… Looks ",
          "like it’s time for Shellos and me to dive back into","training."
        ]
      }

  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 8){

    if(keyWentDown("space")&&npc2.isTouching(player)&&npc2.isTalking === false
       &&currentBattle === null&&!menuCreated&&menuPage === ""){
      npc2.justStartedDialogue = true
      npc2.startTalking()
      npc2.facePlayer(playerDirection)
    }

    if(npc2.isTalking){
      npc2.talk()
      if(keyWentDown("space")){
        if(npc2.justStartedDialogue){
          npc2.justStartedDialogue = false
        }
        else{
          chat = false
          npc2.nextLine()
          if(npcDB.twin_lake_path['bgState-8'].npc1Fought === false){
          currentBattle = new Battle(party,npc2.team,npc2.name,"transition",
            "swimmer_female",npc2,"trainer")
          npcDB.twin_lake_path['bgState-8'].npc1Fought = true
          }
        }
      }
    }
    
    
  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 6&&!npc2){

      teamMaker()
      
      npc2 = new enemyNPC(208,160,"Fisher Darrel",[
        "A calm lake and a good rod — that’s all you really need.",
        "Let’s see if your team can match my old-fashioned style!",
        ""],false,fisherleftstand,
      false,enemyCreatedTeam,400)
      npc2.sprite.addAnimation("up_s",fisherupstand)
      npc2.sprite.addAnimation("down_s",fisherdownstand)
      npc2.sprite.addAnimation("left_s",fisherleftstand)
      npc2.sprite.addAnimation("right_s",fisherrightstand)
      npc2.sprite.scale = 0.6
      npcArray.push(npc2)

      if(npcDB.twin_lake_path["bgState-6"].npc1Fought){
        npc2.dialogue = ["Well, guess the old ways don’t always win. Still…",
          "nothin’ beats fishin’ at sunrise.",
          ""
        ]
      }

  }

  if(playerLocation === "twin_lake_path"&&gameState>=3.3&&bgState === 6){

    if(keyWentDown("space")&&npc2.isTouching(player)&&npc2.isTalking === false
       &&currentBattle === null&&!menuCreated&&menuPage === ""){
      npc2.justStartedDialogue = true
      npc2.startTalking()
      npc2.facePlayer(playerDirection)
    }

    if(npc2.isTalking){
      npc2.talk()
      if(keyWentDown("space")){
        if(npc2.justStartedDialogue){
          npc2.justStartedDialogue = false
        }
        else{
          chat = false
          npc2.nextLine()
          if(npcDB.twin_lake_path['bgState-6'].npc1Fought === false){
          currentBattle = new Battle(party,npc2.team,npc2.name,"transition",
            "fisher",npc2,"trainer")
          npcDB.twin_lake_path['bgState-6'].npc1Fought = true
          }
        }
      }
    }
    
    
  }


    
}

function NPCRemover(){

  if(playerLocation === "auburn_town"){
    if(npc1){
    if(bgState !== 1.5&&bgState !== 3.1&&bgState !== 4.1&&
       bgState !== 5.2&&bgState !== 6.33&&bgState !== 6.66&&
       bgState !== 5){
        npc1.sprite.remove()
        npc1 = null
      }
    if(currentBattle !== null){
      npc1.sprite.remove()
      npc1 = null
    }
    }
  }
  if(playerLocation === "twin_lake_path"){
    if(npc2){
    if(bgState !== 1&&bgState !== 5&&bgState !== 6&&bgState !== 8&&tc){
        npc2.sprite.remove()
        npc2 = null
      }
    if(currentBattle !== null){
      npc2.sprite.remove()
      npc2 = null
    }
    }
    if(npc3){
    if(bgState !== 9){
        npc3.sprite.remove()
        npc3 = null
      }
    if(currentBattle !== null){
      npc3.sprite.remove()
      npc3 = null
    }
    }
  }

}

function transitionHandler(){
  if(playerLocation === "auburn_town"){
    if(bgState === 0&&tc === false){
      t1 = new transitionObject(75,270,10,50,1,550,300,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 1&&tc === false){
      t1 = new transitionObject(550,300,10,50,0,90,260,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(407,450,64,30,2,308,320,"down","down","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 2&&tc === false){
      t1 = new transitionObject(315,315,50,10,1,405,440,"up","up","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(85,60,40,10,1.5,152,397,"up","up","blue","auburn_town","auburn_town")
      t3 = new transitionObject(0,326,10,140,3,620,()=>player.y,"left","left","green","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 3&&tc === false){
      t1 = new transitionObject(637,302,10,70,2,20,()=>player.y,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(0,285,10,234,4,620,()=>player.y,"left","left","blue","auburn_town","auburn_town")
      t3 = new transitionObject(53,0,76,10,5,()=>player.x,460,"up","up","green","auburn_town","auburn_town")
      t4 = new transitionObject(245,0,70,10,5,()=>player.x,460,"up","up","yellow","auburn_town","auburn_town")
      t5 = new transitionObject(456,0,186,10,5,()=>player.x,460,"up","up","pink","auburn_town","auburn_town")
      t6 = new transitionObject(471,254,42,10,3.1,152,397,"up","up","orange","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 4&&tc === false){
      t1 = new transitionObject(637,270,10,235,3,20,()=>player.y,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(471,220,42,10,4.1,152,397,"up","up","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 5&&tc === false){
      t1 = new transitionObject(52,474,76,10,3,()=>player.x,20,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(262,474,106,10,3,()=>player.x,20,"down","down","blue","auburn_town","auburn_town")
      t3 = new transitionObject(456,474,186,10,3,()=>player.x,20,"down","down","green","auburn_town","auburn_town")
      t4 = new transitionObject(640,60,10,100,6,20,()=>player.y,"right","right","yellow","auburn_town","auburn_town")
      t5 = new transitionObject(640,305,10,84,6,20,()=>player.y,"right","right","pink","auburn_town","auburn_town")
      t6 = new transitionObject(0,395,10,130,7,620,()=>player.y,"left","left","orange","auburn_town","auburn_town")
      if(gameState >= 3.1){
         t7 = new transitionObject(452,1,108,10,1,288,460,"up","up","purple","auburn_town","route_1")
      }
      t8   = new transitionObject(246,412,40,10,5.2,405,440,"up","up","white","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 6&&tc === false){
      t1 = new transitionObject(0,305,10,84,5,620,()=>player.y,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(20,250,50,10,6.66,152,397,"up","up","blue","auburn_town","auburn_town")
      t3 = new transitionObject(340,220,50,10,6.33,405,440,"up","up","green","auburn_town","auburn_town")
      t4 = new transitionObject(0,53,10,56,5,620,()=>player.y,"left","left","yellow","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 7&&tc === false){
      t1 = new transitionObject(640,395,10,150,5,20,()=>player.y,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(470,320,30,10,7.25,104,400,"up","up","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 7.25&&tc === false){
      t1 = new transitionObject(103,430,46,20,7,470,340,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 6.66&&tc === false){
      t1 = new transitionObject(154,440,58,10,6,20,260,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 3.1&&tc === false){
      t1 = new transitionObject(154,440,58,10,3,465,260,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 4.1&&tc === false){
      t1 = new transitionObject(154,440,58,10,4,465,230,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 1.5&&tc === false){
      t1 = new transitionObject(154,440,58,10,2,81,72,"down","down","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 5.25&&tc === false){
      t1 = new transitionObject(75,270,10,50,5.2,550,300,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 5.2&&tc === false){
      t1 = new transitionObject(550,300,10,50,5.25,90,260,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(407,450,64,30,5,242,432,"down","down","blue","auburn_town","auburn_town")
      tc = true
    }
    if(bgState === 6.4&&tc === false){
      t1 = new transitionObject(75,270,10,50,6.33,550,300,"left","left","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      tc = true
    }
    if(bgState === 6.33&&tc === false){
      t1 = new transitionObject(550,300,10,50,6.4,90,260,"right","right","red","auburn_town","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(407,450,64,30,6,337,224,"down","down","blue","auburn_town","auburn_town")
      tc = true
    }

  }
  if(playerLocation === "route_1"){
    if(bgState === 1&&tc === false){
      t1 = new transitionObject(288,480,184,10,5,456,28,"down","down","red","route_1","auburn_town")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(257,0,254,10,2,()=>player.x,460,"up","up","blue","route_1","route_1")
      tc = true
    }
    if(bgState === 2&&tc === false){
      t1 = new transitionObject(257,480,254,10,1,()=>player.x,10,"down","down","red","route_1","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(347.5,0,325,10,3,()=>player.x,460,"up","up","blue","route_1","route_1")
      tc = true
    }
    if(bgState === 3&&tc === false){
      t1 = new transitionObject(347.5,480,325,10,2,()=>player.x,10,"down","down","red","route_1","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(350,0,322,10,4,()=>player.x,412,"up","up","blue","route_1","route_1")
      tc = true
    }
    if(bgState === 4&&tc === false){
      t1 = new transitionObject(350,480,312,10,3,()=>player.x,50,"down","down","red","route_1","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(349,0,190,10,0,230,440,"up","up","blue","route_1","twin_lake_path")
      tc = true
    }
  }

  if(playerLocation === "twin_lake_path"){
    if(bgState === 0&&tc === false){
      t1 = new transitionObject(233,480,155,10,4,354,30,"down","down","red","twin_lake_path","route_1")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(0,125,10,250,1,610,()=>player.y,"left","left","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(25,0,50,10,3,610,450,"up","up","green","twin_lake_path","twin_lake_path")
      t4 = new transitionObject(640,152,10,64,2,30,()=>player.y,"right","right","yellow","twin_lake_path","twin_lake_path")
      t5 = new transitionObject(474,0,120,10,4,()=>player.x,450,"up","up","pink","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 1&&tc === false){
      t1 = new transitionObject(640,125,10,250,0,30,()=>player.y,"right","right","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(425,0,430,10,3,()=>player.x,450,"up","up","blue","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 2&&tc === false){
      t1 = new transitionObject(350,0,292,10,5,()=>player.x,450,"up","up","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(0,152,10,64,0,610,()=>player.y,"left","left","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(100,0,70,10,5,()=>player.x,450,"up","up","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 3&&tc === false){
      t1 = new transitionObject(425,480,430,10,1,()=>player.x,30,"down","down","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(640,410,10,130,4,30,()=>player.y,"right","right","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(390,0,380,10,7,()=>player.x,450,"up","up","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 4&&tc === false){
      t1 = new transitionObject(0,410,10,130,3,610,()=>player.y,"left","left","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(445,0,390,10,6,()=>player.x,450,"up","up","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(474,480,120,10,0,()=>player.x,30,"down","down","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 5&&tc === false){
      t1 = new transitionObject(350,480,292,10,2,()=>player.x,30,"down","down","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(460,0,90,10,8,()=>player.x,450,"up","up","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(100,480,70,10,2,()=>player.x,30,"down","down","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 6&&tc === false){
      t1 = new transitionObject(445,480,390,10,4,()=>player.x,30,"down","down","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(370,0,540,10,9,()=>player.x,450,"up","up","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(640,418,10,125,8,30,()=>player.y,"right","right","green","twin_lake_path","twin_lake_path")
      t4 = new transitionObject(0,420,10,54,7,610,()=>player.y,"left","left","yellow","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 7&&tc === false){
      t1 = new transitionObject(390,480,380,10,3,()=>player.x,30,"down","down","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(367,0,426,10,10,()=>player.x,450,"up","up","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(640,420,10,54,6,30,()=>player.y,"right","right","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 8&&tc === false){
      t1 = new transitionObject(460,480,90,10,5,()=>player.x,30,"down","down","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(0,418,10,125,6,610,()=>player.y,"left","left","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(458,0,64,10,11,()=>player.x,450,"up","up","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 9&&tc === false){
      t1 = new transitionObject(370,480,540,10,6,()=>player.x,30,"down","down","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(640,255,10,190,11,20,()=>player.y,"right","right","blue","twin_lake_path","twin_lake_path")
      t3 = new transitionObject(0,140,10,280,10,620,()=>player.y,"left","left","green","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 10&&tc === false){
      t1 = new transitionObject(640,140,10,280,9,30,()=>player.y,"right","right","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(367,480,426,10,7,()=>player.x,12,"down","down","blue","twin_lake_path","twin_lake_path")
      tc = true
    }
    if(bgState === 11&&tc === false){
      t1 = new transitionObject(0,255,10,190,9,610,()=>player.y,"left","left","red","twin_lake_path","twin_lake_path")
      t2 = null
      t3 = null
      t4 = null
      t5 = null
      t6 = null
      t7 = null
      t8 = null
      t2 = new transitionObject(367,480,426,10,8,()=>player.x,12,"down","down","blue","twin_lake_path","twin_lake_path")
      tc = true
    }
    
    //transiti
  }
}

function calculateTypeEffectiveness(defenderTypes, moveType) {
  multiplier = 1
  for(let defType of defenderTypes){
  const data = typeChart[defType]
  if(!data){
    throw new Error(`Not found`);
  }

  if(data.immuneTo.includes(moveType)){
    multiplier *= 0
  }
  else if(data.weakTo.includes(moveType)){
    multiplier *= 2
  }
  else if(data.resists.includes(moveType)){
    multiplier *= 0.5
  }

  }
  return multiplier;
}

let transitionFunctionBoolean = null;
let tempSprite, tCharge;

function transitionFunction(transitionState) {
  if (transitionFunctionBoolean) {
    // Only create the sprites once
    if (tempSprite.visible === false) {
      tCharge = createSprite(0, 0, 10, 10);
      tCharge.visible = false;
      tCharge.velocityY = 50;
    }

    tCharge.y += tCharge.velocityY;

    if (tCharge.y > 3000) {
      if(transitionState.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${transitionState.playerCurrentPokemonObject.status}.png`)
      }
      if(transitionState.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${transitionState.enemyCurrentPokemonObject.status}.png`)
      }
      transitionState.state = "intro";
      if(transitionState.type === "trainer"){
        trainerImg = loadImage("sprites/"+transitionState.transitionState+".png")
      }
      else{
        trainerImg = loadImage("front/"+transitionState.enemyCurrentPokemon.toLowerCase()+".png")
      }
      transitionFunctionBoolean = false; // Stop transition
      tempSprite.visible = false
      battle = true
    }

    tempSprite.visible = (transitionState.state === 'transition');
  }

}




function introDialouge(h1){
//works
if(h1.type === "trainer"){
trainerImg = loadImage("sprites/"+h1.trainerClass+".png")
}
else{
  trainerImg = loadImage("front/"+h1.enemyTeam[0].name.toLowerCase()+".png")
}
playerBack = loadImage("playerBack.png")
  if(battleChat === true&&!trainerSprite&&!playerSprite){
  
  trainerSprite = createSprite(485,104)
  trainerSprite.addImage(trainerImg)
  if(h1.type === "trainer"){
  trainerSprite.scale = 1.2
  trainerSprite.x = 485
  trainerSprite.y = 104
  }
  else{
    trainerSprite.scale = 1
    trainerSprite.x = 495
  trainerSprite.y = 130
  }

  playerSprite = createSprite(154,208)
  
  playerSprite.addImage(playerBack)
  playerSprite.scale = 1.55

  battle = true
 

  
  }
  
  drawSprites()


}

function drawIntroUI(battle) {
  //works
  battlingChat = true
  if(battle.type === "trainer"){
  battleText1 = `${battle.enemyName} would like to battle!`
  }
  else{
    battleText1 = `A wild ${battle.enemyCurrentPokemon} appeared!`
  }
  battleText2 = ``
  battleText3 = ``
 
  if(keyDown("space")){
    battle.state = 'send'
    if(battle.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${battle.playerCurrentPokemonObject.status}.png`)
    }
    if(battle.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${battle.enemyCurrentPokemonObject.status}.png`)
    }
  }
  

}


let pokemonSent = false, playerPokemon, enemyPokemon;



function sendPokemon(trainerPokemon) {
  if (!pokemonSent) {
    enemyPokemonFront = loadImage("front/" + trainerPokemon.enemyCurrentPokemon.toLowerCase() + ".png");
    playerPokemonBack = loadImage("back/" + trainerPokemon.playerCurrentPokemon.toLowerCase() + ".png");
    pokemonSent = true;
  }

  if (pokemonSent) {
    playerPokemon.addImage(playerPokemonBack);
    playerPokemon.visible = true;
    enemyPokemon.addImage(enemyPokemonFront);
    enemyPokemon.visible = true;

    trainerSprite.visible = false
    playerSprite.visible = false

  }

  fill('#70C1B3');
  strokeWeight(1);
  stroke(51);
  rect(15, 335, 610, 130);

  fill('white');
  strokeWeight(1);
  stroke(51);
  rect(30, 345, 280, 110);

  textSize(20);
  textFont('Courier New');
  fill("black");
  noStroke();

}


function fightMenu(h1){

    fill('#70C1B3');
  strokeWeight(1);
  stroke(51);
  rect(15, 335, 610, 130);

  fill('white');
  strokeWeight(1);
  stroke(51);
  rect(25, 345, 590, 110);

        if(h1.moveIndex === 0){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(32.5, 352.5, 285, 45);
          if(keyWentDown("right")){
            h1.moveIndex = 1
          }
          if(keyWentDown("down")){
            h1.moveIndex = 2
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
        if(h1.moveIndex === 1){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(322.5, 352.5, 285, 45);
          if(keyWentDown("left")){
            h1.moveIndex = 0
          }
          if(keyWentDown("down")){
            h1.moveIndex = 3
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
        if(h1.moveIndex === 2){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(32.5, 402.5, 285, 45);
          if(keyWentDown("right")){
            h1.moveIndex = 3
          }
          if(keyWentDown("up")){
            h1.moveIndex = 0
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
        if(h1.moveIndex === 3){
         fill('red');
        strokeWeight(1);
        stroke(51);
        rect(322.5, 402.5, 285, 45);
          if(keyWentDown("left")){
            h1.moveIndex = 2
          }
          if(keyWentDown("up")){
            h1.moveIndex = 1
          }
          if(keyWentDown("space")){
            playerHasChosen = true
            h1.state = 'enemyAI'
            return h1.moveIndex
          }
        }
    
    fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(35, 355, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[0]}`,40,382.5)
  
  fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(325, 355, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[1]}`,330,382.5)
  
  fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(35, 405, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[2]}`,40,432.5)
  
  fill('lightgrey');
  strokeWeight(2);
  stroke(51);
  rect(325, 405, 280, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`${h1.playerCurrentPokemon.moves[3]}`,330,432.5)
     
  }

function enemyAI(h1){
  let noOfMoves = h1.enemyCurrentPokemonObject.moves.length;
  let movePoints = [0,0,0,0];
  
  for(let i = 0;i<noOfMoves;i++){
    let currentMoveMultiplier = 1
    let currentMove
    if(h1.type === "wild"){
      currentMove = h1.enemyCurrentPokemonObject.moves[i];
    }
    else{
      currentMove = moveDB[h1.enemyCurrentPokemonObject.moves[i]];
    }
    if(currentMove.type === h1.enemyCurrentPokemonObject.types[0]||
      currentMove.type === h1.enemyCurrentPokemonObject.types[1]){
        movePoints[i]++;
    }
    if(currentMove.category === "Status"){
      movePoints[i]-=2
    }

    currentMoveMultiplier= calculateTypeEffectiveness(h1.playerCurrentPokemonObject.types,
    currentMove.type)

  

    if(currentMoveMultiplier === 0.25){
      movePoints[i]-=4
    }
    if(currentMoveMultiplier === 0.5){
      movePoints[i]-=2
    }
    if(currentMoveMultiplier === 2){
      movePoints[i]+=2
    }
    if(currentMoveMultiplier === 4){
      movePoints[i]+=4
    }
    if(currentMoveMultiplier === 0){
      movePoints[i]-=10
    }
  }
  let enemyMoveIndex = 0
  for(let i = 0;i<noOfMoves;i++){
      if(movePoints[enemyMoveIndex]<movePoints[i]){
          enemyMoveIndex = i
      }
      if(movePoints[enemyMoveIndex] === movePoints[i]){
        if(h1.enemyCurrentPokemonObject.moves[i].power>
        h1.enemyCurrentPokemonObject.moves[enemyMoveIndex].power){
        enemyMoveIndex = i
      }
      else if(h1.enemyCurrentPokemonObject.moves[i].power<
        h1.enemyCurrentPokemonObject.moves[enemyMoveIndex].power){
          enemyMoveIndex = enemyMoveIndex
        }
      
      else{
        enemyMoveIndex = (h1.enemyCurrentPokemonObject.moves[i].accuracy>
        h1.enemyCurrentPokemonObject.moves[enemyMoveIndex].accuracy)?i:enemyMoveIndex
      }
    }
  }
  h1.enemyIndex = enemyMoveIndex;
  h1.turnFinder()
  if(h1.type === "trainer"){
    h1.currentMove = moveDB[h1.enemyCurrentPokemonObject.moves[h1.enemyIndex]]
  }
  else{
    h1.currentMove = h1.enemyCurrentPokemonObject.moves[h1.enemyIndex]
  }
    h1.eCurrentMove = h1.currentMove.name
  if(h1.enemyPokemonLeft>0){
  h1.state = "battling";
  if(playerStatusImage === ""&&h1.playerCurrentPokemonObject.status !== null){
      playerStatusImage = loadImage(`status/${h1.playerCurrentPokemonObject.status}.png`)
    }
    if(enemyStatusImage === ""&&h1.enemyCurrentPokemonObject.status !== null){
      enemyStatusImage = loadImage(`status/${h1.enemyCurrentPokemonObject.status}.png`)
    }
  }
  if(h1.turnStart === "player"){
    if(h1.playerCurrentPokemonObject.status === "PAR"||
      h1.playerCurrentPokemonObject.status === "SLP"){
      if(h1.playerCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          h1.playerCurrentPokemonObject.paralysed = true
        }
        else{
          h1.playerCurrentPokemonObject.paralysed = false
        }
      }
      else{
        h1.playerCurrentPokemonObject.paralysed = true
      }
    }
    else{
      h1.playerCurrentPokemonObject.paralysed = false
    }
    if(h1.playerCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        h1.playerCurrentPokemonObject.hitsItself = true
      }
      else{
        h1.playerCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      h1.playerCurrentPokemonObject.hitsItself = false
    }
    if(!h1.playerCurrentPokemonObject.paralysed&&!h1.playerCurrentPokemonObject.hitsItself){
    h1.turn = "player"
    h1.playerAttack()
    h1.enemyCurrentPokemonObject.currentHP -= h1.playerDamage
    }
    else{
      if(h1.playerCurrentPokemonObject.paralysed){
        h1.state = "pokemonParalysed"
        h1.playerDamage = 0
      }
      else{
        if(h1.playerCurrentPokemonObject.hitsItself){
          h1.state = "pokemonConfused"
          h1.playerCurrentPokemonObject.currentHP -=
          h1.calculateConfusionDamage(h1.playerCurrentPokemonObject)
        }
      }
    }
  }
  else{
    if(h1.enemyCurrentPokemonObject.status === "PAR"||
      h1.enemyCurrentPokemonObject.status === "SLP"){
      if(h1.enemyCurrentPokemonObject.status === "PAR"){
        let c = Math.floor(random(1,5))
        if(c === 4){
          h1.enemyCurrentPokemonObject.paralysed = true
        }
        else{
          h1.enemyCurrentPokemonObject.paralysed = false
        }
      }
      else{
        h1.enemyCurrentPokemonObject.paralysed = true
      }
    }
    else{
      h1.enemyCurrentPokemonObject.paralysed = false
    }
    if(h1.enemyCurrentPokemonObject.confused === true){
      let c = Math.floor(random(1,4))
      if(c === 3){
        h1.enemyCurrentPokemonObject.hitsItself = true
      }
      else{
        h1.enemyCurrentPokemonObject.hitsItself = false
      }
    }
    else{
      h1.enemyCurrentPokemonObject.hitsItself = false
    }
    if(!h1.enemyCurrentPokemonObject.paralysed&&!h1.enemyCurrentPokemonObject.hitsItself){
    h1.turn = "enemy"
    h1.enemyAttack()
    h1.playerCurrentPokemonObject.currentHP -= h1.enemyDamage
    }
    else{
      if(h1.enemyCurrentPokemonObject.paralysed){
        h1.state = "pokemonParalysed"
        h1.enemyDamage = 0
      }
      else{
        if(h1.enemyCurrentPokemonObject.hitsItself){
          h1.state = "pokemonConfused"
          h1.enemyCurrentPokemonObject.currentHP -=
          h1.calculateConfusionDamage(h1.enemyCurrentPokemonObject)
        }
      }
    }
  }
  

}

function pokemonHeal(){
  let partyLength = party.length
  for(let i = 0;i<partyLength;i++){
      party[i].currentHP = party[i].stats.hp
      let moveLength = party[i].moves.length
      for(let j = 0;j<moveLength;j++){
          party[i].moves[j].currentPP = party[i].moves[j].pp
      }
  }

}

function teamMaker(){

  if(gameState === 3.1&&playerLocation === "route_1"&&bgState === 1){
      let pokemon1Moves = ["Scratch","Leer"]
      let pokemon1 = new Pokemon("Zorua",5,pokedex,moveDB,[],pokemon1Moves,1)
      enemyCreatedTeam.push(pokemon1)
  }
  if(playerLocation === "twin_lake_path"&&bgState === 1&&currentBattle === null){
      let pokemon1Moves = ["Tackle","Growl","Peck"]
      let pokemon1 = new Pokemon("Fletchling",3,pokedex,moveDB,[],pokemon1Moves,1)
      let pokemon2Moves = ["Poison Sting","Leer","Peck"]
      let pokemon2 = new Pokemon("NidoranM",4,pokedex,moveDB,[],pokemon2Moves,1)
      enemyCreatedTeam[0] = pokemon1
      enemyCreatedTeam[1] = pokemon2
  }
  if(playerLocation === "twin_lake_path"&&bgState === 5&&currentBattle === null){
      let pokemon1Moves = ["Poison Sting","Defense Curl"]
      let pokemon1 = new Pokemon("Venipede",4,pokedex,moveDB,[],pokemon1Moves,1)
      let pokemon2Moves = ["Tackle","String Shot"]
      let pokemon2 = new Pokemon("Sewaddle",5,pokedex,moveDB,[],pokemon2Moves,1)
      enemyCreatedTeam[0] = pokemon1
      enemyCreatedTeam[1] = pokemon2
  }
  if(playerLocation === "twin_lake_path"&&bgState === 8&&currentBattle === null){
      let pokemon1Moves = ["Water Gun","Mud-Slap","Harden"]
      let pokemon1 = new Pokemon("Shellos",6,pokedex,moveDB,[],pokemon1Moves,1)
      enemyCreatedTeam[0] = pokemon1
  }
  if(playerLocation === "twin_lake_path"&&bgState === 9&&currentBattle === null){
      let pokemon1Moves = ["Tackle","Growl"]
      let pokemon1 = new Pokemon("Zigzagoon",5,pokedex,moveDB,[],pokemon1Moves,1)
      enemyCreatedTeam[0] = pokemon1
  }
  if(playerLocation === "twin_lake_path"&&bgState === 6&&currentBattle === null){
      let pokemon1Moves = ["Water Gun","Leer"]
      let pokemon1 = new Pokemon("Corphish",3,pokedex,moveDB,[],pokemon1Moves,1)
      enemyCreatedTeam[0] = pokemon1
      let pokemon2Moves = ["Astonish","Growl"]
      let pokemon2 = new Pokemon("Lotad",4,pokedex,moveDB,[],pokemon2Moves,1)
      enemyCreatedTeam[1] = pokemon2
      let pokemon3Moves = ["Splash"]
      let pokemon3 = new Pokemon("Magikarp",5,pokedex,moveDB,[],pokemon3Moves,1)
      enemyCreatedTeam[2] = pokemon3
  }
  

}

function drawMenu(){

  if(menuPage === "summary"){
    
    let pokemon = party[pokemonIndex]  

  background(220);

  // Main Card
  fill(250);
  stroke(180);
  strokeWeight(2);
  rect(40, 40, 560, 400, 16);
  
  fill(220)
  rect(60,60,140,140)
  image(pokemonSummaryImage,60,60,140,140)

  // Name, Level, Gender
  noStroke()
  fill(30);
  textFont("bold")
  textAlign(LEFT, TOP);
  textSize(35);
  text(`${pokemon.name}`, 220, 60);
  textSize(25);
  text(`Level: ${pokemon.level}`, 220, 95);
  text(`#${pokemonIndex+1}`, 560, 50);
  
  image(pokemonTypeArrays[0], 220, 124);
  if(pokemon.types[1]){
  image(pokemonTypeArrays[1], 290, 124);
  }

  // Status Placeholder
  if(pokemon.status){
  noStroke()
  fill(30);
  textFont("bold")
  textSize(20);
  text(`Status:`, 400, 65);
  image(playerStatusImage,460,65,50,20)
  }

  // HP Bar
  let currentHP = pokemon.currentHP;
  let totalHP = pokemon.stats.hp;
  let hpPercent = currentHP / totalHP;
  fill(180);
  stroke(0);
  rect(60, 250, 240, 14, 6);
  noStroke();
  if(hpPercent>0.5){
  fill(90, 200, 90);  
  }
  else if(hpPercent<=0.5&&hpPercent>0.25){
    fill("yellow");  
  }
  else{
    fill("red")
  }
  rect(60, 250, 240 * hpPercent, 14, 6);
  fill(0);
  textSize(25);
  textAlign(LEFT, CENTER);
  text(`HP: ${currentHP}/${totalHP}`, 60, 235);

  // Stats Panel
  fill(245);
  stroke(200);
  rect(60, 270, 240, 130, 10);
  fill(50);
  noStroke();
  textSize(25);
  textFont("bold")
  text("Stats:", 70, 290);

  let stats = [
    `HP: ${pokemon.stats.hp}`, `Attack: ${pokemon.stats.att}`, `Defense: ${pokemon.stats.def}`,
    `Sp. Atk: ${pokemon.stats.spatt}`, `Sp. Def: ${pokemon.stats.spdef}`, `Speed: ${pokemon.stats.speed}`
  ];

  textSize(18);
  for (let i = 0; i < stats.length; i++) {
    let x = 70 + (i % 2) * 110;
    let y = 325 + floor(i / 2) * 30;
    text(stats[i], x, y);
  }

  // Moves Panel
  fill(240);
  stroke(180);
  rect(320, 170, 260, 180, 12);
  fill(30);
  noStroke();
  textSize(25);
  text("Moves:", 330, 200);

  

  let moves = [
    [`${pokemon.moves[0].name}`, `${pokemon.moves[0].currentPP}`]
  ];

  if(pokemon.moves[1]){
    moves.push([`${pokemon.moves[1].name}`, `${pokemon.moves[1].currentPP}`])
  }
  if(pokemon.moves[2]){
    moves.push([`${pokemon.moves[2].name}`, `${pokemon.moves[2].currentPP}`])
  }
  if(pokemon.moves[3]){
    moves.push([`${pokemon.moves[3].name}`, `${pokemon.moves[3].currentPP}`])
  }

  if(currentBattle === null){
  if(subIndex>=0){
  fill(240)
  stroke("red")
  strokeWeight(2)
  rect(326,222+subIndex*30,250,30)
  noStroke()
  }
  if(tempIndex>=0){
  fill(240)
  stroke("blue")
  strokeWeight(2)
  rect(326,222+tempIndex*30,250,30)
  noStroke()
  }
}

  if(keyWentDown("f")&&textCharge.y === 0&&textCharge.velocityY === 0&&currentBattle === null){
      if(subIndex === -10){
        textCharge.velocityY = 50
      menuPage = "party"
      if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
      subIndex = 0
      }
      else{
        subIndex = -10
        tempIndex = -10
      }
    }
    if(currentBattle !== null){
    }
    if(currentBattle !== null&&keyWentDown("f")&&currentBattle.keyCooldown === 0){
      currentBattle.state = "pokemon"
      menuPage = ""
    }
    if(currentBattle === null&&keyWentDown("f")){
      menuPage = "party"
      if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
    }
    if(keyWentDown("space")&&currentBattle === null){
      if(subIndex === -10){
      subIndex = 0
      tempIndex = -10
      }
      else if(tempIndex === -10){
        tempIndex = subIndex
      }
      else{
        if(tempIndex === subIndex){
          tempIndex = -10
          subIndex = -10
        }
        else{
          let tempe = pokemon.moves[subIndex]
          pokemon.moves[subIndex] = pokemon.moves[tempIndex]
          pokemon.moves[tempIndex] = tempe

          tempe = moveTypeArrays[subIndex]
          moveTypeArrays[subIndex] = moveTypeArrays[tempIndex]
          moveTypeArrays[tempIndex] = tempe

          tempe = moveCategoryArrays[subIndex]
          moveCategoryArrays[subIndex] = moveCategoryArrays[tempIndex]
          moveCategoryArrays[tempIndex] = tempe

          tempIndex = -10
          subIndex = -10
        }
      }
  }

  if(keyWentDown("down")&&tempIndex === -10&&subIndex !== -10&&currentBattle === null){
    subIndex++
    if(subIndex>=4){
      subIndex = 0
    }
  } 
  if(keyWentDown("up")&&tempIndex === -10&&subIndex !== -10&&currentBattle === null){
    subIndex--
    if(subIndex<=-1){
      subIndex = 3
    }
  } 

  if(keyWentDown("down")&&tempIndex !== -10&&currentBattle === null){
    tempIndex++
    if(tempIndex>=4){
      tempIndex = 0
    }
  } 
  if(keyWentDown("up")&&tempIndex !== -10&&currentBattle === null){
    tempIndex--
    if(tempIndex<=-1){
      tempIndex = 3
    }
  } 

  



  textSize(20);
  for (let i = 0; i < moves.length; i++) {
    let y = 225 + i * 30;
    textSize(15)
    textFont("arial")
    fill(0);
    textAlign(LEFT, TOP);
    text(moves[i][0], 330, y+4);

    textFont("bold")
    textSize(12)
    text("PP: "+moves[i][1], 435, y+7);

    image(moveTypeArrays[i], 470, y+2,48,21);

    image(moveCategoryArrays[i], 520, y+2,48,21);
  }

  


  // EXP Bar
  let expPercent = pokemon.exp/pokemon.expToNextLevel();
  if(pokemon.exp === 0){
    expPercent = 0.00001
  }
  fill(200);
  rect(320, 390, 260, 6, 6);
  fill(60, 130, 250);
  rect(320, 390, 260 * expPercent, 6, 6);
  fill(0);
  textSize(20);
  text("EXP:", 320, 370);
  }

  if(menuPage === "party"){

    background(partybg)
      if(keyWentDown("right")){
        if(tempIndex === -10){
    if(subIndex === -10){
    pokemonIndex++
    if(currentBattle === null){
    if(pokemonIndex>=party.length+1){
      pokemonIndex = 0
    }
  }
  else{
    if(currentBattle.playerCurrentPokemonObject.currentHP>0){
      if(pokemonIndex>=party.length+1){
      pokemonIndex = 0
      }
    }
    else{
      if(pokemonIndex>=party.length){
      pokemonIndex = 0
      }
    }
  }
    }
    else{
      subIndex++
      if(subIndex>2){
        subIndex = 0
      }
    }
  }
  }
  if(keyWentDown("left")){
    if(tempIndex === -10){
    if(subIndex === -10){
    pokemonIndex--
    if(currentBattle === null){
    if(pokemonIndex<=-1){
      pokemonIndex = party.length
    }
    }
    else{
      if(currentBattle.playerCurrentPokemonObject.currentHP>0){
        if(pokemonIndex<=-1){
        pokemonIndex = party.length
        }
      }
      else{
        if(pokemonIndex<=-1){
          pokemonIndex = party.length-1
        }
      }
    }
    }
    else{
      subIndex--
      if(subIndex<0){
        subIndex = 2
      }
    }
  }
  }
  if(keyWentDown("down")&&party.length>=3&&tempIndex === -10){
    if(subIndex === -10){
    pokemonIndex+=2
    if(pokemonIndex>=party.length+1){
      if(pokemonIndex%2 === 0){
      pokemonIndex = 0
      }
      else{
        pokemonIndex = 1
      }
    }
    }
  }
  if(keyWentDown("up")&&party.length>=3&&tempIndex === -10){
    if(subIndex === -10){
    pokemonIndex-=2
    if(pokemonIndex<=-1){
      if(pokemonIndex%2!==0){
      pokemonIndex = party.length - 2
      }
      else{
        pokemonIndex = party.length - 1
      }
    }
    } 
  }
  
  if(currentBattle === null){
  if(keyWentDown("space")&&subIndex === -10&&textCharge.velocityY === 0){
    textCharge.velocityY = 50
    if(pokemonIndex !== party.length){
      textCounter = 1
    subIndex = 0
    }
    else{
      menuPage = ""
      pokemonIndex = 0
      menuCreated = true
      menubar = false
      menuIndex = 0
    }
  }
  } 
  else{
     if(keyWentDown("right")&&tempIndex !== -10){
      tempIndex++
      if(currentBattle.playerCurrentPokemonObject.currentHP>0){
      if(tempIndex>party.length){
        tempIndex = 0
      }
    }
    else{
      if(tempIndex>=party.length){
        tempIndex = 0
      }
    }
    }
    if(keyWentDown("down")&&tempIndex !== -10&&party.length>=3){
      tempIndex+=2
      if(tempIndex>party.length){
        if(tempIndex%2 === 0){
          tempIndex = 0
        }
        else{
          tempIndex = 1
        }
      }
    }
    if(keyWentDown("up")&&tempIndex !== -10&&party.length>=3){
      tempIndex-=2
      if(tempIndex<=-1){
        if(tempIndex%2 === 0){
          tempIndex = party.length - 2
        }
        else{
          tempIndex = party.length - 1
        }
      }
    }
    if(keyWentDown("left")&&tempIndex !== -10){
      tempIndex--
      if(currentBattle.playerCurrentPokemonObject.currentHP>0){
      if(tempIndex<=-1){
        tempIndex = party.length
      }
    }
    else{
       if(tempIndex<=-1){
        tempIndex = party.length-1
      }
    }
    }
    if(keyWentDown("space")&&subIndex === -10&&currentBattle.keyCooldown === 0){
    currentBattle.keyCooldown = 15
    if(subIndex !== -10){
    if(tempIndex === -10){
    subIndex = 0
    }
    else{
       if(tempIndex !== party.length&&tempIndex !== pokemonIndex&&
        party[tempIndex].currentHP>0&&(pokemonIndex === 0||tempIndex === 0)
       ){
        currentBattle.playerPrevious = currentBattle.playerCurrentPokemonObject.name
        if(currentBattle.playerCurrentPokemonObject.currentHP>0){
          currentBattle.turn = "enemy"
        currentBattle.turnStart = "player"
        }
        else{
          currentBattle.turn = ""
        currentBattle.turnStart = ""
        }
        let temp = party[tempIndex]
        party[tempIndex] = party[pokemonIndex]
        party[pokemonIndex] = temp
        currentBattle.playerCurrentPokemonObject = party[0]
        currentBattle.playerCurrentPokemon = party[0].name
        playerPokemonBack = loadImage(`back/${currentBattle.playerCurrentPokemon.toLowerCase()}.png`)
        playerPokemon.addImage(playerPokemonBack)
        currentBattle.state = "playerNext"
        menuPage = ""
        subIndex = -10
        tempIndex = -10
       }
       else{
        tempIndex = -10
        subIndex = 0
       }
    }
  }
  else{
      if(pokemonIndex === party.length){
        subIndex = -10
        tempIndex = -10
        pokemonIndex = -10
        currentBattle.state = "menu"
        menuPage = ""
      }
  }
    }
    if(keyWentDown("space")&&subIndex !== -10&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      if(subIndex === 0){
        menuPage = "summary"
        for(let i = 0;i<party[pokemonIndex].types.length;i++){
        pokemonTypeArrays[i] = loadImage(`types/${party[pokemonIndex].types[i]}.png`)
      }
      for(let i = 0;i<party[pokemonIndex].moves.length;i++){
        moveTypeArrays[i] = loadImage(`types/${party[pokemonIndex].moves[i].type}.png`)
        moveCategoryArrays[i] = loadImage(`status/${party[pokemonIndex].moves[i].category}.png`)
      }
      if(party[pokemonIndex].status !== null){
        playerStatusImage = loadImage(`status/${party[pokemonIndex].staus}.png`)
      }
      pokemonSummaryImage = loadImage(`front/${party[pokemonIndex].name.toLowerCase()}.png`)
      if(party[pokemonIndex].status !== null){
      playerStatusImage = loadImage(`status/${party[pokemonIndex].status}.png`)
      }
      }
      if(subIndex === 1){
        subIndex = -10
        tempIndex = pokemonIndex+1
        if(pokemonIndex>=party.length){
          tempIndex = 0
        }
      }
    }
  }
  
  if(subIndex !== -10){
    fill("white")
    stroke("black")
    strokeWeight(3)
    rect(30,370,510,40)
    fill("#03A9F4")
    stroke("#000000")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Do what with "+party[pokemonIndex].name+"?",40,400)
    
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    //text("Switch",390,450)
    
  }
  
  if(subIndex === -10){
    fill("white")
    stroke("black")
    strokeWeight(3)
    rect(100,370,430,40)
    fill("#03A9F4")
    stroke("#000000")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Press Space to Select a Pokemon",120,400)
    if(currentBattle === null){
    if(pokemonIndex !== party.length){
    image(exitlogo,295,420,50,50)
    }
    else{
      image(exitlogo,292.5,418.5,55,55)
    }
  }
  else{
    if(currentBattle.playerCurrentPokemonObject.currentHP>0){
    if(pokemonIndex !== party.length){
    image(exitlogo,295,420,50,50)
    }
    else{
      image(exitlogo,292.5,418.5,55,55)
    }
  }
}
  }
  
  if(subIndex === 0){
    fill("#03A9F4")
    stroke(51)
    strokeWeight(3)
    rect(30,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Summary",90,450)
    noStroke()
    fill("#3F51B5")
    rect(290,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",370,450)
    image(exitlogo,560,420,50,50)
    if(currentBattle === null){
    if(keyWentDown("space")&&textCharge.velocityY === 0){
      textCharge.velocityY = 50
      menuPage = "summary"
      subIndex = -10
      textCounter = 1
      for(let i = 0;i<party[pokemonIndex].types.length;i++){
        pokemonTypeArrays[i] = loadImage(`types/${party[pokemonIndex].types[i]}.png`)
      }
      for(let i = 0;i<party[pokemonIndex].moves.length;i++){
        moveTypeArrays[i] = loadImage(`types/${party[pokemonIndex].moves[i].type}.png`)
        moveCategoryArrays[i] = loadImage(`status/${party[pokemonIndex].moves[i].category}.png`)
      }
      if(party[pokemonIndex].status !== null){
        playerStatusImage = loadImage(`status/${party[pokemonIndex].staus}.png`)
      }
      pokemonSummaryImage = loadImage(`front/${party[pokemonIndex].name.toLowerCase()}.png`)
      if(party[pokemonIndex].status !== null){
      playerStatusImage = loadImage(`status/${party[pokemonIndex].status}.png`)
      }
    }
  }
  }
  if(subIndex === 1){
    if(tempIndex === -10){
     noStroke()
    fill("#3F51B5")
    rect(30,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Summary",90,450)
    stroke(51)
    strokeWeight(3)
    fill("#03A9F4")
    rect(290,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",370,450)
    image(exitlogo,560,420,50,50)
    }
    else{
    if(tempIndex !== party.length){
    image(exitlogo,295,420,50,50)
    }
    else{
      image(exitlogo,292.5,418.5,55,55)
    }
  }
    if(tempIndex>party.length&&tempIndex !== -10){
          tempIndex = 0
    }
    if(currentBattle === null){
    if(keyWentDown("space")&&textCharge.velocityY === 0&&tempIndex === -10){
      textCharge.velocityY = 50
      if(tempIndex === -10){  
      if(party.length>1){
        tempIndex = pokemonIndex+1        
      }
      else{
        tempIndex = -10
      }
    }
    }
    if(keyWentDown("right")&&tempIndex !== -10){
      tempIndex++
      if(tempIndex>party.length){
        tempIndex = 0
      }
    }
    if(keyWentDown("down")&&tempIndex !== -10&&party.length>=3){
      tempIndex+=2
      if(tempIndex>party.length){
        if(tempIndex%2 === 0){
          tempIndex = 0
        }
        else{
          tempIndex = 1
        }
      }
    }
    if(keyWentDown("up")&&tempIndex !== -10&&party.length>=3){
      tempIndex-=2
      if(tempIndex<=-1){
        if(tempIndex%2 === 0){
          tempIndex = party.length - 2
        }
        else{
          tempIndex = party.length - 1
        }
      }
    }
    if(keyWentDown("left")&&tempIndex !== -10){
      tempIndex--
      if(tempIndex<=-1){
        tempIndex = party.length
      }
    }
    if(keyWentDown("space")&&tempIndex !== -10&&textCharge.velocityY === 0){
      textCharge.velocityY = 50
      if(tempIndex !== party.length&&tempIndex !== pokemonIndex){
        let temp = party[tempIndex]
        party[tempIndex] = party[pokemonIndex]
        party[pokemonIndex] = temp
        tempIndex = -10
        subIndex = -10
         if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
      }
      else{
        tempIndex = -10
        subIndex = -10
      }
    }
    
  }
  }
  if(subIndex === 2){
     noStroke()
    fill("#3F51B5")
    rect(30,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(2)
    textSize(30)
    textFont("bold")
    text("Summary",90,450)
    fill("#3F51B5")
    noStroke()
    rect(290,420,250,50)
    stroke("#000000")
    fill("white")
    strokeWeight(1)
    textSize(30)
    textFont("bold")
    text("Switch",370,450)
    image(exitlogo,555,415,60,60)
    if(keyWentDown("space")){
      subIndex = -10
      tempIndex = -10
    }
  }
  
  //#009688
  //#009688
  
  
  if(party.length >= 1){
    
    if(tempIndex !== 0){
    if(pokemonIndex !== 0){
      noStroke()
    if(party[0].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[0].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
  } 
  else{
    stroke("black")
    strokeWeight(3)
    fill("#FFCB05");
  }
    rect(30,20,280,100)
    stroke(51)
    strokeWeight(3)
    if(party[0].status !== null){
      image(pokemonStatusArrays[0],220,64,60,22)
    }
    image(pokemon1Img,0,-5,140,140)
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[0].name,120,50)
    let hpr = party[0].currentHP/party[0].stats.hp
    text("Level "+party[0].level,220,50)
    text(`HP: ${party[0].currentHP}/${party[0].stats.hp}`,120,80)
    if(hpr > 0.5){
      fill(90, 200, 90)
    }
    else if(hpr<=0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    
    strokeWeight(1)
    if(party[0].currentHP>0){
    rect(120,90,hpr*175,7)
    }
    
    
  }
  
  if(party.length >= 2){
    if(tempIndex !== 1){
    if(pokemonIndex !== 1){
      noStroke()
    if(party[1].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[1].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
    }
    else{
    stroke("black")
    strokeWeight(3)
    fill("#FFCB05");  
    }
    rect(330,20,280,100)
    stroke(51)
    strokeWeight(3)
    image(pokemon2Img,300,-5,140,140)
    if(party[1].status !== null){
      image(pokemonStatusArrays[1],520,64,60,22)
    }
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[1].name,420,50)
    text("Level "+party[1].level,520,50)
    let hpr = party[1].currentHP/party[1].stats.hp
    text(`HP: ${party[1].currentHP}/${party[1].stats.hp}`,420,80)
    if(hpr > 0.5){
      fill(90, 200, 90)
    }
    else if(hpr<=0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    if(party[1].currentHP>0){
    rect(420,90,hpr*175,7)
    }
  }
  
  if(party.length >= 3){
    if(tempIndex !== 2){
   if(pokemonIndex !== 2){
     noStroke()
    if(party[2].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[2].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
  }
  else{
    stroke("black")
    strokeWeight(3)
    fill("#FFCB05"); 
  }
    rect(30,140,280,100)
        stroke(51)
    strokeWeight(3)
    image(pokemon3Img,0,115,140,140)
    if(party[2].status !== null){
      image(pokemonStatusArrays[2],220,184,60,22)
    }
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[2].name,120,170)
    let hpr = party[2].currentHP/party[2].stats.hp
    text("Level "+party[2].level,220,170)
    text(`HP: ${party[2].currentHP}/${party[2].stats.hp}`,120,200)
    if(hpr > 0.5){
      fill(90, 200, 90)
    }
    else if(hpr<=0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    if(party[2].currentHP>0){
    rect(120,210,hpr*175,7)
    }
  }
  
  if(party.length >= 4){
    if(tempIndex !== 3){
    if(pokemonIndex !== 3){
      noStroke()
    if(party[3].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[3].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
  }
  else{
  stroke("black")
    strokeWeight(3)
    fill("#FFCB05"); 
  }
    rect(330,140,280,100)
        stroke(51)
    strokeWeight(3)
    image(pokemon4Img,300,115,140,140)
    if(party[3].status !== null){
      image(pokemonStatusArrays[3],520,184,60,22)
    }
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[3].name,420,170)
    text("Level "+party[3].level,520,170)
    let hpr = party[3].currentHP/party[3].stats.hp
    text(`HP: ${party[3].currentHP}/${party[3].stats.hp}`,420,200)
    if(hpr > 0.5){
      fill(90, 200, 90)
    }
    else if(hpr<=0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    if(party[3].currentHP>0){
    rect(420,210,hpr*175,7)
    }
  }
  if(party.length >= 5){
    if(tempIndex !== 4){
    if(pokemonIndex !== 4){
      noStroke()
    if(party[4].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[4].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
  }
  else{
    stroke("black")
    strokeWeight(3)
    fill("#FFCB05"); 
  }
    rect(30,260,280,100)
    stroke(51)
    strokeWeight(3)
    image(pokemon5Img,0,235,140,140)
    if(party[4].status !== null){
      image(pokemonStatusArrays[4],220,304,60,22)
    }
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[4].name,120,290)
    text("Level "+party[4].level,220,290)
    let hpr = party[4].currentHP/party[4].stats.hp
    text(`HP: ${party[4].currentHP}/${party[4].stats.hp}`,120,320)
    if(hpr > 0.5){
      fill(90, 200, 90)
    }
    else if(hpr<=0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    if(party[4].currentHP>0){
    rect(120,330,hpr*175,7)
    }
  }
  
  if(party.length >= 6){
    if(tempIndex !== 5){
    if(pokemonIndex !== 5){
      noStroke()
    if(party[5].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[5].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
    }
  }
  else{
    stroke("black")
    strokeWeight(3)
    fill("#FFCB05");    
  }
    rect(330,260,280,100)
    stroke(51)
    strokeWeight(3)
    image(pokemon6Img,300,235,140,140)
    if(party[5].status !== null){
      image(pokemonStatusArrays[5],520,304,60,22)
    }
    fill("white")
    textSize(20)
    textFont("bold")
    text(party[5].name,420,290)
    text("Level "+party[5].level,520,290)
    let hpr = party[5].currentHP/party[5].stats.hp
    text(`HP: ${party[5].currentHP}/${party[5].stats.hp}`,420,320)
    if(hpr > 0.5){
      fill(90, 200, 90)
    }
    else if(hpr<=0.5&&hpr>0.2){
      fill("yellow")
    }
    else{
      fill("red")
    }
    strokeWeight(1)
    if(party[5].currentHP>0){
    rect(420,330,hpr*175,7)
    }
  }
}

if(menuPage === "bag"){
  background(partybg)

  if(subIndex !== 4){
  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  }
  
  if(inBagIndex === -10){
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  }

  noStroke()
  
  if(subIndex === 0){
    if(inBagIndex === -10){
    fill("rgba(126,185,251,0.89)")
    rect(18.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Items",120,405)
    }
     if(bag.items.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
    for(let i = 0;i<bag.items.length;i++){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(bag.items[i].name,340,60+i*50)
    text("x"+bag.items[i].quantity,577,60+i*50) 
    }

    if(tempIndex !== -10){
      stroke("grey")
      strokeWeight(3)
      fill("white")
      rect(15,235,280,65)
  
      textFont("bold")
      textSize(35)
      fill("white")
      stroke("black")
      strokeWeight(3)
      text("Use",75,275)
      text("Exit",195,275)
      if(tempIndex === 0){
        stroke("red")
        fill("red")
        strokeWeight(4)
        text("˃",45,275)
      }
      if(tempIndex === 1){
        stroke("red")
        fill("red")
        strokeWeight(4)
        text("˃",165,275)
      }
    }

    
      if(currentBattle === null){
      if(keyWentDown("space")&&inBagIndex === -10&&textCharge.y === 0){
      textCharge.velocityY = 50
        if(tempIndex === -10){
        tempIndex = 0
        }
        else if(tempIndex !== -10){
          if(tempIndex === 0){
            tempIndex = -10
            inBagIndex = 0
            if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
          }
          else{
            tempIndex = -10
            
          }
        }
    }
  }
  if(currentBattle !== null){
      if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
      currentBattle.keyCooldown = 15
      if(inBagIndex === -10)
        if(tempIndex === -10){
        tempIndex = 0
        }
        else if(tempIndex !== -10){
          if(tempIndex === 0){
            tempIndex = -10
            inBagIndex = 0
            if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
          }
          else{
            tempIndex = -10
          }
        }
    }
  }

   if(inBagIndex === -10){
    if((keyWentDown("left")||(keyWentDown("right")))&&tempIndex !== -10){
      tempIndex = (tempIndex === 0)?1:0
    }

    if(keyWentDown("up")&&tempIndex === -10){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = bag.items.length-1
    }
  }
  if(keyWentDown("down")&&tempIndex === -10){
    pokemonIndex++
    if(pokemonIndex>=bag.items.length){
      pokemonIndex = 0
    }
}}
  if(tempIndex === -10&&inBagIndex !== -10){
    if(keyWentDown("down")){
    inBagIndex++
    if(inBagIndex>party.length){
      inBagIndex = 0
    }
  }
  if(keyWentDown("up")){
    inBagIndex--
    if(inBagIndex<=-1){
      inBagIndex = party.length
    }
  }
  if(inBagIndex === party.length&&keyWentDown("space")){
    subIndex = 0
    tempIndex = -10
    pokemonIndex = 0
    inBagIndex = -10
  }
     stroke("black")
  strokeWeight(3)
  fill("white")
  rect(5,5,310,470) 

  

  if(party.length>=1){
  if(inBagIndex !== 0){
      noStroke()
    if(party[0].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[0].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,15,290,60)
  image(pokemon1Img,15,15,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[0].name,80,40)
  text("Lvl:"+party[0].level,240,40)
  text(`HP:${party[0].currentHP}/${party[0].stats.hp}`,80,62)
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 0&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.items[pokemonIndex].use(party[0])
    tempIndex = -10
    subIndex = 0
    pokemonIndex = 0
    tempIndex = -10
  }
}
}

  if(party.length>=2){
  if(inBagIndex !== 1){
      noStroke()
    if(party[1].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[1].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,80,290,60)
  image(pokemon2Img,15,80,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[1].name,80,105)
  text("Lvl:"+party[1].level,240,105)
  text(`HP:${party[1].currentHP}/${party[1].stats.hp}`,80,127)
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 1&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.items[pokemonIndex].use(party[1])
    tempIndex = -10
    subIndex = 0
    pokemonIndex = 0
    tempIndex = -10
  }
}
  
}

  if(party.length>=3){
  if(inBagIndex !== 2){
      noStroke()
    if(party[2].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[2].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,145,290,60)
  image(pokemon3Img,15,145,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[2].name,80,170)
  text("Lvl:"+party[2].level,240,170)
  text(`HP:${party[2].currentHP}/${party[2].stats.hp}`,80,192)
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 2&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.items[pokemonIndex].use(party[2])
    tempIndex = -10
    subIndex = 0
    pokemonIndex = 0
    tempIndex = -10
  }
}
}

if(party.length>=4){
  if(inBagIndex !== 3){
      noStroke()
    if(party[3].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[3].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,210,290,60)
  image(pokemon4Img,15,210,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[3].name,80,235)
  text("Lvl:"+party[3].level,240,235)
  text(`HP:${party[3].currentHP}/${party[3].stats.hp}`,80,257)
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 3&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.items[pokemonIndex].use(party[3])
    tempIndex = -10
    subIndex = 0
    pokemonIndex = 0
    tempIndex = -10
  }
}
}

if(party.length>=5){
  if(inBagIndex !== 4){
      noStroke()
    if(party[4].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[4].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,275,290,60)
  image(pokemon5Img,15,275,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[4].name,80,300)
  text("Lvl:"+party[4].level,240,300)
  text(`HP:${party[4].currentHP}/${party[4].stats.hp}`,80,322 )
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 4&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.items[pokemonIndex].use(party[4])
    tempIndex = -10
    subIndex = 0
    pokemonIndex = 0
    tempIndex = -10
  }
}
}

if(party.length>=6){
  if(inBagIndex !== 5){
      noStroke()
    if(party[5].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[5].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,340,290,60)
  image(pokemon6Img,15,340,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[5].name,80,365)
  text("Lvl:"+party[5].level,240,365)
  text(`HP:${party[5].currentHP}/${party[5].stats.hp}`,80,387)
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 5&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.items[pokemonIndex].use(party[5])
    tempIndex = -10
    subIndex = 0
    pokemonIndex = 0
    tempIndex = -10
  }
}
}

  if(inBagIndex === party.length){
    image(exitlogo,132.5,415,50,50)
  }
  else{
    image(exitlogo,137.5,420,40,40)
  }


 
}    
  }
  if(subIndex === 1){
    fill("rgba(126,185,251,0.89)")
    rect(72.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Medicine",100,405)
    if(bag.medicine.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
    for(let i = 0;i<bag.medicine.length;i++){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(bag.medicine[i].name,340,60+i*50)
    text("x"+bag.medicine[i].quantity,577,60+i*50) 
    }

    if(tempIndex !== -10){
      stroke("grey")
      strokeWeight(3)
      fill("white")
      rect(15,235,280,65)
  
      textFont("bold")
      textSize(35)
      fill("white")
      stroke("black")
      strokeWeight(3)
      text("Use",75,275)
      text("Exit",195,275)
      if(tempIndex === 0){
        stroke("red")
        fill("red")
        strokeWeight(4)
        text("˃",45,275)
      }
      if(tempIndex === 1){
        stroke("red")
        fill("red")
        strokeWeight(4)
        text("˃",165,275)
      }
    }

    if(currentBattle === null){
    if(keyWentDown("space")&&inBagIndex === -10&&textCharge.y === 0){
      textCharge.velocityY = 50
        if(tempIndex === -10){
        tempIndex = 0
        }
        else if(tempIndex !== -10){
          if(tempIndex === 0){
            tempIndex = -10
            inBagIndex = 0
            if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
          }
          else{
            tempIndex = -10
            
          }
        }
    }
  }
  else{
     if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
        currentBattle.keyCooldown = 15
        if(inBagIndex === -10){
        if(tempIndex === -10){
        tempIndex = 0
        }
        else if(tempIndex !== -10){
          if(tempIndex === 0){
            tempIndex = -10
            inBagIndex = 0
            if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
          }
          else{
            tempIndex = -10
            
          }
        }
      }
      else{
        if(inBagIndex === party.length){
          inBagIndex = -10
          tempIndex = 0
        }
        else{
          currentBattle.keyCooldown = 15
          bag.medicine[pokemonIndex].use(party[0])
          currentBattle.state = "itemUsed"
          menuPage = ""
          currentBattle.itemUsed = bag.medicine[pokemonIndex].name
          currentBattle.itemEffect = bag.medicine[pokemonIndex].returnVal
        }
      }
    }
  }

    if(inBagIndex === -10){
    if((keyWentDown("left")||(keyWentDown("right")))&&tempIndex !== -10){
      tempIndex = (tempIndex === 0)?1:0
    }

    if(keyWentDown("up")&&tempIndex === -10){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = bag.medicine.length-1
    }
  }
  if(keyWentDown("down")&&tempIndex === -10){
    pokemonIndex++
    if(pokemonIndex>=bag.medicine.length){
      pokemonIndex = 0
    }
  }
}
else{

  if(keyWentDown("down")){
    inBagIndex++
    if(inBagIndex>party.length){
      inBagIndex = 0
    }
  }
  if(keyWentDown("up")){
    inBagIndex--
    if(inBagIndex<=-1){
      inBagIndex = party.length
    }
  }

  if(keyWentDown("space")&&inBagIndex === party.length&&textCharge.y === 0){
    inBagIndex = -10
    tempIndex = -10
    textCharge.velocityY = 50
  }

  stroke("black")
  strokeWeight(3)
  fill("white")
  rect(5,5,310,470) 

  

  if(party.length>=1){
  if(inBagIndex !== 0){
      noStroke()
    if(party[0].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[0].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,15,290,60)
  image(pokemon1Img,15,15,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[0].name,80,40)
  text("Lvl:"+party[0].level,240,40)
  text(`HP:${party[0].currentHP}/${party[0].stats.hp}`,80,62)
  if(party[0].status !== null){
    image(pokemonStatusArrays[0],240,47,40,20)
  }
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 0&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.medicine[pokemonIndex].use(party[0])
  }
}
}

  if(party.length>=2){
  if(inBagIndex !== 1){
      noStroke()
    if(party[1].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[1].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,80,290,60)
  image(pokemon2Img,15,80,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[1].name,80,105)
  text("Lvl:"+party[1].level,240,105)
  text(`HP:${party[1].currentHP}/${party[1].stats.hp}`,80,127)
  if(party[1].status !== null){
    image(pokemonStatusArrays[1],240,112,40,20)
  }
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 1&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.medicine[pokemonIndex].use(party[1])
  }
}
  
}

  if(party.length>=3){
  if(inBagIndex !== 2){
      noStroke()
    if(party[2].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[2].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,145,290,60)
  image(pokemon3Img,15,145,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[2].name,80,170)
  text("Lvl:"+party[2].level,240,170)
  text(`HP:${party[2].currentHP}/${party[2].stats.hp}`,80,192)
  if(party[2].status !== null){
    image(pokemonStatusArrays[2],240,177,40,20)
  }
  if(keyWentDown("space")&&inBagIndex === 2&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.medicine[pokemonIndex].use(party[2])
  }
}

if(party.length>=4){
  if(inBagIndex !== 3){
      noStroke()
    if(party[3].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[3].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,210,290,60)
  image(pokemon4Img,15,210,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[3].name,80,235)
  text("Lvl:"+party[3].level,240,235)
  text(`HP:${party[3].currentHP}/${party[3].stats.hp}`,80,257)
  if(party[3].status !== null){
    image(pokemonStatusArrays[3],240,242,40,20)
  }
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 3&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.medicine[pokemonIndex].use(party[3])
  }
}
}

if(party.length>=5){
  if(inBagIndex !== 4){
      noStroke()
    if(party[4].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[4].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,275,290,60)
  image(pokemon5Img,15,275,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[4].name,80,300)
  text("Lvl:"+party[4].level,240,300)
  text(`HP:${party[4].currentHP}/${party[4].stats.hp}`,80,322 )
  if(party[4].status !== null){
    image(pokemonStatusArrays[4],240,307,40,20)
  }
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 4&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.medicine[pokemonIndex].use(party[4])
  }
}
}

if(party.length>=6){
  if(inBagIndex !== 5){
      noStroke()
    if(party[5].currentHP>0){
      fill("#009688")
    }
    else{
      fill("#992D06")
    }
    }
    else{
      stroke(51)
      strokeWeight(3)
      if(party[5].currentHP>0){
      fill("rgb(7,174,121)")
    }
    else{
      fill("#F44336")
    }
  }
  rect(15,340,290,60)
  image(pokemon6Img,15,340,60,60)
  stroke("black")
  strokeWeight(2)
  textSize(20)
  textFont("bold")
  fill("white")
  text(party[5].name,80,365)
  text("Lvl:"+party[5].level,240,365)
  text(`HP:${party[5].currentHP}/${party[5].stats.hp}`,80,387)
  if(party[5].status !== null){
    image(pokemonStatusArrays[5],240,372,40,20)
  }
  if(currentBattle === null){
  if(keyWentDown("space")&&inBagIndex === 5&&textCharge.y === 0&&textCharge.velocityY ===0){
    bag.medicine[pokemonIndex].use(party[5])
  }
}
}

  if(inBagIndex === party.length){
    image(exitlogo,132.5,415,50,50)
  }
  else{
    image(exitlogo,137.5,420,40,40)
  }

}

  }
  if(subIndex === 2){
    fill("rgba(126,185,251,0.89)")
    rect(128.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Pokeballs",100,405)

    if(bag.pokeballs.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
    for(let i = 0;i<bag.pokeballs.length;i++){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(bag.pokeballs[i].name,340,60+i*50)
    text("x"+bag.pokeballs[i].quantity,577,60+i*50) 
  }

    if(tempIndex !== -10){
      stroke("grey")
      strokeWeight(3)
      fill("white")
      rect(15,235,280,65)
  
      textFont("bold")
      textSize(35)
      fill("white")
      stroke("black")
      strokeWeight(3)
      text("Use",75,275)
      text("Exit",195,275)

      if((keyWentDown("left")||(keyWentDown("right")))){
      tempIndex = (tempIndex === 0)?1:0
    }

      if(tempIndex === 0){
        stroke("red")
        fill("red")
        strokeWeight(4)
        text("˃",45,275)
      }
      if(tempIndex === 1){
        stroke("red")
        fill("red")
        strokeWeight(4)
        text("˃",165,275)
      }
    }

    if(currentBattle !== null){
      if(keyWentDown("space")&&currentBattle.keyCooldown === 0){
        currentBattle.keyCooldown = 15
          if(tempIndex === -10){
            tempIndex = 0
          }
          else{
            if(currentBattle.type === "wild"){
              if(tempIndex === 0&&bag.pokeballs[pokemonIndex].quantity>0){
                bag.pokeballs[pokemonIndex].quantity--
                catchCalculator(currentBattle.enemyCurrentPokemonObject,
                  bag.pokeballs[pokemonIndex]
                )
                menuPage = ""
                currentBattle.turnStart = "player"
                currentBattle.turn = "player"
                currentBattle.state = "pokeballUsed"
                pokeballImage = loadImage(`pokeballs/${bag.pokeballs[pokemonIndex].name.toLowerCase()}.png`)
                tempIndex = -10
                subIndex = -10
              }
              else{
                tempIndex = -10
              }
            }
          }
      }
    }

    if(keyWentDown("up")){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = 3
    }
  }
  if(keyWentDown("down")){
    pokemonIndex++
    if(pokemonIndex>3){
      pokemonIndex = 0
    }
  }
  }
  if(subIndex === 3){
    fill("rgba(126,185,251,0.89)")
    rect(182.5,307.5,50,50)
        fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("TM Case",100,405)
    if(bag.tms.length>0){
    noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,pokemonIndex*50+25,307,50)
    }
        for(let x in bag.tms){
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text(x,340,60+i)
    i += 50
  }
    if(keyWentDown("up")){
    pokemonIndex--
    if(pokemonIndex<0){
      pokemonIndex = 3
    }
  }
  if(keyWentDown("down")){
    pokemonIndex++
    if(pokemonIndex>3){
      pokemonIndex = 0
    }
  }
  }
  
  if(keyWentDown("right")&&tempIndex === -10&&inBagIndex === -10){
    pokemonIndex = 0
    subIndex++
    if(subIndex>=5){
      subIndex = 0
    }
  }
  if(keyWentDown("left")&&tempIndex === -10&&inBagIndex === -10){
    subIndex--
    pokemonIndex = 0
    if(subIndex<0){
      subIndex = 4
    }
  }
  
  if(subIndex === 4){
    fill("rgba(126,185,251,0.89)")
    rect(236.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Exit",120,405)
    if(keyWentDown("space")){
      if(currentBattle === null&&textCharge.velocityY === 0){
      textCharge.velocityY = 50
      menuPage = ""
      pokemonIndex = 0
      menuCreated = true
      menubar = false
      menuIndex = 0
      subIndex = -10
      }
      else if(currentBattle !== null&&currentBattle.keyCooldown === 0){
        currentBattle.state = "menu"
        currentBattle.keyCooldown = 15
        menuPage = ""
        pokemonIndex = -10
        subIndex = -10
      }
    }
  }

  if(inBagIndex === -10){
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)
  }

}

  if(!menuCreated&&keyWentDown("enter")&&move === true&&menuOpen&&textCharge.velocityY === 0
     &&!chat){
    menuCreated = true
    move = false
    textCharge.velocityY = 50
  }
  
  if(menuCreated){
    fill("white")
  stroke(51)
  strokeWeight(2)
  rect(410,10,220,460)
  textSize(35)
  textFont("bold")
  
    if(keyWentDown("down")){
    menuIndex++
    if(menuIndex>4){
      menuIndex = 0
    }
  }
  if(keyWentDown("up")){
    menuIndex--
    if(menuIndex<0){
      menuIndex = 4
    }
  }

  if(keyWentDown("space")&&textCharge.y === 0&&textCharge.velocityY === 0){
    textCharge.velocityY = 50
    if(menuIndex === 1){
      pokemonIndex = 0
      menuPage = "party"
     if(party.length>=1){
        pokemon1Img = loadImage("front/" + party[0].name.toLowerCase() + ".png");
        if(party[0].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[0].status + ".png")) 
        }
      }
      if(party.length>=2){
        pokemon2Img = loadImage("front/" + party[1].name.toLowerCase() + ".png");
        if(party[1].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[1].status + ".png")) 
        }
      }
      if(party.length>=3){
        pokemon3Img = loadImage("front/" + party[2].name.toLowerCase() + ".png");
        if(party[2].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[2].status + ".png")) 
        }
      }
      if(party.length>=4){
        pokemon4Img = loadImage("front/" + party[3].name.toLowerCase() + ".png");
        if(party[3].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[3].status + ".png")) 
        }
      }
      if(party.length>=5){
        pokemon5Img = loadImage("front/" + party[4].name.toLowerCase() + ".png");
        if(party[4].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[4].status + ".png")) 
        }
      }
      if(party.length>=6){
        pokemon6Img = loadImage("front/" + party[5].name.toLowerCase() + ".png");
        if(party[5].status !== null){
        pokemonStatusArrays.push(loadImage("status/" + party[5].status + ".png")) 
        }
      }
      menuCreated = false
    }
    if(menuIndex === 2){
      menuPage = "bag"
      menuCreated = false
      subIndex = 0
      pokemonIndex = 0
    }
  }

  
  
  if(menuIndex === 0){
    fill("rgba(126,185,251,0.89)")
    rect(420,30,200,60,20)
  }
  if(menuIndex === 1){
    fill("rgba(126,185,251,0.89)")
    rect(420,118,200,60,20)
  }
  if(menuIndex === 2){
    fill("rgba(126,185,251,0.89)")
    rect(420,206,200,60,20)
  }
  if(menuIndex === 3){
    fill("rgba(126,185,251,0.89)")
    rect(420,294,200,60,20)
  }
  if(menuIndex === 4){
    fill("rgba(126,185,251,0.89)")
    rect(420,382,200,60,20)
  }
  
  if(menuIndex === 4&&keyWentDown("space")){
    if(currentBattle === null){
    menuCreated = false
    move = true
    menuIndex = 0
    }
  }

  
  noStroke()
  fill("black")
  image(pokedexlogo,430,35,50,50)
  text("Pokedex",490,70)
  image(pokeballImg,430,123,50,50)
  text("Party",510,158)
  image(baglogo,430,211,50,50)
  text("Bag",520,246)
  image(trainerlogo,430,299,50,50)
  text(`ID`,524,334)
  image(exitlogo,430,387,50,50)
  text("Exit",520,422)
  }
  

}

function grassHandler(){

  if(playerLocation === "route_1"){
    w1 = null
    w2 = null
    w3 = null
    w4 = null
    w5 = null
    w6 = null
    w7 = null
    w8 = null
    w9 = null
    w10 = null
  if(bgState === 1&&!gc){
    g1 = new Grass(251,78,262,150,"route_1")
    g2 = new Grass(193,173,123,30,"route_1")
    g3 = new Grass(352,172,63,30,"route_1")
    g4 = null
    g5 = null
    g6 = null
    g7 = null
    gc = true
  }
  if(bgState === 2&&!gc){
    g1 = new Grass(256,461,256,30,"route_1")
    g2 = new Grass(271,431,224,30,"route_1")
    g3 = new Grass(368,398,30,30,"route_1")
    g4 = new Grass(415,30,195,60,"route_1")
    g5 = new Grass(417,78,130,30,"route_1")
    g6 = null
    g7 = null
    gc = true
  }
  if(bgState === 3&&!gc){
    g1 = new Grass(415,400,190,150,"route_1")
    g2 = new Grass(463,305,95,30,"route_1")
    g3 = new Grass(480,271,60,30,"route_1")
    g4 = null
    g5 = null
    g6 = null
    g7 = null
    gc = true
  }
  if(bgState === 4&&!gc){
    g1 = new Grass(320,335,390,150,"route_1")
    g2 = new Grass(466,430,100,30,"route_1")
    g3 = null
    g4 = null
    g5 = null
    g6 = null
    g7 = null
    gc = true
  }
}

  if(playerLocation === "twin_lake_path"){
    if(bgState === 0&&!gc){
      g1 = new Grass(475,47,96,96,"twin_lake_path")
      g2 = new Grass(520,77,60,102,"twin_lake_path")
      g3 = null
      g4 = null
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 0&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      wc = true
    }
    if(bgState === 1&&!gc){
      g1 = new Grass(345,41,290,82,"twin_lake_path")
      g2 = new Grass(313,120,226,78,"twin_lake_path")
      g3 = new Grass(345,185,96,60,"twin_lake_path")
      g4 = null
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 1&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      wc = true
    }
    if(bgState === 2&&!gc){
      g1 = new Grass(357,48,312,96,"twin_lake_path")
      g2 = new Grass(298,128,320,64,"twin_lake_path")
      g3 = new Grass(330,192,128,64,"twin_lake_path")
      g4 = new Grass(186,64,32,64,"twin_lake_path")
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 2&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      wc = true
    }
    if(bgState === 3&&!gc){
      g1 = new Grass(211,447,180,64,"twin_lake_path")
      g2 = new Grass(346,463,96,32,"twin_lake_path")
      g3 = new Grass(392,112,128,96,"twin_lake_path")
      g4 = new Grass(408,208,96,96,"twin_lake_path")
      g5 = new Grass(424,272,64,32,"twin_lake_path")
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 4&&!gc){
      g1 = new Grass(328,128,128,64,"twin_lake_path")
      g2 = new Grass(440,224,96,192,"twin_lake_path")
      g3 = new Grass(440,208,288,96,"twin_lake_path")
      g4 = new Grass(408,208,96,96,"twin_lake_path")
      g5 = new Grass(424,272,64,32,"twin_lake_path")
      g6 = new Grass(470,430,160,96,"twin_lake_path")
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 4&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      w1 = new Water(35,44,70,38,"twin_lake_path")
      wc = true
    }
    if(bgState === 5&&!gc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      g1 = new Grass(280,320,96,64,"twin_lake_path")
      g2 = new Grass(264,400,256,96,"twin_lake_path")
      g3 = new Grass(296,464,192,32,"twin_lake_path")
      g4 = new Grass(470,48,96,96,"twin_lake_path")
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 5&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      w1 = new Water(115,15,230,30,"twin_lake_path")
      wc = true
    }
    if(bgState === 6&&!gc){
      g1 = new Grass(312,16,352,32,"twin_lake_path")
      g2 = new Grass(264,64,320,64,"twin_lake_path")
      g3 = new Grass(296,128,128,64,"twin_lake_path")
      g4 = null
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 6&&!wc){
      w1 = new Water(151,175,36,97,"twin_lake_path")
      w2 = new Water(35,113,70,95,"twin_lake_path")
      w3 = new Water(101,142,62,36,"twin_lake_path")
      w4 = new Water(128,400,256,30,"twin_lake_path")
      w5 = new Water(488,282,125,196,"twin_lake_path")
      w6 = new Water(503,138,94,92,"twin_lake_path")
      w7 = new Water(551,78,62,98,"twin_lake_path")
      w8 = new Water(595,400,90,90,"twin_lake_path")
      w9 = new Water(625,462,30,36,"twin_lake_path")
      wc = true
    }
     if(bgState === 7&&!gc){
      g1 = new Grass(263,16,192,32,"twin_lake_path")
      g4 = null
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 7&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      w1 = new Water(503,30,225,60,"twin_lake_path")
      w2 = new Water(343,93,156,59,"twin_lake_path")
      w3 = new Water(246,142,150,32,"twin_lake_path")
      w4 = new Water(184,219,36,120,"twin_lake_path")
      w5 = new Water(244,272,150,32,"twin_lake_path")
      w6 = new Water(327,370,128,91,"twin_lake_path")
      w7 = new Water(490,430,300,100,"twin_lake_path")
      w8 = new Water(580,259,120,57,"twin_lake_path")
      w9 = new Water(613,127,54,202,"twin_lake_path")
      w10 = new Water(583,335,65,89,"twin_lake_path")
      w11 = new Water(277,306,34,34,"twin_lake_path")
      wc = true
    }
    if(bgState === 8&&!gc){
      g1 = new Grass(454,400,128,160,"twin_lake_path")
      g4 = null
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 8&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      w1 = new Water(424,46,128,92,"twin_lake_path")
      w2 = new Water(375,160,97,120,"twin_lake_path")
      w3 = new Water(181,225,287,57,"twin_lake_path")
      w4 = new Water(181,225,287,57,"twin_lake_path")
      w5 = new Water(198,290,254,72,"twin_lake_path")
      w6 = new Water(151,403,159,155,"twin_lake_path")
      w7 = new Water(35,418,70,124,"twin_lake_path")
      w8 = new Water(357,68,126,66,"twin_lake_path")
      w9 = new Water(85,14,170,28,"twin_lake_path")
      wc = true
    }
    if(bgState === 9&&!gc){
      g1 = new Grass(578,206,128,96,"twin_lake_path")
      g2 = new Grass(599,303,96,96,"twin_lake_path")
      g3 = new Grass(249,254,96,64,"twin_lake_path")
      g4 = new Grass(232,352,256,128,"twin_lake_path")
      g5 = new Grass(327,448,320,64,"twin_lake_path")
      g6 = new Grass(152,465,32,32,"twin_lake_path")
      g7 = null
      gc = true
    }
    if(bgState === 9&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      wc = true
    }
    if(bgState === 10&&!gc){
      g1 = new Grass(344,304,160,96,"twin_lake_path")
      g2 = new Grass(344,400,96,96,"twin_lake_path")
      g3 = new Grass(264,448,192,64,"twin_lake_path")
      g4 = new Grass(280,399,32,32,"twin_lake_path")
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 10&&!wc){
      w1 = null
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      w1 = new Water(564,432,152,97,"twin_lake_path")
      wc = true
    }
    if(bgState === 11&&!gc){
      g1 = new Grass(21,208,42,96,"twin_lake_path")
      g2 = new Grass(5,307,10,96,"twin_lake_path")
      g3 = null
      g4 = null
      g5 = null
      g6 = null
      g7 = null
      gc = true
    }
    if(bgState === 11&&!wc){
      w1 = new Water(423,418,128,124,"twin_lake_path")
      w2 = null
      w3 = null
      w4 = null
      w5 = null
      w6 = null
      w7 = null
      w8 = null
      w9 = null
      w10 = null
      wc = true
    }
  }

  //grass

}

function catchingTutorial(){

  tempplayerSprite.addImage(hughBackSprite)
  tempplayerSprite.scale = 1.6
    tempPokemonSprite.addImage(tempPokemonImage)

  if(catchState === "intro"){
  tempplayerSprite.visible = true
  tempPokemonSprite.visible = true
  tCharge.velocityY = 0
  tCharge.y = 0
  moving = false
  kai.sprite.visible = false
  player.visible = false
  tempSprite.visible = false
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  battleText1 = `A wild Lillipup appeared!`
  battleText2 = ``
  battleText3 = ``
  image(pokeballImg,420,253,20,20)
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  textFont('Bold')
  fill("red")
  fill("black")
  rect(405,270,230,5)
  rect(405,254,5,20)

  
  

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "send"
    catchCharge.velocityY = 0
  }
  
  }

  if(catchState === "send"){
    tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  let playerPokemon = ""
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
  }
  if(starterPokemon === "Mudkip"){
    playerPokemon = "Rowlet"
  }
  battleText1 = `Go ${playerPokemon}!`
  battleText2 = ``
  battleText3 = ``
  image(pokeballImg,420,253,20,20)
  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  fill("red")
  fill("black")
  rect(405,270,230,5)
  rect(405,254,5,20)
    
  strokeWeight(2)
  stroke(51)
  fill("rgb(255,255,130)")
  rect(5,5,240,75,30)
  strokeWeight(2)
  stroke(51)
  stroke(51)
  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`Lillipup`,15,25)
  textSize(15);
  text(`Lvl:2`,178,25)

  let enemyHP = 13
  let enemymaxHP = 13
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  let enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "menu"
    catchCharge.velocityY = 0
    if(starterPokemon === "Rowlet"){
      pokemonBackSprite = loadImage("back/chimchar.png")
    }
    if(starterPokemon === "Chimchar"){
      pokemonBackSprite = loadImage("back/mudkip.png")
    }
    if(starterPokemon === "Mudkip"){
      pokemonBackSprite = loadImage("back/rowlet.png")
    }
  }

  }

  if(catchState === "menu"){
    tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  currentBattle.playerCurrentPokemonObject.justStatused = false
  currentBattle.enemyCurrentPokemonObject.justStatused = false

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('lightgrey');
  strokeWeight(1);
  stroke(51);
  rect(330, 335, 280, 110);

  fill('pink');
  strokeWeight(2);
  stroke(51);
  rect(340, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Fight",360,372.5)
  
  fill('orange');
  strokeWeight(2);
  stroke(51);
  rect(475, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Bag",510,372.5)
  
  fill('rgb(0,177,0)');
  strokeWeight(2);
  stroke(51);
  rect(340, 395, 125, 40);
  textSize(22);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Pokemon",355,422.5)
  
  fill('rgb(3,3,216)');
  strokeWeight(2);
  stroke(51);
  rect(475, 395, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Run",510,422.5)


  textSize(25);
  textFont('Courier New');
  fill("black");

  

  battleText1 = `What will`
  battleText2 = `${playerPokemon} do?`
  battleText3 = ``

  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  textFont('Bold')
  

  enemyHP = 13
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 13
  enemymaxHP = 13
  textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >=0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  image(downImg,375,280,50,50)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "fight"
    catchCharge.velocityY = 0
  }
  
  }

  if(catchState === "fight"){
    tempPokemonSprite.visible = true
    tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill("#C7C7C7")
  strokeWeight(2);
  stroke(51);
  rect(20, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  if(playerPokemon !== "Chimchar"){
  text(`Tackle`,23,347)
  }
  else{
    text(`Scratch`,23,347)
  }
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 35`,25,367)
  
  if(starterPokemon === "Mudkip"){
  fill("#49EF5E")
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`Leafage`,328,347)
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 25`,328,367)
  }
  if(starterPokemon === "Rowlet"){
  fill("rgb(243,51,51)")
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`Ember`,328,347)
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 25`,328,367)
  }
  if(starterPokemon === "Chimchar"){
  fill("rgb(51,115,255)")
  strokeWeight(2);
  stroke(51);
  rect(325, 325, 295, 50);
  textSize(25);
  noStroke()
  textFont('Courier New');
  fill("white");
  text(`Water Gun`,328,347)
  textSize(15);
  text(`Power: 40 Accuracy: 100 PP: 25`,328,367)
  }
  
  

  enemyHP = 13
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 13
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >=0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  image(downImg,160,275,50,50)  

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "battleText"
    catchCharge.velocityY = 0
  }
  }

  if(catchState === "battleText"){
    tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP - 5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  let tempMove;
  if(starterPokemon !== "Rowlet"){
    tempMove = "Tackle"
  }
  else{
    tempMove = "Scratch"
  }
  battleText1 = `${playerPokemon} used ${tempMove}!`
  battleText2 = `The wild Lillipup used Tackle!`
  battleText3 = ``

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  noStroke()
fill("black")
  textSize(25)
  textFont('Bold')
  text("Press Space To Continue",200,460)

    

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "menu1"
    catchCharge.velocityY = 0
  }
  }

    if(catchState === "menu1"){
      tempPokemonSprite.visible = true
  tempplayerSprite.visible = true
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP-5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('lightgrey');
  strokeWeight(1);
  stroke(51);
  rect(330, 335, 280, 110);

  fill('pink');
  strokeWeight(2);
  stroke(51);
  rect(340, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Fight",360,372.5)
  
  fill('orange');
  strokeWeight(2);
  stroke(51);
  rect(475, 345, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Bag",510,372.5)
  
  fill('rgb(0,177,0)');
  strokeWeight(2);
  stroke(51);
  rect(340, 395, 125, 40);
  textSize(22);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Pokemon",355,422.5)
  
  fill('rgb(3,3,216)');
  strokeWeight(2);
  stroke(51);
  rect(475, 395, 125, 40);
  textSize(30);
  noStroke()
  textFont('Courier New');
  fill("white");
  text("Run",510,422.5)


  textSize(25);
  textFont('Courier New');
  fill("black");

  

  battleText1 = `What will`
  battleText2 = `${playerPokemon} do?`
  battleText3 = ``

  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)
  textFont('Bold')

  textSize(20)
  fill("black")
  text("Press Space To Continue",30,450)

  

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag"
    catchCharge.velocityY = 0
  }

  image(downImg,510,280,50,50)
  
  }

  if(catchState === "bag"){
background(partybg)
    tempplayerSprite.visible = false
    tempPokemonSprite.visible = false

  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(18.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Items",120,405)

    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")    

  

  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

  catchCharge.velocityY = 50
    if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag1"
    catchCharge.velocityY = 0
  }
  }

    if(catchState === "bag1"){
      tempplayerSprite.visible = false
      tempPokemonSprite.visible = false
background(partybg)


  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()

    fill("rgba(126,185,251,0.89)")
    rect(72.5,307.5,50,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Medicine",100,405)
     noStroke()
    fill("rgba(126,185,251,0.89)")
    rect(326,25,307,50)
    fill("white")
    stroke("black")
    strokeWeight(3)
    textSize(30)
    textFont("bold")
    text("Potion",340,60)
    text("x3",577,60)
  

  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)
catchCharge.velocityY = 50
    if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag2"
    catchCharge.velocityY = 0
  }
  }

  if(catchState === "bag2"){
  tempplayerSprite.visible = false
  tempPokemonSprite.visible = false
  background(partybg)

  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
  
  noStroke()

  fill("rgba(126,185,251,0.89)")
  rect(126,307.5,50,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokballs",100,405)
   noStroke()
  fill("rgba(126,185,251,0.89)")
  rect(326,25,307,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokeball",340,60)
  text("x10",577,60)
  text("Great Ball",340,110)
  text("x2",577,110)
  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

  catchCharge.velocityY = 50
    if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "bag3"
    catchCharge.velocityY = 0
    }
  }

   if(catchState === "bag3"){
  tempplayerSprite.visible = false
  tempPokemonSprite.visible = false
  background(partybg)

  fill("white")
  stroke(51)
  strokeWeight(3)
  rect(325,5,310,470)
  
  stroke("grey")
  strokeWeight(3)
  fill("white")
  rect(15,300,280,65)
  rect(15,365,280,65)
   rect(15,235,280,65)
  
  textFont("bold")
  textSize(35)
  fill("white")
  stroke("black")
  strokeWeight(3)
  text("Use",75,275)
  text("Exit",195,275)
  
  image(rightImg,20,250,40,40)
  
  noStroke()

  fill("rgba(126,185,251,0.89)")
  rect(126,307.5,50,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokballs",100,405)
  noStroke()
  fill("rgba(126,185,251,0.89)")
  rect(326,25,307,50)
  fill("white")
  stroke("black")
  strokeWeight(3)
  textSize(30)
  textFont("bold")
  text("Pokeball",340,60)
  text("x10",577,60)
  text("Great Ball",340,110)
  text("x2",577,110)
  
  
  
  image(itemslogo,25,315,35,35)
  image(medicinelogo,80,315,35,35)
  image(pokeballlogo,135,315,35,35)
  image(tmslogo,190,315,35,35)
  image(exitlogo,245,315,35,35)

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "battleText1"
    catchCharge.velocityY = 0
    tempPokemonSprite.visible = false
  }

  }

  if(catchState === "battleText1"){
  tempplayerSprite.visible = true
  tempPokemonSprite.visible = false
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  image(pokeballSprite,485,165,30,30)

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP - 5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <=0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)

  battleText1 = `Kai used a Pokeball!`
  battleText2 = ``
  battleText3 = ``

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)

    

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "battleText2"
    catchCharge.velocityY = 0
    tempPokemonSprite.visible = false
  }
  }

  if(catchState === "battleText2"){
 tempplayerSprite.visible = true
  tempPokemonSprite.visible = false
  tempSprite.visible = false
  tempplayerSprite.scale = 1
  tempplayerSprite.x = 140
  tempplayerSprite.y = 230
  background(battleBackround)
   fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  image(pokeballCaughtSprite,485,165,30,30)

  let playerPokemon = ""
  
  let playerHP,playermaxHP,enemyHP,enemymaxHP
  if(starterPokemon === "Rowlet"){
    playerPokemon = "Chimchar"
    playermaxHP = 23
  }
  if(starterPokemon === "Chimchar"){
    playerPokemon = "Mudkip"
    playermaxHP = 24
  }
  if(starterPokemon === "Mudkip"){
   playerPokemon = "Rowlet"
   playermaxHP = 26
   
  }
  
  tempplayerSprite.addImage(pokemonBackSprite)
  playerHP = playermaxHP - 5
  
  tempplayerSprite.visible = true

  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  fill('#70C1B3');
  noStroke();
  rect(0, 300, 640, 185);
  fill('white');
  noStroke();
  rect(10, 312.5, 620, 155);

  enemyHP = 8
  enemymaxHP = 13

  let playerRatio = playerHP/playermaxHP
  let enemyRatio = enemyHP/enemymaxHP
  
  fill("rgb(255,255,130)")
  strokeWeight(2)
  stroke(51)
  rect(395,220,240,75,30)
  
   fill("rgb(255,255,130)")
  rect(5,5,240,75,30)

  strokeWeight(1)
  textFont('Courier New');
  fill("black");
  textSize(20);
  text(`${playerPokemon}`,405,240)
  textSize(15);
  text(`HP: ${playerHP}/${playermaxHP}`,405,260)
  text(`EXP:`,405,285)
  text(`Lvl:7`,568,240)
  enemyHP = 8
  enemymaxHP = 13
   textSize(20);
  text(`Lillipup`,15,25)
  textSize(15)
  text(`Lvl:2`,178,25)
  text(`HP: ${enemyHP}/${enemymaxHP}`,15,45)
  enemyRatio = enemyHP/enemymaxHP
  fill(90, 200, 90)
  rect(15,50,enemyRatio*220,5)

  
  let playerColor = "rgb(90, 200, 90)"
  if(playerRatio >0.5){
    playerColor = "rgb(90, 200, 90)"
  }
  if(playerRatio <0.5&&playerRatio>=0.2){
    playerColor = "yellow"
  }
  if(playerRatio<0.2){
    playerColor = "red"
  }

  let enemyColor = "rgb(90, 200, 90)"
  if(enemyRatio >0.5){
    enemyColor = "rgb(90, 200, 90)"
  }
  if(enemyRatio <=0.5&&enemyRatio>=0.2){
    enemyColor = "yellow"
  }
  if(enemyRatio<0.2){
    enemyColor = "red"
  }

  if(playerHP === 0){
    playerRatio = 0.004
  }
  if(enemyHP === 0){
    enemyRatio = 0.004
  }

  
  fill(playerColor)
  rect(405,265,playerRatio*220,5)
  
  noStroke()
  fill("white")
  rect(445,277.5,180,5)


  battleText1 = `The wild Lillipup was caught!`
  battleText2 = ``
  battleText3 = ``

  textSize(25);
  textFont('Courier New');
  fill("black");
  text(battleText1.trim(),30,355)
  text(battleText2.trim(),30,389)
  text(battleText3.trim(),30,423)

    

  catchCharge.velocityY = 50
  if(catchCharge.y > 2000){
    catchCharge.y = 0
    catchState = "end"
    catchCharge.velocityY = 0
    kai.sprite.visible = true
    player.visible = true
    kai.startTalking()
    kai.talk()
    gameState = 3.3
    move = true
    kai.sprite.changeAnimation("down_s")
    tempplayerSprite.visible = false
  }
  }

}

function catchCalculator(target,ball){
  currentBattle.pokeBall = ball.name
  if(currentBattle.pokeBall !== "Master Ball"){
  let maxHP = target.stats.hp
  let currentHP = target.currentHP
  let catchRate = catchrates[target.name]
  let ballBonus = parseInt(ball.effect)
    let statusBonus = 1
  if(target.status === "BRN"||target.status === "PAR"||target.status === "PSN"||
    target.status === "TOX"){
      statusBonus = 1.5
  }
  else if(target.status === "SLP"){
    statusBonus = 2.5
  }
  else if(target.status === "FRZ"){
    statusBonus = 1.75
  }
  else{
    statusBonus = 1
  }

  const numerator = (3 * maxHP - 2 * currentHP) * catchRate * ballBonus * statusBonus;
  const denominator = 3 * maxHP;
  const catchChance = Math.min((numerator / denominator) / 255, 1);
  currentBattle.pokemonCaught = Math.random() < catchChance
}
else{
  currentBattle.pokemonCaught = true
}

}
