const request = require('postman-request')

const forecast = (long, lat, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c5dfc5a89fe1992d962d8b2521b5d8e5&query=${long},${lat}`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            const current = body.current
            callback(undefined, `${current.weather_descriptions[0]}. It is currently ${current.temperature}ºC out. It feels like ${current.feelslike}ºC out. The humidity is ${current.humidity}%.`)
        }
    })
}


module.exports = forecast

