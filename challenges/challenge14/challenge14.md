# Challenge 14 (EN)
Santa Claus is building ice pyramids in the North Pole to train his reindeers.

Each reindeer starts at the top of the pyramid and must choose the optimal path down to travel it in the shortest time possible. Each level has a number that determines the time it takes to get there.

When arriving at a position, the reindeer can only slide down and diagonally to the left or right. Visually, the pyramid looks like this:

        0
       / \
      7   4
     / \ / \
    2   4   6
In code we represent it like this:

    [
      [0],
      [7, 4],
      [2, 4, 6]
    ]

Santa Claus needs a program that tells him what the minimum time each reindeer can take to slide down the pyramid using the optimal path.

In the previous example, the optimal path is 0 -> 4 -> 4, which takes a total of 0 + 4 + 4 = 8 units of time. The result would be: 8.

Why is it not 6? It is not 0 -> 4 -> 2 because when you go down to the position of the 4 you can no longer diagonally reach the position of the 2. So the shortest possible path is 8. More examples:

    getOptimalPath([[0], [2, 3]]) // 2

    getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5

    getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8

To keep in mind:
- Keep in mind that you can only go down diagonally and down from any position.
- The first position of the pyramid can be different from 0.
- Pyramids can have up to 10 levels.
- The numbers in the pyramids can be negative.

# Reto 14 (ES)
Santa Claus está construyendo pirámides de hielo en el Polo Norte para entrenar a sus renos.

Cada reno comienza en la cima de la pirámide y debe elegir el camino óptimo hacia abajo para recorrerlo en el menor tiempo posible. Cada nivel tiene un número que determina el tiempo que necesita para llegar ahí.

Al llegar a una posición, el reno solo puede deslizarse hacia abajo y en diagonal hacia la izquierda o la derecha. Visualmente, la pirámide se ve así:

        0
       / \
      7   4
     / \ / \
    2   4   6
En código la representamos así:

    [
      [0],
      [7, 4],
      [2, 4, 6]
    ]
Santa Claus necesita un programa que le dice cuál es el tiempo mínimo que puede tomar cada reno para deslizarse por la pirámide usando el camino más óptimo.

En el ejemplo anterior, el camino más óptimo es 0 -> 4 -> 4, que toma un total de 0 + 4 + 4 = 8 unidades de tiempo. El resultado sería: 8.

¿Por qué no es 6? No es 0 -> 4 -> 2 porque al bajar a la posición del 4 ya no puede diagonalmente llegar a la posición del 2. Así que el camino más corto posible es 8. Más ejemplos:

    getOptimalPath([[0], [2, 3]]) // 2
    // 0 -> 2

    getOptimalPath([[0], [3, 4], [9, 8, 1]]) // 5
    // 0 -> 4 -> 1

    getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]) // 8
    // 1 -> 1 -> 5 -> 1

A tener en cuenta:
- Ten en cuenta que sólo puedes bajar en diagonal y hacia abajo desde cualquier posición.
- La primera posición de la pirámide puede ser diferente a 0.
- Las pirámides pueden tener hasta 10 niveles.
- Los números en las pirámides pueden ser negativos.

### End / Fin