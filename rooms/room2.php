<?php
require_once '../php/functions.php';
require_once '../php/constants.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        #gameScreen {
            border: solid;
        }
    </style>
    <title><?= TITLE ?></title>
    <script type="text/javascript" src="../js/room2-drop.js"></script>
    <script type="text/javascript" src="../js/room2-player.js"></script>
    <script type="text/javascript" src="../js/room2-events.js"></script>
</head>

<body>
    <canvas id="gameScreen" width="640" height="480"></canvas>
    <script type="text/javascript" src="../js/room2-game.js"></script>
</body>

</html>
