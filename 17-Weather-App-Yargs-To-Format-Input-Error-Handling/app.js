const request = require('request');
const yargs = require('yargs');

const argv = yargs.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true,
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);

request({
	url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1Ijoibmlja2FzcGl0dCIsImEiOiJjanc2cjRvdmoxY2o0M3pwOWhmdnZoanc2In0.VLswXDPq3XDeYnf3EQgTGQ`,
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to google server.');
	} else if (response.body.features.length == 0) {
		console.log(
			'Unable to find the address, make sure you are entering the correct address.'
		);
	} else if (response.statusCode == 200) {
		console.log(`Status Code: ${response.statusCode}`);
		console.log(`Complete Address: ${response.body.features[0].place_name}`);
		console.log(
			`Latitude: ${response.body.features[0].geometry.coordinates[1]} and Longitude: ${response.body.features[0].geometry.coordinates[0]}`
		);
	}
})
