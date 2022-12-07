# Challenge 7 (EN)
In the Santa Claus stores they are doing inventory. There are three stores (which is represented as an Array each). In each store there are gifts.

We have been asked to write a program that tells us what gifts we have to buy to replenish our stores now that Christmas is approaching. A gift must be replenished when there is only stock in one of the three stores.

For example, if we have the following stores:

    const a1 = ['bike', 'car', 'bike', 'bike']
    const a2 = ['car', 'bike', 'doll', 'car']
    const a3 = ['bike', 'pc', 'pc']

    /* The store a1 has "bike" and "car".
    The store a2 has "car", "bike" and "doll".
    The store a3 has "bike" and "pc".

    The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
    */

    const gifts = getGiftsToRefill(a1, a2, a3) // ['doll', 'pc']

As you can see, the stores can have the same gift repeated several times. But, no matter how many existences there are in a store, if we do not have it in the other two, we must replenish it to have better distribution.

📝 To sum up
- Create a function getGiftsToRefill that receives three Array as parameters.
- The function must return an Array with the gifts to be replenished.
- A gift must be replenished when there is only stock in one of the three stores.
- If there is no gift to replenish, the function must return an empty Array.
- If there is more than one gift to replenish, the function must return an Array with all the gifts that need to be replenished.

# Reto 7 (ES)
En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.

Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacénes ahora que se acerca la Navidad.. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacénes.

Por ejemplo, si tenemos los siguientes almacenes:

    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']

    /* El almacén a1 tiene "bici" y "coche".
    El almacén a2 tiene "coche", "bici" y "muñeca".
    El almacén a3 tiene "bici" y "pc".

    El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.
    */

    const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

Como ves, los almacénes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

📝 Summary
- Crea una función getGiftsToRefill que reciba tres Array como parámetros.
- La función debe devolver un Array con los regalos que hay que reponer.
- Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacénes.
- Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
- Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.

### End / Fin