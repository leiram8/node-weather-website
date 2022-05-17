const request = require('postman-request')

const geocode = (address, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=08fd69a09f6670aa5cc0c6997b6535a3&query=${address}&limit=1`

    request({ url }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (error || !JSON.parse(body).data) {
            callback('Unable to find location. Try another search.', undefined)
        } else if (JSON.parse(body).data.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: JSON.parse(body).data[0].latitude,
                longitude: JSON.parse(body).data[0].longitude,
                location: JSON.parse(body).data[0].label
            })
        }
    })
}

module.exports = geocode