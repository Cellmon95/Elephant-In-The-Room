<?php
require_once('../php/constants.php');
require_once('../php/functions.php');

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <?php require_once('../head.php') ?>
</head>

<body>
    <p>Make it so that the ants are more than elephants.</p>
    <form action="room1_end.php" method="post">
        <label for="ants">Ants:</label>
        <input type="text" id="ants" name="ants">
        <label for="elephants">Elephants:</label>
        <input type="text" id="elephants" name="elephants">
        <input type="submit" value="Submit">
    </form>
</body>

</html>
