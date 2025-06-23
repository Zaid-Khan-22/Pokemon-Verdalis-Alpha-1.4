class friendlyNPC{
    constructor(x,y,name,dialogue,func,animation){
        this.sprite = createSprite(x,y);
        this.name = name;
        this.dialogue = dialogue;
        this.sprite.addAnimation('default',animation)

        this.isTalking = false;
        this.talkIndex = 0;
        this.func = func
        this.sprite.setCollider("rectangle",0,0,this.sprite.width,this.sprite.height)
        this.sprite.immovable = true
        //this.sprite.debug = true
    }



    startTalking(){
        this.isTalking = true;
        this.talkIndex = 0;
        move = false
        moving = false
        this.justStartedDialogue = true;
    }

    
    
    nextLine(){
  if (this.talkIndex < this.dialogue[0].split("|").length - 1) {
    this.talkIndex++;
  } else {
    this.isTalking = false;
    chat = false;
    this.talkIndex = 0;
    this.func = true
  }
}


     talk() {
    if (this.isTalking === true) {
      chat = true;
      let t1op = this.dialogue[0]
      let t2op = this.dialogue[1]
      let t3op = this.dialogue[2]
      let t1,t2,t3;
      t1 = t1op.split("|")
      t2 = t2op.split("|")
      t3 = t3op.split("|")
    
        text1 = t1[this.talkIndex]
        text2 = t2[this.talkIndex]
        text3 = t3[this.talkIndex]
     
    }
  }

isTouching(player) {
  return (
    player.x < this.sprite.x + this.sprite.width+40 &&
    player.x + player.width > this.sprite.x &&
    player.y < this.sprite.y + this.sprite.height+40 &&
    player.y + player.height > this.sprite.y
  );
}

facePlayer(dir) {
  if (dir === "up") {
    this.sprite.changeAnimation("down_s");
  } else if (dir === "down") {
    this.sprite.changeAnimation("up_s");
  } else if (dir === "left") {
    this.sprite.changeAnimation("right_s");
  } else if (dir === "right") {
    this.sprite.changeAnimation("left_s");
  }
}



}