const FALL_SPEED = 5;

function drop(posX = 0, posY = 0) {
  this.size = { width: 16, height: 16 };
  this.position = { x: posX, y: posY };
  this.color = 'blue';
}

drop.prototype.update = function () {
  fall(this);
};

drop.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(
    this.position.x,
    this.position.y,
    this.size.width,
    this.size.height
  );
};

function fall(object) {
  object.position.y += FALL_SPEED;
}
