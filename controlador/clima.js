const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e006f7a235a86a658d902e7275fc83cf&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}