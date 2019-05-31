const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello Express</h1>')
})

app.get('/json', (req, res) => {
	res.send({
		name: 'Tanish',
		age: 20,
		occupation: 'Software Engineer',
		technology: {
			frontEnd: ['HTML', 'CSS', 'JavaScript'],
			backEnd: ['PHP', 'Node', '.net Core']
		}
	})
})

app.get('/about', (req, res) => {
	res.send('<h1>About Page</h1>')
})

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Bad request: Unable to load this page.'
	})
})

app.listen(8080);
