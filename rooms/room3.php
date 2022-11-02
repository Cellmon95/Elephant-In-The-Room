<?php
require_once('../php/functions.php');
require_once('../php/constants.php');

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

<head>
    <?php require_once('../head.php'); ?>
    <link rel="stylesheet" href="../css/room3-style.css">
</head>

<body>
    <div class="garden">
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

    <p>The Elephant watched over the garden. Peacefully.</p>
    <a href="./room3_end.php">continue</a>
</body>

</html>
