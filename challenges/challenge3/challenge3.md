# Challenge 3 (EN)
You are given a pack of Christmas gifts that Santa Claus wants to deliver to the children. Each gift is represented by a string. Santa Claus has a sleigh that can carry a limited weight, and each gift inside the pack has a weight that is equal to the number of letters in the gift's name.

Santa Claus also has a list of reindeer that can help him deliver the gifts. Each reindeer has a maximum weight limit that it can carry. The maximum weight limit of each reindeer is equal to twice the number of letters in its name.

Your task is to implement a function distributeGifts(packOfGifts, reindeers) that receives a pack of gifts and a list of reindeer and returns the maximum number of gifts that Santa Claus can deliver. Packs of gifts can't be splitted.

    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]

    // pack weights 4 + 4 + 4 = 12
    // reindeers can carry (2 * 6) + (2 * 6) = 24
    distributeGifts(packOfGifts, reindeers) // 2

Things to keep in mind:
- The pack of gifts can't be splitted.
- Gifts and reindeers names length will always be greater than 0.

# Reto 3 (ES)
Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada renos tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]

    // el pack de regalos pesa 4 + 4 + 4 = 12
    // los renos pueden llevar (2 * 6) + (2 * 6) = 24
    // por lo tanto, Santa Claus puede entregar 2 cajas de regalos

    distributeGifts(packOfGifts, reindeers) // 2

Cosas a tener en cuenta:
- Las cajas de regalos no se pueden dividir.
- Los nombres de los regalos y los renos siempre serán mayores que 0.

### End / Fin