# Challenge 11 (EN)
Santa Claus is a bit worried because the preparations are taking a long time. He has got a Scrum certification and has decided to use the Scrum methodology to organize the work of his elves.

The elfs tell him the expected duration of the tasks with a string with the format hh:mm:ss and in the same format how long they have been working on it.

But Santa Claus does not get quickly if there is too much or too little left to finish, so he has asked us to make a program that tells us what portion of the task has already been completed.

For example, if the task lasts 03:00:00 and they have been working for 01:00:00 then they have already completed 1/3 of the task. In code:

    getCompleted('01:00:00', '03:00:00') // '1/3'
    getCompleted('02:00:00', '04:00:00') // '1/2'
    getCompleted('01:00:00', '01:00:00') // '1/1'
    getCompleted('00:10:00', '01:00:00') // '1/6'
    getCompleted('01:10:10', '03:30:30') // '1/3'
    getCompleted('03:30:30', '05:50:50') // '3/5'

Note:
- The time format is hh:mm:ss.
- The output format is a string a/b where a is the portion of the task that has already been completed and b is the portion of the task that is left to complete.
- The portion is always shown with the smallest fraction possible. (for example, 2/4 will never be shown because it can be represented as 1/2).
- If the task has already been completed, the fraction would be 1/1.
- No elf has been mistreated during the execution of this challenge nor have they had to use Scrum for real.

# Reto 11 (ES)
Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.

Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.

Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.

Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

    getCompleted('01:00:00', '03:00:00') // '1/3'
    getCompleted('02:00:00', '04:00:00') // '1/2'
    getCompleted('01:00:00', '01:00:00') // '1/1'
    getCompleted('00:10:00', '01:00:00') // '1/6'
    getCompleted('01:10:10', '03:30:30') // '1/3'
    getCompleted('03:30:30', '05:50:50') // '3/5'

Ten en cuenta:

- El formato de la hora es hh:mm:ss.
- El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.
- La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).
- Si ya se ha completado la tarea, la fracción sería 1/1.
- Ningun elfo ha sido maltradado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.

### End / Fin