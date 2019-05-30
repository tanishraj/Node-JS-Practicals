const yargs = require('yargs');
const request = require('request');
// const geocode = require('./geocode/geocode');
//
// const argv = yargs.options({
// 		a: {
// 			demand: true,
// 			alias: 'address',
// 			describe: 'Address to fetch weather for',
// 			string: true,
// 		}
// 	})
// 	.help()
// 	.alias('help', 'h')
// 	.argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(JSON.stringify(results, undefined, 2));
// 	}
// });


/* Weather API Call inside App.js */
const argv = yargs.options({
		lat: {
			demand: true,
			alias: 'latitude',
			describe: 'Latitude to fetch weather for',
			string: false
		},

		long: {
			demand: true,
			alias: 'longitude',
			describe: 'Longitude to fetch weather for',
			string: false
		}
	}).help()
	.alias('help', 'h')
	.argv;

request({
	url: `https://api.darksky.net/forecast/2937406bf1cdc4326904cc879530bab8/${argv.lat},${argv.long}`,
	json: true
}, (error, response, body) => {
	if (error) {
		console.log('Unable to connect to forecast.io server.');
	} else if (response.body == 'Forbidden\n') {
		console.log('API key is not valid.');
	} else if (response.statusCode == 400) {
		console.log('Unable to fetch weather for current address.');
	} else if (response.statusCode = 200) {
		console.log(`Timezone is: ${body.timezone}`);
		console.log(`Timezone is: ${body.currently.temperature}`);
	}
})
