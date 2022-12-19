# Challenge 18 (EN)
We are printing barcodes for the packages. At Santa's factory we use a numbering system where each number is printed with a different ink. It's an old but reliable system. However, sometimes we run out of ink for a number.

Write a function that receives the number we don't have ink for (a number between 0 and 9) and as a second parameter, the number of barcodes to print (we start from 1 to the number we receive).

It should return an array with the numbers that include the number we don't have ink for. Let's see an example:
    dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

    // we don't have ink for the number 1
    // we have to print 15 barcodes from 1 to 15
    // the barcodes that will be wrong because of the lack of ink are:
    // 1, 10, 11, 12, 13, 14, 15

    dryNumber(2, 20) // [2, 12, 20]

    // we don't have ink for the number 2
    // we have to print 20 barcodes from 1 to 20
    // the barcodes that will be wrong because of the lack of ink are:

    // 2, 12, 20

Keep in mind that:
- The number we don't have ink for can only be between 0 and 9.
- The number we don't have ink for can be in any position of the barcode.
- The number of barcodes to print can be very large.

# Reto 18 (ES)
Estamos imprimiendo los códigos de barra para los envíos en la fábrica de Papá Noel. Usamos un sistema de estampación de números donde cada dígito se imprime con una tinta diferente. Es un sistema antiguo pero fiable. Sin embargo, a veces nos quedamos sin tinta de un dígito.

Escribe una función que recibe el dígito del que no tenemos tinta (un número que será del 0 al 9) y como segundo parámetro, el número de códigos de barras que hay que imprimir (empezamos desde 1 hasta este número que recibimos).

Nos debe devolver un array con los números que incluyen el número que no tenemos tinta. Veamos un ejemplo:

    dryNumber(1, 15) // [1, 10, 11, 12, 13, 14, 15]

    // no tenemos tinta para el dígito 1
    // tenemos que imprimir 15 códigos de barras del 1 al 15
    // los códigos de barras que saldrán mal por falta de tinta son:
    // 1, 10, 11, 12, 13, 14, 15

    dryNumber(2, 20) // [2, 12, 20]

    // no tenemos tinta para el dígito 2
    // tenemos que imprimir 20 códigos de barras del 1 al 20
    // los códigos de barras que saldrán mal por falta de tinta son:
    // 2, 12, 20

Ten en cuenta que:
- El número del que no tenemos tinta sólo puede ser del 0 al 9.
- El número del que no tenemos tinta puede estar en cualquier posición del código de barras.
- El número de códigos de barras que hay que imprimir puede ser muy grande.

### End / Fin