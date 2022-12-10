# Challenge 9 (EN)
A company that manufactures Christmas lights has asked us to help them.

They have led strips that are like an Array. Each position is a led and can be on (1) or off (0).

Every 7 seconds, the leds change state in this way:
- If the led is off, it turns on if the led on its left (index - 1) was on before.
- If the led is on, it remains on.

They asked us for a program that tells us how many seconds it takes for all the leds to turn on. The seconds are expressed as an integer. For example:

    const leds = [0, 1, 1, 0, 1]
    countTime(leds) // 7
    // 7 seconds because in the first change
    // all the lights turned on
    // 0s: [0, 1, 1, 0, 1]
    // 7s: [1, 1, 1, 1, 1]

    countTime([0, 0, 0, 1]) // 21
    // 21 seconds because it needs three changes:
    // 0s: [0, 0, 0, 1]
    // 7s: [1, 0, 0, 1]
    // 14s: [1, 1, 0, 1]
    // 21s: [1, 1, 1, 1]

    countTime([0, 0, 1, 0, 0]) // 28
    // 28 seconds because it needs four changes:
    // 0s: [0, 0, 1, 0, 0]
    // 7s: [0, 0, 1, 1, 0]
    // 14s: [0, 0, 1, 1, 1]
    // 21s: [1, 0, 1, 1, 1]
    // 28s: [1, 1, 1, 1, 1]

Keep in mind
- The array will always have at least one led on.
- The array can have any length.
- If all the leds are on, the time is 0.

# Reto 9 (ES)
Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

Cada 7 segundos, los leds cambian de estado de esta forma:

- Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
- Si el led está encendido, se mantiene siempre encendido.

Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. Por ejemplo:

    const leds = [0, 1, 1, 0, 1]
    countTime(leds) // 7
    // 7 segundos ya que en el primer cambio
    // todas las luces se encendieron
    // 0s: [0, 1, 1, 0, 1]
    // 7s: [1, 1, 1, 1, 1]

    countTime([0, 0, 0, 1]) // 21
    // 21 segundos ya que necesita tres cambios:
    // 0s: [0, 0, 0, 1]
    // 7s: [1, 0, 0, 1]
    // 14s: [1, 1, 0, 1]
    // 21s: [1, 1, 1, 1]

    countTime([0, 0, 1, 0, 0]) // 28
    // 28 segundos ya que necesita cuatro cambios:
    // 0s: [0, 0, 1, 0, 0]
    // 7s: [0, 0, 1, 1, 0]
    // 14s: [0, 0, 1, 1, 1]
    // 21s: [1, 0, 1, 1, 1]
    // 28s: [1, 1, 1, 1, 1]

A tener en cuenta
- El array siempre tendrá al menos un led encendido.
- El array puede tener cualquier longitud.
- Si todos los leds están encendidos, el tiempo es 0.

### End / Fin