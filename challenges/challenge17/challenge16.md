# Challenge 17 (EN)
We're preparing the Christmas gift bags but each bag has a weight limit.

We are given an array with the names of the gifts and a number that is the maximum weight that each bag can carry. The weight of each gift is the length of its name.

Write a function that groups the gifts in bags and returns an array with the names of the gifts of each bag. To group the gifts, the names are separated by spaces (the space does not count as weight).

But keep in mind that if the weight of the gifts of a bag exceeds the maximum weight, the last gift of the bag must be separated and placed in the next bag.

    carryGifts(['game', 'bike', 'book', 'toy'], 10)
    // ['game bike', 'book toy']
    // in each bag you can carry 10kg
    // the first bag carries 'game' and 'bike' which weigh 4kg and 4kg
    // the second bag carries 'book' and ' toy' which weigh 4kg and 3kg

    carryGifts(['game', 'bike', 'book', 'toy'], 7)
    // ['game', 'bike', 'book toy']
    // in each bag you can carry 7kg
    // the first bag can only carry 'game' which weighs 4kg
    // the second bag can only carry 'bike' which weighs 4kg

    carryGifts(['game', 'bike', 'book', 'toy'], 4)
    // ['game', 'bike', 'book', 'toy']
    // in each bag you can carry 4kg
    // each bag can only carry one gift

    carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
    // ['toy', 'gamme', 'toy', 'bike']
    // in each bag you can carry 6kg
    // each bag can only carry one gift
    // note that you can not carry 'toy toy' in a bag
    // because it is not next to each other

Note:
- The gifts are always grouped in the order of appearance in the array.
- You can not change the order of the gifts in the array when grouping them.
- All the gifts can be grouped in a single bag.
- If you can not group any gift in a bag, an empty array is returned.

# Reto 17 (ES)
Estamos preparando los sacos para los regalos de Navidad pero cada saco tiene un límite de peso.

Nos dan un array con los nombres de los regalos y un número que es el peso máximo que puede llevar cada saco. El peso de cada regalo es la longitud de su nombre.

Escribe una función que agrupe los regalos en sacos y devuelva un array con los nombres de los regalos de cada saco. Para agrupar los regalos, se separan los nombres por espacios (el espacio no cuenta como peso).

¡Pero ojo! Cada saco puede llevar un máximo de peso, y si el peso de los regalos de un saco supera el peso máximo, se debe separar el último regalo del saco y ponerlo en el siguiente saco.

    carryGifts(['game', 'bike', 'book', 'toy'], 10)
    // ['game bike', 'book toy']
    // en cada saco se puede llevar 10kg
    // el primer saco lleva 'game' y 'bike' que pesan 4kg y 4kg
    // el segundo saco lleva 'book' y ' toy' que pesan 4kg y 3kg

    carryGifts(['game', 'bike', 'book', 'toy'], 7)
    // ['game', 'bike', 'book toy']
    // en cada saco se puede llevar 7kg
    // el primer saco sólo puede llevar 'game' que pesa 4kg
    // el segundo saco sólo puede llevar 'bike' que pesa 4kg
    // el tercer saco lleva 'book' y 'toy' que pesan 4kg y 3kg

    carryGifts(['game', 'bike', 'book', 'toy'], 4)
    // ['game', 'bike', 'book', 'toy']
    // en cada saco se puede llevar 4kg
    // cada saco sólo puede llevar un regalo

    carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)
    // ['toy', 'gamme', 'toy', 'bike']
    // en cada saco se puede llevar 6kg
    // cada saco sólo puede llevar un regalo
    // fíjate que no se puede llevar 'toy toy' en un saco
    // porque no está uno al lado del otro

Ten en cuenta:
- Los regalos siempre se agrupan por orden de aparición en el array.
- No puedes cambiar el orden de los regalos en el array a la hora de agruparlos.
- Se pueden agrupar todos los regalos en un solo saco.
- Si no se puede agrupar ningún regalo en un saco, se devuelve un array vacío.

### End / Fin