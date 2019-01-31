const request = require("request");

let geocodeAddress = (address, callback) => {

    
    request(
        {
          url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDPiWUFUhYUVs7mUqiuCX3hhMyOsl2IDhM`,
          json: true
        },
        (error, response, body) => {
          if (error) {              
            console.log("--");
            callback("Unable to connect to Google Server.");
          } else if (body.status === 'ZERO_RESULTS') {
            console.log("--");
            callback("Unable to find that address.");
          } else if (body.status === 'OK') {
            console.log("--");
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
          }
        }
      );
}

module.exports.geocodeAddress = geocodeAddress;