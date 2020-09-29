const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw err;
    });
}

const cargarDatos = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
}

const getListado = () => {
    cargarDatos();
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDatos();
    porHacer = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDb();
    return listadoPorHacer;
}

const actualizarTarea = (descripcion, completado = true) => {
    cargarDatos();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index != -1) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrarTarea = (descripcion) => {
    cargarDatos();
    let listadoTemporal = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    })

    if (listadoTemporal.length === listadoPorHacer.length) {
        return false;
    }
    listadoPorHacer = listadoTemporal;
    guardarDb();
    listadoTemporal = [];
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizarTarea,
    borrarTarea
}