const START_POS_X = 120;
const START_POS_Y = 400;

var player = {
  size: { width: 64, height: 64 },
  position: { x: START_POS_X, y: START_POS_Y },
  color: 'red',
  update: function () {
    movePlayer();
  },
  //draws the player
  draw: function () {
    context.fillStyle = this.color;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  },
};

//handles the movement of the player
function movePlayer() {
  if (key.right) {
    player.position.x += 10;
  } else if (key.left) {
    player.position.x -= 10;
  }
}
