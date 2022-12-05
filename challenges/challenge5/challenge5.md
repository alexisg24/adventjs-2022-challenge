# Challenge 5 (EN)
To not tire the reindeer, Papa Noel wants to leave the maximum number of gifts by making the least number of trips possible.

He has an array of cities where each element is the number of gifts he can leave there. For example, [12, 3, 11, 5, 7]. He also has a limit on the number of gifts that can fit in his bag, and finally, the maximum number of cities that his reindeer can visit.

As he doesn't want to leave a city half-way, if he can't leave all the gifts that are from that city, he doesn't leave any there.

Create a program that tells him the highest sum of gifts that he could distribute, taking into account the maximum number of gifts and the maximum number of cities he can visit. For example:

    const giftsCities = [12, 3, 11, 5, 7]
    const maxGifts = 20
    const maxCities = 3

    // the highest sum of gifts to distribute
    // visiting a maximum of 3 cities
    // is 20: [12, 3, 5]

    // the highest sum would be [12, 7, 11]
    // but it exceeds the limit of 20 gifts and he
    // would have to leave a city half-way.

    getMaxGifts(giftsCities, maxGifts, maxCities) // 20 (12 + 3 + 5)

If it is not possible to make any trips that satisfies everything, the result should be 0. More examples:

    getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
    getMaxGifts([50], 15, 1) // 0
    getMaxGifts([50], 100, 1) // 50
    getMaxGifts([50, 70], 100, 1) // 70
    getMaxGifts([50, 70, 30], 100, 2) // 100
    getMaxGifts([50, 70, 30], 100, 3) // 100
    getMaxGifts([50, 70, 30], 100, 4) // 100

To consider:

- maxGifts >= 1
- giftsCities.length >= 1
- maxCities >= 1
- The number of maxCities can be greater than giftsCities.length

# Reto 5 (ES)
Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

    const giftsCities = [12, 3, 11, 5, 7]
    const maxGifts = 20
    const maxCities = 3

    // la suma más alta de regalos a repartir
    // visitando un máximo de 3 ciudades
    // es de 20: [12, 3, 5]

    // la suma más alta sería [12, 7, 11]
    // pero excede el límite de 20 regalos y tendría
    // que dejar alguna ciudad a medias.

    getMaxGifts(giftsCities, maxGifts, maxCities) // 20

Si no se puede realizar ningún viaje que satisface los requerimientos, el resultado debe ser 0. Más ejemplos:

    getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
    getMaxGifts([50], 15, 1) // 0
    getMaxGifts([50], 100, 1) // 50
    getMaxGifts([50, 70], 100, 1) // 70
    getMaxGifts([50, 70, 30], 100, 2) // 100
    getMaxGifts([50, 70, 30], 100, 3) // 100
    getMaxGifts([50, 70, 30], 100, 4) // 100

A tener en cuenta:

- maxGifts >= 1
- giftsCities.length >= 1
- maxCities >= 1
- El número de maxCities puede ser mayor a giftsCities.length

### End / Fin