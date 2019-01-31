const request = require('request');

let geocodeAddress = (address) => {

    return new Promise((resolve, reject) => {
        debugger;
        address = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDPiWUFUhYUVs7mUqiuCX3hhMyOsl2IDhM`,
            json: true
        }, (error, response, body) => {
            if(!error && response.statusCode === 200) {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            } else {
                reject(error);
            }
        })
    })
};

geocodeAddress('76229 kar').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
})