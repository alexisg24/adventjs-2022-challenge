# Challenge 12 (EN)
Santa Claus has new electric sleighs but he must control the electricity consumption because he only has a 20W battery.

We are given an array of sleighs, from worst to best, with their respective consumptions. Each sleigh is an object with two properties: name and consumption.

The consumption field is a number that represents the amount of watts (W) that consumes the sleigh for each distance unit. The name field is a string that represents the sleigh name.

Create a program that returns the name of the best sleigh available that allows us to cover the distance.

    const distance = 30
    const sleighs = [
    { name: "Gorusuke", consumption: 0.3 },
    { name: "Madeval", consumption: 0.5 },
    { name: "Lolivier", consumption: 0.7 },
    { name: "Hyuuh", consumption: 1 }
    ]

    selectSleigh(distance, sleighs) // => "Madeval"

    // Gorusuke consumes 9W to cover 30 distance
    // Madeval consumes 15W to cover 30 distance
    // Lolivier consumes 21W to cover 30 distance
    // Hyuuh consumes 30W to cover 30 distance

    // The best sleigh to cover the distance is Madeval.

    // Gorusuke covers the distance but it's a worse sleigh
    // Lolivier and Hyuuh can't cover the distance with 20W.

Remember that:
- The battery is always 20W.
- The list of sleighs is ordered from worst to best sleigh.
- You have to return the name of the best sleigh that allows us to cover the distance with the watts we have available.
- If no sleigh can be used, then return null.

# Reto 12 (ES)
Papa Noél tiene nuevos trineos eléctricos pero debe controlar el consumo eléctrico ya que sólo tiene una batería de 20W.

Nos dan un array de trineos, de peor a mejor, con sus respectivos consumos. Cada trineo es un objeto con dos propiedades: name y consumption.

El campo consumption es un número que representa la cantidad de vatios (W) que consume el trineo para cada unidad de distancia. El campo name es una cadena de texto que representa el nombre del trineo.

Crea un programa que nos devuelva el nombre del mejor trineo disponible que nos permita cubrir la distancia.

    const distance = 30
    const sleighs = [
    { name: "Dasher", consumption: 0.3 },
    { name: "Dancer", consumption: 0.5 },
    { name: "Rudolph", consumption: 0.7 },
    { name: "Midu", consumption: 1 }
    ]

    selectSleigh(distance, sleighs) // => "Dancer"

    // Dasher consume 9W para recorrer 30 de distancia
    // Dancer consume 15W para recorrer 30 de distancia
    // Rudolph consume 21W para recorrer 30 de distancia
    // Midu consume 30W para recorrer 30 de distancia

    // El mejor trineo con el que puede recorrer
    // la distancia es Dancer.

    // Dasher recorre la distancia pero es peor trineo
    // Rudolph y Midu no pueden recorrer la distancia con 20W.

Recuerda que:
- La batería siempre es de 20W.
- La lista de trineos está ordenada de peor a mejor trineo.
- Tienes que devolver el nombre del mejor trineo que nos permita cubrir la distancia con los vatios que tenemos disponibles.
- Si ningún trineo es usable para la distancia, devuelve null.

### End / Fin