var keycodes = {
  leftArrow: 37,
  upArrow: 38,
  rightArrow: 39,
  downArrow: 40,
};

var gameScreen = document.getElementById('gameScreen').getContext('2d');
var canvas = document.getElementById('gameScreen');

var key = {
  upp: false,
  left: false,
  down: false,
  right: false,
};

window.addEventListener(
  'keydown',
  function (e) {
    switch (e.keyCode) {
      case keycodes.leftArrow:
        key.left = true;
        console.log('left');
        break;
      case keycodes.upArrow:
        key.upp = true;
        break;
      case keycodes.rightArrow:
        key.right = true;
        break;
      case keycodes.downArrow:
        key.down = true;
        break;

      default:
        break;
    }
  },
  false
);

var player = {
  size: { width: 64, height: 64 },
  position: { x: 64, y: 64 },
};

window.requestAnimationFrame(loop);

function start() {}

function loop() {
  canva = document.getElementById('gameScreen');
  contex = canvas.getContext('2d');
  contex.clearRect(0, 0, canva.width, canva.height);
  update();
  draw();
  reset();
  window.requestAnimationFrame(loop);
}

function reset() {
  for (var item in key) {
    key[item] = false;
  }
}

function update() {
  movePlayer();
}

function movePlayer() {
  if (key.right) {
    player.position.x += 10;
  } else if (key.left) {
0    player.position.x -= 10;
  }
}

function draw() {
  drawObject(player);
  gameScreen.stroke();
}

function drawObject(object) {
  gameScreen.fillRect(
    object.position.x,
    object.position.y,
    object.size.width,
    object.size.height
  );
}

start();
