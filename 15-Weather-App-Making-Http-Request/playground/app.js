const request = require('request');

let cityName = "1301 Lombard Street Philadelhia";
let cityUrlFormat = cityName.replace(/\s/gi, "%20");
let apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
	cityUrlFormat +
	'.json?access_token=pk.eyJ1Ijoibmlja2FzcGl0dCIsImEiOiJjanc2cjRvdmoxY2o0M3pwOWhmdnZoanc2In0.VLswXDPq3XDeYnf3EQgTGQ';

request({
	url: apiUrl,
	json: true
}, (error, response, body) => {
	console.log(`Status Code: ${response.statusCode}`);
	console.log(`Complete Address: ${response.body.features[0].place_name}`);
	console.log(
		`Latitude: ${response.body.features[0].geometry.coordinates[1]} and Longitude: ${response.body.features[0].geometry.coordinates[0]}`
	);
})
