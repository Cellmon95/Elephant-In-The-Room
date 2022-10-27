window.addEventListener(
  'keydown',
  function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        key.left = true;
        break;
      case 'ArrowUp':
        key.upp = true;
        break;
      case 'ArrowRight':
        key.right = true;
        break;
      case 'ArrowDown':
        key.down = true;
        break;

      default:
        break;
    }
  },
  false
);

window.addEventListener(
  'keyup',
  function (e) {
    switch (e.key) {
      case 'ArrowLeft':
        key.left = false;
        break;
      case 'ArrowUp':
        key.upp = false;
        break;
      case 'ArrowRight':
        key.right = false;
        break;
      case 'ArrowDown':
        key.down = false;
        break;

      default:
        break;
    }
  },
  false
);
