const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404)
		.send({
			error: 'Page not found.',
			name: 'Todo App 1.0'
		})
})

app.get('/users', (req, res) => {
	res.status(200)
		.send({
			names: [{
				firstName: 'Tanish',
				lastName: 'Singh'
			}, {
				firstName: 'Ajay',
				lastName: 'Karthi'
			}, {
				firstName: 'Kunal',
				lastName: 'Ram'
			}]

		})
})

app.listen(8380, () => {
	console.log("Server started on 3000.");
});

module.exports.app = app;
