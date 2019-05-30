const request = require('request');

module.exports.geocodeAddress = (address, callback) => {
	var encodedAddress = encodeURIComponent(address);

	request({
		url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoibmlja2FzcGl0dCIsImEiOiJjanc2cjRvdmoxY2o0M3pwOWhmdnZoanc2In0.VLswXDPq3XDeYnf3EQgTGQ`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to google server.');
		} else if (response.body.features.length == 0) {
			callback(
				'Unable to find the address, make sure you are entering the correct address.'
			);
		} else if (response.statusCode == 200) {
			callback(undefined, {
				statusCode: response.statusCode,
				address: response.body.features[0].place_name,
				latitude: response.body.features[0].geometry.coordinates[1],
				longitude: response.body.features[0].geometry.coordinates[0]
			});
		}
	})

}
