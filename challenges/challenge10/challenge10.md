# Challenge 10 (EN)
Create a program that checks if Santa's sleigh makes a parabola jump between cities. You receive a number array that represents the height at which the sleigh is at each moment.

For the parabola to be correct, the sleigh's trip must be ascending at the beginning and descending at the end. It cannot go up again once it has gone down, nor can it start the trip going down. Let's see some examples:

    const heights = [1, 3, 8, 5, 2]
    checkJump(heights) // true

    /*
    It's `true`.
    The jump goes up-down.

        8 (highest point)
       ↗ ↘
      3   5
     ↗     ↘
    1       2
    */

    const heights = [1, 7, 3, 5]
    checkJump(heights) // false

    /*
    It's `false`.
    It goes up-down-up.

     7   5 
    ↗ ↘ ↗
    1   3

We need the program to return a boolean that indicates whether the sleigh makes a parabola or not.

Things to keep in mind
- The jump is valid if it goes up once and down once. If the sleigh stays at the same height between two positions, the parabola continues.
- It is not necessary for the starting and ending points to be the same (cities can be at different heights).

# Reto 10 (ES)
Crea un programa que compruebe que el trineo de Santa Claus hace una parabola al saltar entre ciudades. Recibes un array de números que representan la altura en la que se encuentra el trineo en cada momento.

Para que la parabola sea correcta, el viaje del trineo debe ser ascendente al principio, llegar al punto más alto y descender hasta el final. No puede volver a subir una vez que ha bajado, ni puede iniciar el viaje bajando. Veamos unos ejemplos:

    const heights = [1, 3, 8, 5, 2]
    checkJump(heights) // true

    /*
    Es `true`.
    El salto va de abajo a arriba y luego de arriba a abajo:

        8 (punto más alto)
       ↗ ↘
      3   5
     ↗     ↘
    1       2
    */

    const heights = [1, 7, 3, 5]
    checkJump(heights) // false

    /*
    Es `false`.
    Va de abajo a arriba, de arriba a abajo y luego sube otra vez.

    7   5 
    ↗ ↘ ↗
    1   3
Necesitamos que el programa devuelva un boolean que indique si el trineo hace una parabola o no.

A tener en cuenta
- Para que el salto sea válido tiene que subir una vez y bajar una vez. Si durante el salto se queda en la misma altura entre dos posiciones, la parabola continua.
- No hace falta que el punto de inicio y final sean el mismo (las ciudades pueden estar a diferentes alturas).

### End / Fin