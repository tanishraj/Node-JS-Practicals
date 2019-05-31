const request = require('request');

module.exports.getWeather = (lat, lng, callback) => {
	request({
		url: `https://api.darksky.net/forecast/2937406bf1cdc4326904cc879530bab8/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to forecast.io server.');
		} else if (response.body == 'Forbidden\n') {
			callback('API key is not valid.');
		} else if (response.statusCode == 400) {
			callback('Unable to fetch weather for current address.');
		} else if (response.statusCode = 200) {
			callback(undefined, {
				timezone: body.timezone,
				temperature: body.currently.temperature
			})
		}
	})
}
