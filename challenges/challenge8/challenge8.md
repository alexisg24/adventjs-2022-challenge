# Challenge 8 (EN)
Some electric sleds have broken down and the elves are looking for spare parts to fix them, but they are not sure if the parts they have are valid.

The spare parts are strings and the mechanic Elfon Masc has said that a spare part is valid if the part can be a palindrome after removing, at most, one character.

A palindrome is a word or phrase that reads the same from left to right as it does from right to left.

Our function should return a boolean that indicates whether the spare part is valid or not with that rule:

    checkPart("uwu") // true
    // "uwu" is a palindrome without removing any character

    checkPart("miidim") // true
    // "miidim" can be a palindrome after removing the first "i"

    checkPart("midu") // false
    // "midu" cannot be a palindrome after removing a character

# Reto 8 (ES)
Se han estropeado algunos trineos eléctricos y los elfos están buscando piezas de respuesto para arreglarlos, pero no tienen claro si las piezas que tienen sirven.

Las piezas de repuesto son cadenas de texto y el mecánico Elfon Masc ha dicho que una pieza de repuesto es válida si la pieza puede ser un palíndromo después de eliminar, como máximo, un carácter.

Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

Nuestra función debe devolver un booleano que indique si la pieza de repuesto es válida o no con esa regla:

    checkPart("uwu") // true
    // "uwu" es un palíndromo sin eliminar ningún carácter

    checkPart("miidim") // true
    // "miidim" puede ser un palíndromo después de eliminar la primera "i"
    // ya que "midim" es un palíndromo

    checkPart("midu") // false
    // "midu" no puede ser un palíndromo después de eliminar un carácter

### End / Fin