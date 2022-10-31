<?php

$map = [
    ['G', 'M', 'M', 'M', 'G', 'G', 'G', 'G'],
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
    ['G', 'G', 'G', 'G', 'W', 'W', 'G', 'G'],
    ['G', 'M', 'G', 'G', 'W', 'W', 'G', 'G'],
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
    ['G', 'M', 'G', 'G', 'G', 'G', 'G', 'G'],
    ['G', 'G', 'M', 'G', 'M', 'G', 'M', 'G'],
    ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G']
];


$player = ['posX' => 6, 'posY' => 5, 'playerImgsrc' => '../images/player.png'];

define('TILE_VALUES', ['G' => '../images/grass.png', 'M' => '../images/mountains.png', 'W' => '../images/water.png']);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>


<body>
    <div>
        <?php
        foreach ($map as $y => $coloumn) {
            foreach ($coloumn as $x => $tile) {
                if ($player['posX'] === $x && $player['posY'] === $y) : ?>
                    <img src=<?= $player['playerImgsrc'] ?>>
                <?php else : ?>
                    <img src=<?= TILE_VALUES[$tile] ?>>
                <?php endif; ?>
        <?php
            };
            echo '<br>';
        };
        ?>

    </div>

    <div>
        <button>North</button>
        <button>East</button>
        <button>South</button>
        <button>West</button>
    </div>
</body>

</html>
