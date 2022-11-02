<?php
require_once '../php/functions.php';
require_once '../php/constants.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('../head.php') ?>
    <link rel="stylesheet" href="../css/room2-style.css">
    <script type="text/javascript" src="../js/room2-drop.js"></script>
    <script type="text/javascript" src="../js/room2-player.js"></script>
    <script type="text/javascript" src="../js/room2-events.js"></script>
</head>

<body>
    <p id="textPromp">Catch water for the elephant.</p>
    <canvas id="gameScreen" width="640" height="480"></canvas>
    <script type="text/javascript" src="../js/room2-game.js"></script>
</body>

</html>
