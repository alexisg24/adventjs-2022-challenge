# Challenge 6 (EN)
A couple of Christmas enthusiasts have created a Christmas decoration company. The first decoration they want to manufacture is a cube that is placed on the trees.

The problem is that they have to program the machine and they don't know how to do it. They have asked us for help to achieve it.

To create the cubes, a number with the desired size is passed to the program and it returns a string with the design of that size. For example, if we pass a 3, the program must return a cube of 3x3x3:

    const cube = createCube(3)

    // output:
      /\_\_\_\
     /\/\_\_\_\
    /\/\/\_\_\_\
    \/\/\/_/_/_/
     \/\/_/_/_/
      \/_/_/_/

As you can see, the cube has three faces visually. The symbols used to build the cube faces are: /, \, _. In order to make the cube, some spaces are needed. Also, each line is separated by a new line character \n.

Other examples of cubes:

    const cubeOfOne = createCube(1)

    // output:
    /\_\
    \/_/

    const cubeOfTwo = createCube(2)

    // output:
     /\_\_\
    /\/\_\_\
    \/\/_/_/
     \/_/_/

Take into account:

- Pay attention to the spaces in the cube.
- The cube has to be symmetrical.
- Make sure you use the correct symbols.
- Each line must be separated by a new line character \n except for the last one.
- Based on this Codewars kata

# Reto 6 (ES)
Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

    const cube = createCube(3)

      /\_\_\_\
     /\/\_\_\_\
    /\/\/\_\_\_\
    \/\/\/_/_/_/
     \/\/_/_/_/
      \/_/_/_/
Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).

Otros ejemplos de cubos:

    const cubeOfOne = createCube(1)

    /\_\
    \/_/
    const cubeOfTwo = createCube(2)

     /\_\_\
    /\/\_\_\
    \/\/_/_/
     \/_/_/

A tener en cuenta:

- Fíjate bien en los espacios en blanco que hay en el cubo.
- El cubo tiene que ser simétrico.
- Asegúrate de usar los símbolos correctos.
- Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.

### End / Fin