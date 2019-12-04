const axios = require('axios');

const getCiudadLogitudLatitud = async(nombre) => {
    let longitud;
    const ciudad = encodeURI(nombre);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': 'db56ee224bmsh28dbbeab6b52742p1904fdjsnf76d8f760419' }
    });

    const resp = await instance.get()
    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    //anterior estandar
    //name:name
    //lat:lat
    //lon:lon
    return {
        name,
        lat,
        lon
    }
    // instance.get().then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(err => {
    //     console.log("ERROR: ", err);
    // })
}


module.exports = {
    getCiudadLogitudLatitud
}