const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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


geocode.geocodeAddress(argv.address).then((res) => {
	console.log(`Full Address: ${res.address}`);
	return weather.getWeather(res.latitude, res.longitude);
}).then((res) => {
	console.log(
		`It's currently ${res.temperature}Forenheight in ${res.timezone}`
	);
}).catch((errorMessage) => {
	console.log(errorMessage);
})


// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
// 	if (errorMessage) {
// 		console.log(errorMessage);
// 	} else {
// 		console.log(`Full Address: ${results.address}`);
// 		weather.getWeather(results.latitude, results.longitude, (
// 			errorMessage,
// 			results) => {
// 			if (errorMessage) {
// 				console.log(errorMessage);
// 			} else {
// 				console.log(
// 					`It's currently ${results.temperature}Forenheight in ${results.timezone}`
// 				);
// 			}
// 		})
// 	}
// });
