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
	console.log(`Status Code: ${response.statusCode}`);
	console.log(`Complete Address: ${response.body.features[0].place_name}`);
	console.log(
		`Latitude: ${response.body.features[0].geometry.coordinates[1]} and Longitude: ${response.body.features[0].geometry.coordinates[0]}`
	);
})
