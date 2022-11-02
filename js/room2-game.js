//get the canvas and its context so you can draw graphics
const context = document.getElementById('gameScreen').getContext('2d');
const canvas = document.getElementById('gameScreen');

const drops = [];
let score = 0;
let running = true;
let gameFinished = false;

//the key is down or not
const key = {
  upp: false,
  left: false,
  down: false,
  right: false,
};

window.requestAnimationFrame(loop);
const dropInterval = window.setInterval(generateDrops, 1000);
const finishGameInterval = window.setInterval(finishGame, 15000);

//finish the game
function finishGame() {
  gameFinished = true;
  generateDrops();
}

function start() {
  context.font = '30px Arial';
}

//the gameloop that runs the game.
function loop() {
  //clear the screen so we can redraw.
  context.clearRect(0, 0, canvas.width, canvas.height);

  update();
  draw();
  checkIfGameIsStillRunning();
}

//if the game is still running continue the loop else not.
function checkIfGameIsStillRunning() {
  if (running) {
    window.requestAnimationFrame(loop);
  } else {
    handleGameOver();
  }
}

//handles all that happens when the game is over.
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

//handles all the logic in the game
function update() {
  player.update();

  drops.forEach((_drop) => {
    _drop.update();
  });
  handleDropLogic();
}

function handleDropLogic() {
  for (let i = 0; i < drops.length; i++) {
    //check if the drop have hit the grund and if it does then game stops.
    if (drops[i].position.y > canvas.height) {
      running = false;
    }
    //if the drop hits the player than score increases.
    if (colliding(drops[i], player)) {
      drops.splice(i, 1);
      i--;
      score++;
    }
  }
}
//handles the graphics of the game
function draw() {
  player.draw();

  drops.forEach((_drop) => {
    _drop.draw(context);
  });

  drawScoreText();

  if (!running) {
    printGameOver();
  }

  context.stroke();
}

//draws the text for the score
function drawScoreText() {
  context.fillStyle = 'black';
  context.fillText('Score:' + score, 10, 50);
}

const printGameOver = () =>
  context.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);

function generateDrops() {
  var posX = Math.floor(Math.random() * canvas.width);
  drops.push(new drop(posX, -30));

  if (gameFinished) {
    pourRain();
  }
}

//when the game is finished there is a big fall of drops that the player can't catch.
function pourRain() {
  for (let i = 0; i <= 50; i++) {
    drops.push(new drop(i * 38, -30));
    clearInterval(dropInterval);
  }
}

//checks if there have been a collision between the player and the drops.
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

//returns true or false depending if there been a colison between target and other
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
