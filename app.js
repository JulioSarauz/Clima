const axios = require('axios');
const ubicacion = require('./controlador/ubicacion')
const clima = require('./controlador/clima')

const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'Nombre de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getUbicacion = async(nombre) => {
    const ub = await ubicacion.getCiudadLogitudLatitud(nombre).then(console.log);
    console.log(ub);
}


getUbicacion(argv.nombre);

const getInfo = (ciudad) => {

    clima.getClima(-0.19, -78.5).then(console.log);

}

//getInfo(argv.nombre).then(console.log).catch(console.log);