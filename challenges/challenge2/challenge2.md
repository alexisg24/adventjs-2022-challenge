# Challenge 2 (EN)
A millionaire has bought a social network and it doesn't bring good news. He has announced that each time a working day is lost due to a holiday, it will have to be compensated with two extra hours another day of the same year.

Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the number of extra hours that would be done that year:

    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

    // 01/06 is January 6, Thursday. Count.
    // 04/01 is April 1, Friday. Count.
    // 12/25 is December 25, Sunday. Do not count.

    countHours(year, holidays) // 2 days -> 4 extra hours in the year

Things to keep in mind:

- The year can be a leap year. Make the checks you need for it, if necessary.
- Although the holiday is December 31, the extra hours will be done the same year.
- Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.

# Reto 2 (ES)
Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

    // 01/06 es el 6 de enero, jueves. Cuenta.
    // 04/01 es el 1 de abril, un viernes. Cuenta.
    // 12/25 es el 25 de diciembre, un domingo. No cuenta.

    countHours(year, holidays) // 2 días -> 4 horas extra en el año

Cosas a tener en cuenta y consejos:

- El año puede ser bisiesto. Haz las comprobaciones que necesitas para ello, si fuese necesario.
- Aunque el 31 de diciembre sea festivo, las horas extra se harán el mismo año y no el siguiente.
- El método Date.getDay() te devuelve el día de la semana de una fecha. El 0 es domingo, el 1 es lunes, etc.

### End / Fin