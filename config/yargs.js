const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento en la lista', {
        descripcion
    })
    .command('actualizar', 'Actualiza estado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Eliminar tarea', {
        descripcion
    })
    .help()
    .argv


module.exports = {
    argv
}