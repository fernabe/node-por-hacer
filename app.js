const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let command = argv._[0];

switch (command) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        console.log('Actualizar registro')
        let actualizado = porHacer.actualizarTarea(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('======= POR HACER ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado)
            console.log('========================='.green);
        }
        break;
    case 'borrar':
        let borrar = porHacer.borrarTarea(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}