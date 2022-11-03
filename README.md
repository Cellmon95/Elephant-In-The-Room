# Elephant In The Room

The Elephant in the room is a small story about a life.
https://elephant-in-the-room.avidus.se/

# Installation

## The Hard Way

Get a virtual server and run it from there.

## The Easy Way

Have a web browser and click on the link.

# Code Review

Code review written by [Vali Al Osachi](https://github.com/valisaurus).

1. `index.php:8-12` - Style-taggen hade inte behövts, all styling kan ligga i css-filen som kan länkas genom <link ahref="" stylesheet> som läggs i header.
2. `room1.php:8-9` - <!DOCTYPE html> <html lang="en"> kan ligga i header och sedan requieras in på alla sidor, detta förekommer även i room2.php.
3. `style.css:` - css-filen länkas inte någonstans.
4. `alla sidor.` - skulle önska kommentarer inne i koden, hade varit lättare att hänga med i vad som händer i koden.
5. `alla room-sidorna` - kunde ha en footer med <body> och <html> stängsnistaggar som kan requiras in. Detta för mindre upprepning och mer lättläst kod.
6. `room2.php` - koden kan inte hantera tomma fält eller andra tecken än siffror.

# Testers

Tested by the following people:

1. Anna Brumark
2. Adam Garali
3. Styrbjörn Nordberg
