# Challenge 21 (EN)
There are too many letters from children asking for gifts and it is very difficult that we can inventory all of them. That's why we have decided to create a program that draws us a table with the gifts we ask for and their quantities.

For this we are given an array of objects with the names of the gifts and their quantities. Write a function that receives this array and returns a string with the drawn table.

    printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
    ])
    +++++++++++++++++++
    | Gift | Quantity |
    | ---- | -------- |
    | Game | 2        |
    | Bike | 1        |
    | Book | 7        |
    *******************

Another example where you can see that the table always uses only the exact space depending on the length of the names of the gifts and the quantities.

    printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
    ++++++++++++++++++++++++++++++++++++++
    | Gift               | Quantity      |
    | ------------------ | ------------- |
    | PlayStation 5      | 9234782374892 |
    | Book Learn Web Dev | 23531         |
    **************************************

As you can see, the size of the cells depends on the length of the names of the gifts and the quantities, although they will at least have to be the space of the titles Gift and Quantity respectively.

The table uses the symbols: + for the top border, * for the bottom border, - for the horizontal lines and | for the vertical lines.

Keep in mind:
- Use only the space you need to draw the table.
- Adapt the table to the length of the names of the gifts and the quantities or the titles of the columns.
- There is no need to order the results.
- The table does not end with a line break.

# Reto 21 (ES)
Hay muchas cartas de niños pidiendo regalos y es muy difícil que podamos hacer inventario de todos ellos. Por eso, hemos decidido crear un programa que nos dibuje una tabla con los regalos que nos piden y sus cantidades.

Para ello nos dan un array de objetos con los nombres de los regalos y sus cantidades. Escribe una función que reciba este array y devuelva una cadena con la tabla dibujada.

    printTable([
    { name: 'Game', quantity: 2 },
    { name: 'Bike', quantity: 1 },
    { name: 'Book', quantity: 3 }
    ])
    +++++++++++++++++++
    | Gift | Quantity |
    | ---- | -------- |
    | Game | 2        |
    | Bike | 1        |
    | Book | 3        |
    *******************

Otro ejemplo donde se puede ver que la tabla siempre usa sólo el espacio justo dependiendo de la longitud de los nombres de los regalos y de las cantidades.

    printTable([
    { name: 'PlayStation 5', quantity: 9234782374892 },
    { name: 'Book Learn Web Dev', quantity: 23531 }
    ])
    ++++++++++++++++++++++++++++++++++++++
    | Gift               | Quantity      |
    | ------------------ | ------------- |
    | PlayStation 5      | 9234782374892 |
    | Book Learn Web Dev | 23531         |
    **************************************

Como ves, el tamaño de las celdas depende de la longitud de los nombres de los regalos y de las cantidades, aunque como mínimo tendrán que ser del espacio de los títulos Gift y Quantity respectivamente.

La tabla usa los símbolos: + para el borde superior, * para el borde inferior, - para las líneas horizontales y | para las líneas verticales.

Ten en cuenta:
- Usa sólo el espacio que necesitas para dibujar la tabla.
- Adapta la tabla a la longitud de los nombres de los regalos y de las cantidades o los títulos de las columnas.
- No hace falta que ordenes los resultados.
- La tabla no termina con salto de línea.

### End / Fin