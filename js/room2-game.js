var context = document.getElementById('gameScreen').getContext('2d');
var canvas = document.getElementById('gameScreen');

var drops = [];
var score = 0;
var running = true;
var gameFinished = false;

var key = {
  upp: false,
  left: false,
  down: false,
  right: false,
};

window.requestAnimationFrame(loop);
const dropInterval = window.setInterval(generateDrops, 1000);
const finishGameInterval = window.setInterval(finishGame, 15000);

function finishGame() {
  gameFinished = true;
  generateDrops();
}

function start() {
  context.font = '30px Arial';
}

function loop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  update();
  draw();
  reset();
  console.log('Test');
  if (running) {
    window.requestAnimationFrame(loop);
  } else {
    handleGameOver();
  }
}

function handleGameOver() {
  if (gameFinished) {
    var textPromp = document.getElementById('textPromp');
    textPromp.innerHTML =
      'In the end it was impossible. <a id="resetLink" href="./room2_end.php">Continue</a>';
  } else {
    var textPromp = document.getElementById('textPromp');
    textPromp.innerHTML = 'Try again. <a id="resetLink" href="">Reset</a>';
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
    _drop.draw(context);
  });

  context.fillStyle = 'black';
  context.fillText('Score:' + score, 10, 50);

  if (!running) {
    context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
  }

  context.stroke();
}

function generateDrops() {
  var posX = Math.floor(Math.random() * 600);
  drops.push(new drop(posX, -30));

  if (gameFinished) {
    for (let i = 0; i <= 50; i++) {
      drops.push(new drop(i * 38, -30));
      clearInterval(dropInterval);
    }
  }
}

function drawObject(object) {
  context.fillStyle = object.color;
  context.fillRect(
    object.position.x,
    object.position.y,
    object.size.width,
    object.size.height
  );
}

function handleCollision() {
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
