var gameScreen = document.getElementById('gameScreen').getContext('2d');
var canvas = document.getElementById('gameScreen');

var drops = [];
var score = 0;
var running = true;

var key = {
  upp: false,
  left: false,
  down: false,
  right: false,
};

window.requestAnimationFrame(loop);
window.setInterval(generateDrops, 1000);

function start() {
  gameScreen.font = '30px Arial';
}

function loop() {
  gameScreen.clearRect(0, 0, canvas.width, canvas.height);
  update();
  draw();
  reset();
  if (running) {
    window.requestAnimationFrame(loop);
  }
}

function reset() {}

function update() {
  player.update();
  drops.forEach((_drop) => {
    _drop.update();
  });

  for (let i = 0; i < drops.length; i++) {
    if (drops[i].position.y > canvas.height) {
      running = false;
    }
    if (colliding(drops[i], player)) {
      drops.splice(i, 1);
      i--;
      score++;
    }
  }
}

function draw() {
  drawObject(player);
  drops.forEach((_drop) => {
    _drop.draw(gameScreen);
  });
  gameScreen.fillStyle = 'black';
  gameScreen.fillText('Score:' + score, 10, 50);
  if (!running) {
    gameScreen.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
  }
  gameScreen.stroke();
}

function generateDrops() {
  var posX = Math.floor(Math.random() * 600);
  drops.push(new drop(posX, -30));
}

function drawObject(object) {
  gameScreen.fillStyle = object.color;
  gameScreen.fillRect(
    object.position.x,
    object.position.y,
    object.size.width,
    object.size.height
  );
}

function colliding(target, other) {
  if (
    target.position.x < other.position.x + other.size.width &&
    target.position.x + target.size.width > other.position.x &&
    target.position.y < other.position.y + other.size.height &&
    target.position.y + target.size.height > other.position.y
  ) {
    return true;
  } else return false;
}

start();
