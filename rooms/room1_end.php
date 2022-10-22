<?php
require_once '../php/functions.php';

const SUCCESS = "It was easy. The Elephant said. I walk throug the door.";
const FAILURE = "It's wrong. Try again.";

$succeded = null;

$ants = $_POST['ants'];
$elephants = $_POST['elephants'];


$succeded = isAntsMoreThanElephants($ants, $elephants);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php if ($succeded) : ?>
        <p><?= SUCCESS ?></p>
        <a href="../index.php">continue</a>
    <?php else : ?>
        <p><?= FAILURE ?></p>
        <a href="room1.php">do it again</a>
    <?php endif; ?>
</body>

</html>
