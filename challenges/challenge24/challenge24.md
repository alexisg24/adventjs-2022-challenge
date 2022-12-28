# Challenge 24 (EN)
It's the day! Today we're going to deliver gifts… but the warehouses are a maze and the elves are lost.

Indielfo Jones wants to write a program that, upon receiving a matrix, knows if it can quickly exit the maze from its entrance to the exit.

Mazes have the following positions:

W: It's a wall, you can't pass through there. S: Entry point to the warehouse. E: Exit point from the warehouse. : White spaces are where you can pass through.

Valid movements are from one position up, down, left, or right. You can't move diagonally.

    canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
    ]) // -> true

    // You can exit because you start at [0, 4]
    // and there's a path to the exit which is [4, 4]

    canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
    ]) // -> false

    // There's no way to get from [0, 4] to [4, 4]

Remember that:
- You only have to return whether you can exit the maze with a boolean.
- You can't jump over W walls.
- You can't exit the limits of the matrix, you always have to follow an internal path.

# Reto 24 (ES)
¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.

Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.

Los laberintos tienen las siguientes posiciones:

W: Es una pared, no se puede pasar por ahí.
S: Punto de entrada al almacén.
E: Punto de salida del almacén.
: Los espacios en blanco es por donde se puede pasar.
Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.

    canExit([
    [' ', ' ', 'W', ' ', 'S'],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
    ]) // -> true

    // Se puede salir porque empezamos en [0, 4]
    // y hay un camino hasta la salida que es [4, 4]

    canExit([
    [' ', ' ', 'W', 'W', 'S'],
    [' ', ' ', ' ', 'W', ' '],
    [' ', ' ', ' ', 'W', ' '],
    ['W', 'W', ' ', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'E']
    ]) // -> false

    // No hay manera de llegar de [0, 4] a [4, 4]

Recuerda que:
- Sólo tienes que devolver si se puede salir del laberinto con un booleano.
- Las paredes W no se pueden saltar.
- No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.

### End / Fin