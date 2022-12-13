# Challenge 13 (EN)
To avoid losing data when the server crashes, Santa Claus has decided to make incremental backups. A hacker called S4vitelf is helping him.

On one hand, we have the timestamp of when the last backup was made.

We also have the changes that have been made in an array of arrays. Each internal array contains two elements: the id of the modified file and the timestamp of the modification.

You have to create a program that returns an array with the id of the files that we would have to make backup because they have been modified since the last backup. Example:

    const lastBackup = 1546300800

    const changes = [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
    ]

    getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
    // The file with id 1 has been modified twice
    // after the last backup.

    // The file with id 2 has not been modified after
    // the last backup.

    // The file with id 3 has been modified once
    // after the last backup.

    // We have to make a backup
    // of the files 1 and 3.

Remember that:
- Returns the id of the files that have been modified after the last backup.
- Returns an empty array if there are no files to make backup.

# Reto 13 (ES)
Para evitar perder datos cuando el servidor se cae, Papa Noel ha decidido hacer backups incrementales. Un hacker llamado S4vitelf le esta ayudando.

Por un lado, tenemos el timestamp de cuándo se hizo el último backup.

También tenemos los cambios que se han realizado en un array de arrays. Cada array interno contiene dos elementos: el id del archivo modificado y el timestamp de la modificación.

Tienes que crear un programa que devuelva un array con los id de los archivos que tendríamos que hacer backup porque han sido modificados desde el último backup. Ejemplo:

    const lastBackup = 1546300800
    const changes = [
    [ 1, 1546300800 ],
    [ 2, 1546300800 ],
    [ 1, 1546300900 ],
    [ 1, 1546301000 ],
    [ 3, 1546301100 ]
    ]

    getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
    // El archivo con id 1 ha sido modificado dos veces
    // después del último backup.

    // El archivo con id 2 no ha sido modificado después
    // del último backup.

    // El archivo con id 3 ha sido modificado una vez
    // después del último backup.

    // Tenemos que hacer una copia de seguridad
    // de los archivos 1 y 3.

Recuerda que:
- Devuelve la id de los archivos que han sido modificados después del último backup.
- Devuelve un array vacío si no hay archivos que hacer backup.

### End / Fin