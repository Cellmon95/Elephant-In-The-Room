const START_POS_X = 120;
const START_POS_Y = 400;

var player = {
  size: { width: 64, height: 64 },
  position: { x: START_POS_X, y: START_POS_Y },
  color: 'red',
  update: function () {
    movePlayer();
  },
};

function movePlayer() {
  if (key.right) {
    player.position.x += 10;
  } else if (key.left) {
    player.position.x -= 10;
  }
}
