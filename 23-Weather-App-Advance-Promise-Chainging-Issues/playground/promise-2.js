const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		var encodedAddress = encodeURIComponent(address);

		request({
			url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoibmlja2FzcGl0dCIsImEiOiJjanc2cjRvdmoxY2o0M3pwOWhmdnZoanc2In0.VLswXDPq3XDeYnf3EQgTGQ`,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject('Unable to connect to google server.');
			} else if (response.body.features.length == 0) {
				reject(
					'Unable to find the address, make sure you are entering the correct address.'
				);
			} else if (response.statusCode == 200) {
				resolve({
					statusCode: response.statusCode,
					address: response.body.features[0].place_name,
					latitude: response.body.features[0].geometry.coordinates[1],
					longitude: response.body.features[0].geometry.coordinates[0]
				});
			}
		})
	})
}

geocodeAddress('19146').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
	console.log(errorMessage);
})
