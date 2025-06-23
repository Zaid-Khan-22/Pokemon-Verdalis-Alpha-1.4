class transitionObject {
  constructor(x, y, w, h, bgState, spawnX, spawnY, key, direction, color, currentLocation, nextLocation) {
    this.sprite = createSprite(x, y, w, h);
    this.sprite.shapeColor = color;
    this.sprite.visible = false

    this.bgState = bgState;
    this.spawnX = spawnX;
    this.spawnY = spawnY;
    this.key = key;
    this.direction = direction;
    this.currentLocation = currentLocation;
    this.nextLocation = nextLocation;
  }

  checkInteraction(player, callback) {
    if (
      player.overlap(this.sprite) &&
      keyDown(this.key) &&
      playerLocation === this.currentLocation&&move === true
    ) {
      const x = (typeof this.spawnX === "function") ? this.spawnX() : this.spawnX;
      const y = (typeof this.spawnY === "function") ? this.spawnY() : this.spawnY;

      callback(this.bgState, x, y, this.nextLocation);
      tc = false;
      gc = false
      wc = false
      enemyCreatedTeam = []
      playerDirection = this.direction;
      playerLocation = this.nextLocation
    }
  }

  show() {
    drawSprite(this.sprite);
  }
}