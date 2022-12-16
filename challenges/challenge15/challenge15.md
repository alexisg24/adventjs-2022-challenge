# Challenge 15 (EN)
A couple is putting up the Christmas tree. The boy loves Christmas decorations and wants it to be perfectly balanced. He has three types of decorations:

    Colored balls: B
    Small gifts: R
    Pine cones: P

The Christmas tree is a triangle that must be generated. They already have the base mounted, which would be the first row, and from there they have to place the decorations upwards following a formula.

    Place on top :    P     R     B     P
    If below is  :   P P   B P   R P   B R

The combinations are also reversed. For example, if below is B P, above is R. But it will also be R if below is P B. Also if below you have repeated the letter, above you use the same letter. For example: if below is B B, above is B.

With these rules, we could see the tree that we would generate with the base B P R P:

       R
      P B
     R B B
    B P R P

Write a program that receives the string B P R P and returns an array with the representation of the tree.

    decorateTree('B P R P')
    // [
    // 'R',
    // 'P B',
    // 'R B B',
    // 'B P R P'
    // ]

    decorateTree('B B') // ['B', 'B B']

Keep in mind that:
- The program always receives the text string that represents the base of the tree.
- The tree must be generated completely, that is, the base and the rows that are generated from it, until the top.
- You have to follow the formula to know which decoration to place in each position.

# Reto 15 (ES)
Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

    Bolas de colores : B
    Regalos pequeños : R
    Piñas de pino : P

El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

    Arriba coloca  :     P     R     B     P
    Si abajo tiene :    P P   B P   R P   B R

Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

       R
      P B
     R B B
    B P R P

Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

    decorateTree('B P R P')
    // [
    // 'R',
    // 'P B',
    // 'R B B',
    // 'B P R P'
    // ]

    decorateTree('B B') // ['B', 'B B']

Ten en cuenta que:
- El programa recibe siempre la cadena de texto que representa la base del árbol.
- Hay que generar el árbol completo, es decir, la base y las filas que se generan a partir de ella, hasta arriba.
- Hay que seguir la fórmula para saber qué decoración colocar en cada posición.

### End / Fin