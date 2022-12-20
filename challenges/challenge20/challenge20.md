# Challenge 20 (EN)
Santa Claus has realized that even with the collaboration of all the elves he will not be able to deliver all the gifts in time. That's why he will ask for help from his friends at Autentia.

From Autentia they have indicated that they need a program to know which team of reindeer to send to each country. There are different types of reindeer and each one of them can carry a weight of gifts. For example:

    const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
    ]

In Santa Claus' list of gifts, the weight of each gift and its destination country are expressed. The weight of the gifts is always a natural number. For example:

    const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
    ]

Autentia tells us that, for the team of reindeer to send to each country to be optimal, we should:

- Send the maximum number of reindeer possible of greater load capacity
- Make the most of the weight that each reindeer can carry.
- The reindeer have a rather strange character and do not accept that in the team there are more reindeer of a type than reindeer of the next type in descending order of load capacity.
- For example. To France (17) you would not send seventeen diesel reindeer (17 * 1). There are reindeer with greater load capacity, but you would not send a nuclear reindeer (50), since you would be wasting its capacity. An electric reindeer (10) would be sent, one gasoline (5) and two diesel (2 * 1).
- To Spain (37) you could not send a team made up of three electric reindeer (3 * 10), one gasoline (5) and two diesel (2 * 1), since there cannot be more electric reindeer than gasoline. Nor two electric reindeer (2 * 10), three gasoline (3 * 5) and two diesel (2 * 1), since there cannot be more gasoline than diesel. You would have to send two electric reindeer (2 * 10), two gasoline (2 * 5) and seven diesel (7 * 1).

    const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
    ]

    const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
    ]

    howManyReindeers(reindeerTypes, gifts)
    // [{
    //   country: 'Spain',
    //   reindeers: [
    //     { type: 'Electric', num: 1 },
    //     { type: 'Gasoline', num: 3 },
    //     { type: 'Diesel', num: 5 }
    //   ]
    // }, {
    //   country: 'France',
    //   reindeers: [
    //     { type: 'Electric', num: 1 },
    //     { type: 'Gasoline', num: 1 },
    //     { type: 'Diesel', num: 2 }
    //   ]
    //  }, {
    //   country: 'Italy',
    //   reindeers: [
    //     { type: 'Electric', num: 3 },
    //     { type: 'Gasoline', num: 3 },
    //     { type: 'Diesel', num: 5 }
    //   ]
    // }]

To take into account:
- There will always be a reindeer type with a load capacity of 1.
- There will always be at least two types of reindeer available.
- There is no limit to the number of reindeer of the same type to send as long as it complies with the restrictions previously stated.
- The reindeer types are always ordered by descending load capacity.

# Reto 20 (ES)
Papá Noel se ha dado cuenta de que ni con la colaboración de todos los elfos va a poder entregar todos los regalos a tiempo. Por eso va a pedir ayuda a sus amigos de Autentia.

Desde Autentia nos han indicado que necesitan un porgrama para saber qué equipo de renos enviar a cada país. Hay diferentes tipos de renos y cada uno de ellos puede llevar un peso de regalos. Por ejemplo:

    const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
    ]

En el listado de regalos que tiene Papá Noel se expresa cuánto pesa cada regalo y cuál es su país destino. El peso de los regalos siempre es un número natural. Por ejemplo:

    const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'Spain', weight: 7 },
    { country: 'France', weight: 17 }
    ]

Autentia nos comenta que, para que el equipo de renos a enviar a cada país sea óptimo, deberíamos:

- Enviar el mayor número de renos posibles de mayor capacidad de carga
- Aprovechar al máximo el peso que cada reno puede soportar.
- Los renos tienen un comportamiento extraño y no admiten que en el equipo haya más renos de un tipo que renos del siguiente tipo por orden descendente de capacidad de carga.
- Por ejemplo. A Francia (17) no se mandarían diecisiete renos diésel (17 * 1). Hay renos con mayor capacidad de carga, pero tampoco se mandaría un reno nuclear (50), ya que se estaría desaprovechando su capacidad. Se mandaría un reno eléctrico (10), uno gasolina (5) y dos diésel (2 * 1).

A España (37) no se podría mandar un equipo formado por tres eléctricos (3 * 10), uno gasolina (5) y dos diésel (2 * 1), ya que no puede haber más eléctricos que a gasolina. Tampoco dos eléctricos (2 * 10), tres gasolina (3 * 5) y dos diésel (2 * 1), pues no puede haber más a gasolina que a diésel. Habría que mandar dos eléctricos (2 * 10), dos a gasolina (2 * 5) y siete a diésel (7 * 1).

    const reindeerTypes = [
    { type: 'Nuclear', weightCapacity: 50 },
    { type: 'Electric', weightCapacity: 10 },
    { type: 'Gasoline', weightCapacity: 5 },
    { type: 'Diesel', weightCapacity: 1 }
    ]

    const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'France', weight: 17 },
    { country: 'Italy', weight: 50 }
    ]

    howManyReindeers(reindeerTypes, gifts)
    // [{
    //   country: 'Spain',
    //   reindeers: [
    //     { type: 'Electric', num: 1 },
    //     { type: 'Gasoline', num: 3 },
    //     { type: 'Diesel', num: 5 }
    //   ]
    // }, {
    //   country: 'France',
    //   reindeers: [
    //     { type: 'Electric', num: 1 },
    //     { type: 'Gasoline', num: 1 },
    //     { type: 'Diesel', num: 2 }
    //   ]
    //  }, {
    //   country: 'Italy',
    //   reindeers: [
    //     { type: 'Electric', num: 3 },
    //     { type: 'Gasoline', num: 3 },
    //     { type: 'Diesel', num: 5 }
    //   ]
    // }]

A tener en cuenta:
- Siempre habrá un tipo de reno con capacidad de carga 1.
- Siempre habrá al menos dos tipos de renos disponibles.
- No existe límite de renos de un mismo tipo a enviar siempre y cuando se ciña a las restricciones anteriormente expuestas.
- Los renos siempre estarán ordenados por capacidad de carga de mayor a menor.

### End / Fin