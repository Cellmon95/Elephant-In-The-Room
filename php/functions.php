<?php

declare(strict_types=1);

function isAntsMoreThanElephants(int $ants, int $elephants): bool
{
    if ($ants > $elephants)
        return true;
    else
        return false;
}
