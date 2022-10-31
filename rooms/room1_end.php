<?php
require_once('../php/functions.php');
require_once('../php/constants.php');

const SUCCESS = "It was easy. I walk through the door.";
const FAILURE = "It's wrong. Try again.";

$succeded = null;

$ants = $_POST['ants'];
$elephants = $_POST['elephants'];


$succeded = isAntsMoreThanElephants($ants, $elephants);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('../head.php'); ?>
</head>

<body>
    <?php if ($succeded) : ?>
        <p><?= SUCCESS ?></p>
        <a href="../index.php">continue</a>
    <?php else : ?>
        <p><?= FAILURE ?></p>
        <a href="room1.php">Do it again</a>
    <?php endif; ?>
</body>

</html>
