# Challenge 22 (EN)
Verify that all independent sequences of Christmas lighting systems are in strictly increasing order. We have two arrays: systemNames and stepNumbers.

systemNames contains the names of the Christmas lighting systems, and stepNumbers contains the step numbers of each system.

We must verify that the stepNumbers of each system are in strictly increasing order. If this is true, return true; otherwise, return false.

For example:
    const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
    const stepNumbers = [1, 33, 10, 2, 44, 20]

    checkStepNumbers(systemNames, stepNumbers) // => true

    // tree_1 has steps: [1, 2]
    // tree_2 has steps: [33, 44]
    // house has steps: [10, 20]

    // true: The steps of each system are in strictly increasing order

    checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

    // tree_1 has steps: [2, 1]
    // house has steps: [10]

    // false: tree_1 has steps in decreasing order

Note that:
- The position of the system name in systemNames and the step number in stepNumbers correspond to the same system.
- The steps in stepNumbers can be repeated for different systems.

# Reto 22 (ES)
Verifica que todas las secuencias independientes de sistemas de iluminación navideña estén en orden estrictamente creciente. Tenemos dos arrays: systemNames y stepNumbers.

systemNames contiene los nombres de los sistemas de iluminación navideña, y stepNumbers contiene los números de paso de cada sistema.

Debemos verificar que los stepNumbers de cada sistema estén en orden estrictamente creciente. Si esto es cierto, devuelve true; de lo contrario, devuelve false.

Por ejemplo:
    const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
    const stepNumbers = [1, 33, 10, 2, 44, 20]

    checkStepNumbers(systemNames, stepNumbers) // => true

    // tree_1 tiene los pasos: [1, 2]
    // tree_2 tiene los pasos: [33, 44]
    // house tiene los pasos: [10, 20]

    // true: Los pasos de cada sistema están en orden estrictamente creciente

    checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]) // => false

    // tree_1 tiene los pasos: [2, 1]
    // house tiene los pasos: [10]

    // false: tree_1 tiene los pasos de forma decreciente

Ten en cuenta que:
- La posición del nombre del sistema en systemNames y el número de paso en stepNumbers corresponden al mismo sistema.
- Los pasos en stepNumbers pueden repetirse para diferentes sistemas.

### End / Fin