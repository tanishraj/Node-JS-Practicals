const request = require('request');

module.exports.getWeather = (lat, lng) => {
	return new Promise((resolve, reject) => {
		request({
			url: `https://api.darksky.net/forecast/2937406bf1cdc4326904cc879530bab8/${lat},${lng}`,
			json: true
		}, (error, response, body) => {
			if (error) {
				reject('Unable to connect to forecast.io server.');
			} else if (response.body == 'Forbidden\n') {
				reject('API key is not valid.');
			} else if (response.statusCode == 400) {
				reject('Unable to fetch weather for current address.');
			} else if (response.statusCode = 200) {
				resolve({
					timezone: body.timezone,
					temperature: body.currently.temperature
				})
			}
		})
	})
}
